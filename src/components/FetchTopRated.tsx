"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setPopularAnime } from "@/redux/features/utilitySlice";

const FetchTopRated = () => {
  const fetchTopRated = async () => {
    try {
      const data = await fetch(
        `/api/anilist/fetchPopularAnime?page=${page}&perPage=${perPage}`,
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        if (page % 2 == 1) {
          setPage((preVal) => preVal + 1);
        }
        setHasMore(res.hasNextPage);
        setTopRated((preVal) => [...preVal, res.results]);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: [...topRated, res.results],
        };
        dispatch(setPopularAnime(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [topRated, setTopRated] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;

  const dispatch = useDispatch<AppDispatch>();
  const topRatedAnime = useAppSelector(
    (state) => state.utilityReducer.value.popular,
  );

  useEffect(() => {
    if (topRatedAnime) {
      setTopRated(topRatedAnime.results);
      setPage(topRatedAnime.currentPage);
      setHasMore(topRatedAnime.hasNextPage);
    }
  }, []);

  useEffect(() => {
    if ((topRatedAnime && page == 1) || topRatedAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchTopRated();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);

  return (
    <main>
      <div
        id="topRated"
        className="no-scrollbar max-h-[85vh] overflow-y-scroll"
      >
        {topRated?.map((topRatedList, ind) => (
          <DisplayAnime key={ind} animeList={topRatedList} />
        ))}
      </div>
      <InfiniteScroll
        id="topRated"
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        setLoading={setLoading}
      />
    </main>
  );
};

export default FetchTopRated;
