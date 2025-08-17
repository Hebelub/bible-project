import Link from 'next/link'

// Comprehensive sample data for Jacob and his family with multiple generations
const sampleData = [
  // Abraham's Generation
  {
    id: 100,
    name: "Abraham",
    fatherId: null,
    motherId: null,
    birthYear: -2166,
    deathYear: -1991,
    birthDate: "Around 2166 BC",
    deathDate: "Around 1991 BC",
    generalInfo: "Abraham, originally Abram, was called by God to leave his homeland and become the father of many nations. He is considered the patriarch of the Israelites and the father of faith. God made a covenant with him promising descendants as numerous as the stars.",
    biblicalReferences: "Genesis 11:26-25:10"
  },
  {
    id: 101,
    name: "Sarah",
    fatherId: null,
    motherId: null,
    birthYear: -2156,
    deathYear: -2029,
    birthDate: "Around 2156 BC",
    deathDate: "Around 2029 BC",
    generalInfo: "Sarah was Abraham's wife and the mother of Isaac. She was originally barren but miraculously gave birth to Isaac in her old age. She is considered the mother of the Jewish people.",
    biblicalReferences: "Genesis 11:29-23:20"
  },

  // Isaac's Generation
  {
    id: 2,
    name: "Isaac",
    fatherId: 100,
    motherId: 101,
    birthYear: -2066,
    deathYear: -1886,
    birthDate: "Around 2066 BC",
    deathDate: "Around 1886 BC",
    generalInfo: "Isaac was the son of Abraham and Sarah, born when they were very old. He was nearly sacrificed by his father Abraham but was spared by God. Isaac married Rebekah and had twin sons, Jacob and Esau.",
    biblicalReferences: "Genesis 21:1-35:29"
  },
  {
    id: 3,
    name: "Rebekah",
    fatherId: 102,
    motherId: null,
    birthYear: -2050,
    deathYear: -1900,
    birthDate: "Around 2050 BC",
    deathDate: "Around 1900 BC",
    generalInfo: "Rebekah was the wife of Isaac and the mother of Jacob and Esau. She was chosen by Abraham's servant to be Isaac's wife. Rebekah helped Jacob receive Isaac's blessing instead of Esau.",
    biblicalReferences: "Genesis 24:15-67, 25:20-28, 27:1-46"
  },

  // Jacob's Generation
  {
    id: 1,
    name: "Jacob (Israel)",
    fatherId: 2,
    motherId: 3,
    birthYear: -2000,
    deathYear: -1855,
    birthDate: "Around 2000 BC",
    deathDate: "Around 1855 BC",
    generalInfo: "Jacob, later named Israel, was the son of Isaac and Rebekah, and the grandson of Abraham. He was the father of the twelve tribes of Israel. Jacob's story includes his birthright purchase from Esau, his time working for Laban, and his wrestling with God at Peniel.",
    biblicalReferences: "Genesis 25:19-50:13"
  },
  {
    id: 4,
    name: "Esau",
    fatherId: 2,
    motherId: 3,
    birthYear: -2000,
    deathYear: -1855,
    birthDate: "Around 2000 BC",
    deathDate: "Around 1855 BC",
    generalInfo: "Esau was Jacob's twin brother, born first. He sold his birthright to Jacob for a bowl of stew. Esau became the father of the Edomites and eventually reconciled with Jacob.",
    biblicalReferences: "Genesis 25:19-36:43"
  },

  // Jacob's Wives
  {
    id: 7,
    name: "Leah",
    fatherId: 8,
    motherId: null,
    birthYear: -1980,
    deathYear: -1850,
    birthDate: "Around 1980 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Leah was the first wife of Jacob and the mother of six of his sons: Reuben, Simeon, Levi, Judah, Issachar, and Zebulun. She also had a daughter named Dinah.",
    biblicalReferences: "Genesis 29:16-35, 30:17-21, 31:4-16, 33:1-7, 49:31"
  },
  {
    id: 9,
    name: "Rachel",
    fatherId: 8,
    motherId: null,
    birthYear: -1975,
    deathYear: -1855,
    birthDate: "Around 1975 BC",
    deathDate: "Around 1855 BC",
    generalInfo: "Rachel was Jacob's beloved wife and the mother of Joseph and Benjamin. She died giving birth to Benjamin. Rachel was the younger sister of Leah.",
    biblicalReferences: "Genesis 29:6-30, 30:1-8, 30:22-24, 31:4-16, 33:1-7, 35:16-20"
  },
  {
    id: 16,
    name: "Bilhah",
    fatherId: null,
    motherId: null,
    birthYear: -1980,
    deathYear: -1850,
    birthDate: "Around 1980 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Bilhah was Rachel's maidservant given to Jacob as a wife. She bore Dan and Naphtali to Jacob. She was originally given to Rachel by Laban.",
    biblicalReferences: "Genesis 30:1-8, 35:22, 37:2"
  },
  {
    id: 17,
    name: "Zilpah",
    fatherId: null,
    motherId: null,
    birthYear: -1980,
    deathYear: -1850,
    birthDate: "Around 1980 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Zilpah was Leah's maidservant given to Jacob as a wife. She bore Gad and Asher to Jacob. She was originally given to Leah by Laban.",
    biblicalReferences: "Genesis 30:9-13, 35:26, 37:2"
  },

  // All 12 Sons of Israel (Jacob)
  {
    id: 10,
    name: "Reuben",
    fatherId: 1,
    motherId: 7,
    birthYear: -1950,
    deathYear: -1850,
    birthDate: "Around 1950 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Reuben was Jacob's firstborn son, born to Leah. He was the founder of the tribe of Reuben. Reuben lost his birthright due to his sin with Bilhah.",
    biblicalReferences: "Genesis 29:32, 30:14, 35:22, 37:21-22, 37:29-30, 42:22, 42:37, 49:3-4"
  },
  {
    id: 11,
    name: "Simeon",
    fatherId: 1,
    motherId: 7,
    birthYear: -1948,
    deathYear: -1850,
    birthDate: "Around 1948 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Simeon was Jacob's second son, born to Leah. He was the founder of the tribe of Simeon. Simeon and Levi were punished for their violence against Shechem.",
    biblicalReferences: "Genesis 29:33, 34:25-31, 35:23, 42:24, 43:23, 49:5-7"
  },
  {
    id: 12,
    name: "Levi",
    fatherId: 1,
    motherId: 7,
    birthYear: -1946,
    deathYear: -1850,
    birthDate: "Around 1946 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Levi was Jacob's third son, born to Leah. He was the founder of the tribe of Levi, which became the priestly tribe. Levi and Simeon were punished for their violence.",
    biblicalReferences: "Genesis 29:34, 34:25-31, 35:23, 42:24, 43:23, 49:5-7"
  },
  {
    id: 13,
    name: "Judah",
    fatherId: 1,
    motherId: 7,
    birthYear: -1944,
    deathYear: -1850,
    birthDate: "Around 1944 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Judah was Jacob's fourth son, born to Leah. He was the founder of the tribe of Judah, from which the Messiah would come. Judah played a key role in Joseph's story.",
    biblicalReferences: "Genesis 29:35, 37:26-27, 38:1-30, 43:3-10, 44:14-34, 49:8-12"
  },
  {
    id: 18,
    name: "Dan",
    fatherId: 1,
    motherId: 16,
    birthYear: -1940,
    deathYear: -1850,
    birthDate: "Around 1940 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Dan was Jacob's fifth son, born to Bilhah, Rachel's maidservant. He was the founder of the tribe of Dan. Dan means 'judge' and he was named by Rachel.",
    biblicalReferences: "Genesis 30:1-8, 35:25, 49:16-18"
  },
  {
    id: 19,
    name: "Naphtali",
    fatherId: 1,
    motherId: 16,
    birthYear: -1938,
    deathYear: -1850,
    birthDate: "Around 1938 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Naphtali was Jacob's sixth son, born to Bilhah, Rachel's maidservant. He was the founder of the tribe of Naphtali. His name means 'my wrestling'.",
    biblicalReferences: "Genesis 30:1-8, 35:25, 49:21"
  },
  {
    id: 20,
    name: "Gad",
    fatherId: 1,
    motherId: 17,
    birthYear: -1936,
    deathYear: -1850,
    birthDate: "Around 1936 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Gad was Jacob's seventh son, born to Zilpah, Leah's maidservant. He was the founder of the tribe of Gad. His name means 'fortune' or 'luck'.",
    biblicalReferences: "Genesis 30:9-13, 35:26, 49:19"
  },
  {
    id: 21,
    name: "Asher",
    fatherId: 1,
    motherId: 17,
    birthYear: -1934,
    deathYear: -1850,
    birthDate: "Around 1934 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Asher was Jacob's eighth son, born to Zilpah, Leah's maidservant. He was the founder of the tribe of Asher. His name means 'happy' or 'blessed'.",
    biblicalReferences: "Genesis 30:9-13, 35:26, 49:20"
  },
  {
    id: 22,
    name: "Issachar",
    fatherId: 1,
    motherId: 7,
    birthYear: -1932,
    deathYear: -1850,
    birthDate: "Around 1932 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Issachar was Jacob's ninth son, born to Leah. He was the founder of the tribe of Issachar. His name means 'there is recompense'.",
    biblicalReferences: "Genesis 30:17-18, 35:23, 49:14-15"
  },
  {
    id: 23,
    name: "Zebulun",
    fatherId: 1,
    motherId: 7,
    birthYear: -1930,
    deathYear: -1850,
    birthDate: "Around 1930 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Zebulun was Jacob's tenth son, born to Leah. He was the founder of the tribe of Zebulun. His name means 'dwelling' or 'habitation'.",
    biblicalReferences: "Genesis 30:19-20, 35:23, 49:13"
  },
  {
    id: 14,
    name: "Joseph",
    fatherId: 1,
    motherId: 9,
    birthYear: -1930,
    deathYear: -1800,
    birthDate: "Around 1930 BC",
    deathDate: "Around 1800 BC",
    generalInfo: "Joseph was Jacob's eleventh son, born to Rachel. He was sold into slavery by his brothers but rose to become the second most powerful man in Egypt. Joseph saved his family from famine.",
    biblicalReferences: "Genesis 30:22-24, 37:1-50:26"
  },
  {
    id: 15,
    name: "Benjamin",
    fatherId: 1,
    motherId: 9,
    birthYear: -1855,
    deathYear: -1800,
    birthDate: "Around 1855 BC",
    deathDate: "Around 1800 BC",
    generalInfo: "Benjamin was Jacob's youngest son, born to Rachel. He was the founder of the tribe of Benjamin. Rachel died giving birth to him.",
    biblicalReferences: "Genesis 35:16-20, 35:24, 42:4, 42:36, 43:15-16, 43:29-34, 44:12, 45:12, 46:19, 49:27"
  },

  // Joseph's Sons (Ephraim and Manasseh)
  {
    id: 24,
    name: "Manasseh",
    fatherId: 14,
    motherId: 25,
    birthYear: -1880,
    deathYear: -1780,
    birthDate: "Around 1880 BC",
    deathDate: "Around 1780 BC",
    generalInfo: "Manasseh was Joseph's firstborn son, born in Egypt. He was adopted by Jacob and given a blessing. He became the founder of the tribe of Manasseh.",
    biblicalReferences: "Genesis 41:50-52, 48:1-22, 50:23"
  },
  {
    id: 26,
    name: "Ephraim",
    fatherId: 14,
    motherId: 25,
    birthYear: -1878,
    deathYear: -1780,
    birthDate: "Around 1878 BC",
    deathDate: "Around 1780 BC",
    generalInfo: "Ephraim was Joseph's second son, born in Egypt. Jacob blessed him above his older brother Manasseh. He became the founder of the tribe of Ephraim.",
    biblicalReferences: "Genesis 41:50-52, 48:1-22, 50:23"
  },

  // Judah's Sons
  {
    id: 27,
    name: "Er",
    fatherId: 13,
    motherId: 28,
    birthYear: -1920,
    deathYear: -1880,
    birthDate: "Around 1920 BC",
    deathDate: "Around 1880 BC",
    generalInfo: "Er was Judah's firstborn son. He was wicked in the Lord's sight and the Lord put him to death. He was married to Tamar.",
    biblicalReferences: "Genesis 38:3-7, 46:12"
  },
  {
    id: 29,
    name: "Onan",
    fatherId: 13,
    motherId: 28,
    birthYear: -1918,
    deathYear: -1880,
    birthDate: "Around 1918 BC",
    deathDate: "Around 1880 BC",
    generalInfo: "Onan was Judah's second son. He was also wicked and the Lord put him to death. He refused to fulfill his duty to his brother's widow.",
    biblicalReferences: "Genesis 38:8-10, 46:12"
  },
  {
    id: 30,
    name: "Shelah",
    fatherId: 13,
    motherId: 28,
    birthYear: -1916,
    deathYear: -1850,
    birthDate: "Around 1916 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Shelah was Judah's third son. Judah was afraid to give him to Tamar as a husband after his brothers died.",
    biblicalReferences: "Genesis 38:11-14, 46:12"
  },
  {
    id: 31,
    name: "Perez",
    fatherId: 13,
    motherId: 28,
    birthYear: -1900,
    deathYear: -1830,
    birthDate: "Around 1900 BC",
    deathDate: "Around 1830 BC",
    generalInfo: "Perez was Judah's son through Tamar. He was born as a result of Judah's relationship with his daughter-in-law. Perez means 'breach' or 'breakthrough'.",
    biblicalReferences: "Genesis 38:27-30, 46:12, Ruth 4:18-22"
  },
  {
    id: 32,
    name: "Zerah",
    fatherId: 13,
    motherId: 28,
    birthYear: -1900,
    deathYear: -1830,
    birthDate: "Around 1900 BC",
    deathDate: "Around 1830 BC",
    generalInfo: "Zerah was Perez's twin brother, born to Judah through Tamar. He was the second twin to be born.",
    biblicalReferences: "Genesis 38:27-30, 46:12"
  },

  // Additional Generations
  {
    id: 33,
    name: "Hezron",
    fatherId: 31,
    motherId: null,
    birthYear: -1870,
    deathYear: -1800,
    birthDate: "Around 1870 BC",
    deathDate: "Around 1800 BC",
    generalInfo: "Hezron was the son of Perez and a descendant of Judah. He was an ancestor of King David and Jesus Christ.",
    biblicalReferences: "Genesis 46:12, Ruth 4:18-22, 1 Chronicles 2:5"
  },
  {
    id: 34,
    name: "Ram",
    fatherId: 33,
    motherId: null,
    birthYear: -1840,
    deathYear: -1770,
    birthDate: "Around 1840 BC",
    deathDate: "Around 1770 BC",
    generalInfo: "Ram was the son of Hezron and a descendant of Judah. He was an ancestor of King David and Jesus Christ.",
    biblicalReferences: "Ruth 4:19, 1 Chronicles 2:9"
  },

  // Laban (Jacob's Father-in-law)
  {
    id: 8,
    name: "Laban",
    fatherId: 103,
    motherId: null,
    birthYear: -2000,
    deathYear: -1880,
    birthDate: "Around 2000 BC",
    deathDate: "Around 1880 BC",
    generalInfo: "Laban was Rebekah's brother and the father of Leah and Rachel. He tricked Jacob into marrying Leah first, then Rachel. Jacob worked for him for 20 years.",
    biblicalReferences: "Genesis 24:29-60, 29:1-31:55"
  },

  // Dinah (Jacob's Daughter)
  {
    id: 35,
    name: "Dinah",
    fatherId: 1,
    motherId: 7,
    birthYear: -1930,
    deathYear: -1850,
    birthDate: "Around 1930 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Dinah was Jacob's only daughter mentioned in the Bible, born to Leah. She was violated by Shechem, leading to revenge by her brothers Simeon and Levi.",
    biblicalReferences: "Genesis 30:21, 34:1-31, 46:15"
  }
];

