import { IEpisodeCard, ISearchResults } from "@/utils";
import { IAnimeInfo, IAnimeResult, ISearch } from "@consumet/extensions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type utilites = {
  currentAnime: IAnimeInfo;
  recentSearches: string[];
  recentEpisodes: IEpisodeCard[]
  homeAnime: ISearch<IAnimeResult>;
  movies: ISearchResults;
  series: ISearchResults;
  trending: ISearchResults;
  popular: ISearchResults;
  searchAnime: ISearch<IAnimeResult>;
  episodeAnime: IAnimeInfo;
  // searchAnime: ISearchResults;
};

const initialState = {
  value: {} as utilites,
};

const utilitySlice = createSlice({
  name: "utilites",
  initialState,
  reducers: {
    setCurrentAnime: (state, action: PayloadAction<IAnimeInfo>) => {
      state.value.currentAnime = action.payload;
    },
    setRecentSearches: (state) => {
      const data = localStorage.getItem("recentSearches");
      if (data) {
        state.value.recentSearches = JSON.parse(data);
      }
    },
    addToRecentSearches: (state, action: PayloadAction<string>) => {
      state.value.recentSearches = [
        action.payload,
        ...state.value.recentSearches,
      ];
    },
    setRecentEpisodes: (state, action: PayloadAction<IEpisodeCard[]>) => {
      state.value.recentEpisodes = action.payload
    },
    setHomeAnime: (state, action: PayloadAction<ISearch<IAnimeResult>>) => {
      state.value.homeAnime = action.payload
    },
    setMovieAnime: (state, action: PayloadAction<ISearchResults>) => {
      state.value.movies = action.payload;
    },
    setSeriesAnime: (state, action: PayloadAction<ISearchResults>) => {
      state.value.series = action.payload;
    },
    setTrendingAnime: (state, action: PayloadAction<ISearchResults>) => {
      state.value.trending = action.payload;
    },
    setPopularAnime: (state, action: PayloadAction<ISearchResults>) => {
      state.value.popular = action.payload;
    },
    setSearchAnime: (state, action: PayloadAction<ISearch<IAnimeResult>>) => {
      state.value.searchAnime = action.payload
    },
    setEpisodeAnime: (state, action: PayloadAction<IAnimeInfo>) => {
      state.value.episodeAnime = action.payload
    },
  },
});

const utilityReducer = utilitySlice.reducer;
export default utilityReducer;
export const {
  setCurrentAnime,
  setRecentSearches,
  addToRecentSearches,
  setRecentEpisodes,
  setHomeAnime,
  setMovieAnime,
  setSeriesAnime,
  setTrendingAnime,
  setPopularAnime,
  setSearchAnime,
  setEpisodeAnime
} = utilitySlice.actions;
