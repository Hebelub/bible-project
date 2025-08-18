'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BibleVerse {
  id: string
  chapter: number
  verse: number
  text: string
}

// Mapping of person names to their genealogy IDs
const RUTH_PEOPLE: Record<string, number> = {
  'Elimelech': 73,
  'Naomi': 74,
  'Mahlon': 75,
  'Kilion': 76,
  'Orpah': 77,
  'Ruth': 78,
  'Boaz': 79,
  'Obed': 80,
  'Jesse': 81,
  'David': 82,
  'Perez': 35,
  'Hezron': 36,
  'Ram': 37,
  'Amminadab': 38,
  'Nahshon': 39,
  'Salmon': 40,
  'Rahab': 41
}

// Function to make person names clickable
function makePeopleClickable(text: string) {
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
    
    return part
  })
}

// Book of Ruth in NIV translation
const RUTH_CHAPTERS: Record<number, BibleVerse[]> = {
  1: [
    { id: '1-1', chapter: 1, verse: 1, text: 'In the days when the judges ruled in Israel, a severe famine came upon the land. So a man from Bethlehem in Judah left his home and went to live in the country of Moab, taking his wife and two sons with him.' },
    { id: '1-2', chapter: 1, verse: 2, text: 'The man\'s name was Elimelech, and his wife was Naomi. Their two sons were Mahlon and Kilion. They were Ephrathites from Bethlehem in the land of Judah. And when they reached Moab, they settled there.' },
    { id: '1-3', chapter: 1, verse: 3, text: 'Then Elimelech died, and Naomi was left with her two sons.' },
    { id: '1-4', chapter: 1, verse: 4, text: 'The two sons married Moabite women. One married a woman named Orpah, and the other a woman named Ruth. But about ten years later,' },
    { id: '1-5', chapter: 1, verse: 5, text: 'both Mahlon and Kilion died. This left Naomi alone, without her two sons or her husband.' },
    { id: '1-6', chapter: 1, verse: 6, text: 'Then Naomi heard in Moab that the Lord had blessed his people in Judah by giving them good crops again. So Naomi and her daughters-in-law got ready to leave Moab to return to her homeland.' },
    { id: '1-7', chapter: 1, verse: 7, text: 'With her two daughters-in-law she set out from the place where she had been living, and they took the road that would lead them back to Judah.' },
    { id: '1-8', chapter: 1, verse: 8, text: 'But on the way, Naomi said to her two daughters-in-law, "Go back to your mothers\' homes. And may the Lord reward you for your kindness to your husbands and to me.' },
    { id: '1-9', chapter: 1, verse: 9, text: 'May the Lord bless you with the security of another marriage." Then she kissed them good-bye, and they all broke down and wept.' },
    { id: '1-10', chapter: 1, verse: 10, text: '"No," they said. "We want to go with you to your people."' },
    { id: '1-11', chapter: 1, verse: 11, text: 'But Naomi replied, "Why should you go on with me? Can I still give birth to other sons who could grow up to be your husbands?' },
    { id: '1-12', chapter: 1, verse: 12, text: 'No, my daughters, return to your parents\' homes, for I am too old to marry again. And even if it were possible, and I were to get married tonight and bear sons, then what?' },
    { id: '1-13', chapter: 1, verse: 13, text: 'Would you wait for them to grow up and refuse to marry someone else? No, of course not, my daughters! Things are far more bitter for me than for you, because the Lord himself has raised his fist against me."' },
    { id: '1-14', chapter: 1, verse: 14, text: 'And again they wept together, and Orpah kissed her mother-in-law good-bye. But Ruth clung tightly to Naomi.' },
    { id: '1-15', chapter: 1, verse: 15, text: '"Look," Naomi said to her, "your sister-in-law has gone back to her people and to her gods. You should do the same."' },
    { id: '1-16', chapter: 1, verse: 16, text: 'But Ruth replied, "Don\'t ask me to leave you and turn back. Wherever you go, I will go; wherever you live, I will live. Your people will be my people, and your God will be my God.' },
    { id: '1-17', chapter: 1, verse: 17, text: 'Wherever you die, I will die, and there I will be buried. May the Lord punish me severely if I allow anything but death to separate us!"' },
    { id: '1-18', chapter: 1, verse: 18, text: 'When Naomi saw that Ruth was determined to go with her, she said nothing more.' },
    { id: '1-19', chapter: 1, verse: 19, text: 'So the two of them continued on their journey. When they came to Bethlehem, the entire town was excited by their arrival. "Is it really Naomi?" the women asked.' },
    { id: '1-20', chapter: 1, verse: 20, text: '"Don\'t call me Naomi," she responded. "Instead, call me Mara, for the Almighty has made life very bitter for me.' },
    { id: '1-21', chapter: 1, verse: 21, text: 'I went away full, but the Lord has brought me home empty. Why call me Naomi when the Lord has caused me to suffer and the Almighty has sent such tragedy upon me?"' },
    { id: '1-22', chapter: 1, verse: 22, text: 'So Naomi returned from Moab, accompanied by her daughter-in-law Ruth, the young Moabite woman. They arrived in Bethlehem in late spring, at the beginning of the barley harvest.' }
  ],
  2: [
    { id: '2-1', chapter: 2, verse: 1, text: 'Now there was a wealthy and influential man in Bethlehem named Boaz, who was a relative of Naomi\'s husband, Elimelech.' },
    { id: '2-2', chapter: 2, verse: 2, text: 'One day Ruth the Moabite said to Naomi, "Let me go out into the harvest fields to pick up the stalks of grain left behind by anyone who is kind enough to let me do it."' },
    { id: '2-3', chapter: 2, verse: 3, text: 'Naomi replied, "All right, my daughter, go ahead." So Ruth went out to gather grain behind the harvesters. And as it happened, she found herself working in a field that belonged to Boaz, the relative of her father-in-law, Elimelech.' },
    { id: '2-4', chapter: 2, verse: 4, text: 'While she was there, Boaz arrived from Bethlehem and greeted the harvesters. "The Lord be with you!" he said.' },
    { id: '2-5', chapter: 2, verse: 5, text: '"The Lord bless you!" the harvesters replied.' },
    { id: '2-6', chapter: 2, verse: 6, text: 'Then Boaz asked his foreman, "Who is that young woman over there? Who does she belong to?"' },
    { id: '2-7', chapter: 2, verse: 7, text: 'And the foreman replied, "She is the young woman from Moab who came back with Naomi. She asked me this morning if she could gather grain behind the harvesters. She has been hard at work ever since, except for a few minutes\' rest in the shelter."' },
    { id: '2-8', chapter: 2, verse: 8, text: 'Boaz went over and said to Ruth, "Listen, my daughter. Stay right here with us when you gather grain; don\'t go to any other fields. Stay right behind the young women working in my field.' },
    { id: '2-9', chapter: 2, verse: 9, text: 'See which part of the field they are harvesting, and then follow them. I have warned the young men not to treat you roughly. And when you are thirsty, help yourself to the water they have drawn from the well."' },
    { id: '2-10', chapter: 2, verse: 10, text: 'Ruth fell at his feet and thanked him warmly. "What have I done to deserve such kindness?" she asked. "I am only a foreigner."' },
    { id: '2-11', chapter: 2, verse: 11, text: '"Yes, I know," Boaz replied. "But I also know about everything you have done for your mother-in-law since the death of your husband. I have heard how you left your father and mother and your own land to live here among complete strangers.' },
    { id: '2-12', chapter: 2, verse: 12, text: 'May the Lord, the God of Israel, under whose wings you have come to take refuge, reward you fully for what you have done."' },
    { id: '2-13', chapter: 2, verse: 13, text: '"I hope I continue to please you, sir," she replied. "You have comforted me by speaking so kindly to me, even though I am not one of your workers."' },
    { id: '2-14', chapter: 2, verse: 14, text: 'At mealtime Boaz called to her, "Come over here, and help yourself to some food. You can dip your bread in the sour wine." So she sat with his harvesters, and Boaz gave her some roasted grain to eat. She ate all she wanted and still had some left over.' },
    { id: '2-15', chapter: 2, verse: 15, text: 'When Ruth went back to work again, Boaz ordered his young men, "Let her gather grain right among the sheaves without stopping her.' },
    { id: '2-16', chapter: 2, verse: 16, text: 'And pull out some heads of barley from the bundles and drop them on purpose for her. Let her pick them up, and don\'t give her a hard time!"' },
    { id: '2-17', chapter: 2, verse: 17, text: 'So Ruth gathered barley there all day, and when she beat out the grain that evening, it filled an entire basket. She carried it back into town and showed it to her mother-in-law. Ruth also gave her the roasted grain that was left over from her meal.' },
    { id: '2-18', chapter: 2, verse: 18, text: '"Where did you gather all this grain today?" Naomi asked. "Where did you work? May the Lord bless the one who helped you!"' },
    { id: '2-19', chapter: 2, verse: 19, text: 'So Ruth told her mother-in-law about the man in whose field she had worked. She said, "The man I worked with today is named Boaz."' },
    { id: '2-20', chapter: 2, verse: 20, text: '"May the Lord bless him!" Naomi told her daughter-in-law. "He is showing his kindness to us as well as to your dead husband. That man is one of our closest relatives, one of our family redeemers."' },
    { id: '2-21', chapter: 2, verse: 21, text: 'Then Ruth said, "What\'s more, Boaz even told me to come back and stay with his harvesters until the entire harvest is completed."' },
    { id: '2-22', chapter: 2, verse: 22, text: '"Good!" Naomi exclaimed. "Do as he said, my daughter. Stay with his young women right through the whole harvest. You might be harassed in other fields, but you\'ll be safe with him."' },
    { id: '2-23', chapter: 2, verse: 23, text: 'So Ruth worked alongside the women in Boaz\'s fields and gathered grain with them until the end of the barley harvest. Then she continued working with them through the wheat harvest in early summer. And all the while she lived with her mother-in-law.' }
  ],
  3: [
    { id: '3-1', chapter: 3, verse: 1, text: 'One day Naomi said to Ruth, "My daughter, it\'s time that I found a permanent home for you, so that you will be provided for.' },
    { id: '3-2', chapter: 3, verse: 2, text: 'Boaz is a close relative of ours, and he\'s been very kind by letting you gather grain with his young women. Tonight he will be winnowing barley at the threshing floor.' },
    { id: '3-3', chapter: 3, verse: 3, text: 'Now do as I tell you—take a bath and put on perfume and dress in your nicest clothes. Then go to the threshing floor, but don\'t let Boaz see you until he has finished eating and drinking.' },
    { id: '3-4', chapter: 3, verse: 4, text: 'Be sure to notice where he lies down; then go and uncover his feet and lie down there. He will tell you what to do."' },
    { id: '3-5', chapter: 3, verse: 5, text: '"I will do everything you say," Ruth replied.' },
    { id: '3-6', chapter: 3, verse: 6, text: 'So she went down to the threshing floor that night and followed the instructions of her mother-in-law.' },
    { id: '3-7', chapter: 3, verse: 7, text: 'After Boaz had finished eating and drinking and was in good spirits, he lay down at the far end of the pile of grain and went to sleep. Then Ruth came quietly, uncovered his feet, and lay down.' },
    { id: '3-8', chapter: 3, verse: 8, text: 'Around midnight Boaz suddenly woke up and turned over. He was surprised to find a woman lying at his feet!' },
    { id: '3-9', chapter: 3, verse: 9, text: '"Who are you?" he asked.' },
    { id: '3-10', chapter: 3, verse: 10, text: '"I am your servant Ruth," she replied. "Spread the corner of your covering over me, for you are my family redeemer."' },
    { id: '3-11', chapter: 3, verse: 11, text: '"The Lord bless you, my daughter!" Boaz exclaimed. "You are showing even more family loyalty now than you did before, for you have not gone after a younger man, whether rich or poor.' },
    { id: '3-12', chapter: 3, verse: 12, text: 'Now don\'t worry about a thing, my daughter. I will do what is necessary, for everyone in town knows you are a virtuous woman.' },
    { id: '3-13', chapter: 3, verse: 13, text: 'But while it\'s true that I am one of your family redeemers, there is another man who is more closely related to you than I am.' },
    { id: '3-14', chapter: 3, verse: 14, text: 'Stay here tonight, and in the morning I will talk to him. If he is willing to redeem you, very well. Let him marry you. But if he is not willing, then as surely as the Lord lives, I will redeem you myself! Now lie down here until morning."' },
    { id: '3-15', chapter: 3, verse: 15, text: 'So Ruth lay at Boaz\'s feet until the morning, but she got up before it was light enough for people to recognize each other. For Boaz had said, "No one must know that a woman was here at the threshing floor."' },
    { id: '3-16', chapter: 3, verse: 16, text: 'Then Boaz said to her, "Bring your cloak and spread it out." He measured six scoops of barley into the cloak and placed it on her back. Then he returned to the town.' },
    { id: '3-17', chapter: 3, verse: 17, text: 'When Ruth went back to her mother-in-law, Naomi asked, "What happened, my daughter?"' },
    { id: '3-18', chapter: 3, verse: 18, text: 'Ruth told Naomi everything Boaz had done for her, and she added, "He gave me these six scoops of barley and said, \'Don\'t go back to your mother-in-law empty-handed.\'"' },
    { id: '3-19', chapter: 3, verse: 19, text: 'Then Naomi said to her, "Just be patient, my daughter, until we hear what happens. The man won\'t rest until he has settled things today."' }
  ],
  4: [
    { id: '4-1', chapter: 4, verse: 1, text: 'Boaz went to the town gate and took a seat there. Just then the family redeemer he had mentioned came by, so Boaz called out to him, "Come over here and sit down, friend. I want to talk to you." So they sat down together.' },
    { id: '4-2', chapter: 4, verse: 2, text: 'Then Boaz called ten leaders from the town and asked them to sit as witnesses.' },
    { id: '4-3', chapter: 4, verse: 3, text: 'And Boaz said to the family redeemer, "You know Naomi, who came back from Moab. She is selling the land that belonged to our relative Elimelech.' },
    { id: '4-4', chapter: 4, verse: 4, text: 'I thought I should speak to you about it so that you can redeem it if you wish. If you want the land, then buy it here in the presence of these witnesses. But if you don\'t want it, let me know right away, because I am next in line to redeem it after you."' },
    { id: '4-5', chapter: 4, verse: 5, text: 'The man replied, "All right, I\'ll redeem it."' },
    { id: '4-6', chapter: 4, verse: 6, text: 'Then Boaz told him, "Of course, your purchase of the land from Naomi also requires that you marry Ruth, the Moabite widow. That way she can have children who will carry on her husband\'s name and keep the land in the family."' },
    { id: '4-7', chapter: 4, verse: 7, text: '"Then I can\'t redeem it," the family redeemer replied, "because this might endanger my own estate. You redeem the land; I cannot do it."' },
    { id: '4-8', chapter: 4, verse: 8, text: 'Now in those days it was the custom in Israel for anyone transferring a right of purchase to remove his sandal and hand it to the other party. This publicly validated the transaction.' },
    { id: '4-9', chapter: 4, verse: 9, text: 'So the other family redeemer drew off his sandal as he said to Boaz, "You buy the land."' },
    { id: '4-10', chapter: 4, verse: 10, text: 'Then Boaz said to the elders and to the crowd standing around, "You are witnesses that today I have bought from Naomi all the property of Elimelech, Kilion, and Mahlon.' },
    { id: '4-11', chapter: 4, verse: 11, text: 'And with the land I have acquired Ruth, the Moabite widow of Mahlon, to be my wife. This way she can have a son to carry on the family name of her dead husband and to inherit the family property here in his hometown. You are all witnesses today."' },
    { id: '4-12', chapter: 4, verse: 12, text: 'Then the elders and all the people standing in the gate replied, "We are witnesses! May the Lord make this woman who is coming into your home like Rachel and Leah, from whom all the nation of Israel descended! May you prosper in Ephrathah and be famous in Bethlehem.' },
    { id: '4-13', chapter: 4, verse: 13, text: 'And may the Lord give you descendants by this young woman who will be like those of our ancestor Perez, the son of Tamar and Judah."' },
    { id: '4-14', chapter: 4, verse: 14, text: 'So Boaz took Ruth into his home, and she became his wife. When he slept with her, the Lord enabled her to become pregnant, and she gave birth to a son.' },
    { id: '4-15', chapter: 4, verse: 15, text: 'Then the women of the town said to Naomi, "Praise the Lord, who has now provided a redeemer for your family! May this child be famous in Israel.' },
    { id: '4-16', chapter: 4, verse: 16, text: 'May he restore your youth and care for you in your old age. For he is the son of your daughter-in-law who loves you and has been better to you than seven sons!"' },
    { id: '4-17', chapter: 4, verse: 17, text: 'Naomi took the baby and cuddled him to her breast. And she cared for him as if he were her own.' },
    { id: '4-18', chapter: 4, verse: 18, text: 'The neighbor women said, "Now at last Naomi has a son again!" And they named him Obed. He became the father of Jesse and the grandfather of David.' },
    { id: '4-19', chapter: 4, verse: 19, text: 'This is the genealogical record of their ancestor Perez:' },
    { id: '4-20', chapter: 4, verse: 20, text: 'Perez was the father of Hezron. Hezron was the father of Ram. Ram was the father of Amminadab.' },
    { id: '4-21', chapter: 4, verse: 21, text: 'Amminadab was the father of Nahshon. Nahshon was the father of Salmon. Salmon was the father of Boaz.' },
    { id: '4-22', chapter: 4, verse: 22, text: 'Boaz was the father of Obed. Obed was the father of Jesse. Jesse was the father of David.' }
  ]
}

export default function BiblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bible Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the Bible with interactive features, multiple translations, and rich context.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mr-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <Link 
            href="/genealogy"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Genealogy
          </Link>
        </div>

        {/* Book Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/bible/ruth" className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow hover:scale-105">
            <div className="text-5xl mb-6">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Book of Ruth</h3>
            <p className="text-gray-600 mb-6">
              A beautiful story of loyalty, love, and redemption. Follow Ruth's journey from Moab to Bethlehem.
            </p>
            <div className="text-blue-600 font-semibold">Read Now →</div>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-5xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Books</h3>
            <p className="text-gray-600 mb-6">
              Additional books and translations will be available soon.
            </p>
            <div className="text-gray-400 font-semibold">Coming Soon →</div>
          </div>
        </div>
      </div>
    </div>
  )
}
