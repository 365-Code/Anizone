import { IAnimeInfo, IAnimeResult, ISearch } from "@consumet/extensions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ISearchResults = {
  currentPage: number;
  hasNextPage?: boolean;
  results: Array<IAnimeResult[]>;
};

type utilites = {
  currentAnime: IAnimeInfo;
  recentSearches: string[];
  movies: ISearchResults;
  trending: ISearchResults;
};

const initialState = {
  value: {} as utilites,
};

const utilitySlice = createSlice({
  name: "utilites",
  initialState,
  reducers: {
    loadCurrentAnime: (state) => {
      const data = localStorage.getItem("currentAnime");
      if (data) {
        state.value.currentAnime = JSON.parse(data);
      }
    },
    setCurrentAnime: (state, action: PayloadAction<IAnimeInfo>) => {
      state.value.currentAnime = action.payload;
      localStorage.setItem("currentAnime", JSON.stringify(action.payload));
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
    setTrendingAnime: (state, action: PayloadAction<ISearchResults>) => {
      console.log(action.payload);
      state.value.trending = action.payload;
    },
  },
});

const utilityReducer = utilitySlice.reducer;
export default utilityReducer;
export const {
  setCurrentAnime,
  setRecentSearches,
  addToRecentSearches,
  loadCurrentAnime,
  setTrendingAnime,
} = utilitySlice.actions;
