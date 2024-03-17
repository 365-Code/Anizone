import { ITitle } from "@consumet/extensions"

const urls = [
    {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8',
        isM3U8: true,
        quality: '360p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8',
        isM3U8: true,
        quality: '480p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8',
        isM3U8: true,
        quality: '720p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8',
        isM3U8: true,
        quality: '1080p'
      },
      {
        url: 
          'https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8',
        isM3U8: true,
        quality: 'default'
      },
      {
        url: 
          'https://www034.anicdnstream.info/videos/hls/tW-4RhExcA2l9MC5FB3D3g/1709934012/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8',
        isM3U8: true,
        quality: 'backup'
      }
    ]


export type fetchAnimeInfoType = {
  id: string,
  image: string,
  title: string,
  genres: string[],
  status: string,
  rating: number,
  type: string,
  startDate: { year: number, month: number, day: number },
  season: string,
  studios: string[]
}

export const removeChars = (aName: string, characters: string[]) => {
  let animeId = aName
  characters.forEach(element => {
    if(animeId)
      animeId = animeId.replaceAll(element, "");
  });
  return animeId

}

export const toAnimeId = (animeTitle: ITitle) => {
  // const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll(' ', '-');
  const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll('-', ' ');
  return removeChars( animId as string, [',', ':', '?', '!', '.'])?.replace(/\s+/g, ' ').replaceAll(' ', '-')
}

export const animeData = 
[
    {
      id: '16498',
      malId: 16498,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: 'Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\n' +
        'Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n' +
        '(Source: MangaHelpers) ',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg',
      coverHash: 'hash',
      rating: 84,
      releaseDate: 2013,
      color: '#e4a15d',
      genres: [Array],
      totalEpisodes: 25,
      duration: 24,
      type: 'TV'
    },
    {
      id: '101922',
      malId: 38000,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: 'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n' +
        '<br>\n' +
        '(Source: Crunchyroll)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg',
      coverHash: 'hash',
      rating: 83,
      releaseDate: 2019,
      color: '#4B4A95',
      genres: [Array],
      totalEpisodes: 26,
      duration: 24,
      type: 'TV'
    },
    {
      id: '1535',
      malId: 1535,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: 'Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n' +
        '<br>\n' +
        'The consequences of Light’s actions will set the world ablaze.<br>\n' +
        '<br>\n' +
        '(Source: Viz Media)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg',
      coverHash: 'hash',
      rating: 84,
      releaseDate: 2006,
      color: null,
      genres: [Array],
      totalEpisodes: 37,
      duration: 23,
      type: 'TV'
    },
    {
      id: '21459',
      malId: 31964,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n" +
        '\n' +
        "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n" +
        '\n' +
        '(Source: Viz Media)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg',
      coverHash: 'hash',
      rating: 77,
      releaseDate: 2016,
      color: '#e4c935',
      genres: [Array],
      totalEpisodes: 13,
      duration: 24,
      type: 'TV'
    },
    {
      id: '113415',
      malId: 40748,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: 'A boy fights... for "the right death."<br>\n' +
        '<br>\n' +
        "Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n" +
        '<br>\n' +
        'Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n' +
        '<br><br>\n' +
        '(Source: Crunchyroll)<br>\n' +
        '<br>\n' +
        '<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg',
      coverHash: 'hash',
      rating: 86,
      releaseDate: 2020,
      color: '#e45d5d',
      genres: [Array],
      totalEpisodes: 24,
      duration: 24,
      type: 'TV'
    },
    {
      id: '11061',
      malId: 11061,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png',
      imageHash: 'hash',
      trailer: [Object],
      description: 'A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\n' +
        "A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\n" +
        'After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg',
      coverHash: 'hash',
      rating: 89,
      releaseDate: 2011,
      color: '#f1d65d',
      genres: [Array],
      totalEpisodes: 148,
      duration: 24,
      type: 'TV'
    },
    {
      id: '21087',
      malId: 30276,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n" +
        '<br><br>\n' +
        "The lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n" +
        '\n',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg',
      coverHash: 'hash',
      rating: 83,
      releaseDate: 2015,
      color: '#e4ae5d',
      genres: [Array],
      totalEpisodes: 12,
      duration: 24,
      type: 'TV'
    },
    {
      id: '20605',
      malId: 22319,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: 'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n' +
        '<br><br>\n' +
        '(Source: Anime News Network)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg',
      coverHash: 'hash',
      rating: 75,
      releaseDate: 2014,
      color: '#35DDFF',
      genres: [Array],
      totalEpisodes: 12,
      duration: 24,
      type: 'TV'
    },
    {
      id: '20958',
      malId: 25777,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n" +
        '\n' +
        '(Source: Funimation)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg',
      coverHash: 'hash',
      rating: 84,
      releaseDate: 2017,
      color: '#6AA66F',
      genres: [Array],
      totalEpisodes: 12,
      duration: 25,
      type: 'TV'
    },
    {
      id: '11757',
      malId: 11757,
      title: [Object],
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg',
      imageHash: 'hash',
      trailer: [Object],
      description: "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n" +
        '(Source: Crunchyroll)',
      status: 'Completed',
      cover: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg',
      coverHash: 'hash',
      rating: 69,
      releaseDate: 2012,
      color: '#5DC0E4',
      genres: [Array],
      totalEpisodes: 25,
      duration: 23,
      type: 'TV'
    }
  ]


const epInfo = {
  "headers": {
    "Referer": "https://embtaku.pro/embedplus?id=MTUwMjMx&token=RSVC1LRJ39meq_4-cKY7Rg&expires=1710517069"
  },
  "sources": [
    {
      "url": "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8",
      "isM3U8": true,
      "quality": "360p"
    },
    {
      "url": "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8",
      "isM3U8": true,
      "quality": "480p"
    },
    {
      "url": "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8",
      "isM3U8": true,
      "quality": "720p"
    },
    {
      "url": "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8",
      "isM3U8": true,
      "quality": "1080p"
    },
    {
      "url": "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      "isM3U8": true,
      "quality": "default"
    },
    {
      "url": "https://www034.anicdnstream.info/videos/hls/bWm5rbQWO0GkuH0oFo1nJA/1710524270/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      "isM3U8": true,
      "quality": "backup"
    }
  ],
  "download": "https://gogohd.net/download?id=MTUwMjMx&token=RSVC1LRJ39meq_4-cKY7Rg&expires=1710517069"
}


const movInfo = {
    "headers": {
      "Referer": "https://embtaku.pro/embedplus?id=MjA1MzE2&token=E9AcFsr_JtEaooGyPZpK5A&expires=1710571187"
    },
    "sources": [
      {
        "url": "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.360.m3u8",
        "isM3U8": true,
        "quality": "360p"
      },
      {
        "url": "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.480.m3u8",
        "isM3U8": true,
        "quality": "480p"
      },
      {
        "url": "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.720.m3u8",
        "isM3U8": true,
        "quality": "720p"
      },
      {
        "url": "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.1080.m3u8",
        "isM3U8": true,
        "quality": "1080p"
      },
      {
        "url": "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.m3u8",
        "isM3U8": true,
        "quality": "default"
      },
      {
        "url": "https://www116.anicdnstream.info/videos/hls/MtjRjpRdBWr9C81uRb14DQ/1710578389/205316/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.m3u8",
        "isM3U8": true,
        "quality": "backup"
      }
    ],
    "download": "https://gogohd.net/download?id=MjA1MzE2&token=E9AcFsr_JtEaooGyPZpK5A&expires=1710571187",
    "success": true
}