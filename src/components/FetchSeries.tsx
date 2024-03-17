"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";

const FetchSeries = () => {
  const fetchSeries = async () => {
    try {
      const data = await fetch(
        `/api/anilist/advanceSearch?type=TV&page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        if(series.length == 0){
          setPage(page + 1)
        }
        setHasMore(res.hasNextPage);
        setSeries((preVal) => [...preVal, res.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [series, setSeries] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchSeries();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <main>
      <div id="series" className="no-scrollbar overflow-y-scroll max-h-[106vh]">
      {  
        series?.map((seriesList, ind) => 
          <DisplayAnime key={ind} animeList={seriesList} />
        )
      }
      </div>
      <InfiniteScroll
        id="series"
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

export default FetchSeries;