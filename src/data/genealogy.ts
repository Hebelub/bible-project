export interface Person {
  id: number;
  name: string;
  fatherId: number | null;
  motherId: number | null;
  birthYear: number;
  deathYear: number;
  birthDate: string;
  deathDate: string;
  generalInfo: string;
  biblicalReferences: string;
  gender: 'male' | 'female';
}

// Comprehensive biblical genealogy from Adam to Jesus and beyond
export const genealogyData: Person[] = [
  // Adam and Eve Generation
  {
    id: 1000,
    name: "Adam",
    fatherId: null,
    motherId: null,
    birthYear: -4000,
    deathYear: -3070,
    birthDate: "Created by God around 4000 BC",
    deathDate: "Around 3070 BC",
    generalInfo: "Adam was the first man created by God from the dust of the ground. He was given dominion over all creation and placed in the Garden of Eden. After the fall, he and Eve were expelled from paradise.",
    biblicalReferences: "Genesis 1:26-5:5",
    gender: "male"
  },
  {
    id: 1001,
    name: "Eve",
    fatherId: null,
    motherId: null,
    birthYear: -4000,
    deathYear: -3070,
    birthDate: "Created from Adam's rib around 4000 BC",
    deathDate: "Around 3070 BC",
    generalInfo: "Eve was the first woman, created by God from Adam's rib to be his companion and helper. She was deceived by the serpent and ate the forbidden fruit, leading to the fall of mankind.",
    biblicalReferences: "Genesis 2:18-4:26",
    gender: "female"
  },

  // Seth's Line (the godly line)
  {
    id: 1002,
    name: "Seth",
    fatherId: 1000,
    motherId: 1001,
    birthYear: -3870,
    deathYear: -2978,
    birthDate: "Around 3870 BC",
    deathDate: "Around 2978 BC",
    generalInfo: "Seth was Adam and Eve's third son, born after Abel's death. He was the ancestor of the godly line that would eventually lead to Noah and the preservation of humanity through the flood.",
    biblicalReferences: "Genesis 4:25-5:8",
    gender: "male"
  },
  {
    id: 1003,
    name: "Enos",
    fatherId: 1002,
    motherId: null,
    birthYear: -3765,
    deathYear: -2860,
    birthDate: "Around 3765 BC",
    deathDate: "Around 2860 BC",
    generalInfo: "Enos was Seth's son. During his time, people began to call upon the name of the Lord, indicating a spiritual awakening and the beginning of organized worship.",
    biblicalReferences: "Genesis 4:26, 5:6-11",
    gender: "male"
  },
  {
    id: 1004,
    name: "Cainan",
    fatherId: 1003,
    motherId: null,
    birthYear: -3675,
    deathYear: -2765,
    birthDate: "Around 3675 BC",
    deathDate: "Around 2765 BC",
    generalInfo: "Cainan was Enos's son and part of the godly line that would lead to Noah. He lived during a time when the world was becoming increasingly corrupt.",
    biblicalReferences: "Genesis 5:9-14",
    gender: "male"
  },
  {
    id: 1005,
    name: "Mahalaleel",
    fatherId: 1004,
    motherId: null,
    birthYear: -3605,
    deathYear: -2710,
    birthDate: "Around 3605 BC",
    deathDate: "Around 2710 BC",
    generalInfo: "Mahalaleel was Cainan's son and continued the godly lineage. His name means 'praise of God' and he lived during the pre-flood era.",
    biblicalReferences: "Genesis 5:12-17",
    gender: "male"
  },
  {
    id: 1006,
    name: "Jared",
    fatherId: 1005,
    motherId: null,
    birthYear: -3540,
    deathYear: -2578,
    birthDate: "Around 3540 BC",
    deathDate: "Around 2578 BC",
    generalInfo: "Jared was Mahalaleel's son and lived for 962 years, making him one of the longest-lived people in the Bible. He was the father of Enoch.",
    biblicalReferences: "Genesis 5:15-20",
    gender: "male"
  },
  {
    id: 1007,
    name: "Enoch",
    fatherId: 1006,
    motherId: null,
    birthYear: -3378,
    deathYear: -3013,
    birthDate: "Around 3378 BC",
    deathDate: "Around 3013 BC (translated)",
    generalInfo: "Enoch was Jared's son and walked with God for 300 years. He was translated to heaven without seeing death, making him one of only two people in the Bible to experience this.",
    biblicalReferences: "Genesis 5:18-24, Hebrews 11:5, Jude 1:14-15",
    gender: "male"
  },
  {
    id: 1008,
    name: "Methuselah",
    fatherId: 1007,
    motherId: null,
    birthYear: -3313,
    deathYear: -2348,
    birthDate: "Around 3313 BC",
    deathDate: "Around 2348 BC",
    generalInfo: "Methuselah was Enoch's son and lived for 969 years, making him the longest-lived person in the Bible. His death coincided with the year of the great flood.",
    biblicalReferences: "Genesis 5:21-27",
    gender: "male"
  },
  {
    id: 1009,
    name: "Lamech",
    fatherId: 1008,
    motherId: null,
    birthYear: -3126,
    deathYear: -2348,
    birthDate: "Around 3126 BC",
    deathDate: "Around 2348 BC",
    generalInfo: "Lamech was Methuselah's son and the father of Noah. He lived for 777 years and was a righteous man who walked with God like his ancestors.",
    biblicalReferences: "Genesis 5:25-31",
    gender: "male"
  },
  {
    id: 1010,
    name: "Noah",
    fatherId: 1009,
    motherId: null,
    birthYear: -2948,
    deathYear: -1998,
    birthDate: "Around 2948 BC",
    deathDate: "Around 1998 BC",
    generalInfo: "Noah was Lamech's son and found grace in the eyes of the Lord. He built the ark and preserved humanity and animal life through the great flood. He lived for 950 years.",
    biblicalReferences: "Genesis 5:28-9:29, Hebrews 11:7, 1 Peter 3:20, 2 Peter 2:5",
    gender: "male"
  },

  // Noah's Sons
  {
    id: 1011,
    name: "Shem",
    fatherId: 1010,
    motherId: null,
    birthYear: -2448,
    deathYear: -1848,
    birthDate: "Around 2448 BC",
    deathDate: "Around 1848 BC",
    generalInfo: "Shem was Noah's eldest son and the ancestor of the Semitic peoples, including the Israelites. He received a special blessing from Noah and lived for 600 years.",
    biblicalReferences: "Genesis 5:32, 6:10, 9:18-27, 10:21-31, 11:10-26",
    gender: "male"
  },
  {
    id: 1012,
    name: "Ham",
    fatherId: 1010,
    motherId: null,
    birthYear: -2446,
    deathYear: -1846,
    birthDate: "Around 2446 BC",
    deathDate: "Around 1846 BC",
    generalInfo: "Ham was Noah's second son and the ancestor of the Hamitic peoples, including the Egyptians, Canaanites, and Africans. He was cursed by Noah for his disrespect.",
    biblicalReferences: "Genesis 5:32, 6:10, 9:18-27, 10:6-20",
    gender: "male"
  },
  {
    id: 1013,
    name: "Japheth",
    fatherId: 1010,
    motherId: null,
    birthYear: -2444,
    deathYear: -1844,
    birthDate: "Around 2444 BC",
    deathDate: "Around 1844 BC",
    generalInfo: "Japheth was Noah's youngest son and the ancestor of the Japhetic peoples, including the Europeans and some Asian peoples. He received a blessing from Noah.",
    biblicalReferences: "Genesis 5:32, 6:10, 9:18-27, 10:2-5",
    gender: "male"
  },

  // Shem's Line (leading to Abraham)
  {
    id: 1014,
    name: "Arphaxad",
    fatherId: 1011,
    motherId: null,
    birthYear: -2348,
    deathYear: -1911,
    birthDate: "Around 2348 BC",
    deathDate: "Around 1911 BC",
    generalInfo: "Arphaxad was Shem's son and lived for 438 years. He was born two years after the flood and continued the line that would lead to Abraham and the Israelites.",
    biblicalReferences: "Genesis 10:22, 11:10-13",
    gender: "male"
  },
  {
    id: 1015,
    name: "Salah",
    fatherId: 1014,
    motherId: null,
    birthYear: -2307,
    deathYear: -1874,
    birthDate: "Around 2307 BC",
    deathDate: "Around 1874 BC",
    generalInfo: "Salah was Arphaxad's son and lived for 433 years. He continued the godly lineage that would eventually produce the patriarchs of Israel.",
    biblicalReferences: "Genesis 10:24, 11:12-15",
    gender: "male"
  },
  {
    id: 1016,
    name: "Eber",
    fatherId: 1015,
    motherId: null,
    birthYear: -2277,
    deathYear: -1813,
    birthDate: "Around 2277 BC",
    deathDate: "Around 1813 BC",
    generalInfo: "Eber was Salah's son and lived for 464 years. He is the namesake of the Hebrews and lived during the time of the Tower of Babel.",
    biblicalReferences: "Genesis 10:21, 11:14-17",
    gender: "male"
  },
  {
    id: 1017,
    name: "Peleg",
    fatherId: 1016,
    motherId: null,
    birthYear: -2247,
    deathYear: -2008,
    birthDate: "Around 2247 BC",
    deathDate: "Around 2008 BC",
    generalInfo: "Peleg was Eber's son and lived for 239 years. His name means 'division' and he lived during the time when the earth was divided at the Tower of Babel.",
    biblicalReferences: "Genesis 10:25, 11:16-19",
    gender: "male"
  },
  {
    id: 1018,
    name: "Reu",
    fatherId: 1017,
    motherId: null,
    birthYear: -2217,
    deathYear: -1978,
    birthDate: "Around 2217 BC",
    deathDate: "Around 1978 BC",
    generalInfo: "Reu was Peleg's son and lived for 239 years. He continued the line that would lead to Abraham and the establishment of God's chosen people.",
    biblicalReferences: "Genesis 11:18-21",
    gender: "male"
  },
  {
    id: 1019,
    name: "Serug",
    fatherId: 1018,
    motherId: null,
    birthYear: -2187,
    deathYear: -1958,
    birthDate: "Around 2187 BC",
    deathDate: "Around 1958 BC",
    generalInfo: "Serug was Reu's son and lived for 230 years. He was the grandfather of Terah and great-grandfather of Abraham.",
    biblicalReferences: "Genesis 11:20-23",
    gender: "male"
  },
  {
    id: 1020,
    name: "Nahor",
    fatherId: 1019,
    motherId: null,
    birthYear: -2157,
    deathYear: -2007,
    birthDate: "Around 2157 BC",
    deathDate: "Around 2007 BC",
    generalInfo: "Nahor was Serug's son and lived for 148 years. He was the father of Terah and grandfather of Abraham, Isaac, and Jacob.",
    biblicalReferences: "Genesis 11:22-25",
    gender: "male"
  },
  {
    id: 1021,
    name: "Terah",
    fatherId: 1020,
    motherId: null,
    birthYear: -2126,
    deathYear: -1991,
    birthDate: "Around 2126 BC",
    deathDate: "Around 1991 BC",
    generalInfo: "Terah was Nahor's son and the father of Abraham, Nahor, and Haran. He lived for 205 years and initially worshiped other gods before Abraham's call.",
    biblicalReferences: "Genesis 11:24-32, Joshua 24:2",
    gender: "male"
  },

  // Abraham's Generation
  {
    id: 100,
    name: "Abraham",
    fatherId: 1021,
    motherId: null,
    birthYear: -2166,
    deathYear: -1991,
    birthDate: "Around 2166 BC",
    deathDate: "Around 1991 BC",
    generalInfo: "Abraham, originally Abram, was called by God to leave his homeland and become the father of many nations. He is considered the patriarch of the Israelites and the father of faith. God made a covenant with him promising descendants as numerous as the stars.",
    biblicalReferences: "Genesis 11:26-25:10, Romans 4:1-25, Hebrews 11:8-19, James 2:21-24",
    gender: "male"
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
    biblicalReferences: "Genesis 11:29-23:20, Romans 4:19, Hebrews 11:11, 1 Peter 3:6",
    gender: "female"
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
    biblicalReferences: "Genesis 21:1-35:29, Romans 9:7-9, Hebrews 11:20",
    gender: "male"
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
    biblicalReferences: "Genesis 24:15-67, 25:20-28, 27:1-46, Romans 9:10-13",
    gender: "female"
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
    biblicalReferences: "Genesis 25:19-50:13, Romans 9:10-13, Hebrews 11:21",
    gender: "male"
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
    biblicalReferences: "Genesis 25:19-36:43, Romans 9:10-13, Hebrews 12:16-17",
    gender: "male"
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
    biblicalReferences: "Genesis 29:16-35, 30:17-21, 31:4-16, 33:1-7, 49:31",
    gender: "female"
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
    biblicalReferences: "Genesis 29:6-30, 30:1-8, 30:22-24, 31:4-16, 33:1-7, 35:16-20",
    gender: "female"
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
    biblicalReferences: "Genesis 30:1-8, 35:22, 37:2",
    gender: "female"
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
    biblicalReferences: "Genesis 30:9-13, 35:26, 37:2",
    gender: "female"
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
    biblicalReferences: "Genesis 29:32, 30:14, 35:22, 37:21-22, 37:29-30, 42:22, 42:37, 49:3-4",
    gender: "male"
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
    biblicalReferences: "Genesis 29:33, 34:25-31, 35:23, 42:24, 43:23, 49:5-7",
    gender: "male"
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
    biblicalReferences: "Genesis 29:34, 34:25-31, 35:23, 42:24, 43:23, 49:5-7",
    gender: "male"
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
    biblicalReferences: "Genesis 29:35, 37:26-27, 38:1-30, 43:3-10, 44:14-34, 49:8-12",
    gender: "male"
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
    biblicalReferences: "Genesis 30:1-8, 35:25, 49:16-18",
    gender: "male"
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
    biblicalReferences: "Genesis 30:1-8, 35:25, 49:21",
    gender: "male"
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
    biblicalReferences: "Genesis 30:9-13, 35:26, 49:19",
    gender: "male"
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
    biblicalReferences: "Genesis 30:9-13, 35:26, 49:20",
    gender: "male"
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
    biblicalReferences: "Genesis 30:17-18, 35:23, 49:14-15",
    gender: "male"
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
    biblicalReferences: "Genesis 30:19-20, 35:23, 49:13",
    gender: "male"
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
    biblicalReferences: "Genesis 30:22-24, 37:1-50:26, Hebrews 11:22",
    gender: "male"
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
    biblicalReferences: "Genesis 35:16-20, 35:24, 42:4, 42:36, 43:15-16, 43:29-34, 44:12, 45:12, 46:19, 49:27",
    gender: "male"
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
    biblicalReferences: "Genesis 41:50-52, 48:1-22, 50:23",
    gender: "male"
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
    biblicalReferences: "Genesis 41:50-52, 48:1-22, 50:23",
    gender: "male"
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
    biblicalReferences: "Genesis 38:3-7, 46:12",
    gender: "male"
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
    biblicalReferences: "Genesis 38:8-10, 46:12",
    gender: "male"
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
    biblicalReferences: "Genesis 38:11-14, 46:12",
    gender: "male"
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
    biblicalReferences: "Genesis 38:27-30, 46:12, Ruth 4:18-22",
    gender: "male"
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
    biblicalReferences: "Genesis 38:27-30, 46:12",
    gender: "male"
  },

  // Additional Generations (Judah's Line to David)
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
    biblicalReferences: "Genesis 46:12, Ruth 4:18-22, 1 Chronicles 2:5",
    gender: "male"
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
    biblicalReferences: "Ruth 4:19, 1 Chronicles 2:9",
    gender: "male"
  },
  {
    id: 35,
    name: "Amminadab",
    fatherId: 34,
    motherId: null,
    birthYear: -1810,
    deathYear: -1740,
    birthDate: "Around 1810 BC",
    deathDate: "Around 1740 BC",
    generalInfo: "Amminadab was the son of Ram and the father of Nahshon. He was a leader of the tribe of Judah and an ancestor of both King David and Jesus Christ.",
    biblicalReferences: "Ruth 4:20, 1 Chronicles 2:10, Numbers 1:7, 2:3, 7:12, 10:14",
    gender: "male"
  },
  {
    id: 36,
    name: "Nahshon",
    fatherId: 35,
    motherId: null,
    birthYear: -1780,
    deathYear: -1710,
    birthDate: "Around 1780 BC",
    deathDate: "Around 1710 BC",
    generalInfo: "Nahshon was the son of Amminadab and the prince of the tribe of Judah during the Exodus. He was the father of Salmon and an ancestor of King David and Jesus.",
    biblicalReferences: "Ruth 4:20, 1 Chronicles 2:10-11, Numbers 1:7, 2:3, 7:12, 10:14",
    gender: "male"
  },
  {
    id: 37,
    name: "Salmon",
    fatherId: 36,
    motherId: null,
    birthYear: -1750,
    deathYear: -1680,
    birthDate: "Around 1750 BC",
    deathDate: "Around 1680 BC",
    generalInfo: "Salmon was the son of Nahshon and the husband of Rahab. He was the father of Boaz and an ancestor of King David and Jesus Christ.",
    biblicalReferences: "Ruth 4:20-21, 1 Chronicles 2:11, Matthew 1:5",
    gender: "male"
  },
  {
    id: 38,
    name: "Rahab",
    fatherId: null,
    motherId: null,
    birthYear: -1750,
    deathYear: -1680,
    birthDate: "Around 1750 BC",
    deathDate: "Around 1680 BC",
    generalInfo: "Rahab was a Canaanite woman who helped the Israelite spies in Jericho. She married Salmon and became the mother of Boaz. She is mentioned in the genealogy of Jesus.",
    biblicalReferences: "Joshua 2:1-21, 6:17-25, Ruth 4:20-21, Matthew 1:5, Hebrews 11:31, James 2:25",
    gender: "female"
  },
  {
    id: 39,
    name: "Boaz",
    fatherId: 37,
    motherId: 38,
    birthYear: -1720,
    deathYear: -1650,
    birthDate: "Around 1720 BC",
    deathDate: "Around 1650 BC",
    generalInfo: "Boaz was a wealthy landowner and kinsman-redeemer who married Ruth. He was the father of Obed and an ancestor of King David and Jesus Christ.",
    biblicalReferences: "Ruth 2:1-4:22, Matthew 1:5, Luke 3:32",
    gender: "male"
  },
  {
    id: 40,
    name: "Ruth",
    fatherId: null,
    motherId: null,
    birthYear: -1720,
    deathYear: -1650,
    birthDate: "Around 1720 BC",
    deathDate: "Around 1650 BC",
    generalInfo: "Ruth was a Moabite woman who showed great loyalty to her mother-in-law Naomi. She married Boaz and became the great-grandmother of King David and an ancestor of Jesus.",
    biblicalReferences: "Ruth 1:1-4:22, Matthew 1:5",
    gender: "female"
  },
  {
    id: 41,
    name: "Obed",
    fatherId: 39,
    motherId: 40,
    birthYear: -1690,
    deathYear: -1620,
    birthDate: "Around 1690 BC",
    deathDate: "Around 1620 BC",
    generalInfo: "Obed was the son of Boaz and Ruth, the father of Jesse, and the grandfather of King David. He is an ancestor of Jesus Christ.",
    biblicalReferences: "Ruth 4:17-22, 1 Chronicles 2:12, Matthew 1:5, Luke 3:32",
    gender: "male"
  },
  {
    id: 42,
    name: "Jesse",
    fatherId: 41,
    motherId: null,
    birthYear: -1660,
    deathYear: -1590,
    birthDate: "Around 1660 BC",
    deathDate: "Around 1590 BC",
    generalInfo: "Jesse was the son of Obed and the father of King David. He was a Bethlehemite and an ancestor of Jesus Christ. God chose David from among his sons.",
    biblicalReferences: "1 Samuel 16:1-23, 17:12-58, Ruth 4:17-22, 1 Chronicles 2:12, Isaiah 11:1, Matthew 1:5-6, Luke 3:32",
    gender: "male"
  },
  {
    id: 43,
    name: "King David",
    fatherId: 42,
    motherId: null,
    birthYear: -1040,
    deathYear: -970,
    birthDate: "Around 1040 BC",
    deathDate: "Around 970 BC",
    generalInfo: "David was the second king of Israel, chosen by God to replace Saul. He was a man after God's own heart, a great warrior, and the ancestor of Jesus Christ. He established Jerusalem as the capital.",
    biblicalReferences: "1 Samuel 16:1-1 Kings 2:11, Psalms, Matthew 1:6, Luke 3:31, Acts 13:22, Romans 1:3, Revelation 22:16",
    gender: "male"
  },
  {
    id: 44,
    name: "Solomon",
    fatherId: 43,
    motherId: null,
    birthYear: -1000,
    deathYear: -930,
    birthDate: "Around 1000 BC",
    deathDate: "Around 930 BC",
    generalInfo: "Solomon was David's son and the third king of Israel. He was known for his wisdom and built the first temple in Jerusalem. He was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Kings 1:1-11:43, 2 Chronicles 1:1-9:31, Proverbs, Ecclesiastes, Song of Solomon, Matthew 1:6",
    gender: "male"
  },
  {
    id: 45,
    name: "Rehoboam",
    fatherId: 44,
    motherId: null,
    birthYear: -970,
    deathYear: -910,
    birthDate: "Around 970 BC",
    deathDate: "Around 910 BC",
    generalInfo: "Rehoboam was Solomon's son and the fourth king of Judah. During his reign, the kingdom was divided into Israel and Judah. He was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Kings 12:1-24, 14:21-31, 2 Chronicles 10:1-12:16, Matthew 1:7",
    gender: "male"
  },
  {
    id: 46,
    name: "Abijah",
    fatherId: 45,
    motherId: null,
    birthYear: -940,
    deathYear: -880,
    birthDate: "Around 940 BC",
    deathDate: "Around 880 BC",
    generalInfo: "Abijah was Rehoboam's son and the fifth king of Judah. He reigned for only three years and was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Kings 15:1-8, 2 Chronicles 13:1-22, Matthew 1:7",
    gender: "male"
  },
  {
    id: 47,
    name: "Asa",
    fatherId: 46,
    motherId: null,
    birthYear: -910,
    deathYear: -870,
    birthDate: "Around 910 BC",
    deathDate: "Around 870 BC",
    generalInfo: "Asa was Abijah's son and the sixth king of Judah. He was a good king who did what was right in the eyes of the Lord. He was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Kings 15:9-24, 2 Chronicles 14:1-16:14, Matthew 1:7",
    gender: "male"
  },
  {
    id: 48,
    name: "Jehoshaphat",
    fatherId: 47,
    motherId: null,
    birthYear: -880,
    deathYear: -840,
    birthDate: "Around 880 BC",
    deathDate: "Around 840 BC",
    generalInfo: "Jehoshaphat was Asa's son and the seventh king of Judah. He was a righteous king who walked in the ways of David. He was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Kings 22:1-50, 2 Chronicles 17:1-21:1, Matthew 1:8",
    gender: "male"
  },
  {
    id: 49,
    name: "Joram",
    fatherId: 48,
    motherId: null,
    birthYear: -850,
    deathYear: -810,
    birthDate: "Around 850 BC",
    deathDate: "Around 810 BC",
    generalInfo: "Joram was Jehoshaphat's son and the eighth king of Judah. He married Ahab's daughter and did evil in the eyes of the Lord. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 8:16-24, 2 Chronicles 21:1-20, Matthew 1:8",
    gender: "male"
  },
  {
    id: 50,
    name: "Uzziah (Azariah)",
    fatherId: 49,
    motherId: null,
    birthYear: -820,
    deathYear: -740,
    birthDate: "Around 820 BC",
    deathDate: "Around 740 BC",
    generalInfo: "Uzziah was Joram's son and the ninth king of Judah. He was a good king who reigned for 52 years. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 15:1-7, 2 Chronicles 26:1-23, Isaiah 1:1, 6:1, Matthew 1:8",
    gender: "male"
  },
  {
    id: 51,
    name: "Jotham",
    fatherId: 50,
    motherId: null,
    birthYear: -790,
    deathYear: -730,
    birthDate: "Around 790 BC",
    deathDate: "Around 730 BC",
    generalInfo: "Jotham was Uzziah's son and the tenth king of Judah. He was a good king who did what was right in the eyes of the Lord. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 15:32-38, 2 Chronicles 27:1-9, Matthew 1:9",
    gender: "male"
  },
  {
    id: 52,
    name: "Ahaz",
    fatherId: 51,
    motherId: null,
    birthYear: -760,
    deathYear: -720,
    birthDate: "Around 760 BC",
    deathDate: "Around 720 BC",
    generalInfo: "Ahaz was Jotham's son and the eleventh king of Judah. He was an evil king who worshiped idols and made alliances with Assyria. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 16:1-20, 2 Chronicles 28:1-27, Isaiah 7:1-25, Matthew 1:9",
    gender: "male"
  },
  {
    id: 53,
    name: "Hezekiah",
    fatherId: 52,
    motherId: null,
    birthYear: -730,
    deathYear: -690,
    birthDate: "Around 730 BC",
    deathDate: "Around 690 BC",
    generalInfo: "Hezekiah was Ahaz's son and the twelfth king of Judah. He was one of the best kings, removing idolatry and trusting in the Lord. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 18:1-20:21, 2 Chronicles 29:1-32:33, Isaiah 36:1-39:8, Matthew 1:9",
    gender: "male"
  },
  {
    id: 54,
    name: "Manasseh",
    fatherId: 53,
    motherId: null,
    birthYear: -700,
    deathYear: -640,
    birthDate: "Around 700 BC",
    deathDate: "Around 640 BC",
    generalInfo: "Manasseh was Hezekiah's son and the thirteenth king of Judah. He was the most evil king, but later repented. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 21:1-18, 2 Chronicles 33:1-20, Matthew 1:10",
    gender: "male"
  },
  {
    id: 55,
    name: "Amon",
    fatherId: 54,
    motherId: null,
    birthYear: -670,
    deathYear: -640,
    birthDate: "Around 670 BC",
    deathDate: "Around 640 BC",
    generalInfo: "Amon was Manasseh's son and the fourteenth king of Judah. He was an evil king who reigned for only two years. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 21:19-26, 2 Chronicles 33:21-25, Matthew 1:10",
    gender: "male"
  },
  {
    id: 56,
    name: "Josiah",
    fatherId: 55,
    motherId: null,
    birthYear: -640,
    deathYear: -610,
    birthDate: "Around 640 BC",
    deathDate: "Around 610 BC",
    generalInfo: "Josiah was Amon's son and the fifteenth king of Judah. He was a great reformer who restored true worship. He was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 22:1-23:30, 2 Chronicles 34:1-35:27, Matthew 1:10",
    gender: "male"
  },
  {
    id: 57,
    name: "Jeconiah (Jehoiachin)",
    fatherId: 56,
    motherId: null,
    birthYear: -610,
    deathYear: -560,
    birthDate: "Around 610 BC",
    deathDate: "Around 560 BC",
    generalInfo: "Jeconiah was Josiah's son and the sixteenth king of Judah. He was taken captive to Babylon and was an ancestor of Jesus Christ.",
    biblicalReferences: "2 Kings 24:8-17, 2 Chronicles 36:9-10, Jeremiah 22:24-30, Matthew 1:11",
    gender: "male"
  },
  {
    id: 58,
    name: "Shealtiel",
    fatherId: 57,
    motherId: null,
    birthYear: -580,
    deathYear: -530,
    birthDate: "Around 580 BC",
    deathDate: "Around 530 BC",
    generalInfo: "Shealtiel was Jeconiah's son and lived during the Babylonian exile. He was an ancestor of Jesus Christ.",
    biblicalReferences: "1 Chronicles 3:17, Ezra 3:2, 5:2, Nehemiah 12:1, Matthew 1:12, Luke 3:27",
    gender: "male"
  },
  {
    id: 59,
    name: "Zerubbabel",
    fatherId: 58,
    motherId: null,
    birthYear: -550,
    deathYear: -500,
    birthDate: "Around 550 BC",
    deathDate: "Around 500 BC",
    generalInfo: "Zerubbabel was Shealtiel's son and led the first group of exiles back to Jerusalem. He began rebuilding the temple and was an ancestor of Jesus Christ.",
    biblicalReferences: "Ezra 2:2, 3:2, 4:2-3, 5:2, Nehemiah 7:7, 12:1, Haggai 1:1, 2:2, Matthew 1:12, Luke 3:27",
    gender: "male"
  },
  {
    id: 60,
    name: "Abiud",
    fatherId: 59,
    motherId: null,
    birthYear: -520,
    deathYear: -470,
    birthDate: "Around 520 BC",
    deathDate: "Around 470 BC",
    generalInfo: "Abiud was Zerubbabel's son and lived during the Persian period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:13",
    gender: "male"
  },
  {
    id: 61,
    name: "Eliakim",
    fatherId: 60,
    motherId: null,
    birthYear: -490,
    deathYear: -440,
    birthDate: "Around 490 BC",
    deathDate: "Around 440 BC",
    generalInfo: "Eliakim was Abiud's son and lived during the Persian period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:13",
    gender: "male"
  },
  {
    id: 62,
    name: "Azor",
    fatherId: 61,
    motherId: null,
    birthYear: -460,
    deathYear: -410,
    birthDate: "Around 460 BC",
    deathDate: "Around 410 BC",
    generalInfo: "Azor was Eliakim's son and lived during the Persian period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:13",
    gender: "male"
  },
  {
    id: 63,
    name: "Zadok",
    fatherId: 62,
    motherId: null,
    birthYear: -430,
    deathYear: -380,
    birthDate: "Around 430 BC",
    deathDate: "Around 380 BC",
    generalInfo: "Zadok was Azor's son and lived during the Persian period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:14",
    gender: "male"
  },
  {
    id: 64,
    name: "Achim",
    fatherId: 63,
    motherId: null,
    birthYear: -400,
    deathYear: -350,
    birthDate: "Around 400 BC",
    deathDate: "Around 350 BC",
    generalInfo: "Achim was Zadok's son and lived during the Persian period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:14",
    gender: "male"
  },
  {
    id: 65,
    name: "Eliud",
    fatherId: 64,
    motherId: null,
    birthYear: -370,
    deathYear: -320,
    birthDate: "Around 370 BC",
    deathDate: "Around 320 BC",
    generalInfo: "Eliud was Achim's son and lived during the Hellenistic period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:14",
    gender: "male"
  },
  {
    id: 66,
    name: "Eleazar",
    fatherId: 65,
    motherId: null,
    birthYear: -340,
    deathYear: -290,
    birthDate: "Around 340 BC",
    deathDate: "Around 290 BC",
    generalInfo: "Eleazar was Eliud's son and lived during the Hellenistic period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:15",
    gender: "male"
  },
  {
    id: 67,
    name: "Matthan",
    fatherId: 66,
    motherId: null,
    birthYear: -310,
    deathYear: -260,
    birthDate: "Around 310 BC",
    deathDate: "Around 260 BC",
    generalInfo: "Matthan was Eleazar's son and lived during the Hellenistic period. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:15",
    gender: "male"
  },
  {
    id: 68,
    name: "Jacob (father of Joseph)",
    fatherId: 67,
    motherId: null,
    birthYear: -280,
    deathYear: -230,
    birthDate: "Around 280 BC",
    deathDate: "Around 230 BC",
    generalInfo: "Jacob was Matthan's son and the father of Joseph, the husband of Mary. He was an ancestor of Jesus Christ.",
    biblicalReferences: "Matthew 1:15-16",
    gender: "male"
  },
  {
    id: 69,
    name: "Joseph (husband of Mary)",
    fatherId: 68,
    motherId: null,
    birthYear: -250,
    deathYear: -200,
    birthDate: "Around 250 BC",
    deathDate: "Around 200 BC",
    generalInfo: "Joseph was Jacob's son and the husband of Mary, the mother of Jesus. He was a righteous man who obeyed God's commands.",
    biblicalReferences: "Matthew 1:16-25, 2:13-23, Luke 1:27, 2:4-51, 3:23",
    gender: "male"
  },
  {
    id: 70,
    name: "Mary (mother of Jesus)",
    fatherId: null,
    motherId: null,
    birthYear: -20,
    deathYear: 50,
    birthDate: "Around 20 BC",
    deathDate: "Around 50 AD",
    generalInfo: "Mary was a virgin chosen by God to be the mother of Jesus Christ. She was highly favored and blessed among women. She was present at Jesus' crucifixion and resurrection.",
    biblicalReferences: "Matthew 1:18-25, 2:11-21, Luke 1:26-56, 2:1-52, John 2:1-12, 19:25-27, Acts 1:14",
    gender: "female"
  },
  {
    id: 71,
    name: "Jesus Christ",
    fatherId: null,
    motherId: 70,
    birthYear: 0,
    deathYear: 33,
    birthDate: "Around 4-6 BC",
    deathDate: "Around 33 AD",
    generalInfo: "Jesus Christ is the Son of God, the Messiah, and the Savior of the world. He was born of the Virgin Mary, lived a sinless life, died on the cross for our sins, and rose again on the third day.",
    biblicalReferences: "Matthew, Mark, Luke, John, Acts, Romans through Revelation",
    gender: "male"
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
    biblicalReferences: "Genesis 24:29-60, 29:1-31:55",
    gender: "male"
  },

  // Dinah (Jacob's Daughter)
  {
    id: 72,
    name: "Dinah",
    fatherId: 1,
    motherId: 7,
    birthYear: -1930,
    deathYear: -1850,
    birthDate: "Around 1930 BC",
    deathDate: "Around 1850 BC",
    generalInfo: "Dinah was Jacob's only daughter mentioned in the Bible, born to Leah. She was violated by Shechem, leading to revenge by her brothers Simeon and Levi.",
    biblicalReferences: "Genesis 30:21, 34:1-31, 46:15",
    gender: "female"
  },

  // Book of Ruth Genealogy (Additional characters not in main genealogy)
  {
    id: 73,
    name: "Elimelech",
    fatherId: null,
    motherId: null,
    birthYear: -1200,
    deathYear: -1150,
    birthDate: "Around 1200 BC",
    deathDate: "Around 1150 BC",
    generalInfo: "Elimelech was a man from Bethlehem in Judah who moved his family to Moab during a famine. He died there, leaving his wife Naomi and two sons.",
    biblicalReferences: "Ruth 1:1-3",
    gender: "male"
  },
  {
    id: 74,
    name: "Naomi",
    fatherId: null,
    motherId: null,
    birthYear: -1200,
    deathYear: -1100,
    birthDate: "Around 1200 BC",
    deathDate: "Around 1100 BC",
    generalInfo: "Naomi was Elimelech's wife who moved to Moab with her family. After losing her husband and sons, she returned to Bethlehem with her daughter-in-law Ruth.",
    biblicalReferences: "Ruth 1:2-22, 2:2-3, 2:18-22, 3:1-2, 3:4, 3:6, 3:17-19, 4:3, 4:5, 4:9, 4:14-17",
    gender: "female"
  },
  {
    id: 75,
    name: "Mahlon",
    fatherId: 73,
    motherId: 74,
    birthYear: -1180,
    deathYear: -1140,
    birthDate: "Around 1180 BC",
    deathDate: "Around 1140 BC",
    generalInfo: "Mahlon was Elimelech and Naomi's elder son who married Ruth the Moabite. He died in Moab, leaving Ruth a widow.",
    biblicalReferences: "Ruth 1:2-5, 4:10",
    gender: "male"
  },
  {
    id: 76,
    name: "Kilion",
    fatherId: 73,
    motherId: 74,
    birthYear: -1175,
    deathYear: -1140,
    birthDate: "Around 1175 BC",
    deathDate: "Around 1140 BC",
    generalInfo: "Kilion was Elimelech and Naomi's younger son who married Orpah the Moabite. He died in Moab, leaving Orpah a widow.",
    biblicalReferences: "Ruth 1:2-5",
    gender: "male"
  },
  {
    id: 77,
    name: "Orpah",
    fatherId: null,
    motherId: null,
    birthYear: -1180,
    deathYear: -1100,
    birthDate: "Around 1180 BC",
    deathDate: "Around 1100 BC",
    generalInfo: "Orpah was Kilion's Moabite wife. After Kilion's death, she chose to return to her own people in Moab rather than follow Naomi to Bethlehem.",
    biblicalReferences: "Ruth 1:4, 1:8-15",
    gender: "female"
  }
];

// Helper functions
export const findChildren = (personId: number) => {
  return genealogyData.filter(person => person.fatherId === personId || person.motherId === personId);
};

export const findSpouses = (personId: number) => {
  const children = findChildren(personId);
  const spouseIds = new Set<number>();
  
  children.forEach(child => {
    if (child.fatherId === personId && child.motherId) {
      spouseIds.add(child.motherId);
    } else if (child.motherId === personId && child.fatherId) {
      spouseIds.add(child.fatherId);
    }
  });
  
  return genealogyData.filter(person => spouseIds.has(person.id));
};

export const findParents = (personId: number) => {
  const person = genealogyData.find(p => p.id === personId);
  if (!person) return { father: null, mother: null };
  
  const father = person.fatherId ? genealogyData.find(p => p.id === person.fatherId) : null;
  const mother = person.motherId ? genealogyData.find(p => p.id === person.motherId) : null;
  
  return { father, mother };
};

export const findSiblings = (personId: number) => {
  const person = genealogyData.find(p => p.id === personId);
  if (!person) return [];
  
  return genealogyData.filter(p => 
    p.id !== personId && 
    ((p.fatherId === person.fatherId && person.fatherId) ?? 
     (p.motherId === person.motherId && person.motherId))
  );
};