// Helper function to find children
const findChildren = (personId: number) => {
  return sampleData.filter(person => person.fatherId === personId || person.motherId === personId);
};

// Helper function to find spouses
const findSpouses = (personId: number) => {
  const children = findChildren(personId);
  const spouseIds = new Set<number>();
  
  children.forEach(child => {
    if (child.fatherId === personId && child.motherId) {
      spouseIds.add(child.motherId);
    } else if (child.motherId === personId && child.fatherId) {
      spouseIds.add(child.fatherId);
    }
  });
  
  return sampleData.filter(person => spouseIds.has(person.id));
};

// Helper function to find parents
const findParents = (personId: number) => {
  const person = sampleData.find(p => p.id === personId);
  if (!person) return { father: null, mother: null };
  
  const father = person.fatherId ? sampleData.find(p => p.id === person.fatherId) : null;
  const mother = person.motherId ? sampleData.find(p => p.id === person.motherId) : null;
  
  return { father, mother };
};

// Helper function to find siblings
const findSiblings = (personId: number) => {
  const person = sampleData.find(p => p.id === personId);
  if (!person) return [];
  
  return sampleData.filter(p => 
    p.id !== personId && 
    ((p.fatherId === person.fatherId && person.fatherId) ?? 
     (p.motherId === person.motherId && person.motherId))
  );
};

