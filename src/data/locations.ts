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

  // Major Biblical Cities
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    name: "Sodom",
    startYear: -2000,
    endYear: -1800,
    generalInfo: "Sodom was one of the cities of the plain, along with Gomorrah, that was destroyed by God due to their wickedness. It was located near the Dead Sea.",
    biblicalReferences: "Genesis 13:10-13, Genesis 18:16-19:29, Deuteronomy 29:23, Isaiah 1:9-10",
    importantEvents: "Destruction by fire and brimstone; Lot's escape; Abraham's intercession",
    coordinates: "31.5000,35.5000",
    emoji: "🔥",
    locationType: "city"
  },
  {
    id: 14,
    name: "Gomorrah",
    startYear: -2000,
    endYear: -1800,
    generalInfo: "Gomorrah was another city of the plain that was destroyed along with Sodom. Both cities became symbols of divine judgment against wickedness.",
    biblicalReferences: "Genesis 13:10, Genesis 18:20, Genesis 19:24-28, Deuteronomy 29:23",
    importantEvents: "Destruction by fire and brimstone; Divine judgment; Warning example",
    coordinates: "31.5000,35.5000",
    emoji: "🔥",
    locationType: "city"
  },
  {
    id: 15,
    name: "Ur",
    startYear: -2500,
    endYear: -2000,
    generalInfo: "Ur was an ancient Sumerian city in Mesopotamia. It was the birthplace of Abraham and an important center of civilization.",
    biblicalReferences: "Genesis 11:28-31, Genesis 15:7, Nehemiah 9:7",
    importantEvents: "Abraham's birthplace; God's call to Abraham; Beginning of the Hebrew people",
    coordinates: "30.9625,46.1044",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 16,
    name: "Haran",
    startYear: -2000,
    endYear: -1500,
    generalInfo: "Haran was a city in northern Mesopotamia where Abraham and his family lived for a time. It was an important trading center.",
    biblicalReferences: "Genesis 11:31-32, Genesis 12:4-5, Genesis 27:43, Genesis 29:4",
    importantEvents: "Abraham's temporary home; Jacob's journey to find a wife; Trade center",
    coordinates: "36.8667,39.0333",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 17,
    name: "Shechem",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Shechem was an important city in central Canaan. It was where Abraham first built an altar and where Joshua renewed the covenant.",
    biblicalReferences: "Genesis 12:6-7, Genesis 33:18-20, Joshua 24:1-28, John 4:5-6",
    importantEvents: "Abraham's first altar; Jacob's well; Joshua's covenant renewal; Jesus' encounter with Samaritan woman",
    coordinates: "32.2133,35.2817",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 18,
    name: "Hebron",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Hebron was an ancient city in the hill country of Judah. It was where Abraham, Isaac, and Jacob were buried in the Cave of Machpelah.",
    biblicalReferences: "Genesis 13:18, Genesis 23:1-20, Genesis 35:27, Joshua 14:13-15",
    importantEvents: "Abraham's home; Burial place of patriarchs; David's first capital",
    coordinates: "31.5326,35.0998",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 19,
    name: "Beersheba",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Beersheba was a city in the Negev desert. It was the southernmost point of Israel and was associated with the patriarchs.",
    biblicalReferences: "Genesis 21:31, Genesis 26:23-33, Genesis 46:1-5, 1 Kings 19:3",
    importantEvents: "Abraham's covenant with Abimelech; Isaac's wells; Elijah's journey",
    coordinates: "31.2458,34.8417",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 20,
    name: "Gaza",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Gaza was one of the five Philistine cities and an important coastal city. It was often in conflict with the Israelites.",
    biblicalReferences: "Genesis 10:19, Judges 16:1-31, 1 Samuel 6:17, Acts 8:26",
    importantEvents: "Samson's death; Philistine stronghold; Philip's encounter with Ethiopian eunuch",
    coordinates: "31.5017,34.4667",
    emoji: "🏛️",
    locationType: "city"
  },

  // Mountains and Hills
  {
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
    name: "Mount of Olives",
    startYear: -1000,
    endYear: 100,
    generalInfo: "The Mount of Olives is a mountain ridge east of Jerusalem. It was a place where Jesus often went to pray and where he ascended to heaven.",
    biblicalReferences: "2 Samuel 15:30, Zechariah 14:4, Matthew 21:1, Luke 22:39",
    importantEvents: "Jesus' triumphal entry; Garden of Gethsemane; Jesus' ascension",
    coordinates: "31.7833,35.2500",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 26,
    name: "Mount Tabor",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Mount Tabor is a mountain in the Jezreel Valley. It was the site of Deborah and Barak's victory over the Canaanites.",
    biblicalReferences: "Judges 4:6-22, Psalm 89:12, Jeremiah 46:18, Hosea 5:1",
    importantEvents: "Deborah and Barak's victory; Strategic military location; Transfiguration tradition",
    coordinates: "32.6867,35.3900",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 27,
    name: "Mount Hermon",
    startYear: -2000,
    endYear: 100,
    generalInfo: "Mount Hermon is the highest mountain in Israel and Lebanon. It was considered a sacred mountain and was associated with divine encounters.",
    biblicalReferences: "Deuteronomy 3:8-9, Joshua 11:3, Psalm 89:12, Song of Solomon 4:8",
    importantEvents: "Sacred mountain; Divine encounters; Strategic border location",
    coordinates: "33.4167,35.8500",
    emoji: "⛰️",
    locationType: "mountain"
  },
  {
    id: 28,
    name: "Mount Gilboa",
    startYear: -1000,
    endYear: 100,
    generalInfo: "Mount Gilboa was where King Saul and his son Jonathan died in battle against the Philistines. David cursed the mountain for their deaths.",
    biblicalReferences: "1 Samuel 31:1-13, 2 Samuel 1:6-27, 1 Chronicles 10:1-12",
    importantEvents: "Saul and Jonathan's death; David's lament; Philistine victory",
    coordinates: "32.4667,35.4167",
    emoji: "⛰️",
    locationType: "mountain"
  },

  // Bodies of Water
  {
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
    name: "Red Sea",
    startYear: -1500,
    endYear: 100,
    generalInfo: "The Red Sea is where Moses led the Israelites through the parted waters, escaping from the pursuing Egyptian army.",
    biblicalReferences: "Exodus 14:1-31, Exodus 15:1-21, Numbers 33:8, Deuteronomy 11:4",
    importantEvents: "Israelites' miraculous crossing; Pharaoh's army drowned; Song of Moses",
    coordinates: "28.0000,34.0000",
    emoji: "🌊",
    locationType: "sea"
  },
  {
    id: 33,
    name: "Mediterranean Sea",
    startYear: -2000,
    endYear: 100,
    generalInfo: "The Mediterranean Sea was the western boundary of the Promised Land and an important trade route in biblical times.",
    biblicalReferences: "Numbers 34:6, Joshua 1:4, Ezekiel 47:20, Acts 10:6",
    importantEvents: "Western boundary of Israel; Paul's missionary journeys; Trade routes",
    coordinates: "32.0000,34.0000",
    emoji: "🌊",
    locationType: "sea"
  },

  // Regions and Territories
  {
    id: 34,
    name: "Galilee",
    startYear: -1000,
    endYear: 100,
    generalInfo: "Galilee was a region in northern Israel. It was where Jesus spent most of his ministry and where many of his disciples were from.",
    biblicalReferences: "Isaiah 9:1, Matthew 4:12-25, Mark 1:14-15, Luke 4:14-15",
    importantEvents: "Jesus' ministry; Many miracles performed; Home of the disciples",
    coordinates: "32.8333,35.5833",
    emoji: "🏔️",
    locationType: "region"
  },
  {
    id: 35,
    name: "Samaria",
    startYear: -900,
    endYear: 100,
    generalInfo: "Samaria was both a city and a region in central Israel. It was the capital of the northern kingdom and later inhabited by Samaritans.",
    biblicalReferences: "1 Kings 16:24, 2 Kings 17:24, John 4:4-42, Luke 10:25-37",
    importantEvents: "Capital of northern kingdom; Jesus' encounter with Samaritan woman; Good Samaritan parable",
    coordinates: "32.2800,35.2000",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 36,
    name: "Negev",
    startYear: -2000,
    endYear: 100,
    generalInfo: "The Negev is a desert region in southern Israel. It was where Abraham, Isaac, and Jacob lived and where many biblical events took place.",
    biblicalReferences: "Genesis 12:9, Genesis 20:1, Genesis 24:62, Numbers 13:17",
    importantEvents: "Abraham's journeys; Isaac's wells; Desert wanderings",
    coordinates: "30.5000,34.5000",
    emoji: "🏜️",
    locationType: "region"
  },
  {
    id: 37,
    name: "Jezreel Valley",
    startYear: -1500,
    endYear: 100,
    generalInfo: "The Jezreel Valley is a large fertile valley in northern Israel. It was the site of many important battles and agricultural activities.",
    biblicalReferences: "Joshua 17:16, Judges 6:33, 1 Samuel 29:1, 2 Kings 9:27",
    importantEvents: "Gideon's victory; Many battles; Agricultural center",
    coordinates: "32.5833,35.3333",
    emoji: "🌾",
    locationType: "region"
  },
  {
    id: 38,
    name: "Gilead",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Gilead was a mountainous region east of the Jordan River. It was known for its balm and was home to many biblical figures.",
    biblicalReferences: "Genesis 31:21-25, Numbers 32:1-42, Judges 10:17-11:11, Jeremiah 8:22",
    importantEvents: "Jacob and Laban's covenant; Jephthah's home; Balm of Gilead",
    coordinates: "32.5000,35.8000",
    emoji: "🏔️",
    locationType: "region"
  },
  {
    id: 39,
    name: "Bashan",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Bashan was a fertile region east of the Jordan River. It was known for its cattle and was conquered by the Israelites.",
    biblicalReferences: "Numbers 21:33-35, Deuteronomy 3:1-11, Joshua 12:4-5, Psalm 68:15",
    importantEvents: "Conquest by Israelites; Fertile agricultural land; Cattle country",
    coordinates: "32.8000,36.0000",
    emoji: "🐄",
    locationType: "region"
  },
  {
    id: 40,
    name: "Philistia",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Philistia was the territory of the Philistines, a sea-faring people who were often in conflict with the Israelites.",
    biblicalReferences: "Genesis 21:32-34, Judges 13:1-16:31, 1 Samuel 4:1-7:1, 2 Samuel 5:17-25",
    importantEvents: "Samson's conflicts; Ark of the Covenant captured; David's victories",
    coordinates: "31.5000,34.5000",
    emoji: "🏛️",
    locationType: "region"
  },

  // Additional Important Cities
  {
    id: 41,
    name: "Jericho",
    startYear: -8000,
    endYear: 100,
    generalInfo: "Jericho is one of the oldest continuously inhabited cities in the world. It was the first city conquered by the Israelites in the Promised Land.",
    biblicalReferences: "Joshua 6:1-27, 2 Kings 2:4-22, Luke 19:1-10, Hebrews 11:30",
    importantEvents: "Walls falling down; Elisha's miracle; Zacchaeus' conversion",
    coordinates: "31.8703,35.4433",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 42,
    name: "Bethel",
    startYear: -1500,
    endYear: 100,
    generalInfo: "Bethel was an important religious center in ancient Israel. It was where Jacob had his dream of the ladder to heaven.",
    biblicalReferences: "Genesis 12:8, Genesis 28:10-22, Genesis 35:1-15, 1 Kings 12:29",
    importantEvents: "Jacob's ladder dream; Golden calf worship; Religious center",
    coordinates: "31.9300,35.2200",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 43,
    name: "Shiloh",
    startYear: -1200,
    endYear: -1000,
    generalInfo: "Shiloh was the religious center of Israel during the time of the judges. The Tabernacle was located here.",
    biblicalReferences: "Joshua 18:1, Judges 18:31, 1 Samuel 1:3-4:22, Jeremiah 7:12-15",
    importantEvents: "Tabernacle location; Hannah's prayer; Ark captured by Philistines",
    coordinates: "32.0567,35.2897",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 44,
    name: "Gibeon",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Gibeon was a Canaanite city that made a treaty with Joshua. It was where the sun stood still during a battle.",
    biblicalReferences: "Joshua 9:3-27, Joshua 10:1-15, 2 Samuel 2:12-17, 1 Kings 3:4-5",
    importantEvents: "Sun standing still; Solomon's dream; Important battle site",
    coordinates: "31.8500,35.1833",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 45,
    name: "Mizpah",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Mizpah was a city that served as a gathering place for the Israelites. It was where Samuel judged Israel.",
    biblicalReferences: "Judges 20:1-3, 1 Samuel 7:5-16, 1 Samuel 10:17-25, Jeremiah 40:6-16",
    importantEvents: "Israelite assembly; Samuel's leadership; Important meeting place",
    coordinates: "31.8333,35.1667",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 46,
    name: "Ramah",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Ramah was Samuel's hometown and where he was buried. It was also where Rachel was said to be weeping for her children.",
    biblicalReferences: "1 Samuel 1:19-20, 1 Samuel 7:17, 1 Samuel 25:1, Jeremiah 31:15",
    importantEvents: "Samuel's home and burial; Rachel's weeping; Prophetic significance",
    coordinates: "31.9000,35.2167",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 47,
    name: "Gath",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Gath was one of the five Philistine cities. It was where Goliath was from and where David sought refuge.",
    biblicalReferences: "1 Samuel 5:8, 1 Samuel 17:4, 1 Samuel 21:10-15, 2 Samuel 1:20",
    importantEvents: "Goliath's hometown; David's refuge; Philistine stronghold",
    coordinates: "31.7000,34.8500",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 48,
    name: "Ashkelon",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Ashkelon was another of the five Philistine cities. It was an important coastal city and trading center.",
    biblicalReferences: "Judges 1:18, 1 Samuel 6:17, 2 Samuel 1:20, Jeremiah 25:20",
    importantEvents: "Philistine city; Samson's exploits; Coastal trade",
    coordinates: "31.6667,34.5667",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 49,
    name: "Ashdod",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Ashdod was one of the five Philistine cities. It was where the Ark of the Covenant was taken after being captured.",
    biblicalReferences: "1 Samuel 5:1-7, 1 Samuel 6:17, Nehemiah 13:23-24, Acts 8:40",
    importantEvents: "Ark of the Covenant captured; Philistine city; Philip's ministry",
    coordinates: "31.8000,34.6500",
    emoji: "🏛️",
    locationType: "city"
  },
  {
    id: 50,
    name: "Ekron",
    startYear: -1200,
    endYear: 100,
    generalInfo: "Ekron was one of the five Philistine cities. It was known for its worship of Baal-zebub.",
    biblicalReferences: "1 Samuel 5:10-12, 1 Samuel 6:17, 2 Kings 1:2-16, Amos 1:8",
    importantEvents: "Baal-zebub worship; Philistine city; Prophetic judgment",
    coordinates: "31.7833,34.8500",
    emoji: "🏛️",
    locationType: "city"
  },

  // New Testament Cities
  {
    id: 51,
    name: "Bethsaida",
    startYear: -100,
    endYear: 100,
    generalInfo: "Bethsaida was a fishing village on the Sea of Galilee. It was the hometown of Peter, Andrew, and Philip.",
    biblicalReferences: "Matthew 11:21, Mark 6:45, Luke 9:10, John 1:44",
    importantEvents: "Home of disciples; Jesus' miracles; Feeding of the 5000",
    coordinates: "32.9000,35.6167",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 52,
    name: "Magdala",
    startYear: -100,
    endYear: 100,
    generalInfo: "Magdala was a town on the western shore of the Sea of Galilee. It was the hometown of Mary Magdalene.",
    biblicalReferences: "Matthew 15:39, Mark 8:10, Luke 8:2, John 20:1-18",
    importantEvents: "Mary Magdalene's hometown; Jesus' ministry; Resurrection appearances",
    coordinates: "32.8333,35.5167",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 53,
    name: "Nain",
    startYear: -100,
    endYear: 100,
    generalInfo: "Nain was a small village in Galilee where Jesus raised a widow's son from the dead.",
    biblicalReferences: "Luke 7:11-17",
    importantEvents: "Jesus raises widow's son; Great miracle; Compassion shown",
    coordinates: "32.6333,35.3500",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 54,
    name: "Cana",
    startYear: -100,
    endYear: 100,
    generalInfo: "Cana was a village in Galilee where Jesus performed his first miracle, turning water into wine at a wedding.",
    biblicalReferences: "John 2:1-11, John 4:46-54",
    importantEvents: "Jesus' first miracle; Wedding feast; Water to wine",
    coordinates: "32.7500,35.3500",
    emoji: "🏘️",
    locationType: "city"
  },
  {
    id: 55,
    name: "Emmaus",
    startYear: -100,
    endYear: 100,
    generalInfo: "Emmaus was a village near Jerusalem where Jesus appeared to two disciples after his resurrection.",
    biblicalReferences: "Luke 24:13-35",
    importantEvents: "Jesus' post-resurrection appearance; Breaking of bread; Road to Emmaus",
    coordinates: "31.8333,35.0000",
    emoji: "🏘️",
    locationType: "city"
  },

  // Ancient Empires and Regions
  {
    id: 56,
    name: "Egypt",
    startYear: -3000,
    endYear: 100,
    generalInfo: "Egypt was one of the most powerful ancient civilizations. It was where the Israelites were enslaved and where Jesus was taken as a child.",
    biblicalReferences: "Genesis 12:10-20, Exodus 1:1-14:31, Matthew 2:13-15, Acts 7:9-36",
    importantEvents: "Israelite slavery and exodus; Joseph's rise to power; Jesus' flight to Egypt",
    coordinates: "26.8206,30.8025",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 57,
    name: "Assyria",
    startYear: -2000,
    endYear: -600,
    generalInfo: "Assyria was a powerful empire that conquered the northern kingdom of Israel and took many Israelites into exile.",
    biblicalReferences: "2 Kings 17:1-41, Isaiah 10:5-19, Nahum 1:1-3:19, Jonah 1:1-4:11",
    importantEvents: "Conquest of northern kingdom; Exile of Israelites; Jonah's mission to Nineveh",
    coordinates: "36.3667,43.1500",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 58,
    name: "Persia",
    startYear: -600,
    endYear: -300,
    generalInfo: "Persia was the empire that conquered Babylon and allowed the Jews to return to Jerusalem and rebuild the temple.",
    biblicalReferences: "Ezra 1:1-11, Ezra 6:1-22, Esther 1:1-10:3, Daniel 5:28-6:28",
    importantEvents: "Jews return from exile; Temple rebuilding; Esther's story; Daniel's service",
    coordinates: "32.0000,53.0000",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 59,
    name: "Greece",
    startYear: -400,
    endYear: 100,
    generalInfo: "Greece was the empire of Alexander the Great and later the Seleucid dynasty that ruled over Israel.",
    biblicalReferences: "Daniel 8:21, Daniel 11:2-4, 1 Maccabees 1:1-9, Acts 16:1-17:34",
    importantEvents: "Alexander's conquests; Hellenistic influence; Paul's missionary journeys",
    coordinates: "39.0742,21.8243",
    emoji: "🏛️",
    locationType: "region"
  },
  {
    id: 60,
    name: "Rome",
    startYear: -100,
    endYear: 100,
    generalInfo: "Rome was the capital of the Roman Empire that ruled over Israel during Jesus' time and the early church period.",
    biblicalReferences: "Luke 2:1-2, Acts 18:2, Acts 23:11, Acts 28:14-31",
    importantEvents: "Jesus' birth during census; Paul's appeal to Caesar; Early church persecution",
    coordinates: "41.9028,12.4964",
    emoji: "🏛️",
    locationType: "city"
  }
];
