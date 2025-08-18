export interface Location {
  id: number;
  name: string;
  startYear: number;
  endYear: number;
  generalInfo: string;
  biblicalReferences: string;
  importantEvents: string;
  coordinates: string;
  emoji: string;
  locationType: string;
}

export const locationsData: Location[] = [
  // Book of Ruth Locations
  {
    id: 1,
    name: "Bethlehem",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Bethlehem is a city in the West Bank, located about 10 kilometers south of Jerusalem. It is the birthplace of King David and Jesus Christ. The name 'Bethlehem' means 'House of Bread' in Hebrew.",
    biblicalReferences: "Ruth 1:1-2, 1 Samuel 16:1, Matthew 2:1, Luke 2:4-7",
    importantEvents: "Birthplace of King David; Birthplace of Jesus Christ; Naomi and Ruth's return; Boaz's field where Ruth gleaned",
    coordinates: "31.7054,35.2024",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 2,
    name: "Moab",
    startYear: -1300,
    endYear: 100,
    generalInfo: "Moab was an ancient kingdom located east of the Dead Sea, in what is now Jordan. The Moabites were descendants of Lot through his daughter. They were often in conflict with the Israelites.",
    biblicalReferences: "Ruth 1:1-4, Numbers 21:29, Deuteronomy 2:9, Judges 3:12-30",
    importantEvents: "Ruth's homeland; Naomi's family moved here during famine; Ruth's conversion to worship of the God of Israel",
    coordinates: "31.5000,35.5000",
    emoji: "🏔️",
    locationType: "region"
  },
  {
    id: 3,
    name: "Judah",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Judah was one of the twelve tribes of Israel and later became the southern kingdom after the split of the united monarchy. It was the territory where Bethlehem was located.",
    biblicalReferences: "Ruth 1:7, Genesis 49:8-12, Joshua 15:1-63, 1 Kings 12:17",
    importantEvents: "Naomi and Ruth's return from Moab; David's kingdom; Jesus' ministry",
    coordinates: "31.5000,35.0000",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 4,
    name: "Ephrathah",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Ephrathah was the ancient name for the region around Bethlehem. It was also called Ephrath in some biblical texts. The name means 'fruitful' in Hebrew.",
    biblicalReferences: "Ruth 4:11, Genesis 35:19, Micah 5:2",
    importantEvents: "Ruth and Boaz's marriage blessing; Rachel's burial place; Prophesied birthplace of the Messiah",
    coordinates: "31.7054,35.2024",
    emoji: "🌾",
    locationType: "region"
  },
  {
    id: 5,
    name: "Jerusalem",
    startYear: -1000,
    endYear: 100,
    generalInfo: "Jerusalem is the capital city of Israel and one of the oldest cities in the world. It has been the spiritual center of Judaism, Christianity, and Islam for thousands of years.",
    biblicalReferences: "2 Samuel 5:6-10, 1 Kings 6:1-38, Matthew 21:1-11, Luke 19:28-44",
    importantEvents: "David's conquest and establishment as capital; Solomon's Temple; Jesus' ministry and crucifixion",
    coordinates: "31.7683,35.2137",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 6,
    name: "Mount Sinai",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Mount Sinai is the mountain where Moses received the Ten Commandments from God. It is located in the Sinai Peninsula of Egypt.",
    biblicalReferences: "Exodus 19:1-25, Exodus 20:1-17, Deuteronomy 5:1-22",
    importantEvents: "God's covenant with Israel; Receiving of the Law; Moses' encounter with the burning bush",
    coordinates: "28.5392,33.9753",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 7,
    name: "Nazareth",
    startYear: -100,
    endYear: 100,
    generalInfo: "Nazareth is a city in northern Israel, known as the hometown of Jesus. It was a small agricultural village during biblical times.",
    biblicalReferences: "Matthew 2:23, Luke 1:26-27, Luke 2:39, John 1:45-46",
    importantEvents: "Jesus' childhood and early life; Annunciation to Mary; Jesus' rejection by his hometown",
    coordinates: "32.6996,35.3035",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 8,
    name: "Sea of Galilee",
    startYear: -2000,
    endYear: 100,
    generalInfo: "The Sea of Galilee is a freshwater lake in northern Israel. It was the center of Jesus' ministry and many of his miracles took place on or around this lake.",
    biblicalReferences: "Matthew 4:18-22, Mark 1:16-20, Luke 5:1-11, John 6:1-21",
    importantEvents: "Jesus walking on water; Feeding of the 5000; Many of Jesus' teachings and miracles",
    coordinates: "32.8333,35.5833",
    emoji: "🌊",
    locationType: "lake"
  },
  {
    id: 9,
    name: "Dead Sea",
    startYear: -2000,
    endYear: 100,
    generalInfo: "The Dead Sea is a salt lake bordered by Jordan to the east and Israel and Palestine to the west. It is one of the saltiest bodies of water in the world.",
    biblicalReferences: "Genesis 14:3, Numbers 34:12, Deuteronomy 3:17, Joshua 3:16",
    importantEvents: "Sodom and Gomorrah destruction; Lot's wife turning to salt; Ancient trade route",
    coordinates: "31.5000,35.5000",
    emoji: "🏖️",
    locationType: "lake"
  },
  {
    id: 10,
    name: "Jordan River",
    startYear: -2000,
    endYear: 100,
    generalInfo: "The Jordan River flows from the Sea of Galilee to the Dead Sea. It is the river where John the Baptist baptized Jesus and many others.",
    biblicalReferences: "Joshua 3:14-17, 2 Kings 2:6-14, Matthew 3:13-17, Mark 1:9-11",
    importantEvents: "Israelites crossing into Promised Land; Elijah and Elisha crossing; Jesus' baptism",
    coordinates: "32.0000,35.5000",
    emoji: "🌊",
    locationType: "river"
  },
  {
    id: 11,
    name: "Capernaum",
    startYear: -100,
    endYear: 100,
    generalInfo: "Capernaum was a fishing village on the northern shore of the Sea of Galilee. It became Jesus' home base during his ministry and was called 'his own city'.",
    biblicalReferences: "Matthew 4:13, Mark 1:21, Luke 4:31, John 6:24",
    importantEvents: "Jesus' ministry headquarters; Many miracles performed here; Peter's hometown",
    coordinates: "32.8803,35.5753",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 12,
    name: "Mount Carmel",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Mount Carmel is a coastal mountain range in northern Israel. It was the site of Elijah's famous contest with the prophets of Baal.",
    biblicalReferences: "1 Kings 18:19-40, 2 Kings 2:25, Isaiah 35:2, Jeremiah 46:18",
    importantEvents: "Elijah's contest with Baal prophets; God's fire consuming the sacrifice; Victory over idolatry",
    coordinates: "32.7500,35.0000",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 13,
    name: "Samaria",
    startYear: -900,
    endYear: 100,
    generalInfo: "Samaria was the capital of the northern kingdom of Israel and later became a region inhabited by Samaritans, who were despised by the Jews.",
    biblicalReferences: "1 Kings 16:24, 2 Kings 17:24, John 4:4-42, Luke 10:25-37",
    importantEvents: "Capital of northern kingdom; Jesus' encounter with Samaritan woman; Good Samaritan parable",
    coordinates: "32.2800,35.2000",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 14,
    name: "Damascus",
    startYear: -2000,
    endYear: 100,
    generalInfo: "Damascus is one of the oldest continuously inhabited cities in the world. It was the capital of ancient Syria and an important trade center.",
    biblicalReferences: "Genesis 14:15, 2 Samuel 8:5-6, Acts 9:1-22, 2 Corinthians 11:32",
    importantEvents: "Paul's conversion on the road to Damascus; Ancient trade routes; Biblical battles",
    coordinates: "33.5138,36.2765",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 15,
    name: "Antioch",
    startYear: -300,
    endYear: 100,
    generalInfo: "Antioch was a major city in ancient Syria and an important center of early Christianity. It was where followers of Jesus were first called 'Christians'.",
    biblicalReferences: "Acts 11:19-26, Acts 13:1-3, Acts 14:26, Galatians 2:11",
    importantEvents: "First called 'Christians'; Paul and Barnabas' missionary journeys; Early church center",
    coordinates: "36.2000,36.1500",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 16,
    name: "Babylon",
    startYear: -2000,
    endYear: 100,
    generalInfo: "Babylon was one of the most important cities of ancient Mesopotamia. It was the capital of the Babylonian Empire and where the Israelites were taken into exile.",
    biblicalReferences: "2 Kings 24:1-25:21, Daniel 1:1-21, Jeremiah 29:1-32, Revelation 17:5",
    importantEvents: "Babylonian captivity; Daniel's service; Tower of Babel; Fall of Jerusalem",
    coordinates: "32.5417,44.4208",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 17,
    name: "Nineveh",
    startYear: -2000,
    endYear: 100,
    generalInfo: "Nineveh was the capital of the ancient Assyrian Empire. It was a great city that Jonah was sent to preach repentance to.",
    biblicalReferences: "Jonah 1:1-4:11, 2 Kings 19:36, Nahum 1:1-3:19, Zephaniah 2:13",
    importantEvents: "Jonah's reluctant mission; City's repentance; Assyrian empire's fall",
    coordinates: "36.3667,43.1500",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 18,
    name: "Mount Ararat",
    startYear: -3000,
    endYear: 100,
    generalInfo: "Mount Ararat is the highest peak in Turkey and is traditionally associated with where Noah's ark came to rest after the flood.",
    biblicalReferences: "Genesis 8:4, 2 Kings 19:37, Isaiah 37:38, Jeremiah 51:27",
    importantEvents: "Noah's ark landing; End of the great flood; New beginning for humanity",
    coordinates: "39.7000,44.3000",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 19,
    name: "Mount Horeb",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Mount Horeb is another name for Mount Sinai, where Moses received the Ten Commandments. It is also called the 'Mountain of God'.",
    biblicalReferences: "Exodus 3:1, Exodus 17:6, Deuteronomy 1:6, 1 Kings 19:8",
    importantEvents: "Burning bush encounter; Receiving of the Law; Elijah's journey",
    coordinates: "28.5392,33.9753",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 20,
    name: "Mount of Olives",
    startYear: -1000,
    endYear: 100,
    generalInfo: "The Mount of Olives is a mountain ridge east of Jerusalem. It was a place where Jesus often went to pray and where he ascended to heaven.",
    biblicalReferences: "2 Samuel 15:30, Zechariah 14:4, Matthew 21:1, Luke 22:39",
    importantEvents: "Jesus' triumphal entry; Garden of Gethsemane; Jesus' ascension",
    coordinates: "31.7833,35.2500",
    emoji: "⛰️",
    locationType: "mountain"
  }
];
