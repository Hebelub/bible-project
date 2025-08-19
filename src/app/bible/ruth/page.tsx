'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '~/contexts/LanguageContext'
import { getRuthText } from '~/lib/language'
import { LanguageSwitcher } from '~/components/LanguageSwitcher'
import { TextToSpeech } from '~/components/TextToSpeech'
import { locationsData } from '~/data/locations'

// Mapping of person names to their genealogy IDs
const RUTH_PEOPLE: Record<string, number> = {
  'Elimelech': 73,
  'Elimelek': 73, // Norwegian spelling
  'Naomi': 74,
  'No\'omi': 74, // Norwegian spelling
  'Mahlon': 75,
  'Kilion': 76,
  'Kiljon': 76, // Norwegian spelling
  'Orpah': 77,
  'Orpa': 77, // Norwegian spelling
  'Ruth': 40, // Use main genealogy ID
  'Rut': 40, // Norwegian spelling
  'Boaz': 39, // Use main genealogy ID
  'Boas': 39, // Norwegian spelling
  'Obed': 41, // Use main genealogy ID
  'Jesse': 42, // Use main genealogy ID
  'Isai': 42, // Norwegian spelling
  'David': 43, // Use main genealogy ID
  'Perez': 31, // Use main genealogy ID
  'Peres': 31, // Norwegian spelling
  'Hezron': 33, // Use main genealogy ID
  'Hesron': 33, // Norwegian spelling
  'Ram': 34, // Use main genealogy ID
  'Amminadab': 35, // Use main genealogy ID
  'Nahshon': 36, // Use main genealogy ID
  'Nahsjon': 36, // Norwegian spelling
  'Salmon': 37, // Use main genealogy ID
  'Rahab': 38 // Use main genealogy ID
}

// Mapping of location names to their location IDs (from Book of Ruth)
const RUTH_LOCATIONS: Record<string, number> = {
  'Bethlehem': 1,
  'Moab': 2,
  'Judah': 3,
  'Ephrathah': 4,
  'Ephrath': 4, // Alternative spelling
}

// Function to make person names and locations clickable
function makeTextClickable(text: string) {
  // Split text into words and punctuation
  const parts = text.split(/(\b\w+\b|[^\w\s])/g)
  
  return parts.map((part, index) => {
    // Check if this part is a person name
    const personId = RUTH_PEOPLE[part]
    if (personId) {
      return (
        <Link
          key={index}
          href={`/genealogy/${personId}`}
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          {part}
        </Link>
      )
    }
    
    // Check if this part is a location name
    const locationId = RUTH_LOCATIONS[part]
    if (locationId) {
      return (
        <Link
          key={index}
          href={`/locations/${locationId}`}
          className="text-green-600 hover:text-green-800 hover:underline font-medium"
        >
          {part}
        </Link>
      )
    }
    
    return part
  })
}

export default function RuthPage() {
  const { language } = useLanguage()
  const [selectedChapter, setSelectedChapter] = useState(1)
  const ruthText = getRuthText(language)

  const chapters = [1, 2, 3, 4]

  // Collect chapter texts for TTS (one string per chapter)
  const getChapterTexts = () => {
    const texts: string[] = []
    for (let chapter = 1; chapter <= 4; chapter++) {
      const chapterData = ruthText[`chapter${chapter}` as keyof typeof ruthText] as { verses: Record<string, string> }
      if (chapterData?.verses) {
        const combined = Object.values(chapterData.verses).join(' ')
        texts.push(combined)
      }
    }
    return texts
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
                 {/* Header */}
         <div className="text-center mb-8">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">{ruthText.title}</h1>
           <div className="flex justify-center mb-4">
             <LanguageSwitcher />
           </div>
         </div>

         {/* Global Text-to-Speech Controls */}
         <div className="max-w-4xl mx-auto mb-8">
           <div className="bg-white rounded-2xl shadow-xl p-6">
             <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
               {language === 'no' ? 'Lydbok' : 'Audio Book'}
             </h2>
             <TextToSpeech 
               chapters={getChapterTexts()}
               startChapter={selectedChapter}
               language={language}
               onChapterChange={setSelectedChapter}
               currentChapter={selectedChapter}
             />
           </div>
         </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <Link 
            href="/bible"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Bible
          </Link>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            Home
          </Link>
          <Link 
            href="/genealogy"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Genealogy
          </Link>
        </div>

        {/* Chapter Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-md">
            {chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedChapter === chapter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {language === 'no' ? `Kapittel ${chapter}` : `Chapter ${chapter}`}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
                         {/* Chapter Title */}
             <div className="text-center mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">
                 {(ruthText[`chapter${selectedChapter}` as keyof typeof ruthText] as { title: string })?.title ?? ''}
               </h2>
               <div className="text-lg text-gray-500">
                 {language === 'no' ? `Kapittel ${selectedChapter}` : `Chapter ${selectedChapter}`}
               </div>
             </div>

                          {/* Verses */}
             <div className="space-y-6">
               {Object.entries((ruthText[`chapter${selectedChapter}` as keyof typeof ruthText] as { verses: Record<string, string> })?.verses ?? {}).map(([verseNum, text]) => (
                 <div key={verseNum} className="border-l-4 border-blue-200 pl-6">
                   <div className="flex items-start space-x-4">
                     <span className="text-2xl font-bold text-blue-600 min-w-[3rem]">
                       {verseNum}
                     </span>
                     <div className="flex-1">
                       <p className="text-lg text-gray-800 leading-relaxed">
                         {makeTextClickable(text)}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>

            {/* Chapter Navigation */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setSelectedChapter(Math.max(1, selectedChapter - 1))}
                disabled={selectedChapter === 1}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedChapter === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {language === 'no' ? 'Forrige' : 'Previous'}
              </button>

              <button
                onClick={() => setSelectedChapter(Math.min(4, selectedChapter + 1))}
                disabled={selectedChapter === 4}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedChapter === 4
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {language === 'no' ? 'Neste' : 'Next'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            {language === 'no' 
              ? 'Tekst fra Bibelen 2011-utgaven' 
              : 'Text from the NIV Bible'
            }
          </p>
        </div>
      </div>
    </div>
  )
}
