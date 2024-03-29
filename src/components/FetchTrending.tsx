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
      if(page % 2 == 0 || !hasMore){
        setLoading(false);
      }
      if (res.success) {
        if(page%2 == 1){
          setPage((preVal) => preVal+1)
        }
        setHasMore(res.hasNextPage);
        setTrending((preVal) => [...preVal, res.results]);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: [...trending, res.results]
        }
        dispatch(setTrendingAnime(data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [trending, setTrending] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;
  
  const dispatch = useDispatch<AppDispatch>();
  const trendingAnime = useAppSelector((state) => state.utilityReducer.value.trending)

  useEffect(() => {
    if (trendingAnime) {
      setTrending(trendingAnime.results);
      setPage(trendingAnime.currentPage);
      setHasMore(trendingAnime.hasNextPage)
    }
  }, []);
  

  useEffect(() => {
    if ((trendingAnime && page == 1) || trendingAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchTrending();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);

  return (
    <main>
      <div
        id="trending"
        className="no-scrollbar overflow-y-scroll max-h-[600px]"
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
  );
};

export default FetchTrending;
