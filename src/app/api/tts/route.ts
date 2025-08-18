import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { env } from '~/env.js'

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, voice, language } = body

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    if (!voice || !['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'].includes(voice)) {
      return NextResponse.json({ error: 'Invalid voice' }, { status: 400 })
    }

    if (!language || !['en', 'no'].includes(language)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 })
    }

    const response = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: voice as 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer',
      input: text,
      response_format: "mp3",
    })

    const buffer = Buffer.from(await response.arrayBuffer())
    const base64 = buffer.toString("base64")
    
    return NextResponse.json({
      audio: base64,
      format: "mp3",
    })
  } catch (error) {
    console.error('TTS API Error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to generate speech: ${message}` },
      { status: 500 }
    )
  }
}
