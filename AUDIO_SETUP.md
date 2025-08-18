# Audio Generation Setup

This document explains how to set up and use the pre-generated audio system for the Book of Ruth.

## Overview

The audio system generates MP3 files for both English and Norwegian translations of the Book of Ruth, allowing for instant playback without waiting for OpenAI API generation.

## Prerequisites

1. **OpenAI API Key**: Make sure you have your `OPENAI_API_KEY` set in your `.env.local` file
2. **Dependencies**: Ensure all dependencies are installed with `pnpm install`

## Generating Audio Files

### Step 1: Run the Audio Generation Script

```bash
pnpm generate-audio
```

This script will:
- Generate audio for all 4 chapters in both English and Norwegian
- Save files to `public/audio/` directory
- Use the 'alloy' voice for consistent narration
- Include rate limiting to avoid API issues

### Step 2: Generated Files

The script creates 8 audio files:
- `ruth-en-chapter-1.mp3` - English Chapter 1
- `ruth-en-chapter-2.mp3` - English Chapter 2
- `ruth-en-chapter-3.mp3` - English Chapter 3
- `ruth-en-chapter-4.mp3` - English Chapter 4
- `ruth-no-chapter-1.mp3` - Norwegian Chapter 1
- `ruth-no-chapter-2.mp3` - Norwegian Chapter 2
- `ruth-no-chapter-3.mp3` - Norwegian Chapter 3
- `ruth-no-chapter-4.mp3` - Norwegian Chapter 4

## How It Works

### Pre-generated Audio (Fast)
1. When a user clicks "Play Book", the system first checks for pre-generated audio
2. If found, it plays instantly from the `/audio/` directory
3. No API calls needed - instant playback

### Fallback Generation (Slow)
1. If pre-generated audio is missing, it falls back to on-demand generation
2. Makes API call to OpenAI for text-to-speech
3. Generates audio in real-time (slower but works)

## Benefits

✅ **Instant Playback**: No waiting for API generation
✅ **Consistent Quality**: Same voice and settings for all chapters
✅ **Cost Effective**: Generate once, use many times
✅ **Reliable**: No dependency on API availability during playback
✅ **Fallback Support**: Still works if pre-generated files are missing

## File Structure

```
public/
  audio/
    ruth-en-chapter-1.mp3
    ruth-en-chapter-2.mp3
    ruth-en-chapter-3.mp3
    ruth-en-chapter-4.mp3
    ruth-no-chapter-1.mp3
    ruth-no-chapter-2.mp3
    ruth-no-chapter-3.mp3
    ruth-no-chapter-4.mp3
```

## Troubleshooting

### Audio Files Not Found
- Run `pnpm generate-audio` to create the files
- Check that `OPENAI_API_KEY` is set in `.env.local`
- Ensure the `public/audio/` directory exists

### API Errors
- Verify your OpenAI API key is valid
- Check your API usage limits
- The script includes rate limiting (1 second delay between requests)

### File Size
- Each audio file is approximately 2-5 MB
- Total size for all 8 files: ~20-40 MB
- Files are served statically from the `public/` directory

## Customization

### Different Voice
Edit `src/scripts/generate-audio.ts` and change:
```typescript
const voice = 'alloy' // Change to 'echo', 'fable', 'onyx', or 'nova'
```

### Different Model
Edit the API call in the script:
```typescript
model: 'gpt-4o-mini-tts', // Change to 'tts-1' or 'tts-1-hd'
```

### Different Languages
Add more languages to the script:
```typescript
const languages = ['en', 'no', 'es', 'fr'] as const // Add more languages
```

## Usage in Development

1. **First time setup**: Run `pnpm generate-audio`
2. **Normal development**: Audio files are served automatically
3. **Adding new content**: Re-run the script to generate new audio files

The system automatically detects and uses pre-generated files when available, providing the best user experience!
