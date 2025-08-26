import { TextParser, type ParsedText } from './text-parser';

export class TextLoader {
  /**
   * Load text from a TXT file in the public/texts folder
   */
  static async loadText(language: string, book: string): Promise<ParsedText> {
    try {
      const response = await fetch(`/texts/${language}/${book}.txt`);
      
      if (!response.ok) {
        throw new Error(`Failed to load text for ${language}/${book}`);
      }
      
      const content = await response.text();
      return TextParser.parseText(content);
    } catch (error) {
      console.error(`Error loading text for ${language}/${book}:`, error);
      throw error;
    }
  }

  /**
   * Load Ruth text for a specific language
   */
  static async loadRuthText(language: string): Promise<ParsedText> {
    return this.loadText(language, 'ruth');
  }

  /**
   * Load Ruth2 text for a specific language
   */
  static async loadRuth2Text(language: string): Promise<ParsedText> {
    return this.loadText(language, 'ruth2');
  }

  /**
   * Get available languages (based on folders in public/texts)
   */
  static getAvailableLanguages(): string[] {
    return ['en', 'no', 'pl', 'ne'];
  }

  /**
   * Get available books for a language
   */
  static getAvailableBooks(language: string): string[] {
    // For now, hardcode the books we know exist
    // In the future, this could be dynamic based on available files
    return ['ruth'];
  }
}
