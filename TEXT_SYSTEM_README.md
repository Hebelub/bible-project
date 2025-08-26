# Text Loading System

This project now uses a new text loading system that reads Bible text from TXT files instead of hardcoded JavaScript objects.

## File Structure

```
public/
  texts/
    en/           # English texts
      ruth.txt    # Book of Ruth in English
    no/           # Norwegian texts
      ruth.txt    # Book of Ruth in Norwegian
```

## Text Format

The TXT files use a specific format:

```
[chapter=1]
[1] First verse text here...
[2] Second verse text here...
[3] Third verse text here...

[chapter=2]
[1] First verse of chapter 2...
[2] Second verse of chapter 2...
```

### Format Rules:
- `[chapter=n]` - Marks the start of a new chapter
- `[n]` - Marks the start of a new verse
- Text after verse markers is the actual verse content
- Empty lines are ignored
- Lines without markers are treated as continuation of the previous verse

## How to Add New Books

1. **Create the TXT file**: Place it in the appropriate language folder under `public/texts/`
2. **Update the loader**: Add the book name to `TextLoader.getAvailableBooks()` in `src/lib/text-loader.ts`
3. **Use in components**: Import and use `TextLoader.loadText(language, bookName)`

## How to Add New Languages

1. **Create the language folder**: Add a new folder under `public/texts/` (e.g., `de/` for German)
2. **Add TXT files**: Place the translated books in the new language folder
3. **Update the loader**: Add the language code to `TextLoader.getAvailableLanguages()` in `src/lib/text-loader.ts`
4. **Update language context**: Add the new language to your language switching system

## Benefits

- **Easy to edit**: Just modify TXT files instead of JavaScript code
- **Version control friendly**: TXT files are easier to diff and merge
- **Translator friendly**: Non-developers can easily edit the text files
- **Scalable**: Easy to add new books and languages
- **Performance**: Text is loaded on-demand and cached

## Example Usage

```typescript
import { TextLoader } from "~/lib/text-loader";

// Load a specific book in a specific language
const ruthText = await TextLoader.loadText('en', 'ruth');

// Load Ruth text (convenience method)
const ruthText = await TextLoader.loadRuthText('no');

// Get available options
const languages = TextLoader.getAvailableLanguages();
const books = TextLoader.getAvailableBooks('en');
```

## Current Implementation

The system is currently implemented in:
- `src/lib/text-parser.ts` - Parses TXT files into structured data
- `src/lib/text-loader.ts` - Loads TXT files from the public folder
- `src/app/bible/ruth2/page.tsx` - Uses the new system (updated)

The old system using `language.ts` is still available for backward compatibility.
