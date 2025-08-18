import { getRuthText } from '~/lib/language'
import fs from 'fs'
import path from 'path'

// Load environment variables from .env.local
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

// Function to generate audio for a text using OpenAI API
async function generateAudio(text: string, voice: string, language: string): Promise<Buffer> {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice: voice,
      input: text,
      response_format: 'mp3',
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to generate audio: ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

// Function to save audio buffer to file
function saveAudioFile(buffer: Buffer, filename: string): void {
  const audioDir = path.join(process.cwd(), 'public', 'audio')
  
  // Create audio directory if it doesn't exist
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true })
  }
  
  const filepath = path.join(audioDir, filename)
  fs.writeFileSync(filepath, buffer)
  console.log(`✅ Saved: ${filename}`)
}

// Function to generate all audio files
async function generateAllAudio() {
  console.log('🎵 Starting audio generation for Book of Ruth...')
  
  const languages = ['en', 'no'] as const
  const voice = 'alloy' // Using the narrator voice
  
  for (const language of languages) {
    console.log(`\n📖 Generating audio for ${language === 'en' ? 'English' : 'Norwegian'}...`)
    
    const ruthText = getRuthText(language)
    
    // Generate audio for each chapter
    for (let chapter = 1; chapter <= 4; chapter++) {
      const chapterKey = `chapter${chapter}` as keyof typeof ruthText
      const chapterData = ruthText[chapterKey] as { verses: Record<string, string> }
      
      if (chapterData?.verses) {
        // Combine all verses in the chapter
        const chapterText = Object.values(chapterData.verses).join(' ')
        
        try {
          console.log(`  📝 Generating Chapter ${chapter}...`)
          
          const audioBuffer = await generateAudio(chapterText, voice, language)
          
          // Save with descriptive filename
          const filename = `ruth-${language}-chapter-${chapter}.mp3`
          saveAudioFile(audioBuffer, filename)
          
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000))
          
        } catch (error) {
          console.error(`❌ Error generating Chapter ${chapter} (${language}):`, error)
        }
      }
    }
  }
  
  console.log('\n🎉 Audio generation complete!')
  console.log('\n📁 Generated files:')
  
  // List all generated files
  const audioDir = path.join(process.cwd(), 'public', 'audio')
  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir)
    files.forEach(file => {
      if (file.endsWith('.mp3')) {
        console.log(`  - ${file}`)
      }
    })
  }
  
  console.log('\n💡 Usage:')
  console.log('  - Audio files are now available at /audio/ruth-{lang}-chapter-{num}.mp3')
  console.log('  - Example: /audio/ruth-en-chapter-1.mp3 for English Chapter 1')
  console.log('  - Example: /audio/ruth-no-chapter-1.mp3 for Norwegian Chapter 1')
}

// Check if OPENAI_API_KEY is set
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY environment variable is not set!')
  console.log('💡 Please set it in your .env.local file:')
  console.log('   OPENAI_API_KEY=your_api_key_here')
  process.exit(1)
}

// Run the script
generateAllAudio().catch(error => {
  console.error('❌ Script failed:', error)
  process.exit(1)
})
