"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setTrendingAnime } from "@/redux/features/utilitySlice";

const FetchTrending = () => {
  const fetchTrending = async () => {
    try {
      const data = await fetch(
        `/api/anilist/fetchTrendingAnime?page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        if (trending.length == 0) {
            setPage(page + 1);
        }
        let data;
        if (trendingAnime) {
          data = {
            currentPage: res.currentPage,
            hasNextPage: res.hasNextPage,
            results: [trendingAnime.results, res.results],
          };
        } else {
          data = {
            currentPage: res.currentPage,
            hasNextPage: res.hasNextPage,
            results: [res.results],
          };
        }
        dispatch(setTrendingAnime(data));
        setHasMore(res.hasNextPage);
        setTrending((preVal) => [...preVal, res.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch<AppDispatch>();
  const trendingAnime = useAppSelector(
    (state) => state.utilityReducer.value.trending
  );

//   useEffect(() => {
//     if (trendingAnime) {
//       console.log(trendingAnime);
//       setTrending(trendingAnime.results);
//       setPage(trendingAnime.currentPage);
//     }
//   }, [trendingAnime]);

  const [trending, setTrending] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchTrending();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <main>
      <div
        id="trending"
        className="no-scrollbar overflow-y-scroll max-h-[106vh]"
      >
        {trending?.map((trendingList, ind) => (
          <DisplayAnime key={ind} animeList={trendingList} />
        ))}
      </div>
      <InfiniteScroll
        id="trending"
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

export default FetchTrending;
