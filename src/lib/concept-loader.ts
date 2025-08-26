export interface ConceptTranslation {
  title: string;
  name: string;
  description: string;
}

export interface Concept {
  id: string;
  type: string;
  bibleverses: string[];
  translations: {
    en: ConceptTranslation;
    no: ConceptTranslation;
    pl: ConceptTranslation;
    ne: ConceptTranslation;
  };
}

export interface ConceptsData {
  concepts: Concept[];
}

export class ConceptLoader {
  private static conceptsCache: ConceptsData | null = null;

  /**
   * Load all concepts from the JSON file
   */
  static async loadConcepts(): Promise<ConceptsData> {
    if (this.conceptsCache) {
      return this.conceptsCache;
    }

    try {
      const response = await fetch('/data/concepts.json');
      
      if (!response.ok) {
        throw new Error('Failed to load concepts');
      }
      
      const data = await response.json() as ConceptsData;
      this.conceptsCache = data;
      return data;
    } catch (error) {
      console.error('Error loading concepts:', error);
      throw error;
    }
  }

  /**
   * Get a specific concept by ID
   */
  static async getConcept(id: string): Promise<Concept | null> {
    const data = await this.loadConcepts();
    return data.concepts.find(concept => concept.id === id) ?? null;
  }

  /**
   * Get all concepts
   */
  static async getAllConcepts(): Promise<Concept[]> {
    const data = await this.loadConcepts();
    return data.concepts;
  }

  /**
   * Get a specific concept by ID in a specific language
   */
  static async getConceptInLanguage(id: string, language: string): Promise<(Concept & ConceptTranslation) | null> {
    const concept = await this.getConcept(id);
    if (!concept) return null;

    const translation = concept.translations[language as keyof typeof concept.translations];
    if (!translation) return null;

    return {
      ...concept,
      ...translation
    };
  }

  /**
   * Get all concepts in a specific language
   */
  static async getAllConceptsInLanguage(language: string): Promise<(Concept & ConceptTranslation)[]> {
    const concepts = await this.getAllConcepts();
    return concepts.map(concept => {
      const translation = concept.translations[language as keyof typeof concept.translations];
      if (!translation) {
        // Fallback to English if translation not available
        return {
          ...concept,
          ...concept.translations.en
        };
      }
      return {
        ...concept,
        ...translation
      };
    });
  }
}