// PersonLink component for clickable relationships
const PersonLink = ({ person, className = "" }: { person: { id: number; name: string }; className?: string }) => (
  <Link 
    href={`/genealogy/${person.id}`}
    className={`text-blue-600 hover:text-blue-800 hover:underline transition-colors ${className}`}
  >
    {person.name}
  </Link>
);

export default function GenealogyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Genealogy Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the family trees and relationships of biblical figures. Discover connections, 
            marriages, and the rich history of God&apos;s chosen people.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Currently showing {sampleData.length} biblical figures across multiple generations
          </p>
          <p className="text-sm text-gray-400 mt-2">
            💡 Click on any card or relationship to explore individual details
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
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            About Project
          </Link>
        </div>

        {/* People Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleData.map((person) => {
            const children = findChildren(person.id);
            const spouses = findSpouses(person.id);
            const { father, mother } = findParents(person.id);
            const siblings = findSiblings(person.id);
            
            return (
              <Link 
                key={person.id} 
                href={`/genealogy/${person.id}`}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-200">
                  {/* Person Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">👤</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
                    <div className="text-sm text-gray-500">
                      {person.birthDate} - {person.deathDate}
                    </div>
                  </div>

                  {/* Parents */}
                  {(father ?? mother) && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Parents:</h4>
                      <div className="space-y-1">
                        {father && (
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Father:</span> {father.name}
                          </div>
                        )}
                        {mother && (
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Mother:</span> {mother.name}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Siblings */}
                  {siblings.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Siblings ({siblings.length}):
                      </h4>
                      <div className="space-y-1">
                        {siblings.slice(0, 3).map((sibling) => (
                          <div key={sibling.id} className="text-sm text-gray-600">
                            👥 {sibling.name}
                          </div>
                        ))}
                        {siblings.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{siblings.length - 3} more...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Spouses */}
                  {spouses.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {spouses.length === 1 ? 'Spouse:' : 'Spouses:'}
                      </h4>
                      <div className="space-y-1">
                        {spouses.map((spouse) => (
                          <div key={spouse.id} className="text-sm text-gray-600">
                            💕 {spouse.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Children */}
                  {children.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Children ({children.length}):
                      </h4>
                      <div className="space-y-1">
                        {children.slice(0, 4).map((child) => (
                          <div key={child.id} className="text-sm text-gray-600">
                            👶 {child.name}
                          </div>
                        ))}
                        {children.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{children.length - 4} more...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* General Information */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">About:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {person.generalInfo}
                    </p>
                  </div>

                  {/* Biblical References */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Biblical References:</h4>
                    <p className="text-sm text-gray-500">
                      {person.biblicalReferences}
                    </p>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-blue-500 font-medium">
                      Click to view details →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            This comprehensive genealogy includes all 12 sons of Israel, multiple generations, 
            and demonstrates the rich family connections throughout biblical history.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Navigate through the family tree by clicking on any person or relationship
          </p>
        </div>
      </div>
    </div>
  );
}
