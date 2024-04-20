import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";

export interface charInfo {
  character: {
    mal_id:  number,
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
  return animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred;
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
