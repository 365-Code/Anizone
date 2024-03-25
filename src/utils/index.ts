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
      animeTitle.english?.includes("Hunter") ? animeTitle.english : animeTitle?.romaji ||
      animeTitle?.english ||
      animeTitle?.userPreferred
    )
      ?.toLowerCase()
      .replaceAll('-', ' ')
      .replaceAll("-", " ");
    return removeChars(animId as string, [",", ":", "?", "!", ".", '(', ')', '{', '}', '[',']', '/', '\\' ])
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