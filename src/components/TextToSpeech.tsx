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
  const [chapterIndex, setChapterIndex] = useState(Math.max(0, Math.min(chapters.length - 1, startChapter - 1)))
  const audioRef = useRef<HTMLAudioElement | null>(null)

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
          void audioRef.current.play()
          setIsPlaying(true)
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
          void audioRef.current.play()
          setIsPlaying(true)
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
    }
  }, [language, chapters.length, startChapter])

  // Pause audio when isPaused is true
  useEffect(() => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.pause()
      } else if (isPlaying) {
        void audioRef.current.play()
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
    <div className={`space-y-4 ${className}`}>
      {/* Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={handlePlayPause}
          disabled={isGenerating}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors text-lg"
        >
          {isGenerating ? (
            <>
              <span className="animate-spin">⏳</span>
              <span>Generating...</span>
            </>
          ) : isPlaying ? (
            <>
              <span>⏸️</span>
              <span>Pause</span>
            </>
          ) : (
            <>
              <span>▶️</span>
              <span>Play Book</span>
            </>
          )}
        </button>

        <button
          onClick={handleStop}
          disabled={!audioRef.current || isGenerating}
          className="px-4 py-3 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white rounded-md font-medium transition-colors"
        >
          ⏹️ Stop
        </button>

        <div className="text-sm text-gray-600">
          {language === 'no' ? 'Norsk' : 'English'} • Chapter {currentChapter}
        </div>
      </div>

      {/* Progress Indicator */}
      {isPlaying && (
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-sm text-blue-700 font-medium">
            📖 Reading Chapter {currentChapter} of 4 with Alloy narrator
          </div>
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} className="hidden" />
    </div>
  )
}
