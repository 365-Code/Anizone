import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";

export type ISearchResults = {
  currentPage: number;
  hasNextPage: boolean;
  results: Array<IAnimeResult[]>;
};

export interface IEpisodeCard extends IAnimeInfo {
  id: string;
  title: ITitle;
  image: string;
  episodeTitle: string;
  episodeNumber: number;
  // type: string
}

export type fetchAnimeInfoType = {
    id: string;
    image: string;
    title: string;
    genres: string[];
    status: string;
    rating: number;
    type: string;
    startDate: { year: number; month: number; day: number };
    season: string;
    studios: string[];
  };

  
export const removeChars = (aName: string, characters: string[]) => {
    let animeId = aName;
    characters.forEach((element) => {
      if (animeId) animeId = animeId.replaceAll(element, "");
    });
    return animeId;
  };
  
  export const toAnimeId = (animeTitle: ITitle) => {
    // const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll(' ', '-');
    const animId = (
      animeTitle?.romaji ||
      animeTitle?.english ||
      animeTitle?.userPreferred
    )
      ?.toLowerCase()
      .replaceAll("-", " ");
    return removeChars(animId as string, [",", ":", "?", "!", "."])
      ?.replace(/\s+/g, " ")
      .replaceAll(" ", "-");
  };

const urls = [
  {
    url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8",
    isM3U8: true,
    quality: "360p",
  },
  {
    url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8",
    isM3U8: true,
    quality: "480p",
  },
  {
    url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8",
    isM3U8: true,
    quality: "720p",
  },
  {
    url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8",
    isM3U8: true,
    quality: "1080p",
  },
  {
    url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
    isM3U8: true,
    quality: "default",
  },
  {
    url: "https://www034.anicdnstream.info/videos/hls/tW-4RhExcA2l9MC5FB3D3g/1709934012/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
    isM3U8: true,
    quality: "backup",
  },
];

export const curAnime = {
  id: "124080",

  title: { romaji: "Horimiya", english: "Horimiya", native: "ホリミヤ" },

  malId: 42897,

  synonyms: ["堀与宫村", "โฮริมิยะ สาวมั่นกับนายมืดมน", "Хоримия"],

  isLicensed: true,

  isAdult: false,

  countryOfOrigin: "JP",

  trailer: {
    id: "tryurXgGqkI",

    site: "youtube",

    thumbnail: "https://i.ytimg.com/vi/tryurXgGqkI/hqdefault.jpg",

    thumbnailHash: "hash",
  },

  image:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",

  imageHash: "hash",

  popularity: 354943,

  color: "#5dc9f1",

  cover:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",

  coverHash: "hash",

  description:
    "A secret life is the one thing they have in common. At school, Hori is a prim and perfect social butterfly, but the truth is she's a brash homebody. Meanwhile, under a gloomy facade, Miyamura hides a gentle heart, along with piercings and tattoos. In a chance meeting, they both reveal a side they've never shown. Could this blossom into something new?<br>\n" +
    "<br>\n" +
    "(Source: Funimation)",

  status: "Completed",

  releaseDate: 2021,

  startDate: { year: 2021, month: 1, day: 10 },

  endDate: { year: 2021, month: 4, day: 4 },

  totalEpisodes: 13,

  currentEpisode: 13,

  rating: 81,

  duration: 24,

  genres: ["Comedy", "Romance", "Slice of Life"],

  season: "WINTER",

  studios: ["CloverWorks"],

  subOrDub: "sub",

  type: "TV",
};

