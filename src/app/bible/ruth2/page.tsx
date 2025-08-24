"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "~/contexts/LanguageContext";
import { getRuthText } from "~/lib/language";
import { LanguageSwitcher } from "~/components/LanguageSwitcher";
import { RuthContext } from "~/components/RuthContext";

export default function Ruth2Page() {
  const { language, setLanguage } = useLanguage();
  const ruthText = getRuthText(language);
  const [isContextOpen, setIsContextOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [followMode, setFollowMode] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);

// Auto-disable follow mode when user scrolls manually
useEffect(() => {
    const handleScroll = () => {
      if (followMode) {
        setFollowMode(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [followMode]);
  
  // ✅ Always scroll when currentWordIndex changes if followMode is on
  useEffect(() => {
    if (followMode && currentWordIndex >= 0) {
      scrollToCurrentWord(currentWordIndex);
    }
  }, [currentWordIndex, followMode]);
  
  // Function to scroll to current word if follow mode is on
  const scrollToCurrentWord = (wordIndex: number) => {
    const wordElement = wordRefs.current[wordIndex];
    if (followMode && wordElement) {
      const wordTop =
        wordElement.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollTop = wordTop - windowHeight / 2;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };
  

  // Function to get all text as one continuous string
  const getAllText = () => {
    let fullText = "";
    for (let chapter = 1; chapter <= 4; chapter++) {
      const chapterData = ruthText[
        `chapter${chapter}` as keyof typeof ruthText
      ] as { title: string; verses: Record<string, string> };
      if (chapterData?.verses) {
        // Add chapter title
        fullText += chapterData.title + "\n\n";
        // Add all verses
        Object.values(chapterData.verses).forEach((verse) => {
          fullText += verse + " ";
        });
        fullText += "\n\n";
      }
    }
    return fullText;
  };

  // Function to split text into words with positions
  const getWordsWithPositions = () => {
    const text = getAllText();
    const words = text.split(/(\s+)/);
    return words.map((word, index) => ({
      word,
      index,
      isSpace: /^\s+$/.test(word),
    }));
  };

  // Function to create audio from text
  const createAudioFromText = () => {
    const text = getAllText();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "no" ? "nb-NO" : "en-US";
    utterance.rate = playbackRate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Track word timing (approximate)
    let wordIndex = 0;
    const words = getWordsWithPositions().filter((w) => !w.isSpace);

    // Calculate approximate time per word based on rate
    const wordsPerMinute = 150 * playbackRate; // Base rate of 150 WPM
    const msPerWord = (60 * 1000) / wordsPerMinute;

    // Set up timer-based word progression for more reliable scrolling
    const wordTimer = setInterval(() => {
      if (isPlaying && wordIndex < words.length) {
        setCurrentWordIndex(wordIndex);

        // Scroll to current word if follow mode is on
        scrollToCurrentWord(wordIndex);

        wordIndex++;
      } else if (wordIndex >= words.length) {
        clearInterval(wordTimer);
      }
    }, msPerWord);

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        setCurrentWordIndex(wordIndex);
        wordIndex++;
      }
    };

    utterance.onend = () => {
      clearInterval(wordTimer);
      setIsPlaying(false);
      setCurrentWordIndex(-1);
      setCurrentTime(0);
    };

    utterance.onpause = () => {
      clearInterval(wordTimer);
      setIsPlaying(false);
    };

    utterance.onresume = () => {
      setIsPlaying(true);
    };

    return utterance;
  };

  // Play/pause functionality
  const togglePlayback = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.speaking) {
        // Resume from current marked position, not from where it was paused
        stopPlayback();
        if (currentWordIndex >= 0) {
          playFromWord(currentWordIndex);
        } else {
          const utterance = createAudioFromText();
          window.speechSynthesis.speak(utterance);
        }
      } else {
        // If we have a marked position, start from there, otherwise start from beginning
        if (currentWordIndex >= 0) {
          playFromWord(currentWordIndex);
        } else {
          const utterance = createAudioFromText();
          window.speechSynthesis.speak(utterance);
        }
      }
      setIsPlaying(true);
    }
  };

  // Stop functionality
  const stopPlayback = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentWordIndex(-1);
    setCurrentTime(0);
  };

  // Click to play from position
  const playFromWord = (wordIndex: number) => {
    stopPlayback();

    // Create new utterance from the clicked word onwards
    const words = getWordsWithPositions().filter((w) => !w.isSpace);
    const remainingText = words
      .slice(wordIndex)
      .map((w) => w.word)
      .join(" ");

    const utterance = new SpeechSynthesisUtterance(remainingText);
    utterance.lang = language === "no" ? "nb-NO" : "en-US";
    utterance.rate = playbackRate;
    utterance.pitch = 1;
    utterance.volume = 1;

    let currentIndex = wordIndex;

    // Calculate approximate time per word based on rate
    const wordsPerMinute = 150 * playbackRate; // Base rate of 150 WPM
    const msPerWord = (60 * 1000) / wordsPerMinute;

    // Set up timer-based word progression for more reliable scrolling
    const wordTimer = setInterval(() => {
      if (isPlaying && currentIndex < words.length) {
        setCurrentWordIndex(currentIndex);

        // Scroll to current word if follow mode is on
        scrollToCurrentWord(currentIndex);

        currentIndex++;
      } else if (currentIndex >= words.length) {
        clearInterval(wordTimer);
      }
    }, msPerWord);

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        setCurrentWordIndex(currentIndex);
        currentIndex++;
      }
    };

    utterance.onend = () => {
      clearInterval(wordTimer);
      setIsPlaying(false);
      setCurrentWordIndex(-1);
      setCurrentTime(0);
    };

    utterance.onpause = () => {
      clearInterval(wordTimer);
      setIsPlaying(false);
    };

    utterance.onresume = () => {
      setIsPlaying(true);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Update playback rate
  useEffect(() => {
    if (window.speechSynthesis.speaking && isPlaying) {
      // Store current position before changing rate
      const currentPosition = currentWordIndex;

      // Pause current speech
      window.speechSynthesis.pause();

      // Create new utterance with new rate, starting from current position
      const words = getWordsWithPositions().filter((w) => !w.isSpace);
      const remainingText = words
        .slice(currentPosition)
        .map((w) => w.word)
        .join(" ");

      const utterance = new SpeechSynthesisUtterance(remainingText);
      utterance.lang = language === "no" ? "nb-NO" : "en-US";
      utterance.rate = playbackRate;
      utterance.pitch = 1;
      utterance.volume = 1;

      let wordIndex = currentPosition;

      // Calculate approximate time per word based on rate
      const wordsPerMinute = 150 * playbackRate; // Base rate of 150 WPM
      const msPerWord = (60 * 1000) / wordsPerMinute;

      // Set up timer-based word progression for more reliable scrolling
      const wordTimer = setInterval(() => {
        if (isPlaying && wordIndex < words.length) {
          setCurrentWordIndex(wordIndex);

          // Scroll to current word if follow mode is on
          scrollToCurrentWord(wordIndex);

          wordIndex++;
        } else if (wordIndex >= words.length) {
          clearInterval(wordTimer);
        }
      }, msPerWord);

      utterance.onboundary = (event) => {
        if (event.name === "word") {
          setCurrentWordIndex(wordIndex);

          // Scroll to current word if follow mode is on
          scrollToCurrentWord(wordIndex);

          wordIndex++;
        }
      };

      utterance.onend = () => {
        clearInterval(wordTimer);
        setIsPlaying(false);
        setCurrentWordIndex(-1);
        setCurrentTime(0);
      };

      utterance.onpause = () => {
        clearInterval(wordTimer);
        setIsPlaying(false);
      };

      utterance.onresume = () => {
        setIsPlaying(true);
      };

      // Speak the remaining text with new rate
      window.speechSynthesis.speak(utterance);
    }
  }, [playbackRate]);

  const words = getWordsWithPositions();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 border-b border-amber-200 bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Book and Translation */}
              <div className="flex items-center space-x-3">
                <div className="h-8 w-2 rounded-full bg-gradient-to-b from-amber-500 to-orange-500"></div>
                <div>
                  <h2 className="text-lg font-semibold text-amber-900">
                    {ruthText.title}
                  </h2>
                  <div className="mt-1 flex space-x-2">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`rounded px-2 py-1 text-xs font-medium transition-all duration-200 ${
                        language === "en"
                          ? "bg-amber-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      EN ⋅ NIV
                    </button>
                    <button
                      onClick={() => setLanguage("no")}
                      className={`rounded px-2 py-1 text-xs font-medium transition-all duration-200 ${
                        language === "no"
                          ? "bg-amber-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      NO ⋅ NB11
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex-1 px-0 py-0">
        {/* Bible Text Content */}
        <div className="mx-auto w-full max-w-5xl">
          <div className="overflow-hidden rounded-none border-0 bg-white shadow-2xl md:border md:border-amber-100">
            {/* Text content */}
            <div className="px-4 py-8 md:px-12 md:py-12" ref={textContainerRef}>
              <div className="prose prose-xl max-w-none">
                <div className="text-justify font-serif text-lg leading-relaxed text-gray-800">
                  {words.map((wordObj, index) => {
                    if (wordObj.isSpace) {
                      return <span key={index}>{wordObj.word}</span>;
                    }

                    // Calculate word index consistently with audio tracking
                    const wordIndex = words
                      .slice(0, index + 1)
                      .filter((w) => !w.isSpace).length - 1;
                    const isCurrentWord = currentWordIndex === wordIndex;

                    return (
                      <span
                        key={index}
                        ref={(el) => {
                          wordRefs.current[wordIndex] = el;
                        }}
                        onClick={() => {
                          // Always mark the position
                          setCurrentWordIndex(wordIndex);
                          // Only play if already playing
                          if (isPlaying) {
                            playFromWord(wordIndex);
                          }
                        }}
                        className={`cursor-pointer transition-all duration-200 ${
                          isCurrentWord
                            ? "rounded bg-amber-300 px-1 py-0.5 text-amber-900 shadow-md"
                            : "rounded px-1 py-0.5 hover:bg-amber-100 hover:text-amber-800"
                        }`}
                      >
                        {wordObj.word}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Context Component */}
      <div className="fixed right-0 bottom-0 left-0 z-50">
        {/* Slider Handle */}
        <div
          className="flex h-8 cursor-pointer items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg transition-all duration-200 hover:from-amber-600 hover:to-orange-600"
          onClick={() => setIsContextOpen(!isContextOpen)}
        >
          <div className="flex items-center space-x-2 text-white">
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${isContextOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">
              {isContextOpen
                ? language === "no"
                  ? "Skjul kontekst"
                  : "Hide context"
                : language === "no"
                  ? "Vis kontekst"
                  : "Show context"}
            </span>
          </div>
        </div>

        {/* Context Panel */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 ease-in-out ${
            isContextOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <RuthContext />
          </div>
        </div>

        {/* Audio Controls - Under Context Component */}
        <div className="border-t border-amber-200 bg-white shadow-lg">
          <div className="mx-auto max-w-2xl px-4 py-2">
            <div className="flex items-center justify-end space-x-4">
              {/* Reading Position Info - Left Side */}
              <div className="text-right">
                <p className="text-xs font-medium tracking-wide text-amber-500 uppercase">
                  {(() => {
                    if (currentWordIndex === -1) {
                      return language === "no" ? "Ikke startet" : "Not started";
                    }

                    if (isPlaying) {
                      return language === "no" ? "Leser fra" : "Reading from";
                    } else {
                      return language === "no" ? "Lest fra" : "Read from";
                    }
                  })()}
                </p>
                <p className="text-sm font-medium text-amber-700">
                  {(() => {
                    if (currentWordIndex === -1) {
                      return language === "no"
                        ? "Klikk play for å starte"
                        : "Click play to start";
                    }

                    // Calculate which chapter we're in based on word count
                    const words = getWordsWithPositions().filter(
                      (w) => !w.isSpace,
                    );
                    const totalWords = words.length;
                    const wordsPerChapter = Math.ceil(totalWords / 4);
                    const currentChapter = Math.min(
                      Math.floor(currentWordIndex / wordsPerChapter) + 1,
                      4,
                    );

                    // Calculate approximate verse (every ~20 words = 1 verse)
                    const wordsPerVerse = 20;
                    const currentVerse =
                      Math.floor(
                        (currentWordIndex % wordsPerChapter) / wordsPerVerse,
                      ) + 1;

                    return language === "no"
                      ? `Kapittel ${currentChapter}:${currentVerse}`
                      : `Chapter ${currentChapter}:${currentVerse}`;
                  })()}
                </p>
              </div>

              {/* Follow Mode Toggle - Eye Icon */}
              {!followMode && (
                <button
                  onClick={() => setFollowMode(true)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${"bg-amber-500 text-white shadow-lg"}`}
                  title={
                    language === "no"
                      ? "Slå på følgemodus"
                      : "Turn on follow mode"
                  }
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              )}

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayback}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-600 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transition-all duration-200 hover:from-amber-600 hover:to-orange-600 hover:shadow-xl"
                style={{ minWidth: "48px", minHeight: "48px" }}
              >
                {isPlaying ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6"
                    />
                  </svg>
                ) : (
                  <svg
                    className="ml-0.5 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding to prevent content from being hidden behind fixed context */}
      <div className="h-[600px]"></div>
    </div>
  );
}
