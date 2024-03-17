"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import ListAnime from "@/components/ListAnime";
import SearchBar from "@/components/SearchBar";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";

const FetchMovies = () => {
  const fetchMovies = async () => {
    try {
      const data = await fetch(
        `/api/anilist/advanceSearch?type=MOVIE&page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        if(movies.length == 0){
          setPage(page + 1)
        }
        setHasMore(res.hasNextPage);
        setMovies((preVal) => [...preVal, res.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [movies, setMovies] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchMovies();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <main>
      <div id="movies" className="no-scrollbar overflow-y-scroll max-h-[106vh]">
      {
        movies?.map((movieList, ind) => 
          <DisplayAnime key={ind} title="" animeList={movieList} />
        )
      }
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
    // <HomePage />
  );
};

export default FetchMovies;
