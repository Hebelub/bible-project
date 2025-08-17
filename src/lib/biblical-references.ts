export interface BiblicalReference {
  book: string;
  chapter: number;
  verse: number;
  translation?: string;
}

export interface BiblicalReferenceRange {
  book: string;
  startChapter: number;
  startVerse: number;
  endChapter: number;
  endVerse: number;
  translation?: string;
}

export type BiblicalReferenceItem = BiblicalReference | BiblicalReferenceRange;

export function isReferenceRange(ref: BiblicalReferenceItem): ref is BiblicalReferenceRange {
  return 'startChapter' in ref && 'endChapter' in ref;
}

export function formatBiblicalReference(ref: BiblicalReferenceItem): string {
  if (isReferenceRange(ref)) {
    if (ref.startChapter === ref.endChapter) {
      return `${ref.book} ${ref.startChapter}:${ref.startVerse}-${ref.endVerse}`;
    }
    return `${ref.book} ${ref.startChapter}:${ref.startVerse}-${ref.endChapter}:${ref.endVerse}`;
  }
  return `${ref.book} ${ref.chapter}:${ref.verse}`;
}

export function createBibleLink(ref: BiblicalReferenceItem): string {
  if (isReferenceRange(ref)) {
    // For ranges, link to the first verse
    return `/bible/${ref.book.toLowerCase()}/${ref.startChapter}/${ref.startVerse}`;
  }
  return `/bible/${ref.book.toLowerCase()}/${ref.chapter}/${ref.verse}`;
}

export function formatBiblicalReferences(refs: BiblicalReferenceItem[]): string {
  return refs.map(formatBiblicalReference).join(', ');
}

