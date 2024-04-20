import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";

export interface charInfo {
  character: {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  role: string;
}

export interface charDetails {
  image: string;
  name: string;
  role: string;
  malId: number;
}

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

export const toAnimeTitle = (animeTitle: ITitle) => {
  return (
    animeTitle?.romaji ||
    animeTitle?.english ||
    animeTitle?.userPreferred ||
    animeTitle?.native
  );
};

export const toAnimeId = (animeTitle: ITitle) => {
  // const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll(' ', '-');
  const animId = (
    animeTitle.english?.includes("Hunter")
      ? animeTitle.english
      : animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred
  )
    ?.toLowerCase()
    .replaceAll("-", " ")
    .replaceAll("-", " ");
  return removeChars(animId as string, [
    ",",
    ":",
    "?",
    "!",
    ".",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "/",
    "\\",
  ])
    ?.replace(/\s+/g, " ")
    .replaceAll(" ", "-");
};

export const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const genreList = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export const genreMap: { [index: string]: number } = {
  Action: 0,
  Adventure: 1,
  Cars: 2,
  Comedy: 3,
  Drama: 4,
  Fantasy: 5,
  Horror: 6,
  "Mahou Shoujo": 7,
  Mecha: 8,
  Music: 9,
  Mystery: 10,
  Psychological: 11,
  Romance: 12,
  "Sci-Fi": 13,
  "Slice of Life": 14,
  Sports: 15,
  Supernatural: 16,
  Thriller: 17,
};

export const seasons = ["All", "WINTER", "SPRING", "SUMMER", "FALL"];

export const types = [
  "All",
  "TV",
  "TV_SHORT",
  "OVA",
  "ONA",
  "MOVIE",
  "SPECIAL",
  "MUSIC",
];

export const stauses = [
  "All",
  "RELEASING",
  "NOT_YET_RELEASED",
  "FINISHED",
  "CANCELLED",
  "HIATUS",
];
