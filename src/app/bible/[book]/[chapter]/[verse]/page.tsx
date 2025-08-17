'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface PageProps {
  params: Promise<{
    book: string
    chapter: string
    verse: string
  }>
}

interface BibleVerse {
  id: string
  number: number
  text: string
}

// Mock verse data - in a real app, this would come from an API
const getMockVerse = (book: string, chapter: number, verse: number): BibleVerse => {
  const verseTexts: Record<string, Record<number, Record<number, string>>> = {
    ruth: {
      1: {
        1: "In the days when the judges ruled in Israel, a severe famine came upon the land. So a man from Bethlehem in Judah left his home and went to live in the country of Moab, taking his wife and two sons with him.",
        2: "The man's name was Elimelech, and his wife was Naomi. Their two sons were Mahlon and Kilion. They were Ephrathites from Bethlehem in the land of Judah. And when they reached Moab, they settled there.",
        3: "Then Elimelech died, and Naomi was left with her two sons.",
        4: "The two sons married Moabite women. One married a woman named Orpah, and the other a woman named Ruth. But about ten years later,",
        5: "both Mahlon and Kilion died. This left Naomi alone, without her two sons or her husband.",
        6: "Then Naomi heard in Moab that the Lord had blessed his people in Judah by giving them good crops again. So Naomi and her daughters-in-law got ready to leave Moab to return to her homeland.",
        7: "With her two daughters-in-law she set out from the place where she had been living, and they took the road that would lead them back to Judah.",
        8: "But on the way, Naomi said to her two daughters-in-law, \"Go back to your mothers' homes. And may the Lord reward you for your kindness to your husbands and to me.",
        9: "May the Lord bless you with the security of another marriage.\" Then she kissed them good-bye, and they all broke down and wept.",
        10: "\"No,\" they said. \"We want to go with you to your people.\"",
        11: "But Naomi replied, \"Why should you go on with me? Can I still give birth to other sons who could grow up to be your husbands?",
        12: "No, my daughters, return to your parents' homes, for I am too old to marry again. And even if it were possible, and I were to get married tonight and bear sons, then what?",
        13: "Would you wait for them to grow up and refuse to marry someone else? No, of course not, my daughters! Things are far more bitter for me than for you, because the Lord himself has raised his fist against me.\"",
        14: "And again they wept together, and Orpah kissed her mother-in-law good-bye. But Ruth clung tightly to Naomi.",
        15: "\"Look,\" Naomi said to her, \"your sister-in-law has gone back to her people and to her gods. You should do the same.\"",
        16: "But Ruth replied, \"Don't ask me to leave you and turn back. Wherever you go, I will go; wherever you live, I will live. Your people will be my people, and your God will be my God.",
        17: "Wherever you die, I will die, and there I will be buried. May the Lord punish me severely if I allow anything but death to separate us!\"",
        18: "When Naomi saw that Ruth was determined to go with her, she said nothing more.",
        19: "So the two of them continued on their journey. When they came to Bethlehem, the entire town was excited by their arrival. \"Is it really Naomi?\" the women asked.",
        20: "\"Don't call me Naomi,\" she responded. \"Instead, call me Mara, for the Almighty has made life very bitter for me.",
        21: "I went away full, but the Lord has brought me home empty. Why call me Naomi when the Lord has caused me to suffer and the Almighty has sent such tragedy upon me?\"",
        22: "So Naomi returned from Moab, accompanied by her daughter-in-law Ruth, the young Moabite woman. They arrived in Bethlehem in late spring, at the beginning of the barley harvest."
      }
    }
  }

  const verseText = verseTexts[book.toLowerCase()]?.[chapter]?.[verse] || 
    `This is verse ${verse} from ${book} chapter ${chapter}. In a real implementation, this would contain the actual biblical text.`

  return {
    id: `${book}-${chapter}-${verse}`,
    number: verse,
    text: verseText
  }
}

export default function BibleVersePage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{
    book: string
    chapter: string
    verse: string
  } | null>(null)
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const router = useRouter()

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params
      setResolvedParams(resolved)
      
      const book = resolved.book
      const chapter = parseInt(resolved.chapter)
      const verseNum = parseInt(resolved.verse)
      
      if (isNaN(chapter) || isNaN(verseNum)) {
        router.push('/bible')
        return
      }
      
      const verseData = getMockVerse(book, chapter, verseNum)
      setVerse(verseData)
    }
    
    resolveParams()
  }, [params, router])

  if (!resolvedParams || !verse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading verse...</p>
        </div>
      </div>
    )
  }

  const { book, chapter, verse: verseNum } = resolvedParams
  const bookTitle = book.charAt(0).toUpperCase() + book.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/bible" className="text-gray-600 hover:text-gray-900">
                ← Back to Bible
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ← Home
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                {bookTitle} {chapter}:{verseNum}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  const newVerse = Math.max(1, verseNum - 1)
                  router.push(`/bible/${book}/${chapter}/${newVerse}`)
                }}
                disabled={verseNum <= 1}
                className="px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                ← Previous Verse
              </button>
              <button
                onClick={() => {
                  const newVerse = verseNum + 1
                  router.push(`/bible/${book}/${chapter}/${newVerse}`)
                }}
                className="px-4 py-2 rounded-md font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Next Verse →
              </button>
            </div>
            <div className="text-sm text-gray-600">
              {bookTitle} Chapter {chapter}
            </div>
          </div>
        </div>

        {/* Verse Content */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {bookTitle} {chapter}:{verseNum}
              </h2>
              <p className="text-lg text-gray-600">
                New International Version
              </p>
            </div>
            
            <div className="text-xl text-gray-900 leading-relaxed text-center max-w-3xl mx-auto">
              "{verse.text}"
            </div>
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigate</h3>
          <div className="flex space-x-4">
            <Link 
              href={`/bible/${book}/${Math.max(1, parseInt(chapter) - 1)}`}
              className="px-4 py-2 rounded-md font-medium transition-colors bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              ← Previous Chapter
            </Link>
            <Link 
              href={`/bible/${book}/${parseInt(chapter) + 1}`}
              className="px-4 py-2 rounded-md font-medium transition-colors bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Next Chapter →
            </Link>
            <Link 
              href="/bible"
              className="px-4 py-2 rounded-md font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Back to Bible
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
