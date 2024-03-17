"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import ListAnime from "@/components/ListAnime";
import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";

const Page = () => {
  const fetchAnimeList = async () => {
    try {
      const data = await fetch(
        `/api/anilist/fetchPopularAnime?page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        setHasMore(res.hasNextPage);
        setAnimeList((preVal) => [...preVal, ...res.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [animeList, setAnimeList] = useState<IAnimeResult[]>([]);
  // console.log(animeList.length);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchAnimeList();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <main>
      <div className="my-container max-w-full w-[600px]">
        <SearchBar />
      </div>
      <ListAnime id={"homepage"} title="" animeList={animeList} />
      <InfiniteScroll
        id="homepage"
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

export default Page;
