export interface ParsedText {
  title: string;
  chapters: {
    [chapterNumber: number]: {
      title: string;
      verses: {
        [verseNumber: number]: string;
      };
    };
  };
}

export interface WordPosition {
  word: string;
  index: number;
  isSpace: boolean;
  chapter: number;
  verse: number;
  wordInVerse: number;
}

export class TextParser {
  /**
   * Parse text content with the format:
   * [chapter=n] = chapter number
   * [n] = verse number
   */
  static parseText(content: string): ParsedText {
    const lines = content.split('\n').filter(line => line.trim());
    const result: ParsedText = {
      title: 'Book of Ruth', // Default title, can be overridden
      chapters: {}
    };

    let currentChapter = 0;
    let currentVerse = 0;

    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Check for chapter marker: [chapter=n]
      const chapterMatch = trimmedLine.match(/^\[chapter=(\d+)\]/);
      if (chapterMatch) {
        currentChapter = parseInt(chapterMatch[1]);
        currentVerse = 0;
        
        if (!result.chapters[currentChapter]) {
          result.chapters[currentChapter] = {
            title: `Chapter ${currentChapter}`,
            verses: {}
          };
        }
        continue;
      }

      // Check for verse marker: [n]
      const verseMatch = trimmedLine.match(/^\[(\d+)\]/);
      if (verseMatch) {
        currentVerse = parseInt(verseMatch[1]);
        const verseText = trimmedLine.substring(verseMatch[0].length).trim();
        
        if (currentChapter > 0 && currentVerse > 0) {
          result.chapters[currentChapter].verses[currentVerse] = verseText;
        }
        continue;
      }

      // If no marker, this might be continuation of previous verse
      if (currentChapter > 0 && currentVerse > 0 && trimmedLine) {
        const existingVerse = result.chapters[currentChapter].verses[currentVerse];
        if (existingVerse) {
          result.chapters[currentChapter].verses[currentVerse] = existingVerse + ' ' + trimmedLine;
        }
      }
    }

    return result;
  }

  /**
   * Get all text as one continuous string
   */
  static getAllText(parsedText: ParsedText): string {
    let fullText = '';
    
    for (const chapterNum of Object.keys(parsedText.chapters).map(Number).sort((a, b) => a - b)) {
      const chapter = parsedText.chapters[chapterNum];
      fullText += chapter.title + '\n\n';
      
      for (const verseNum of Object.keys(chapter.verses).map(Number).sort((a, b) => a - b)) {
        fullText += chapter.verses[verseNum] + ' ';
      }
      fullText += '\n\n';
    }
    
    return fullText.trim();
  }

  /**
   * Split text into words with positions and metadata
   */
  static getWordsWithPositions(parsedText: ParsedText): WordPosition[] {
    const words: WordPosition[] = [];
    let wordIndex = 0;
    
    for (const chapterNum of Object.keys(parsedText.chapters).map(Number).sort((a, b) => a - b)) {
      const chapter = parsedText.chapters[chapterNum];
      
      for (const verseNum of Object.keys(chapter.verses).map(Number).sort((a, b) => a - b)) {
        const verseText = chapter.verses[verseNum];
        const verseWords = verseText.split(/(\s+)/);
        
        for (let i = 0; i < verseWords.length; i++) {
          const word = verseWords[i];
          const isSpace = /^\s+$/.test(word);
          
          if (!isSpace) {
            words.push({
              word,
              index: wordIndex,
              isSpace: false,
              chapter: chapterNum,
              verse: verseNum,
              wordInVerse: Math.floor(i / 2) + 1
            });
            wordIndex++;
          } else {
            words.push({
              word,
              index: -1, // Spaces don't count for word index
              isSpace: true,
              chapter: chapterNum,
              verse: verseNum,
              wordInVerse: -1
            });
          }
        }
      }
    }
    
    return words;
  }

  /**
   * Find chapter and verse for a given word index
   */
  static findChapterAndVerse(parsedText: ParsedText, wordIndex: number): { chapter: number; verse: number } | null {
    const words = this.getWordsWithPositions(parsedText);
    const word = words.find(w => w.index === wordIndex && !w.isSpace);
    
    if (word) {
      return {
        chapter: word.chapter,
        verse: word.verse
      };
    }
    
    return null;
  }
}
