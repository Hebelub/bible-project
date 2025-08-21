'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '~/contexts/LanguageContext'
import { getRuthText } from '~/lib/language'
import { LanguageSwitcher } from '~/components/LanguageSwitcher'
import { TextToSpeech } from '~/components/TextToSpeech'
import { genealogyData, type Person } from '~/data/genealogy'

// Concept Tooltip Component
const ConceptTooltip = ({ 
  concept, 
  isOpen, 
  onClose
}: { 
  concept: { emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] } | null
  isOpen: boolean
  onClose: () => void 
}) => {
  if (!isOpen || !concept) return null

  // Always center the tooltip on screen
  const getTooltipStyle = () => {
    return {
      position: 'fixed' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  // Parse Bible reference to create URL
  const createBibleUrl = (reference: string) => {
    // Extract book, chapter, verse from "Book Chapter:Verse" format
    const regex = /^(\w+(?:\s+\w+)*)\s+(\d+):?(\d+)?(?:-(\d+))?/
    const match = regex.exec(reference)
    if (match) {
      const [, book, chapter, startVerse] = match
      const bookSlug = book?.toLowerCase().replace(/\s+/g, '-')
      if (startVerse && bookSlug) {
        return `/bible/${bookSlug}/${chapter}/${startVerse}`
      } else if (bookSlug) {
        return `/bible/${bookSlug}/${chapter}/1`
      }
    }
    // Fallback for ranges like "Book Chapter:Start-End"
    const rangeRegex = /^(\w+(?:\s+\w+)*)\s+(\d+):(\d+)-(\d+)/
    const rangeMatch = rangeRegex.exec(reference)
    if (rangeMatch) {
      const [, book, chapter, startVerse] = rangeMatch
      const bookSlug = book?.toLowerCase().replace(/\s+/g, '-')
      if (bookSlug) {
        return `/bible/${bookSlug}/${chapter}/${startVerse}`
      }
    }
    return '/bible'
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl p-4 sm:p-6 lg:p-8 w-[95vw] max-w-sm sm:max-w-md lg:max-w-lg mx-2 sm:mx-4 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={getTooltipStyle()}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl" />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-200 group z-20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header with emoji and type */}
        <div className="relative z-10 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg mx-auto sm:mx-0">
              {concept.emoji}
            </div>
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-1">
                {concept.type === 'key' ? (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full">
                    🔑 Key to Understanding
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full">
                    💡 Concept
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {concept.type === 'key' ? 'Key to Understanding' : 'Biblical Concept'}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              {concept.explanation}
            </p>
            
            {/* Bible References */}
            {concept.bibleReferences && concept.bibleReferences.length > 0 && (
              <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  📖 Bible References:
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {concept.bibleReferences.map((reference, index) => (
                    <Link
                      key={index}
                      href={createBibleUrl(reference)}
                      className="inline-flex items-center px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors duration-200"
                      onClick={onClose}
                    >
                      {reference}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Footer with decorative element */}
          <div className="mt-4 flex items-center justify-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}


// Mapping of person names to their genealogy IDs
const RUTH_PEOPLE: Record<string, number> = {
  // English names
  'Elimelech': 73,
  'Naomi': 74,
  'Mahlon': 75,
  'Kilion': 76,
  'Orpah': 77,
  'Ruth': 40, // Use main genealogy ID
  'Boaz': 39, // Use main genealogy ID
  'Obed': 41, // Use main genealogy ID
  'Jesse': 42, // Use main genealogy ID
  'David': 43, // Use main genealogy ID
  'Perez': 31, // Use main genealogy ID
  'Hezron': 33, // Use main genealogy ID
  'Ram': 34, // Use main genealogy ID
  'Amminadab': 35, // Use main genealogy ID
  'Nahshon': 36, // Use main genealogy ID
  'Salmon': 37, // Use main genealogy ID
  'Rahab': 38, // Use main genealogy ID
  
  // Norwegian names
  'Elimelek': 73,
  'No\'omi': 74,
  'Kiljon': 76,
  'Orpa': 77,
  'Rut': 40,
  'Boas': 39,
  'Isai': 42,
  'Peres': 31,
  'Hesron': 33,
  'Nahsjon': 36,
  'Rakel': 9,
  'Lea': 7,
  'Tamar': 28
}

// Mapping of location names to their location IDs (from Book of Ruth)
const RUTH_LOCATIONS: Record<string, number> = {
  // English names
  'Bethlehem': 1,
  'Moab': 2,
  'Judah': 3,
  'Ephrathah': 4,
  'Ephrath': 4, // Alternative spelling
  
  // Norwegian names
  'Betlehem': 1,
  'Juda': 3,
  'Efrata': 4,
  'Efrat': 4
}

// Mapping of concepts and keys to understanding in the Book of Ruth
const RUTH_CONCEPTS: Record<string, { emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] }> = {
  // Key to understanding - English



  'providence': {
    emoji: '👁️',
    type: 'key',
    explanation: 'Divine providence means God\'s guidance and care. Though God is never mentioned directly in Ruth, His hand is seen working through ordinary events to bring about His purposes. This shows how God works behind the scenes.'
  },
  'covenant': {
    emoji: '📜',
    type: 'key',
    explanation: 'The covenant relationship between God and His people is demonstrated through Ruth\'s story. Her commitment to Naomi and adoption into Israel shows how God\'s covenant extends to all who trust in Him.',
    bibleReferences: ['Genesis 12:1-3', 'Deuteronomy 7:9', 'Psalm 105:8-11', 'Romans 11:29', 'Hebrews 6:17-18']
  },
  'jewish-laws': {
    emoji: '⚖️',
    type: 'concept',
    explanation: 'Several Jewish laws are implicit in Ruth\'s story: gleaning laws (Leviticus 19:9-10), levirate marriage (Deuteronomy 25:5-10), kinsman-redeemer laws (Leviticus 25:25-55), and inheritance laws (Numbers 36:1-13). These laws show God\'s care for the vulnerable and His concern for family continuity and land stewardship.',
    bibleReferences: ['Leviticus 19:9-10', 'Deuteronomy 25:5-10', 'Leviticus 25:25-55', 'Numbers 36:1-13', 'Ruth 2:2', 'Ruth 3:9', 'Ruth 4:3-6']
  },
  'grace': {
    emoji: '✨',
    type: 'key',
    explanation: 'Grace is unmerited favor. Ruth, a foreigner, receives grace from Boaz and ultimately from God. This demonstrates God\'s grace to all people, regardless of their background or status.'
  },
  'elimelech': {
    emoji: '👨‍👩‍👧‍👦',
    type: 'key',
    explanation: 'Elimelech means "My God is King" in Hebrew. His decision to leave Bethlehem during famine shows a lack of faith in God\'s provision. Bethlehem was the "House of Bread" where God had provided for His people, but Elimelech chose to trust in Moab\'s resources instead of God\'s faithfulness. This reflects the spiritual condition of Israel during the period of the Judges.',
    bibleReferences: ['Ruth 1:1-2', 'Deuteronomy 28:15-68', 'Judges 2:11-19', 'Psalm 37:25']
  },

  'moab': {
    emoji: '🏔️',
    type: 'key',
    explanation: 'Moab was a pagan nation descended from Lot\'s incestuous relationship with his daughter (Genesis 19:30-38). Going there meant living among idolaters and abandoning the Promised Land. The Moabites were forbidden from entering the assembly of the Lord (Deuteronomy 23:3-6), making this move spiritually dangerous.',
    bibleReferences: ['Ruth 1:1', 'Genesis 19:30-38', 'Numbers 25:1-3', 'Deuteronomy 23:3-6', 'Psalm 60:8']
  },
  
  // Key to understanding - Norwegian
  'etterlesning': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Etterlesning var en bibelsk praksis hvor fattige mennesker kunne samle opp gjenstående korn fra åkrene etter innhøsting. Dette var en form for sosial velferd som Gud befalte i 3. Mosebok 19:9-10 og 5. Mosebok 24:19-22.'
  },
  'løsningsmann': {
    emoji: '💍',
    type: 'key',
    explanation: 'En løsningsmann (go\'el på hebraisk) var en nær slektning som hadde rett og ansvar for å hjelpe familiemedlemmer i nød. Dette inkluderte å kjøpe tilbake familiens land, gifte seg med enker for å fortsette familiens linje, og hevne urett.'
  },
  'leverat ekteskap': {
    emoji: '👰',
    type: 'key',
    explanation: 'Levirat ekteskap var en skikk hvor en mann ville gifte seg med sin avdøde brors enke for å gi henne barn og fortsette brorens familielinje. Dette er nevnt i 5. Mosebok 25:5-10.'
  },
  'løsning': {
    emoji: '🔄',
    type: 'key',
    explanation: 'Løsning i Bibelen betyr å kjøpe tilbake, gjenopprette eller befri. I Ruts historie løser Boas både landet og Rut, gir sikkerhet og fortsetter familiens linje.'
  },
  'troskap': {
    emoji: '🤝',
    type: 'key',
    explanation: 'Troskap (hesed på hebraisk) er et nøkkeltema i Rut. Det refererer til standhaftig kjærlighet, trofasthet og forpliktelse. Rut viser troskap til No\'omi, og Gud viser troskap til sitt folk.'
  },
  'forsyn': {
    emoji: '👁️',
    type: 'key',
    explanation: 'Guddommelig forsyn betyr Guds ledelse og omsorg. Selv om Gud aldri nevnes direkte i Rut, ser vi Hans hånd arbeide gjennom vanlige hendelser for å bringe frem Hans formål.'
  },
  
  // Concepts - English
  'famine': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Famine was a common occurrence in ancient times and often seen as God\'s judgment or testing. In Ruth, famine drives Naomi\'s family to Moab, setting up the story. It shows how God can use difficult circumstances for His purposes.'
  },
  'widowhood': {
    emoji: '🕊️',
    type: 'concept',
    explanation: 'Widows were among the most vulnerable in ancient society. They had no means of support and depended on family or community charity. Ruth and Naomi\'s situation highlights this vulnerability and God\'s care for the marginalized.'
  },
  'harvest': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Harvest time was crucial for survival. The barley harvest (spring) and wheat harvest (summer) provided food for the year. Ruth\'s story takes place during these harvest seasons, showing God\'s provision through agriculture.'
  },
  'blessing': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Blessings were important in Hebrew culture. They were prayers for God\'s favor and could be given by anyone. Boaz blesses Ruth, and the women bless Naomi when Obed is born. Blessings were believed to have real power.'
  },
  'lineage': {
    emoji: '👨‍👩‍👧‍👦',
    type: 'concept',
    explanation: 'Family lineage was crucial in Hebrew culture. It determined inheritance, tribal affiliation, and social status. Ruth\'s marriage to Boaz preserves the family line and connects to the messianic line of David.'
  },
  'glean': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Gleaning was a biblical practice where poor people could collect leftover grain from fields after harvest. This was a form of social welfare commanded by God in Leviticus 19:9-10 and Deuteronomy 24:19-22.'
  },
  'gleaned': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Gleaning was a biblical practice where poor people could collect leftover grain from fields after harvest. This was a form of social welfare commanded by God in Leviticus 19:9-10 and Deuteronomy 24:19-22.'
  },
  'blessed': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Blessings were important in Hebrew culture. They were prayers for God\'s favor and could be given by anyone. Boaz blesses Ruth, and the women bless Naomi when Obed is born.'
  },
  'widow': {
    emoji: '🕊️',
    type: 'concept',
    explanation: 'Widows were among the most vulnerable in ancient society. They had no means of support and depended on family or community charity. Ruth and Naomi\'s situation highlights this vulnerability.'
  },
  'widows': {
    emoji: '🕊️',
    type: 'concept',
    explanation: 'Widows were among the most vulnerable in ancient society. They had no means of support and depended on family or community charity. Ruth and Naomi\'s situation highlights this vulnerability.'
  },
  'barley': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Barley was the first grain harvested in spring. The barley harvest marked the beginning of the agricultural year and was crucial for survival. Ruth\'s story begins during the barley harvest.'
  },
  'wheat': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Wheat was harvested after barley, during the summer. It was the main grain crop and provided the primary food source for the year. Ruth\'s story continues through the wheat harvest.'
  },
  'field': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Fields were the source of livelihood in agricultural societies. Boaz\'s field becomes the setting for Ruth\'s provision and their relationship development. Fields represent God\'s provision and blessing.'
  },
  'threshing floor': {
    emoji: '🏚️',
    type: 'concept',
    explanation: 'The threshing floor was where grain was separated from chaff. It was also a place of community gathering and celebration. Ruth\'s encounter with Boaz at the threshing floor is significant for their relationship.'
  },
  'gate': {
    emoji: '🚪',
    type: 'concept',
    explanation: 'The city gate was where legal transactions and community decisions were made. Boaz conducts the legal proceedings for Ruth\'s redemption at the gate, showing the importance of proper legal processes.'
  },
  'elders': {
    emoji: '👴',
    type: 'concept',
    explanation: 'Elders were respected community leaders who witnessed and validated important transactions. The elders at the gate witness Boaz\'s commitment to Ruth, ensuring the transaction\'s legitimacy.'
  },
  'sandals': {
    emoji: '👞',
    type: 'concept',
    explanation: 'The removal of sandals was a symbolic act in legal transactions, particularly in property transfers. This gesture confirmed the transfer of rights and responsibilities.'
  },
  'seed': {
    emoji: '🌱',
    type: 'concept',
    explanation: 'Seed represents future generations and the continuation of the family line. Ruth\'s marriage to Boaz ensures the continuation of Elimelek\'s line and ultimately leads to the birth of Obed.'
  },
  'house': {
    emoji: '🏠',
    type: 'concept',
    explanation: 'House represents family, security, and belonging. Ruth finds a home with Boaz, and Naomi finds restoration through Ruth\'s marriage. The house becomes a symbol of God\'s provision.'
  },
  'bread': {
    emoji: '🍞',
    type: 'concept',
    explanation: 'Bread represents sustenance and provision. Ruth\'s gleaning provides bread for Naomi and herself. This shows God\'s provision through the generosity of others.'
  },
  'water': {
    emoji: '💧',
    type: 'concept',
    explanation: 'Water represents life and refreshment. Boaz provides water for Ruth while she gleans, showing his care and protection. Water also symbolizes spiritual refreshment and blessing.'
  },
  'rest': {
    emoji: '😴',
    type: 'concept',
    explanation: 'Rest represents security and peace. Boaz offers Ruth rest and protection in his field. This foreshadows the ultimate rest that comes through redemption and relationship with God.'
  },
  'kinsman': {
    emoji: '👨‍👩‍👧‍👦',
    type: 'concept',
    explanation: 'A kinsman was a close relative with specific responsibilities toward family members. The concept of kinsman-redeemer shows the importance of family relationships and mutual support.'
  },
  'inheritance': {
    emoji: '🏛️',
    type: 'concept',
    explanation: 'Inheritance was crucial in Hebrew culture, ensuring family property remained within the tribe. Ruth\'s redemption by Boaz preserves Elimelek\'s inheritance and ensures proper distribution.'
  },
  'tribe': {
    emoji: '🏛️',
    type: 'concept',
    explanation: 'Tribal affiliation determined social status, inheritance rights, and community belonging. Ruth\'s integration into Judah through marriage shows God\'s acceptance of outsiders.'
  },
  'judah': {
    emoji: '🦁',
    type: 'concept',
    explanation: 'Judah was one of the twelve tribes of Israel, and Bethlehem was in Judah\'s territory. Ruth\'s story takes place in Judah, connecting her to the messianic line that would come from this tribe.'
  },
  'moabite': {
    emoji: '🏔️',
    type: 'concept',
    explanation: 'Moab was a neighboring nation often in conflict with Israel. Ruth\'s Moabite background makes her story remarkable - a foreigner becoming part of God\'s chosen people.'
  },
  'ephrathah': {
    emoji: '🏘️',
    type: 'concept',
    explanation: 'Ephrathah was an ancient name for Bethlehem, meaning "fruitful." This name connects to the fruitfulness that comes through Ruth\'s story and the birth of Obed.'
  },
  'bethlehem': {
    emoji: '🏘️',
    type: 'concept',
    explanation: 'Bethlehem means "House of Bread" in Hebrew (בית לחם). Ironically, during famine, the "house of bread" had no bread, showing the severity of the crisis and God\'s judgment on Israel. Bethlehem was in Judah\'s territory, the royal tribe, and later became the birthplace of the Messiah, showing God\'s redemptive plan.',
    bibleReferences: ['Ruth 1:1', 'Genesis 35:19', 'Micah 5:2', 'Matthew 2:1-6', 'Luke 2:4-7']
  },



  
  // Concepts - Norwegian
  'hungersnød': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Hungersnød var vanlig i oldtiden og ble ofte sett på som Guds dom eller prøvelse. I Rut driver hungersnøden No\'omis familie til Moab, som setter opp historien.'
  },
  'enke': {
    emoji: '🕊️',
    type: 'concept',
    explanation: 'Enker var blant de mest sårbare i det gamle samfunnet. De hadde ingen inntektskilde og var avhengige av familie eller samfunnets veldedighet.'
  },
  'innhøsting': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Innhøstingstiden var avgjørende for overlevelse. Bygginnhøstingen (våren) og hvetinnhøstingen (sommeren) ga mat for året. Ruts historie foregår under disse innhøstingssesongene.'
  },
  'velsignelse': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Velsignelser var viktige i hebraisk kultur. De var bønner om Guds gunst og kunne gis av hvem som helst. Boas velsigner Rut, og kvinnene velsigner No\'omi når Obed blir født.'
  },
  'slekt': {
    emoji: '👨‍👩‍👧‍👦',
    type: 'concept',
    explanation: 'Familieslekt var avgjørende i hebraisk kultur. Det bestemte arv, stammetilhørighet og sosial status. Ruts ekteskap med Boas bevarer familiens linje.'
  },
  'fremmed': {
    emoji: '🌍',
    type: 'concept',
    explanation: 'Rut var en moabitt, en fremmed i Israel. Moabitter ble ofte sett på med mistenksomhet, men Ruts troskap og tro viser at Gud aksepterer mennesker fra alle nasjoner.'
  },
  'etterles': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Etterlesning var en bibelsk praksis hvor fattige mennesker kunne samle opp gjenstående korn fra åkrene etter innhøsting.'
  },
  'etterlest': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Etterlesning var en bibelsk praksis hvor fattige mennesker kunne samle opp gjenstående korn fra åkrene etter innhøsting.'
  },
  'løsningsmann-norsk': {
    emoji: '💍',
    type: 'key',
    explanation: 'En løsningsmann (go\'el på hebraisk) var en nær slektning som hadde rett og ansvar for å hjelpe familiemedlemmer i nød.'
  },
  'velsignet-norsk': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Velsignelser var viktige i hebraisk kultur. De var bønner om Guds gunst og kunne gis av hvem som helst.'
  },
  'velsign': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Velsignelser var viktige i hebraisk kultur. De var bønner om Guds gunst og kunne gis av hvem som helst.'
  },
  'enker-norsk': {
    emoji: '🕊️',
    type: 'concept',
    explanation: 'Enker var blant de mest sårbare i det gamle samfunnet. De hadde ingen inntektskilde og var avhengige av familie eller samfunnets veldedighet.'
  },
  'bygg': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Bygg var det første kornet som ble høstet om våren. Bygginnhøstingen markerte begynnelsen på det landbruksårlige året og var avgjørende for overlevelse.'
  },
  'hvete': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Hvete ble høstet etter bygg, om sommeren. Det var hovedkornavlingen og ga den primære matkilden for året.'
  },
  'åker': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Åkrer var inntektskilden i landbrukssamfunn. Boas\' åker blir stedet for Ruts forsyning og deres relasjonsutvikling.'
  },
  'treskeplass': {
    emoji: '🏚️',
    type: 'concept',
    explanation: 'Treskeplassen var hvor korn ble skilt fra agn. Det var også et sted for samfunnssamling og feiring.'
  },
  'port': {
    emoji: '🚪',
    type: 'concept',
    explanation: 'Byporten var hvor juridiske transaksjoner og samfunnsbeslutninger ble tatt. Boas utfører de juridiske prosedyrene for Ruts løsning ved porten.'
  },
  'eldste': {
    emoji: '👴',
    type: 'concept',
    explanation: 'Eldste var respekterte samfunnsledere som vitnet og validerte viktige transaksjoner.'
  },
  'sandal': {
    emoji: '👞',
    type: 'concept',
    explanation: 'Fjerningen av sandaler var en symbolsk handling i juridiske transaksjoner, spesielt i eiendomsoverføringer.'
  },
  'frø': {
    emoji: '🌱',
    type: 'concept',
    explanation: 'Frø representerer fremtidige generasjoner og fortsettelsen av familiens linje. Ruts ekteskap med Boas sikrer fortsettelsen av Elimeleks linje.'
  },
  'hus': {
    emoji: '🏠',
    type: 'concept',
    explanation: 'Hus representerer familie, sikkerhet og tilhørighet. Rut finner et hjem med Boas, og No\'omi finner gjenopprettelse gjennom Ruts ekteskap.'
  },
  'brød': {
    emoji: '🍞',
    type: 'concept',
    explanation: 'Brød representerer næring og forsyning. Ruts etterlesning gir brød til No\'omi og seg selv.'
  },
  'vann': {
    emoji: '💧',
    type: 'concept',
    explanation: 'Vann representerer liv og forfriskning. Boas gir vann til Rut mens hun etterleser, og viser sin omsorg og beskyttelse.'
  },
  'hvile': {
    emoji: '😴',
    type: 'concept',
    explanation: 'Hvile representerer sikkerhet og fred. Boas tilbyr Rut hvile og beskyttelse i sin åker.'
  },
  'slektning': {
    emoji: '👨‍👩‍👧‍👦',
    type: 'concept',
    explanation: 'En slektning var en nær familiemedlem med spesifikke ansvar overfor familiemedlemmer.'
  },
  'arv': {
    emoji: '🏛️',
    type: 'concept',
    explanation: 'Arv var avgjørende i hebraisk kultur, og sikret at familieeiendom forble innenfor stammen.'
  },
  'stamme': {
    emoji: '🏛️',
    type: 'concept',
    explanation: 'Stammetilhørighet bestemte sosial status, arverettigheter og samfunnstilhørighet.'
  },
  'juda': {
    emoji: '🦁',
    type: 'concept',
    explanation: 'Juda var en av Israels tolv stammer, og Betlehem var i Judas territorium. Ruts historie foregår i Juda.'
  },
  'moabitt': {
    emoji: '🏔️',
    type: 'concept',
    explanation: 'Moab var en nabonasjon ofte i konflikt med Israel. Ruts moabittiske bakgrunn gjør historien hennes bemerkelsesverdig.'
  },

  'isai': {
    emoji: '👨',
    type: 'concept',
    explanation: 'Isai var Obeds sønn og Davids far. Hans omtale kobler Ruts historie til Davids kongelige linje.'
  },
  
  // Additional Norwegian concepts to match English ones
  'sult': {
    emoji: '🌾',
    type: 'concept',
    explanation: 'Sult var vanlig i oldtiden og ble ofte sett på som Guds dom eller prøvelse. I Rut driver sulten No\'omis familie til Moab, som setter opp historien.'
  },
  'velsignet': {
    emoji: '🙏',
    type: 'concept',
    explanation: 'Velsignelser var viktige i hebraisk kultur. De var bønner om Guds gunst og kunne gis av hvem som helst. Boas velsigner Rut, og kvinnene velsigner No\'omi når Obed blir født.'
  },
  'betlehem': {
    emoji: '🏠',
    type: 'concept',
    explanation: 'Betlehem betyr "Brødets hus" på hebraisk. Det var der Gud hadde gitt forsyning til sitt folk, men Elimelek valgte å stole på Moabs ressurser i stedet for Guds trofasthet. Dette reflekterer Israels åndelige tilstand under dommernes periode.'
  },

  // NEW: Name Meanings and Biblical Insights
  'naomi': {
    emoji: '👩',
    type: 'key',
    explanation: 'Naomi means "pleasant" or "sweet" in Hebrew. When she returns to Bethlehem, she asks to be called "Mara" (bitter) because she has lost her husband and sons. This name change reflects her emotional state and the transformation from pleasant to bitter, showing how suffering can change our perspective on life and God.',
    bibleReferences: ['Ruth 1:20-21', 'Ruth 1:2', 'Job 3:20', 'Lamentations 1:4']
  },
  'mara': {
    emoji: '😔',
    type: 'key',
    explanation: 'Mara means "bitter" in Hebrew. Naomi asks to be called this name when she returns to Bethlehem, saying "the Almighty has made my life very bitter." This reflects her grief and how she perceives God\'s hand in her suffering, though the story ultimately shows God\'s redemptive plan.',
    bibleReferences: ['Ruth 1:20-21', 'Exodus 15:23', 'Job 3:20', 'Lamentations 1:4']
  },
  'ruth': {
    emoji: '🌹',
    type: 'key',
    explanation: 'Ruth means "friend" or "companion" in Hebrew, though some scholars suggest it may mean "satisfied" or "beauty." Her name perfectly reflects her character - she is a loyal friend to Naomi and becomes a companion who satisfies Naomi\'s need for family. Ruth\'s loyalty and kindness embody the Hebrew concept of hesed.',
    bibleReferences: ['Ruth 1:4', 'Ruth 1:16-17', 'Proverbs 18:24', 'John 15:13']
  },
  'boaz': {
    emoji: '🏗️',
    type: 'key',
    explanation: 'Boaz means "in him is strength" or "swiftness" in Hebrew. His name reflects his character as a strong, capable man who acts quickly and decisively to help Ruth and Naomi. He embodies the ideal of a kinsman-redeemer and demonstrates strength through kindness and obedience to God\'s law.',
    bibleReferences: ['Ruth 2:1', 'Ruth 3:11', 'Ruth 4:1-10', 'Proverbs 31:23']
  },
  'orpa': {
    emoji: '👋',
    type: 'concept',
    explanation: 'Orpah means "back of the neck" or "stubborn" in Hebrew. She represents the choice to return to her own people and gods, contrasting with Ruth\'s choice to stay with Naomi and follow the God of Israel. Her decision, while understandable, shows the difference between cultural loyalty and spiritual commitment.',
    bibleReferences: ['Ruth 1:4', 'Ruth 1:14-15', 'Joshua 24:15', 'Matthew 10:37']
  },
  'mahlon': {
    emoji: '💔',
    type: 'concept',
    explanation: 'Mahlon means "sickly" or "weak" in Hebrew. His name suggests he may have been ill or frail, which could explain his early death. His marriage to Ruth produced no children, leading to the need for a kinsman-redeemer to continue his family line.',
    bibleReferences: ['Ruth 1:2', 'Ruth 1:5', 'Ruth 4:10', 'Deuteronomy 25:5-10']
  },
  'kilion': {
    emoji: '💔',
    type: 'concept',
    explanation: 'Kilion means "consumption" or "wasting away" in Hebrew. Like his brother Mahlon, his name suggests frailty or illness. Both brothers died young in Moab, leaving their wives childless and creating the need for redemption.',
    bibleReferences: ['Ruth 1:2', 'Ruth 1:5', 'Ruth 4:10', 'Deuteronomy 25:5-10']
  },
  'obed': {
    emoji: '👶',
    type: 'key',
    explanation: 'Obed means "servant" or "worshipper" in Hebrew. His birth represents the restoration of Naomi\'s family line and God\'s faithfulness. Obed becomes the grandfather of King David, showing how God works through ordinary people to accomplish His purposes and fulfill His promises.',
    bibleReferences: ['Ruth 4:17', 'Ruth 4:21-22', '1 Samuel 16:1', 'Matthew 1:5']
  },

  // NEW: Central Biblical Words with Deep Meaning
  'hesed': {
    emoji: '💝',
    type: 'key',
    explanation: 'Hesed (חסד) is one of the most important words in the Hebrew Bible, meaning "loving-kindness," "mercy," "loyalty," and "covenant faithfulness." It appears multiple times in Ruth and describes the kind of love that keeps promises even when it\'s costly. This word appears 248 times in the Old Testament and is central to understanding God\'s character and the book\'s theme.',
    bibleReferences: ['Ruth 1:8', 'Ruth 2:20', 'Ruth 3:10', 'Psalm 136', 'Hosea 6:6', 'Micah 6:8', 'Lamentations 3:22']
  },
  'your people': {
    emoji: '👥',
    type: 'key',
    explanation: 'When Ruth says "Your people shall be my people," she is making a profound commitment to Naomi\'s nation, culture, and God. This goes beyond personal loyalty to a complete identification with Israel and Yahweh. This phrase shows the depth of Ruth\'s conversion and commitment.',
    bibleReferences: ['Ruth 1:16', 'Ruth 2:11', 'Exodus 19:5-6', 'Deuteronomy 7:6', '1 Peter 2:9-10']
  },
  'hen': {
    emoji: '✨',
    type: 'key',
    explanation: 'Hen (חן) means "favor" or "grace" in Hebrew. When Boaz shows favor to Ruth, it reflects God\'s grace working through human actions. This word appears in Ruth 2:2 and 2:10, showing how God\'s favor is extended to the vulnerable and how human kindness reflects divine grace.',
    bibleReferences: ['Ruth 2:2', 'Ruth 2:10', 'Proverbs 3:34', 'Proverbs 11:16', 'Luke 1:30', 'Acts 7:46']
  },
  'redeemer': {
    emoji: '💍',
    type: 'key',
    explanation: 'The Hebrew word "go\'el" (גואל) means "kinsman-redeemer" and appears 13 times in Ruth. A redeemer was a close relative who had the right and responsibility to help family members in need. This concept points to Jesus as our ultimate redeemer who redeems us from sin and death.',
    bibleReferences: ['Ruth 2:20', 'Ruth 3:9', 'Ruth 4:1-10', 'Leviticus 25:25-55', 'Isaiah 59:20', 'Galatians 4:4-5']
  },
  'bless': {
    emoji: '🙏',
    type: 'key',
    explanation: 'Blessing (ברך - barak) in Hebrew culture was more than words - it was believed to have real power to bring about what was spoken. Blessings were prayers for God\'s favor and could be given by anyone. The blessings in Ruth show how God works through human words and actions.',
    bibleReferences: ['Ruth 2:4', 'Ruth 2:19', 'Ruth 3:10', 'Ruth 4:11-12', 'Genesis 12:2-3', 'Numbers 6:24-26']
  },
  'foreigner': {
    emoji: '🌍',
    type: 'key',
    explanation: 'Ruth was a Moabite, a foreigner in Israel. The Hebrew word "nokri" (נכרי) emphasizes her outsider status. Yet God accepts her through her faith and loyalty, showing that God\'s covenant extends to all who trust in Him, regardless of their ethnic background.',
    bibleReferences: ['Ruth 1:4', 'Ruth 2:6', 'Deuteronomy 24:19-22', 'Isaiah 56:6-7', 'Matthew 28:19-20', 'Acts 10:34-35']
  },
  'loyalty': {
    emoji: '🤝',
    type: 'key',
    explanation: 'Loyalty in Ruth is expressed through the Hebrew word "dabaq" (דבק) meaning "to cling" or "stick to." Ruth\'s loyalty to Naomi goes beyond cultural expectations and shows the kind of commitment that reflects God\'s faithful love. This loyalty becomes the foundation for God\'s redemptive plan.',
    bibleReferences: ['Ruth 1:14', 'Ruth 1:16-17', 'Genesis 2:24', 'Deuteronomy 10:20', 'Psalm 63:8', 'Matthew 19:5']
  },
  'house of israel': {
    emoji: '🏛️',
    type: 'key',
    explanation: 'The "house of Israel" refers to the covenant community of God\'s chosen people. When Ruth joins this house, she becomes part of God\'s redemptive story. This phrase emphasizes the corporate nature of God\'s covenant and how individuals become part of the larger story of salvation.',
    bibleReferences: ['Ruth 4:11', 'Exodus 19:3-6', '2 Samuel 7:11-16', 'Jeremiah 31:31-34', 'Romans 11:17-24']
  },

  // NEW: Proverbs 31 Connection
  'eshet chayil': {
    emoji: '👑',
    type: 'key',
    explanation: 'When Boaz calls Ruth an "eshet chayil" (woman of valor), he uses the same expression found in Proverbs 31:10. This phrase describes a woman of strength, character, and virtue. Ruth embodies these qualities through her loyalty, hard work, and faithfulness, making her a living example of the Proverbs 31 woman.',
    bibleReferences: ['Ruth 3:11', 'Proverbs 31:10-31', 'Proverbs 12:4', 'Proverbs 31:25', '1 Corinthians 16:13']
  },

  // NEW: Cultural and Biblical Practices
  'uncovering feet': {
    emoji: '🦶',
    type: 'key',
    explanation: 'When Ruth uncovers Boaz\'s feet, this is a symbolic gesture of submission and a request for marriage. In ancient Near Eastern culture, sleeping at someone\'s feet was a sign of loyalty and a way to request protection. This act shows Ruth\'s trust in Boaz and her understanding of the cultural customs.',
    bibleReferences: ['Ruth 3:4', 'Ruth 3:7-8', '1 Samuel 24:3', 'Ezekiel 16:8', 'Deuteronomy 23:10-11']
  },
  'spread corner of covering': {
    emoji: '🫂',
    type: 'key',
    explanation: 'Ruth\'s request for Boaz to "spread the corner of your covering over me" is a marriage proposal using the imagery of a man\'s garment covering his wife. This symbolizes protection, provision, and marital commitment. The Hebrew word "kanaph" (כנף) means "wing" or "corner" and represents shelter and security.',
    bibleReferences: ['Ruth 3:9', 'Ezekiel 16:8', 'Deuteronomy 22:30', 'Malachi 2:16', '1 Corinthians 7:2']
  },

  // NEW: Historical Context
  'days when judges ruled': {
    emoji: '⚖️',
    type: 'key',
    explanation: 'The opening phrase "In the days when the judges ruled" sets the historical context of moral and spiritual chaos. Judges 21:25 says "everyone did what was right in their own eyes." Against this backdrop of lawlessness, Ruth\'s story shows God working to provide a good king (David) and restore order through faithfulness and obedience to His law.',
    bibleReferences: ['Ruth 1:1', 'Judges 21:25', 'Judges 2:11-19', '1 Samuel 8:1-9', '2 Samuel 7:8-16', 'Psalm 78:70-72']
  },

  // NEW: Mosaic Laws Explained
  'law of gleaning': {
    emoji: '🌾',
    type: 'key',
    explanation: 'The Law of Gleaning required landowners to leave the corners of their fields and any dropped grain for the poor and foreigners. This law demonstrated God\'s care for the vulnerable and taught generosity. Ruth\'s ability to glean shows how God provides through His laws and how obedience to these laws creates opportunities for blessing.',
    bibleReferences: ['Leviticus 19:9-10', 'Deuteronomy 24:19-21', 'Ruth 2:2-3', 'Isaiah 17:5-6', 'Jeremiah 49:9']
  },
  'kinsman-redeemer law': {
    emoji: '💍',
    type: 'key',
    explanation: 'The Kinsman-Redeemer Law (go\'el) gave close relatives the right and responsibility to help family members in need. This included buying back family land, marrying widows to continue the family line, and avenging wrongs. This law shows God\'s concern for family continuity and land stewardship.',
    bibleReferences: ['Leviticus 25:25-28', 'Ruth 2:20', 'Ruth 3:9', 'Ruth 4:1-10', 'Isaiah 59:20', 'Galatians 4:4-5']
  },
  'levirate marriage': {
    emoji: '👰',
    type: 'key',
    explanation: 'Levirate Marriage required a man to marry his deceased brother\'s widow to provide her with children and continue his brother\'s family line. This law ensured family continuity and provided for widows. While not directly applied in Ruth, it provides the cultural background for understanding the need for a kinsman-redeemer.',
    bibleReferences: ['Deuteronomy 25:5-10', 'Ruth 4:5-6', 'Genesis 38:8', 'Matthew 22:24', 'Mark 12:19']
  },
  'redemption of land': {
    emoji: '🏠',
    type: 'key',
    explanation: 'The Law of Redemption of Land allowed family members to buy back land that had been sold due to poverty. This law ensured that family property remained within the tribe and prevented permanent loss of inheritance. Boaz\'s redemption of Elimelek\'s land shows obedience to this law and God\'s concern for family inheritance.',
    bibleReferences: ['Leviticus 25:23-28', 'Ruth 4:3-6', 'Numbers 36:1-13', 'Jeremiah 32:6-15', 'Ezekiel 46:16-18']
  },
  'blessings and oaths': {
    emoji: '📜',
    type: 'key',
    explanation: 'The Law of Blessings and Oaths in God\'s Name required that all blessings and oaths be made in God\'s name, acknowledging His authority and presence. This law shows the sacred nature of words and the importance of invoking God\'s name in serious matters. The blessings in Ruth follow this pattern.',
    bibleReferences: ['Deuteronomy 6:13', 'Deuteronomy 10:20', 'Ruth 2:4', 'Ruth 3:13', 'Exodus 20:7', 'Matthew 5:33-37']
  },
  'care for widows and foreigners': {
    emoji: '🕊️',
    type: 'key',
    explanation: 'The Law of Care for Widows and Foreigners required special protection and provision for society\'s most vulnerable members. God commanded His people to remember their own experience as foreigners in Egypt and to show compassion. Ruth\'s story demonstrates how these laws work in practice.',
    bibleReferences: ['Deuteronomy 10:18', 'Deuteronomy 24:17-18', 'Ruth 2:2-3', 'Exodus 22:22-24', 'Psalm 146:9', 'James 1:27']
  },

  // Norwegian translations for new concepts
  'naomi-norsk': {
    emoji: '👩',
    type: 'key',
    explanation: 'Naomi betyr "behagelig" eller "søt" på hebraisk. Når hun vender tilbake til Betlehem, ber hun om å bli kalt "Mara" (bitter) fordi hun har mistet mann og sønner. Dette navneskiftet reflekterer hennes følelsesmessige tilstand og transformasjonen fra behagelig til bitter.'
  },
  'mara-norsk': {
    emoji: '😔',
    type: 'key',
    explanation: 'Mara betyr "bitter" på hebraisk. Naomi ber om å bli kalt dette navnet når hun vender tilbake til Betlehem, og sier at "den Allmektige har gjort mitt liv svært bittert." Dette reflekterer hennes sorg og hvordan hun oppfatter Guds hånd i lidelsen.'
  },
  'ruth-norsk': {
    emoji: '🌹',
    type: 'key',
    explanation: 'Rut betyr "venn" eller "følgesvenn" på hebraisk. Hennes navn reflekterer perfekt hennes karakter - hun er en trofast venn til No\'omi og blir en følgesvenn som tilfredsstiller No\'omis behov for familie.'
  },
  'boaz-norsk': {
    emoji: '🏗️',
    type: 'key',
    explanation: 'Boas betyr "i ham er styrke" eller "hurtighet" på hebraisk. Hans navn reflekterer hans karakter som en sterk, dyktig mann som handler raskt og besluttsomt for å hjelpe Rut og No\'omi.'
  },
  'obed-norsk': {
    emoji: '👶',
    type: 'key',
    explanation: 'Obed betyr "tjener" eller "tilbeder" på hebraisk. Hans fødsel representerer gjenopprettelsen av No\'omis familielinje og Guds trofasthet. Obed blir bestefar til kong David.'
  },
  'hesed-norsk': {
    emoji: '💝',
    type: 'key',
    explanation: 'Hesed (חסד) er et av de viktigste ordene i den hebraiske Bibelen, og betyr "kjærlighetens godhet," "barmhjertighet," "trofasthet" og "pakts trofasthet." Det vises flere ganger i Rut og beskriver den typen kjærlighet som holder løfter selv når det er kostbart.'
  },
  'ditt folk-norsk': {
    emoji: '👥',
    type: 'key',
    explanation: 'Når Rut sier "Ditt folk skal være mitt folk," gjør hun en dyp forpliktelse til No\'omis nasjon, kultur og Gud. Dette går utover personlig trofasthet til en fullstendig identifikasjon med Israel og Jahve.'
  },
  'velsignelse-norsk': {
    emoji: '🙏',
    type: 'key',
    explanation: 'Velsignelse (ברך - barak) i hebraisk kultur var mer enn ord - det ble trodd å ha reell kraft til å bringe frem det som ble sagt. Velsignelser var bønner om Guds gunst og kunne gis av hvem som helst.'
  },
  'fremmed-norsk': {
    emoji: '🌍',
    type: 'key',
    explanation: 'Rut var en moabitt, en fremmed i Israel. Men Gud aksepterer henne gjennom hennes tro og trofasthet, og viser at Guds pakt utvides til alle som stoler på Ham, uansett deres etniske bakgrunn.'
  },
  'trofasthet-norsk': {
    emoji: '🤝',
    type: 'key',
    explanation: 'Trofasthet i Rut uttrykkes gjennom det hebraiske ordet "dabaq" (דבק) som betyr "å klamre seg til" eller "holde seg til." Ruts trofasthet til No\'omi går utover kulturelle forventninger.'
  },
  'dommernes tid-norsk': {
    emoji: '⚖️',
    type: 'key',
    explanation: 'Åpningsfrasen "I de dager da dommerne dømte" setter den historiske konteksten av moralsk og åndelig kaos. Dommerne 21:25 sier at "alle gjorde det som var rett i sine egne øyne."'
  },
  'etterlesningsloven-norsk': {
    emoji: '🌾',
    type: 'key',
    explanation: 'Etterlesningsloven krevde at grunneiere lot hjørnene av sine åkrer og eventuelt falt korn stå tilbake for de fattige og fremmede. Denne loven demonstrerte Guds omsorg for de sårbare.'
  },
  'løsningsmannsloven-norsk': {
    emoji: '💍',
    type: 'key',
    explanation: 'Løsningsmannsloven (go\'el) ga nære slektninger rett og ansvar for å hjelpe familiemedlemmer i nød. Dette inkluderte å kjøpe tilbake familiens land og gifte seg med enker.'
  },
  'leverat ekteskap-norsk': {
    emoji: '👰',
    type: 'key',
    explanation: 'Levirat ekteskap krevde at en mann giftet seg med sin avdøde brors enke for å gi henne barn og fortsette brorens familielinje. Denne loven sikret familiens kontinuitet og ga omsorg for enker.'
  },
  'landløsningsloven-norsk': {
    emoji: '🏠',
    type: 'key',
    explanation: 'Landløsningsloven tillot familiemedlemmer å kjøpe tilbake land som var blitt solgt på grunn av fattigdom. Denne loven sikret at familieeiendom forble innenfor stammen.'
  },
  'velsignelser og eder-norsk': {
    emoji: '📜',
    type: 'key',
    explanation: 'Loven om velsignelser og eder i Guds navn krevde at alle velsignelser og eder ble gjort i Guds navn, og anerkjente Hans autoritet og nærvær. Dette viser ordens hellige natur.'
  },
  'omsorg for enker og fremmede-norsk': {
    emoji: '🕊️',
    type: 'key',
    explanation: 'Loven om omsorg for enker og fremmede krevde spesiell beskyttelse og forsyning for samfunnets mest sårbare medlemmer. Gud befalte sitt folk å huske deres egen opplevelse som fremmede i Egypt.'
  }
}