export const animeData = [
  {
    id: "16498",
    malId: 16498,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\n" +
      "Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n" +
      "(Source: MangaHelpers) ",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2013,
    color: "#e4a15d",
    genres: [Array],
    totalEpisodes: 25,
    duration: 24,
    type: "TV",
  },
  {
    id: "101922",
    malId: 38000,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n" +
      "<br>\n" +
      "(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    coverHash: "hash",
    rating: 83,
    releaseDate: 2019,
    color: "#4B4A95",
    genres: [Array],
    totalEpisodes: 26,
    duration: 24,
    type: "TV",
  },
  {
    id: "1535",
    malId: 1535,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n" +
      "<br>\n" +
      "The consequences of Light’s actions will set the world ablaze.<br>\n" +
      "<br>\n" +
      "(Source: Viz Media)",
    status: "Completed",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2006,
    color: null,
    genres: [Array],
    totalEpisodes: 37,
    duration: 23,
    type: "TV",
  },
  {
    id: "21459",
    malId: 31964,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n" +
      "\n" +
      "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n" +
      "\n" +
      "(Source: Viz Media)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
    coverHash: "hash",
    rating: 77,
    releaseDate: 2016,
    color: "#e4c935",
    genres: [Array],
    totalEpisodes: 13,
    duration: 24,
    type: "TV",
  },
  {
    id: "113415",
    malId: 40748,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      'A boy fights... for "the right death."<br>\n' +
      "<br>\n" +
      "Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n" +
      "<br>\n" +
      "Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n" +
      "<br><br>\n" +
      "(Source: Crunchyroll)<br>\n" +
      "<br>\n" +
      "<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    coverHash: "hash",
    rating: 86,
    releaseDate: 2020,
    color: "#e45d5d",
    genres: [Array],
    totalEpisodes: 24,
    duration: 24,
    type: "TV",
  },
  {
    id: "11061",
    malId: 11061,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
    imageHash: "hash",
    trailer: [Object],
    description:
      "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\n" +
      "A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\n" +
      "After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
    coverHash: "hash",
    rating: 89,
    releaseDate: 2011,
    color: "#f1d65d",
    genres: [Array],
    totalEpisodes: 148,
    duration: 24,
    type: "TV",
  },
  {
    id: "21087",
    malId: 30276,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n" +
      "<br><br>\n" +
      "The lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n" +
      "\n",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
    coverHash: "hash",
    rating: 83,
    releaseDate: 2015,
    color: "#e4ae5d",
    genres: [Array],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "20605",
    malId: 22319,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n' +
      "<br><br>\n" +
      "(Source: Anime News Network)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
    coverHash: "hash",
    rating: 75,
    releaseDate: 2014,
    color: "#35DDFF",
    genres: [Array],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "20958",
    malId: 25777,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n" +
      "\n" +
      "(Source: Funimation)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2017,
    color: "#6AA66F",
    genres: [Array],
    totalEpisodes: 12,
    duration: 25,
    type: "TV",
  },
  {
    id: "11757",
    malId: 11757,
    title: [Object],
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",
    imageHash: "hash",
    trailer: [Object],
    description:
      "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n" +
      "(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    coverHash: "hash",
    rating: 69,
    releaseDate: 2012,
    color: "#5DC0E4",
    genres: [Array],
    totalEpisodes: 25,
    duration: 23,
    type: "TV",
  },
];

const epInfo = {
  headers: {
    Referer:
      "https://embtaku.pro/embedplus?id=MTUwMjMx&token=RSVC1LRJ39meq_4-cKY7Rg&expires=1710517069",
  },
  sources: [
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8",
      isM3U8: true,
      quality: "360p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8",
      isM3U8: true,
      quality: "480p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8",
      isM3U8: true,
      quality: "720p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8",
      isM3U8: true,
      quality: "1080p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      isM3U8: true,
      quality: "default",
    },
    {
      url: "https://www034.anicdnstream.info/videos/hls/bWm5rbQWO0GkuH0oFo1nJA/1710524270/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      isM3U8: true,
      quality: "backup",
    },
  ],
  download:
    "https://gogohd.net/download?id=MTUwMjMx&token=RSVC1LRJ39meq_4-cKY7Rg&expires=1710517069",
};

