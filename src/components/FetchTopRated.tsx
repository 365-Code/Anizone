"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";

const FetchTopRated = () => {

  const fetchTopRated = async () => {
    try {
      const data = await fetch(
        `/api/anilist/fetchPopularAnime?page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        if (topRated.length == 0) {
            setPage(page + 1);
        }
        setHasMore(res.hasNextPage);
        setTopRated((preVal) => [...preVal, res.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [topRated, setTopRated] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchTopRated();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <main>
      <div
        id="topRated"
        className="no-scrollbar overflow-y-scroll max-h-[106vh]"
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
    // <HomePage />
  );
};

export default FetchTopRated;
