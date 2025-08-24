'use client'

import { useState } from 'react'
import { useLanguage } from '~/contexts/LanguageContext'
import Link from 'next/link'

type TabType = 'map' | 'timeline' | 'people' | 'information'

export function RuthContext() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>('information')

  const tabs = [
    { id: 'map' as const, label: language === 'no' ? 'Kart' : 'Map', icon: '🗺️' },
    { id: 'timeline' as const, label: language === 'no' ? 'Tidslinje' : 'Timeline', icon: '⏰' },
    { id: 'people' as const, label: language === 'no' ? 'Personer' : 'People', icon: '👥' },
    { id: 'information' as const, label: language === 'no' ? 'Informasjon' : 'Information', icon: 'ℹ️' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              {language === 'no' ? 'Kart over Ruts reise' : 'Map of Ruth\'s Journey'}
            </h3>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6 border border-amber-200">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                {language === 'no' 
                  ? 'Rut reiste fra Moab til Betlehem i Juda sammen med No\'omi.'
                  : 'Ruth traveled from Moab to Bethlehem in Judah with Naomi.'
                }
              </p>
              <div className="flex items-center space-x-3 text-sm text-amber-800">
                <span className="w-4 h-4 bg-red-500 rounded-full shadow-md"></span>
                <span className="font-medium">{language === 'no' ? 'Moab' : 'Moab'}</span>
                <span className="text-2xl">→</span>
                <span className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></span>
                <span className="font-medium">{language === 'no' ? 'Betlehem' : 'Bethlehem'}</span>
              </div>
            </div>
            <Link 
              href="/map" 
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg"
            >
              {language === 'no' ? 'Se fullstendig kart' : 'View full map'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )

      case 'timeline':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              {language === 'no' ? 'Tidslinje for Ruts bok' : 'Timeline of the Book of Ruth'}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-amber-500 rounded-full mt-2 shadow-md"></div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200 flex-1">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    {language === 'no' ? 'Tidlig i dommernes tid' : 'Early in the time of the Judges'}
                  </h4>
                  <p className="text-sm text-amber-800">
                    {language === 'no' 
                      ? 'Hungersnød i Juda, Elimelek flytter til Moab'
                      : 'Famine in Judah, Elimelek moves to Moab'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-amber-500 rounded-full mt-2 shadow-md"></div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200 flex-1">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    {language === 'no' ? 'Etter 10 år' : 'After 10 years'}
                  </h4>
                  <p className="text-sm text-amber-800">
                    {language === 'no' 
                      ? 'Elimelek og sønnene dør, No\'omi og Rut vender tilbake til Betlehem'
                      : 'Elimelek and sons die, Naomi and Ruth return to Bethlehem'
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-amber-500 rounded-full mt-2 shadow-md"></div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200 flex-1">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    {language === 'no' ? 'Bygghøsten' : 'Barley harvest'}
                  </h4>
                  <p className="text-sm text-amber-800">
                    {language === 'no' 
                      ? 'Rut møter Boas på åkeren'
                      : 'Ruth meets Boaz in the field'
                    }
                  </p>
                </div>
              </div>
            </div>
            <Link 
              href="/timeline" 
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium mt-6 transition-colors duration-200 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg"
            >
              {language === 'no' ? 'Se fullstendig tidslinje' : 'View full timeline'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )

      case 'people':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              {language === 'no' ? 'Hovedpersoner i Ruts bok' : 'Main Characters in the Book of Ruth'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-amber-900 mb-3 text-lg">Rut</h4>
                <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                  {language === 'no' 
                    ? 'Moabittkvinne som blir No\'omis svigerdatter'
                    : 'Moabite woman who becomes Naomi\'s daughter-in-law'
                  }
                </p>
                <Link 
                  href="/genealogy/40" 
                  className="text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'no' ? 'Se slektstre' : 'View genealogy'}
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-amber-900 mb-3 text-lg">Boas</h4>
                <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                  {language === 'no' 
                    ? 'Rik mann fra Betlehem, løser av familien'
                    : 'Wealthy man from Bethlehem, family redeemer'
                  }
                </p>
                <Link 
                  href="/genealogy/39" 
                  className="text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'no' ? 'Se slektstre' : 'View genealogy'}
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-amber-900 mb-3 text-lg">No'omi</h4>
                <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                  {language === 'no' 
                    ? 'Ruts svigermor, vender tilbake fra Moab'
                    : 'Ruth\'s mother-in-law, returns from Moab'
                  }
                </p>
                <Link 
                  href="/genealogy/74" 
                  className="text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'no' ? 'Se slektstre' : 'View genealogy'}
                </Link>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-amber-900 mb-3 text-lg">David</h4>
                <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                  {language === 'no' 
                    ? 'Konge av Israel, etterkommer av Rut og Boas'
                    : 'King of Israel, descendant of Ruth and Boaz'
                  }
                </p>
                <Link 
                  href="/genealogy/43" 
                  className="text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                >
                  {language === 'no' ? 'Se slektstre' : 'View genealogy'}
                </Link>
              </div>
            </div>
          </div>
        )

      case 'information':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              {language === 'no' ? 'Om Ruts bok' : 'About the Book of Ruth'}
            </h3>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                {language === 'no' 
                  ? 'Ruts bok er en historisk beretning som utspiller seg under dommernes tid i Israels historie. Den forteller historien om en moabittkvinne som blir en del av Guds folk og som spiller en viktig rolle i Messias\' slektslinje.'
                  : 'The Book of Ruth is a historical narrative set during the time of the Judges in Israel\'s history. It tells the story of a Moabite woman who becomes part of God\'s people and plays an important role in the Messiah\'s lineage.'
                }
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3 text-lg">
                  {language === 'no' ? 'Hovedtemaer' : 'Main Themes'}
                </h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {language === 'no' ? 'Trofasthet og lojalitet' : 'Faithfulness and loyalty'}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {language === 'no' ? 'Guds forsyn' : 'God\'s providence'}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {language === 'no' ? 'Løsning og forløsning' : 'Redemption and restoration'}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {language === 'no' ? 'Inkludering av utlendinger' : 'Inclusion of foreigners'}
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3 text-lg">
                  {language === 'no' ? 'Historisk betydning' : 'Historical Significance'}
                </h4>
                <p className="text-sm text-green-800 leading-relaxed">
                  {language === 'no' 
                    ? 'Rut er en av de fire kvinner som er nevnt i Matteus\' slektsregister for Jesus Kristus.'
                    : 'Ruth is one of four women mentioned in Matthew\'s genealogy of Jesus Christ.'
                  }
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white shadow-2xl border border-amber-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-amber-700 border-b-2 border-amber-500 bg-white shadow-sm'
                : 'text-amber-600 hover:text-amber-800 hover:bg-amber-100'
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xl">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  )
}
