# Text-to-Speech Setup Guide

## Environment Variables

### Local Development (.env.local)

Add the following to your `.env.local` file:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### Vercel Deployment

Add the following environment variable in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key
   - **Environment**: Production, Preview, and Development

## Getting an OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Go to API Keys section
4. Create a new API key
5. Copy the key and add it to your environment variables

## Features

The text-to-speech implementation includes:

- **6 Different Voices**: Alloy, Echo, Fable, Onyx, Nova, Shimmer
- **Bilingual Support**: English and Norwegian
- **Word Highlighting**: Words are highlighted as they're being spoken
- **Play/Pause Controls**: Full audio control
- **Stop Function**: Reset audio to beginning
- **Real-time Generation**: Audio is generated on-demand using OpenAI's TTS API

## Usage

1. Navigate to the Ruth page (`/bible/ruth`)
2. Select your preferred voice from the dropdown
3. Click "Play" on any verse to hear it read aloud
4. Words will be highlighted in yellow as they're spoken
5. Use pause/stop controls as needed

## Cost Considerations

- OpenAI TTS pricing: $0.015 per 1K characters
- Each verse typically costs less than $0.01
- Consider implementing caching for frequently accessed verses

## Troubleshooting

- **"Failed to generate speech"**: Check your OpenAI API key and billing status
- **Audio not playing**: Ensure your browser supports audio playback
- **Highlighting not working**: Check browser console for JavaScript errors