export const movInfo = {
  headers: {
    Referer:
      "https://embtaku.pro/embedplus?id=MjA1MzE2&token=E9AcFsr_JtEaooGyPZpK5A&expires=1710571187",
  },
  sources: [
    {
      url: "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.360.m3u8",
      isM3U8: true,
      quality: "360p",
    },
    {
      url: "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.480.m3u8",
      isM3U8: true,
      quality: "480p",
    },
    {
      url: "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.720.m3u8",
      isM3U8: true,
      quality: "720p",
    },
    {
      url: "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.1080.m3u8",
      isM3U8: true,
      quality: "1080p",
    },
    {
      url: "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.m3u8",
      isM3U8: true,
      quality: "default",
    },
    {
      url: "https://www116.anicdnstream.info/videos/hls/MtjRjpRdBWr9C81uRb14DQ/1710578389/205316/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.m3u8",
      isM3U8: true,
      quality: "backup",
    },
  ],
  download:
    "https://gogohd.net/download?id=MjA1MzE2&token=E9AcFsr_JtEaooGyPZpK5A&expires=1710571187",
  success: true,
};

// {
//   "id": "171144",
//   "malId": "57502",
//   "title": {
//     "romaji": "Meiji Gekken: 1874",
//     "english": "Meiji Gekken: 1874",
//     "native": "明治撃剣－1874－"
//   },
//   "image": "https://artworks.thetvdb.com/banners/v4/series/443181/posters/65a503ae52daf.jpg",
//   "imageHash": "hash",
//   "episodeId": "undefined",
//   "episodeTitle": "Episode 10",
//   "episodeNumber": 10,
//   "type": "TV"
// }

