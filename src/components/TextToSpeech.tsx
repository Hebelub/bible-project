'use client'

import { useState, useRef, useEffect } from 'react'

interface TextToSpeechProps {
  chapters: string[]
  startChapter: number
  language: 'en' | 'no'
  className?: string
  onChapterChange?: (chapter: number) => void
  currentChapter: number
  isPaused?: boolean
  onPauseChange?: (paused: boolean) => void
}

export function TextToSpeech({ chapters, startChapter, language, className = '', onChapterChange, currentChapter, isPaused = false, onPauseChange }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [chapterIndex, setChapterIndex] = useState(() => {
    // Try to restore from sessionStorage first
    const saved = sessionStorage.getItem('tts-chapter-index')
    if (saved !== null) {
      const index = parseInt(saved, 10)
      if (index >= 0 && index < chapters.length) {
        return index
      }
    }
    return Math.max(0, Math.min(chapters.length - 1, startChapter - 1))
  })
  const [currentTime, setCurrentTime] = useState(() => {
    // Try to restore current time from sessionStorage
    const saved = sessionStorage.getItem('tts-current-time')
    return saved ? parseFloat(saved) : 0
  })
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const wasPlayingBeforePause = useRef(false)

  // Save session state
  const saveSessionState = () => {
    if (audioRef.current) {
      sessionStorage.setItem('tts-chapter-index', chapterIndex.toString())
      sessionStorage.setItem('tts-current-time', audioRef.current.currentTime.toString())
    }
  }

  // Restore audio position
  const restoreAudioPosition = () => {
    if (audioRef.current && currentTime > 0) {
      audioRef.current.currentTime = currentTime
    }
  }

  async function playChapter(index: number) {
    const chapterNumber = index + 1
    const text = chapters[index]?.trim()
    if (!text) return
    setIsGenerating(true)
    
    try {
      // Try to use pre-generated audio first
      const preGeneratedUrl = `/audio/ruth-${language}-chapter-${chapterNumber}.mp3`
      
      // Check if pre-generated audio exists
      const audioCheck = await fetch(preGeneratedUrl, { method: 'HEAD' })
      
      if (audioCheck.ok) {
        // Use pre-generated audio
        if (audioRef.current) {
          audioRef.current.src = preGeneratedUrl
          // Restore position if this is the same chapter
          if (index === chapterIndex) {
            restoreAudioPosition()
          }
          void audioRef.current.play()
          setIsPlaying(true)
          // Save state after starting
          setTimeout(saveSessionState, 100)
        }
      } else {
        // Fallback to generating audio on-demand
        console.log('Pre-generated audio not found, generating on-demand...')
        
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            voice: 'alloy',
            language,
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json() as { audio: string; format: string }
        
        if (audioRef.current && result?.audio) {
          const audioBlob = new Blob([Uint8Array.from(atob(result.audio), c => c.charCodeAt(0))], { type: 'audio/mp3' })
          const audioUrl = URL.createObjectURL(audioBlob)
          audioRef.current.src = audioUrl
          // Restore position if this is the same chapter
          if (index === chapterIndex) {
            restoreAudioPosition()
          }
          void audioRef.current.play()
          setIsPlaying(true)
          // Save state after starting
          setTimeout(saveSessionState, 100)
        }
      }
    } catch (err) {
      console.error('TTS Error:', err)
      alert('Failed to generate speech. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime)
        // Save position every 5 seconds
        if (Math.floor(audioRef.current.currentTime) % 5 === 0) {
          saveSessionState()
        }
      }
    }
    const handleEnded = () => {
      setIsPlaying(false)
      const nextIndex = chapterIndex + 1
      if (nextIndex < chapters.length) {
        setChapterIndex(nextIndex)
        if (onChapterChange) onChapterChange(nextIndex + 1)
        // Autoplay next chapter by generating it now
        void playChapter(nextIndex)
      }
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [onChapterChange, currentChapter])

  // Reset audio when language changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setChapterIndex(Math.max(0, Math.min(chapters.length - 1, startChapter - 1)))
      // Clear session storage when language changes
      sessionStorage.removeItem('tts-chapter-index')
      sessionStorage.removeItem('tts-current-time')
    }
  }, [language, chapters.length, startChapter])

  // Pause audio when isPaused is true
  useEffect(() => {
    if (audioRef.current) {
      if (isPaused) {
        // Remember if we were playing before pause
        wasPlayingBeforePause.current = isPlaying
        if (isPlaying) {
          audioRef.current.pause()
          saveSessionState()
        }
      } else if (wasPlayingBeforePause.current) { // Resume if we were playing before
        void audioRef.current.play()
        wasPlayingBeforePause.current = false
      }
    }
  }, [isPaused, isPlaying])

  const handlePlayPause = () => {
    if (!audioRef.current?.src) {
      void playChapter(chapterIndex)
    } else if (isPlaying) {
      audioRef.current?.pause()
    } else {
      void audioRef.current?.play()
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <div className={`space-y-2 sm:space-y-4 ${className}`}>
      {/* Controls */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={handlePlayPause}
          disabled={isGenerating}
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors text-sm sm:text-lg"
        >
          {isGenerating ? (
            <>
              <span className="animate-spin">⏳</span>
              <span className="hidden sm:inline">Generating...</span>
            </>
          ) : isPlaying ? (
            <>
              <span>⏸️</span>
              <span className="hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <span>▶️</span>
              <span className="hidden sm:inline">Play Book</span>
            </>
          )}
        </button>

        <button
          onClick={handleStop}
          disabled={!audioRef.current || isGenerating}
          className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white rounded-md font-medium transition-colors text-sm"
        >
          ⏹️ <span className="hidden sm:inline">Stop</span>
        </button>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} className="hidden" />
    </div>
  )
}