// Function to make person names and locations clickable (without concepts)
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

// Timeline Lifespans View Component for Popup
const TimelineLifespansView = () => {
  const startYear = -1920
  const endYear = -820
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [zoom, setZoom] = useState(1)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  // Interface for lifespan lines
  interface LifespanLine {
    person: Person
    startYear: number
    endYear: number
    yPosition: number
    startPercent: number
    endPercent: number
  }
  
  // Get gender-based colors for lifespan lines
  const getGenderColors = (gender: 'male' | 'female') => {
    if (gender === 'male') {
      return 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
    } else {
      return 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    }
  }
  
  // Create lifespan lines with proper positioning
  const createLifespanLines = (): LifespanLine[] => {
    const people = genealogyData.filter(person => {
      // Include people from Ruth's time period
      const inTimePeriod = person.birthYear >= startYear && person.deathYear <= endYear
      
              // Include specific people mentioned in Ruth's story
        const ruthCharacters = ['Ruth', 'Boaz', 'Naomi', 'Elimelech', 'Mahlon', 'Chilion', 'Kilion', 'Orpah', 'Obed', 'Jesse', 'David']
      const isRuthCharacter = ruthCharacters.some(name => 
        person.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(person.name.toLowerCase())
      )
      
              // Include people from the genealogy at the end of Ruth (Perez to David)
        const ruthGenealogy = ['Perez', 'Hezron', 'Ram', 'Amminadab', 'Nahshon', 'Salmon', 'Boaz', 'Obed', 'Jesse', 'David', 'Kilion']
      const isInRuthGenealogy = ruthGenealogy.some(name => 
        person.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(person.name.toLowerCase())
      )
      
      return inTimePeriod || isRuthCharacter || isInRuthGenealogy
    })
    
    const lines: LifespanLine[] = []
    const totalYears = endYear - startYear
    
    people.forEach((person) => {
      const startPercent = ((person.birthYear - startYear) / totalYears) * 100
      const endPercent = ((person.deathYear - startYear) / totalYears) * 100
      
      // Find a y-position that doesn't overlap with existing lines
      let yPosition = 0
      let foundPosition = false
      
      while (!foundPosition) {
        const overlapping = lines.some(line => 
          line.yPosition === yPosition &&
          !(endPercent < line.startPercent || startPercent > line.endPercent)
        )
        
        if (!overlapping) {
          foundPosition = true
        } else {
          yPosition += 45 // Height of each line + spacing
        }
      }
      
      lines.push({
        person,
        startYear: person.birthYear,
        endYear: person.deathYear,
        yPosition,
        startPercent,
        endPercent
      })
    })
    
    return lines.sort((a, b) => a.startYear - b.startYear)
  }
  
  const lifespanLines = createLifespanLines()
  
  // Format year for display
  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BC`
    return `${year} AD`
  }
  
  // Get position percentage for a given year
  const getLifespanPosition = (year: number) => {
    return ((year - startYear) / (endYear - startYear)) * 100
  }
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <Link
            href="/timeline/lifespans?book=ruth"
            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
          >
            📊 Full Timeline →
          </Link>
          <h5 className="font-semibold text-gray-900">Book of Ruth Timeline</h5>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
        <p className="text-xs text-gray-600 text-center">Lifespans: {formatYear(startYear)} - {formatYear(endYear)}</p>
        
        {/* Zoom Controls */}
        <div className="flex items-center justify-center space-x-2 mt-2">
          <button
            onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
            className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
          >
            🔍-
          </button>
          <span className="text-xs text-gray-600">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom(Math.min(3, zoom + 0.2))}
            className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
          >
            🔍+
          </button>
        </div>
      </div>
      
      {/* Timeline Header */}
      <div className="mb-3">
        <div className="flex items-center space-x-4 text-xs text-gray-600 mb-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded mr-1"></div>
            <span>Male</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded mr-1"></div>
            <span>Female</span>
          </div>
          <span className="ml-auto">{lifespanLines.length} people</span>
        </div>
      </div>
      
      {/* Timeline Container */}
      <div className="relative overflow-x-auto" style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
        {/* Year markers */}
        <div className="flex mb-2 border-b border-gray-300 pb-1" style={{ minWidth: `${(endYear - startYear) * 2}px` }}>
          {Array.from({ length: Math.ceil((endYear - startYear) / 50) + 1 }, (_, i) => {
            const year = startYear + i * 50
            return (
              <div key={year} className="flex-shrink-0 text-xs text-gray-500 font-medium" style={{ width: '100px' }}>
                {formatYear(year)}
              </div>
            )
          })}
        </div>

        {/* Lifespan lines */}
        <div className="relative" style={{ height: `${Math.max(lifespanLines.length * 45, 180)}px`, minWidth: `${(endYear - startYear) * 2}px` }}>
          {lifespanLines.map((line) => {
            const startPercent = getLifespanPosition(line.startYear)
            const endPercent = getLifespanPosition(line.endYear)
            const width = endPercent - startPercent
            
            return (
              <div
                key={line.person.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${startPercent}%`,
                  top: `${line.yPosition}px`,
                  width: `${width}%`,
                  height: '32px'
                }}
                onClick={() => setSelectedPerson(line.person)}
              >
                {/* Lifespan line */}
                <Link href={`/genealogy/${line.person.id}`} className="block w-full h-full">
                  <div className={`w-full h-full bg-gradient-to-r ${getGenderColors(line.person.gender)} rounded-md flex items-center justify-center text-white font-medium text-xs group-hover:shadow-lg transition-all duration-200`}>
                    {line.person.name}
                  </div>
                </Link>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {line.person.name}: {formatYear(line.startYear)} - {formatYear(line.endYear)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Empty state */}
      {lifespanLines.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">No Lifespans Found</h3>
          <p className="text-gray-600 text-sm">
            No people found in this time period.
          </p>
        </div>
      )}
      
      {/* Selected Person Details */}
      {selectedPerson && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-gray-900">{selectedPerson.name}</h3>
            <button
              onClick={() => setSelectedPerson(null)}
              className="text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Birth:</span>
                  <span className="font-medium">{formatYear(selectedPerson.birthYear)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Death:</span>
                  <span className="font-medium">{formatYear(selectedPerson.deathYear)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lifespan:</span>
                  <span className="font-medium">{selectedPerson.deathYear - selectedPerson.birthYear} years</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Father:</span>
                  <span className="font-medium text-xs">
                    {selectedPerson.fatherId ? (
                      <Link href={`/genealogy/${selectedPerson.fatherId}`} className="text-blue-600 hover:text-blue-800">
                        {genealogyData.find(p => p.id === selectedPerson.fatherId)?.name ?? 'Unknown'}
                      </Link>
                    ) : 'Unknown'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mother:</span>
                  <span className="font-medium text-xs">
                    {selectedPerson.motherId ? (
                      <Link href={`/genealogy/${selectedPerson.motherId}`} className="text-blue-600 hover:text-blue-800">
                        {genealogyData.find(p => p.id === selectedPerson.motherId)?.name ?? 'Unknown'}
                      </Link>
                    ) : 'Unknown'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">About</h4>
            <p className="text-gray-700 text-xs leading-relaxed">{selectedPerson.generalInfo}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Function to detect concepts in a verse and return relevant emojis
function getVerseEmojis(text: string, onConceptClick: (concept: { emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] }, event: React.MouseEvent) => void) {
  const foundConcepts: Array<{ emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] }> = []
  
  // Check for concepts in the text
  Object.entries(RUTH_CONCEPTS).forEach(([keyword, concept]) => {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      // Avoid duplicates
      if (!foundConcepts.some(c => c.emoji === concept.emoji)) {
        foundConcepts.push(concept)
      }
    }
  })
  
  return foundConcepts.map((concept, index) => (
    <button
      key={index}
      onClick={(event) => onConceptClick(concept, event)}
      className="ml-1 sm:ml-2 text-lg hover:scale-125 transition-all duration-200 cursor-pointer p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm hover:shadow-md"
      title={`${concept.type === 'key' ? 'Key to Understanding' : 'Concept'}`}
    >
      {concept.emoji}
    </button>
  ))
}

export default function RuthPage() {
  const { language } = useLanguage()
  const [conceptTooltip, setConceptTooltip] = useState<{ emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] } | null>(null)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [showChapterVerse, setShowChapterVerse] = useState(true)
  const [showBottomPopup, setShowBottomPopup] = useState(false)
  const [bottomPopupType, setBottomPopupType] = useState<'map' | 'timeline' | null>(null)
  const ruthText = getRuthText(language)

  const handleConceptClick = (concept: { emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] }) => {
    setConceptTooltip(concept)
    setIsTooltipOpen(true)
  }

  const closeTooltip = () => {
    setIsTooltipOpen(false)
    setConceptTooltip(null)
  }

  const closeBottomPopup = () => {
    setShowBottomPopup(false)
    setBottomPopupType(null)
  }

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



  // Get text with inline concept emojis for continuous reading mode
  const getContinuousTextWithInlineEmojis = () => {
    const allElements: React.ReactNode[] = []
    
    for (let chapter = 1; chapter <= 4; chapter++) {
      const chapterData = ruthText[`chapter${chapter}` as keyof typeof ruthText] as { verses: Record<string, string> }
      if (chapterData?.verses) {
        Object.entries(chapterData.verses).forEach(([verseNum, verseText]) => {
          // Process the verse text for clickable links
          const processedText = makeTextClickable(verseText)
          
          // Find concepts in this specific verse
          const verseConcepts: Array<{ emoji: string; explanation: string; type: 'concept' | 'key'; bibleReferences?: string[] }> = []
          Object.entries(RUTH_CONCEPTS).forEach(([keyword, concept]) => {
            try {
              const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
              const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi')
              if (regex.test(verseText)) {
                // Only add if not already added for this verse
                if (!verseConcepts.find(c => c.emoji === concept.emoji)) {
                  verseConcepts.push(concept)
                }
              }
            } catch (error) {
              console.warn(`Failed to process keyword "${keyword}":`, error)
            }
          })
          
          // Add the verse text
          allElements.push(
            <span key={`${chapter}-${verseNum}-text`} className="mr-1">
              {processedText}
            </span>
          )
          
          // Add concept emojis inline after the verse if any found
          if (verseConcepts.length > 0) {
            allElements.push(
              <span key={`${chapter}-${verseNum}-concepts`} className="inline-flex items-center space-x-1 mx-0.5 sm:mx-1">
                {verseConcepts.map((concept, index) => (
                  <button
                    key={`${chapter}-${verseNum}-${index}`}
                    onClick={() => handleConceptClick(concept)}
                    className="text-base hover:scale-110 transition-all duration-200 cursor-pointer p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                    title={`${concept.type === 'key' ? 'Key to Understanding' : 'Concept'}`}
                  >
                    {concept.emoji}
                  </button>
                ))}
              </span>
            )
          }
          
          // Add a space between verses
          allElements.push(<span key={`${chapter}-${verseNum}-space`}> </span>)
        })
      }
    }
    
    return allElements
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4 min-w-0">
              <Link href="/bible" className="text-gray-600 hover:text-gray-900 text-sm font-medium whitespace-nowrap">
                ← Bible
              </Link>
              <h1 className="text-lg font-bold text-gray-900 truncate">
                {ruthText.title}
              </h1>
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
              <LanguageSwitcher />
              <TextToSpeech 
                chapters={getChapterTexts()}
                startChapter={1}
                language={language}
                onChapterChange={(_chapter: number) => {
                  // No chapter change needed in continuous mode
                }}
                currentChapter={1}
                isPaused={isTooltipOpen || showBottomPopup}
                onPauseChange={(_paused) => {
                  // This will be called when audio is paused/resumed
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 sm:py-4">
        {/* Navigation */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold mr-6"
          >
            Home
          </Link>
          <Link 
            href="/genealogy"
            className="text-blue-600 hover:text-blue-800 font-semibold mr-6"
          >
            Genealogy
          </Link>
        </div>

        {/* Reading Mode Toggle */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-medium text-gray-700">
                {language === 'no' ? 'Lesevisning' : 'Reading Mode'}
              </span>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className={`text-sm ${!showChapterVerse ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {language === 'no' ? 'Løpende tekst' : 'Continuous Text'}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showChapterVerse}
                    onChange={(e) => setShowChapterVerse(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <span className={`text-sm ${showChapterVerse ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {language === 'no' ? 'Kapittel & vers' : 'Chapters & Verses'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-0 sm:px-0">
          {showChapterVerse ? (
            /* Chapter & Verse Mode */
            <div className="space-y-6 sm:space-y-12">
              {chapters.map((chapterNum) => {
                const chapterData = ruthText[`chapter${chapterNum}` as keyof typeof ruthText] as { title: string; verses: Record<string, string> }
                
                return (
                  <div key={chapterNum} className="bg-white rounded-3xl shadow-2xl p-2 sm:p-8">
                    {/* Chapter Title */}
                    <div className="text-center mb-4 sm:mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {chapterData?.title ?? ''}
                      </h2>
                      <div className="text-base sm:text-lg text-gray-500">
                        {language === 'no' ? `Kapittel ${chapterNum}` : `Chapter ${chapterNum}`}
                      </div>
                    </div>

                    {/* Verses */}
                    <div className="space-y-3 sm:space-y-6">
                      {Object.entries(chapterData?.verses ?? {}).map(([verseNum, text]) => (
                        <div key={`${chapterNum}-${verseNum}`} className="pl-1 sm:pl-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-0.5 sm:space-x-4 flex-1">
                              <span className="text-lg sm:text-2xl font-bold text-blue-600 min-w-[1.5rem] sm:min-w-[3rem]">
                                {verseNum}
                              </span>
                              <div className="flex-1">
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                  {makeTextClickable(text)}
                                </p>
                              </div>
                            </div>
                                                         {/* Concept Emojis on the Right */}
                             <div className="flex flex-col sm:flex-row items-start sm:items-center ml-1 sm:ml-2 gap-1 sm:gap-0">
                               {getVerseEmojis(text, handleConceptClick)}
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Continuous Reading Mode */
            <div className="bg-white rounded-3xl shadow-2xl p-2 sm:p-8">
              <div className="text-center mb-4 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {ruthText.title}
                </h2>
                <div className="text-base sm:text-lg text-gray-500">
                  {language === 'no' ? 'Hele boken' : 'Complete Book'}
                </div>
              </div>
              
              <div className="relative">
                <div className="text-lg text-gray-800 leading-relaxed">
                  <p className="text-justify leading-8">
                    {getContinuousTextWithInlineEmojis()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

                 {/* Bottom Navigation */}
         <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
           <div className="flex justify-around p-4">
             <button
               onClick={() => {
                 setBottomPopupType('map')
                 setShowBottomPopup(true)
               }}
               className="flex flex-col items-center space-y-1 text-blue-600 hover:text-blue-800 transition-colors"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
               </svg>
               <span className="text-xs font-medium">
                 {language === 'no' ? 'Kart' : 'Map'}
               </span>
             </button>
             <button
               onClick={() => {
                 setBottomPopupType('timeline')
                 setShowBottomPopup(true)
               }}
               className="flex flex-col items-center space-y-1 text-green-600 hover:text-green-800 transition-colors"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <span className="text-xs font-medium">
                 {language === 'no' ? 'Tidslinje' : 'Timeline'}
               </span>
             </button>
           </div>
         </div>

         {/* Bottom Popup */}
         {showBottomPopup && (
           <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
             <div className="bg-white w-full max-h-[80vh] rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out">
               <div className="flex items-center justify-between p-6 border-b border-gray-200">
                 <h3 className="text-xl font-bold text-gray-900">
                   {bottomPopupType === 'map' 
                     ? (language === 'no' ? 'Bibelske Steder' : 'Biblical Locations')
                     : (language === 'no' ? 'Tidslinje' : 'Timeline')
                   }
                 </h3>
                 <button
                   onClick={closeBottomPopup}
                   className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </div>
               <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                 {bottomPopupType === 'map' ? (
                   <div className="space-y-4">
                     <div className="text-center mb-4">
                       <h4 className="text-lg font-semibold text-gray-900 mb-2">
                         {language === 'no' ? 'Bibelske Steder' : 'Biblical Locations'}
                       </h4>
                       <p className="text-gray-600 text-sm">
                         {language === 'no' 
                           ? 'Se alle bibelske steder på et interaktivt kart'
                           : 'View all biblical locations on an interactive map'
                         }
                       </p>
                     </div>
                     
                     {/* Map Image */}
                     <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                       <img
                         src="/biblical-map.jpg"
                         alt="Biblical Map - Area of primary Israelite settlement"
                         className="w-full h-full object-contain"
                         onError={(e) => {
                           // Fallback if image doesn't exist
                           const target = e.target as HTMLImageElement
                           target.style.display = 'none'
                           target.nextElementSibling?.classList.remove('hidden')
                         }}
                       />
                       {/* Fallback content if image doesn't exist */}
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center hidden">
                         <div className="text-center">
                           <div className="text-4xl mb-2">🗺️</div>
                           <h3 className="text-lg font-semibold text-gray-900 mb-1">Biblical Map</h3>
                           <p className="text-gray-600 text-sm">
                             {language === 'no' 
                               ? 'Legg til kartbilde i public/biblical-map.jpg'
                               : 'Add map image to public/biblical-map.jpg'
                             }
                           </p>
                         </div>
                       </div>
                     </div>
                     
                     {/* Map Legend */}
                     <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                       <div className="grid grid-cols-2 gap-2">
                         <div>🏔️ Mountains</div>
                         <div>🏘️ Cities</div>
                         <div>🏜️ Deserts</div>
                         <div>🌊 Seas</div>
                         <div>🏛️ Temples</div>
                         <div>🌾 Fields</div>
                       </div>
                     </div>
                     
                     <div className="text-center pt-2">
                       <Link
                         href="/map"
                         className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                         onClick={closeBottomPopup}
                       >
                         <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                         </svg>
                         {language === 'no' ? 'Åpne Full Kart' : 'Open Full Map'}
                       </Link>
                     </div>
                   </div>
                 ) : (
                   <div className="space-y-4">
                     <div className="text-center mb-4">
                       <h4 className="text-lg font-semibold text-gray-900 mb-2">
                         {language === 'no' ? 'Tidslinje - Livslinjer' : 'Timeline - Lifespans'}
                       </h4>
                       <p className="text-gray-600 text-sm">
                         {language === 'no' 
                           ? 'Se livslinjer for bibelske personer fra Ruts bok'
                           : 'View lifespans of biblical people from the Book of Ruth'
                         }
                       </p>
                     </div>
                     
                     {/* Timeline Component */}
                     <TimelineLifespansView />
                     
                     <div className="text-center pt-2">
                       <Link
                         href="/timeline/lifespans?book=ruth"
                         className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm"
                         onClick={() => setShowBottomPopup(false)}
                       >
                         <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         {language === 'no' ? 'Åpne Full Tidslinje' : 'Open Full Timeline'}
                       </Link>
                     </div>
                   </div>
                 )}
               </div>
             </div>
           </div>
         )}

         {/* Footer Info */}
         <div className="text-center mt-8 mb-20 text-gray-600">
           <p className="text-sm">
             {language === 'no' 
               ? 'Tekst fra Bibelen 2011-utgaven' 
               : 'Text from the NIV Bible'
             }
           </p>
         </div>

        {/* Concept Tooltip */}
        <ConceptTooltip 
          concept={conceptTooltip}
          isOpen={isTooltipOpen}
          onClose={closeTooltip}
        />
      </div>
    </div>
  )
}