export const animData = [
  {
    id: "16498",

    malId: 16498,

    title: {
      romaji: "Shingeki no Kyojin",

      english: "Attack on Titan",

      native: "進撃の巨人",

      userPreferred: "Shingeki no Kyojin",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",

    coverHash: "hash",

    popularity: 752780,

    totalEpisodes: 25,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\n" +
      "Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n" +
      "(Source: MangaHelpers) ",

    genres: ["Action", "Drama", "Fantasy", "Mystery"],

    rating: 84,

    color: "#e4a15d",

    type: "TV",

    releaseDate: 2013,
  },

  {
    id: "101922",

    malId: 38000,

    title: {
      romaji: "Kimetsu no Yaiba",

      english: "Demon Slayer: Kimetsu no Yaiba",

      native: "鬼滅の刃",

      userPreferred: "Kimetsu no Yaiba",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",

    coverHash: "hash",

    popularity: 710989,

    totalEpisodes: 26,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n" +
      "<br>\n" +
      "(Source: Crunchyroll)",

    genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],

    rating: 83,

    color: "#4B4A95",

    type: "TV",

    releaseDate: 2019,
  },

  {
    id: "1535",

    malId: 1535,

    title: {
      romaji: "DEATH NOTE",

      english: "Death Note",

      native: "DEATH NOTE",

      userPreferred: "DEATH NOTE",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",

    imageHash: "hash",

    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",

    coverHash: "hash",

    popularity: 684848,

    totalEpisodes: 37,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n" +
      "<br>\n" +
      "The consequences of Light’s actions will set the world ablaze.<br>\n" +
      "<br>\n" +
      "(Source: Viz Media)",

    genres: ["Mystery", "Psychological", "Supernatural", "Thriller"],

    rating: 84,

    color: null,

    type: "TV",

    releaseDate: 2006,
  },

  {
    id: "21459",

    malId: 31964,

    title: {
      romaji: "Boku no Hero Academia",

      english: "My Hero Academia",

      native: "僕のヒーローアカデミア",

      userPreferred: "Boku no Hero Academia",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",

    coverHash: "hash",

    popularity: 653012,

    totalEpisodes: 13,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n" +
      "\n" +
      "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n" +
      "\n" +
      "(Source: Viz Media)",

    genres: ["Action", "Adventure", "Comedy"],

    rating: 77,

    color: "#e4c935",

    type: "TV",

    releaseDate: 2016,
  },

  {
    id: "113415",

    malId: 40748,

    title: {
      romaji: "Jujutsu Kaisen",

      english: "JUJUTSU KAISEN",

      native: "呪術廻戦",

      userPreferred: "Jujutsu Kaisen",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",

    coverHash: "hash",

    popularity: 648125,

    totalEpisodes: 24,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      'A boy fights... for "the right death."<br>\n' +
      "<br>\n" +
      "Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n" +
      "<br>\n" +
      "Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n" +
      "<br><br>\n" +
      "(Source: Crunchyroll)<br>\n" +
      "<br>\n" +
      "<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>",

    genres: ["Action", "Drama", "Supernatural"],

    rating: 86,

    color: "#e45d5d",

    type: "TV",

    releaseDate: 2020,
  },

  {
    id: "11061",

    malId: 11061,

    title: {
      romaji: "HUNTER×HUNTER (2011)",

      english: "Hunter x Hunter (2011)",

      native: "HUNTER×HUNTER (2011)",

      userPreferred: "HUNTER×HUNTER (2011)",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",

    coverHash: "hash",

    popularity: 612364,

    totalEpisodes: 148,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\n" +
      "A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\n" +
      "After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",

    genres: ["Action", "Adventure", "Fantasy"],

    rating: 89,

    color: "#f1d65d",

    type: "TV",

    releaseDate: 2011,
  },

  {
    id: "21087",

    malId: 30276,

    title: {
      romaji: "One Punch Man",

      english: "One-Punch Man",

      native: "ワンパンマン",

      userPreferred: "One Punch Man",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",

    coverHash: "hash",

    popularity: 569715,

    totalEpisodes: 12,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n" +
      "<br><br>\n" +
      "The lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n" +
      "\n" +
      "",

    genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],

    rating: 83,

    color: "#e4ae5d",

    type: "TV",

    releaseDate: 2015,
  },

  {
    id: "20605",

    malId: 22319,

    title: {
      romaji: "Tokyo Ghoul",

      english: "Tokyo Ghoul",

      native: "東京喰種 トーキョーグール",

      userPreferred: "Tokyo Ghoul",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",

    coverHash: "hash",

    popularity: 545825,

    totalEpisodes: 12,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n' +
      "<br><br>\n" +
      "(Source: Anime News Network)",

    genres: [
      "Action",
      "Drama",
      "Horror",
      "Mystery",
      "Psychological",
      "Supernatural",
    ],

    rating: 75,

    color: "#35DDFF",

    type: "TV",

    releaseDate: 2014,
  },

  {
    id: "20958",

    malId: 25777,

    title: {
      romaji: "Shingeki no Kyojin 2",

      english: "Attack on Titan Season 2",

      native: "進撃の巨人２",

      userPreferred: "Shingeki no Kyojin 2",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",

    coverHash: "hash",

    popularity: 538318,

    totalEpisodes: 12,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n" +
      "\n" +
      "(Source: Funimation)",

    genres: ["Action", "Drama", "Fantasy", "Mystery"],

    rating: 84,

    color: "#6AA66F",

    type: "TV",

    releaseDate: 2017,
  },

  {
    id: "11757",

    malId: 11757,

    title: {
      romaji: "Sword Art Online",

      english: "Sword Art Online",

      native: "ソードアート・オンライン",

      userPreferred: "Sword Art Online",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",

    coverHash: "hash",

    popularity: 534733,

    totalEpisodes: 25,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n" +
      "(Source: Crunchyroll)",

    genres: ["Action", "Adventure", "Fantasy", "Romance"],

    rating: 69,

    color: "#5DC0E4",

    type: "TV",

    releaseDate: 2012,
  },

  {
    id: "5114",

    malId: 5114,

    title: {
      romaji: "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",

      english: "Fullmetal Alchemist: Brotherhood",

      native: "鋼の錬金術師 FULLMETAL ALCHEMIST",

      userPreferred: "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-KJTQz9AIm6Wk.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",

    coverHash: "hash",

    popularity: 526875,

    totalEpisodes: 64,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      '"In order for something to be obtained, something of equal value must be lost."\n' +
      "<br><br>\n" +
      "Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n" +
      "<br><br>\n" +
      "Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n" +
      "<br><br>\n" +
      "(Source: MAL Rewrite)",

    genres: ["Action", "Adventure", "Drama", "Fantasy"],

    rating: 90,

    color: "#e4c993",

    type: "TV",

    releaseDate: 2009,
  },

  {
    id: "20",

    malId: 20,

    title: {
      romaji: "NARUTO",

      english: "Naruto",

      native: "NARUTO -ナルト-",

      userPreferred: "NARUTO",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-YJvLbgJQPCoI.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg",

    coverHash: "hash",

    popularity: 523711,

    totalEpisodes: 220,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\n" +
      "Shunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n" +
      "(Source: MAL Rewrite)",

    genres: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Supernatural",
    ],

    rating: 79,

    color: "#e47850",

    type: "TV",

    releaseDate: 2002,
  },

  {
    id: "21519",

    malId: 32281,

    title: {
      romaji: "Kimi no Na wa.",

      english: "Your Name.",

      native: "君の名は。",

      userPreferred: "Kimi no Na wa.",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-XIr3PeczUjjF.png",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21519-1ayMXgNlmByb.jpg",

    coverHash: "hash",

    popularity: 509304,

    totalEpisodes: 1,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.<br>\n" +
      "<br>\n" +
      "One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.<br>\n" +
      "<br>\n" +
      "<i>Kimi no Na wa.</i> revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.<br>\n" +
      "<br>\n" +
      "(Source: MAL Rewrite)",

    genres: ["Drama", "Romance", "Supernatural"],

    rating: 85,

    color: "#0da1e4",

    type: "MOVIE",

    releaseDate: 2016,
  },

  {
    id: "21",

    malId: 21,

    title: {
      romaji: "ONE PIECE",

      english: "ONE PIECE",

      native: "ONE PIECE",

      userPreferred: "ONE PIECE",
    },

    status: "Ongoing",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",

    coverHash: "hash",

    popularity: 506722,

    totalEpisodes: 1097,

    currentEpisode: 1097,

    countryOfOrigin: "JP",

    description:
      "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\n" +
      "Enter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n" +
      "<b>*This includes following special episodes:</b><br>\n" +
      "- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n" +
      "- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n" +
      "- Team Formation! Save Chopper (Episode 542)<br>\n" +
      "- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n" +
      "- 20th Anniversary! Special Romance Dawn (Episode 907)",

    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],

    rating: 88,

    color: "#e4a15d",

    type: "TV",

    releaseDate: 1999,
  },

  {
    id: "21856",

    malId: 33486,

    title: {
      romaji: "Boku no Hero Academia 2",

      english: "My Hero Academia Season 2",

      native: "僕のヒーローアカデミア２",

      userPreferred: "Boku no Hero Academia 2",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21856-gutauxhWAwn6.png",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21856-wtSHgeHFmzdG.jpg",

    coverHash: "hash",

    popularity: 502185,

    totalEpisodes: 25,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all round will decide who is the top Hero in training.<br><br>(Source: Anime News Network)",

    genres: ["Action", "Adventure", "Comedy"],

    rating: 79,

    color: "#e48643",

    type: "TV",

    releaseDate: 2017,
  },

  {
    id: "99147",

    malId: 35760,

    title: {
      romaji: "Shingeki no Kyojin 3",

      english: "Attack on Titan Season 3",

      native: "進撃の巨人３",

      userPreferred: "Shingeki no Kyojin 3",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99147-5RXELRvwjFl6.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99147-HACsFVrynFf5.jpg",

    coverHash: "hash",

    popularity: 499941,

    totalEpisodes: 12,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Eren and his companions in the 104th are assigned to the newly-formed Levi Squad, whose assignment is to keep Eren and Historia safe given Eren's newly-discovered power and Historia's knowledge and pedigree. Levi and Erwin have good reason to be concerned, because the priest of the Church that Hanji had hidden away was found tortured to death, making it clear that the Military Police are involved with the cover-up. Things get more harrowing when the MPs make a move on Erwin and the Levi Squad narrowly avoids capture. Eren is also having problems with his Titan transformation, and a deadly killer has been hired to secure Eren and Historia, one Levi knows all too well from his youth.<br>\n" +
      "<br>\n" +
      "(Source: Anime News Network)",

    genres: ["Action", "Drama", "Fantasy", "Mystery"],

    rating: 85,

    color: "#4386e4",

    type: "TV",

    releaseDate: 2018,
  },

  {
    id: "20954",

    malId: 28851,

    title: {
      romaji: "Koe no Katachi",

      english: "A Silent Voice",

      native: "聲の形",

      userPreferred: "Koe no Katachi",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-UMb6Kl7ZL8Ke.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg",

    coverHash: "hash",

    popularity: 496563,

    totalEpisodes: 1,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.\n" +
      "<br><br>\n" +
      "(Source: Eleven Arts)",

    genres: ["Drama", "Romance", "Slice of Life"],

    rating: 88,

    color: "#5dbbe4",

    type: "MOVIE",

    releaseDate: 2016,
  },

  {
    id: "101759",

    malId: 37779,

    title: {
      romaji: "Yakusoku no Neverland",

      english: "The Promised Neverland",

      native: "約束のネバーランド",

      userPreferred: "Yakusoku no Neverland",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101759-NhSwxv7HY9y9.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",

    coverHash: "hash",

    popularity: 487509,

    totalEpisodes: 12,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.\n" +
      "<br><br>\n" +
      "(Source: Viz Media)",

    genres: [
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Psychological",
      "Thriller",
    ],

    rating: 83,

    color: "#e4ae50",

    type: "TV",

    releaseDate: 2019,
  },

  {
    id: "20755",

    malId: 24833,

    title: {
      romaji: "Ansatsu Kyoushitsu",

      english: "Assassination Classroom",

      native: "暗殺教室",

      userPreferred: "Ansatsu Kyoushitsu",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20755-q0b3Ok1cAbPd.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20755-D4ipww9U8YkC.jpg",

    coverHash: "hash",

    popularity: 469023,

    totalEpisodes: 22,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "The students of class 3-E have a mission: kill their teacher before graduation. He has already destroyed the moon, and has promised to destroy the Earth if he can not be killed within a year. But how can this class of misfits kill a tentacled monster, capable of reaching Mach 20 speed, who may be the best teacher any of them have ever had?",

    genres: ["Action", "Comedy", "Drama", "Supernatural"],

    rating: 79,

    color: "#e4d650",

    type: "TV",

    releaseDate: 2015,
  },

  {
    id: "110277",

    malId: 40028,

    title: {
      romaji: "Shingeki no Kyojin: The Final Season",

      english: "Attack on Titan Final Season",

      native: "進撃の巨人 The Final Season",

      userPreferred: "Shingeki no Kyojin: The Final Season",
    },

    status: "Completed",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-qDRIhu50PXzz.jpg",

    imageHash: "hash",

    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110277-iuGn6F5bK1U1.jpg",

    coverHash: "hash",

    popularity: 463962,

    totalEpisodes: 16,

    currentEpisode: null,

    countryOfOrigin: "JP",

    description:
      "It’s been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?<br>\n" +
      "<br>\n" +
      "(Source: Crunchyroll)",

    genres: ["Action", "Drama", "Fantasy", "Mystery"],

    rating: 86,

    color: "#ae5d1a",

    type: "TV",

    releaseDate: 2021,
  },
];


export const homeAnime = [...animData, ...animData]