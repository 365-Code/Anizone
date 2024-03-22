"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setMovieAnime } from "@/redux/features/utilitySlice";
import Background from "./Background";

const FetchMovies = () => {
  const fetchMovies = async () => {
    try {
      const data = await fetch(
        `/api/anilist/advanceSearch?type=MOVIE&page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        // if(movies.length == 0){
        if (page % 2 == 1) {
          setPage((preVal) => preVal + 1);
        }
        setHasMore(res.hasNextPage);
        setMovies((preVal) => [...preVal, res.results]);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: [...movies, res.results],
        };
        dispatch(setMovieAnime(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [movies, setMovies] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;

  const dispatch = useDispatch<AppDispatch>();
  const movieAnime = useAppSelector(
    (state) => state.utilityReducer.value.movies
  );

  useEffect(() => {
    if (movieAnime) {
      setMovies(movieAnime.results);
      setPage(movieAnime.currentPage);
      setHasMore(movieAnime.hasNextPage);
    }
  }, []);

  useEffect(() => {
    if ((movieAnime && page == 1) || movieAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchMovies();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);

  return (
    <main>
      <div id="movies" className="no-scrollbar overflow-y-scroll max-h-[85vh]">
        {movies?.map((movieList, ind) => (
          <DisplayAnime key={ind} title="" animeList={movieList} />
        ))}
      </div>
      <InfiniteScroll
        id="movies"
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        setLoading={setLoading}
      />
    </main>
  );
};

export default FetchMovies;
