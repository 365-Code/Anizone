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
