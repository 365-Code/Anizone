"use client";
import FetchRecentEpisodes from "@/components/FetchRecentEpisodes";
import InfiniteScroll from "@/components/InfiniteScroll";
import ListAnime from "@/components/ListAnime";
import Loader from "@/components/Loader";
import Loader2 from "@/components/Loader2";
import SearchBar from "@/components/SearchBar";
import { setHomeAnime } from "@/redux/features/utilitySlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeResult } from "@consumet/extensions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const fetchAnimeList = async () => {
    try {
      const data = await fetch(
        `/api/anilist/advanceSearch?page=${page}&perPage=${perPage}`,
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        setHasMore(res.hasNextPage);
        setAnimeList((preVal) => [...preVal, ...res.results]);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: [...animeList, ...res.results],
        };
        dispatch(setHomeAnime(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [animeList, setAnimeList] = useState<IAnimeResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;

  const dispatch = useDispatch<AppDispatch>();
  const homeAnime = useAppSelector(
    (state) => state.utilityReducer.value.homeAnime,
  );
  useEffect(() => {
    if (homeAnime) {
      setAnimeList(homeAnime.results);
      setPage(homeAnime.currentPage || 1);
      setHasMore(homeAnime.hasNextPage || true);
    }
  }, []);

  useEffect(() => {
    if ((homeAnime && page == 1) || homeAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchAnimeList();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);

  return (
    <main>
      <FetchRecentEpisodes />
      <ListAnime id={"homepage"} title="Home" animeList={animeList} />
      <InfiniteScroll
        id="homepage"
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        setLoading={setLoading}
      />
    </main>
  );
};

export default Page;