// Common biblical references for the Book of Ruth
export const RUTH_REFERENCES = {
  ELIMELECH: [
    { book: 'Ruth', chapter: 1, verse: 1 },
    { book: 'Ruth', chapter: 1, verse: 2 },
    { book: 'Ruth', chapter: 1, verse: 3 }
  ],
  NAOMI: [
    { book: 'Ruth', chapter: 1, verse: 2 },
    { book: 'Ruth', chapter: 1, verse: 3 },
    { book: 'Ruth', chapter: 1, verse: 6 },
    { book: 'Ruth', chapter: 1, verse: 7 },
    { book: 'Ruth', chapter: 1, verse: 8 },
    { book: 'Ruth', chapter: 1, verse: 9 },
    { book: 'Ruth', chapter: 1, verse: 11 },
    { book: 'Ruth', chapter: 1, verse: 12 },
    { book: 'Ruth', chapter: 1, verse: 13 },
    { book: 'Ruth', chapter: 1, verse: 14 },
    { book: 'Ruth', chapter: 1, verse: 15 },
    { book: 'Ruth', chapter: 1, verse: 18 },
    { book: 'Ruth', chapter: 1, verse: 19 },
    { book: 'Ruth', chapter: 1, verse: 20 },
    { book: 'Ruth', chapter: 1, verse: 21 },
    { book: 'Ruth', chapter: 1, verse: 22 },
    { book: 'Ruth', chapter: 2, verse: 2 },
    { book: 'Ruth', chapter: 2, verse: 3 },
    { book: 'Ruth', chapter: 2, verse: 18 },
    { book: 'Ruth', chapter: 2, verse: 19 },
    { book: 'Ruth', chapter: 2, verse: 20 },
    { book: 'Ruth', chapter: 2, verse: 22 },
    { book: 'Ruth', chapter: 3, verse: 1 },
    { book: 'Ruth', chapter: 3, verse: 2 },
    { book: 'Ruth', chapter: 3, verse: 4 },
    { book: 'Ruth', chapter: 3, verse: 6 },
    { book: 'Ruth', chapter: 3, verse: 17 },
    { book: 'Ruth', chapter: 3, verse: 18 },
    { book: 'Ruth', chapter: 3, verse: 19 },
    { book: 'Ruth', chapter: 4, verse: 3 },
    { book: 'Ruth', chapter: 4, verse: 5 },
    { book: 'Ruth', chapter: 4, verse: 9 },
    { book: 'Ruth', chapter: 4, verse: 14 },
    { book: 'Ruth', chapter: 4, verse: 15 },
    { book: 'Ruth', chapter: 4, verse: 16 },
    { book: 'Ruth', chapter: 4, verse: 17 }
  ],
  MAHLON: [
    { book: 'Ruth', chapter: 1, verse: 2 },
    { book: 'Ruth', chapter: 1, verse: 3 },
    { book: 'Ruth', chapter: 1, verse: 4 },
    { book: 'Ruth', chapter: 1, verse: 5 },
    { book: 'Ruth', chapter: 4, verse: 10 }
  ],
  KILION: [
    { book: 'Ruth', chapter: 1, verse: 2 },
    { book: 'Ruth', chapter: 1, verse: 3 },
    { book: 'Ruth', chapter: 1, verse: 4 },
    { book: 'Ruth', chapter: 1, verse: 5 }
  ],
  ORPAH: [
    { book: 'Ruth', chapter: 1, verse: 4 },
    { book: 'Ruth', chapter: 1, verse: 8 },
    { book: 'Ruth', chapter: 1, verse: 9 },
    { book: 'Ruth', chapter: 1, verse: 10 },
    { book: 'Ruth', chapter: 1, verse: 11 },
    { book: 'Ruth', chapter: 1, verse: 12 },
    { book: 'Ruth', chapter: 1, verse: 13 },
    { book: 'Ruth', chapter: 1, verse: 14 },
    { book: 'Ruth', chapter: 1, verse: 15 }
  ],
  RUTH: [
    { book: 'Ruth', chapter: 1, verse: 4 },
    { book: 'Ruth', chapter: 1, verse: 8 },
    { book: 'Ruth', chapter: 1, verse: 9 },
    { book: 'Ruth', chapter: 1, verse: 10 },
    { book: 'Ruth', chapter: 1, verse: 11 },
    { book: 'Ruth', chapter: 1, verse: 12 },
    { book: 'Ruth', chapter: 1, verse: 13 },
    { book: 'Ruth', chapter: 1, verse: 14 },
    { book: 'Ruth', chapter: 1, verse: 15 },
    { book: 'Ruth', chapter: 1, verse: 16 },
    { book: 'Ruth', chapter: 1, verse: 17 },
    { book: 'Ruth', chapter: 1, verse: 18 },
    { book: 'Ruth', chapter: 1, verse: 22 },
    { book: 'Ruth', chapter: 2, verse: 2 },
    { book: 'Ruth', chapter: 2, verse: 3 },
    { book: 'Ruth', chapter: 2, verse: 6 },
    { book: 'Ruth', chapter: 2, verse: 7 },
    { book: 'Ruth', chapter: 2, verse: 8 },
    { book: 'Ruth', chapter: 2, verse: 9 },
    { book: 'Ruth', chapter: 2, verse: 10 },
    { book: 'Ruth', chapter: 2, verse: 11 },
    { book: 'Ruth', chapter: 2, verse: 12 },
    { book: 'Ruth', chapter: 2, verse: 13 },
    { book: 'Ruth', chapter: 2, verse: 14 },
    { book: 'Ruth', chapter: 2, verse: 15 },
    { book: 'Ruth', chapter: 2, verse: 16 },
    { book: 'Ruth', chapter: 2, verse: 17 },
    { book: 'Ruth', chapter: 2, verse: 18 },
    { book: 'Ruth', chapter: 2, verse: 19 },
    { book: 'Ruth', chapter: 2, verse: 20 },
    { book: 'Ruth', chapter: 2, verse: 21 },
    { book: 'Ruth', chapter: 2, verse: 22 },
    { book: 'Ruth', chapter: 2, verse: 23 },
    { book: 'Ruth', chapter: 3, verse: 1 },
    { book: 'Ruth', chapter: 3, verse: 2 },
    { book: 'Ruth', chapter: 3, verse: 3 },
    { book: 'Ruth', chapter: 3, verse: 4 },
    { book: 'Ruth', chapter: 3, verse: 5 },
    { book: 'Ruth', chapter: 3, verse: 6 },
    { book: 'Ruth', chapter: 3, verse: 7 },
    { book: 'Ruth', chapter: 3, verse: 8 },
    { book: 'Ruth', chapter: 3, verse: 9 },
    { book: 'Ruth', chapter: 3, verse: 10 },
    { book: 'Ruth', chapter: 3, verse: 11 },
    { book: 'Ruth', chapter: 3, verse: 12 },
    { book: 'Ruth', chapter: 3, verse: 13 },
    { book: 'Ruth', chapter: 3, verse: 14 },
    { book: 'Ruth', chapter: 3, verse: 15 },
    { book: 'Ruth', chapter: 3, verse: 16 },
    { book: 'Ruth', chapter: 3, verse: 17 },
    { book: 'Ruth', chapter: 3, verse: 18 },
    { book: 'Ruth', chapter: 4, verse: 10 },
    { book: 'Ruth', chapter: 4, verse: 11 },
    { book: 'Ruth', chapter: 4, verse: 12 },
    { book: 'Ruth', chapter: 4, verse: 13 },
    { book: 'Ruth', chapter: 4, verse: 14 },
    { book: 'Ruth', chapter: 4, verse: 15 },
    { book: 'Ruth', chapter: 4, verse: 16 },
    { book: 'Ruth', chapter: 4, verse: 17 },
    { book: 'Ruth', chapter: 4, verse: 18 }
  ],
  BOAZ: [
    { book: 'Ruth', chapter: 2, verse: 1 },
    { book: 'Ruth', chapter: 2, verse: 4 },
    { book: 'Ruth', chapter: 2, verse: 5 },
    { book: 'Ruth', chapter: 2, verse: 6 },
    { book: 'Ruth', chapter: 2, verse: 7 },
    { book: 'Ruth', chapter: 2, verse: 8 },
    { book: 'Ruth', chapter: 2, verse: 9 },
    { book: 'Ruth', chapter: 2, verse: 10 },
    { book: 'Ruth', chapter: 2, verse: 11 },
    { book: 'Ruth', chapter: 2, verse: 12 },
    { book: 'Ruth', chapter: 2, verse: 13 },
    { book: 'Ruth', chapter: 2, verse: 14 },
    { book: 'Ruth', chapter: 2, verse: 15 },
    { book: 'Ruth', chapter: 2, verse: 16 },
    { book: 'Ruth', chapter: 2, verse: 17 },
    { book: 'Ruth', chapter: 2, verse: 18 },
    { book: 'Ruth', chapter: 2, verse: 19 },
    { book: 'Ruth', chapter: 2, verse: 20 },
    { book: 'Ruth', chapter: 2, verse: 21 },
    { book: 'Ruth', chapter: 2, verse: 22 },
    { book: 'Ruth', chapter: 2, verse: 23 },
    { book: 'Ruth', chapter: 3, verse: 2 },
    { book: 'Ruth', chapter: 3, verse: 7 },
    { book: 'Ruth', chapter: 3, verse: 8 },
    { book: 'Ruth', chapter: 3, verse: 9 },
    { book: 'Ruth', chapter: 3, verse: 10 },
    { book: 'Ruth', chapter: 3, verse: 11 },
    { book: 'Ruth', chapter: 3, verse: 12 },
    { book: 'Ruth', chapter: 3, verse: 13 },
    { book: 'Ruth', chapter: 3, verse: 14 },
    { book: 'Ruth', chapter: 3, verse: 15 },
    { book: 'Ruth', chapter: 3, verse: 16 },
    { book: 'Ruth', chapter: 4, verse: 1 },
    { book: 'Ruth', chapter: 4, verse: 2 },
    { book: 'Ruth', chapter: 4, verse: 3 },
    { book: 'Ruth', chapter: 4, verse: 4 },
    { book: 'Ruth', chapter: 4, verse: 5 },
    { book: 'Ruth', chapter: 4, verse: 6 },
    { book: 'Ruth', chapter: 4, verse: 7 },
    { book: 'Ruth', chapter: 4, verse: 8 },
    { book: 'Ruth', chapter: 4, verse: 9 },
    { book: 'Ruth', chapter: 4, verse: 10 },
    { book: 'Ruth', chapter: 4, verse: 11 },
    { book: 'Ruth', chapter: 4, verse: 12 },
    { book: 'Ruth', chapter: 4, verse: 13 },
    { book: 'Ruth', chapter: 4, verse: 14 },
    { book: 'Ruth', chapter: 4, verse: 15 },
    { book: 'Ruth', chapter: 4, verse: 16 },
    { book: 'Ruth', chapter: 4, verse: 17 },
    { book: 'Ruth', chapter: 4, verse: 18 },
    { book: 'Ruth', chapter: 4, verse: 19 },
    { book: 'Ruth', chapter: 4, verse: 20 },
    { book: 'Ruth', chapter: 4, verse: 21 },
    { book: 'Ruth', chapter: 4, verse: 22 }
  ],
  OBED: [
    { book: 'Ruth', chapter: 4, verse: 17 },
    { book: 'Ruth', chapter: 4, verse: 18 },
    { book: 'Ruth', chapter: 4, verse: 19 },
    { book: 'Ruth', chapter: 4, verse: 20 },
    { book: 'Ruth', chapter: 4, verse: 21 },
    { book: 'Ruth', chapter: 4, verse: 22 }
  ],
  JESSE: [
    { book: 'Ruth', chapter: 4, verse: 17 },
    { book: 'Ruth', chapter: 4, verse: 18 },
    { book: 'Ruth', chapter: 4, verse: 19 },
    { book: 'Ruth', chapter: 4, verse: 20 },
    { book: 'Ruth', chapter: 4, verse: 21 },
    { book: 'Ruth', chapter: 4, verse: 22 }
  ],
  DAVID: [
    { book: 'Ruth', chapter: 4, verse: 17 },
    { book: 'Ruth', chapter: 4, verse: 18 },
    { book: 'Ruth', chapter: 4, verse: 19 },
    { book: 'Ruth', chapter: 4, verse: 20 },
    { book: 'Ruth', chapter: 4, verse: 21 },
    { book: 'Ruth', chapter: 4, verse: 22 }
  ]
};
