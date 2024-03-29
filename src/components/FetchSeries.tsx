"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setSeriesAnime } from "@/redux/features/utilitySlice";

const FetchSeries = () => {
  const fetchSeries = async () => {
    try {
      const data = await fetch(
        `/api/anilist/advanceSearch?type=TV&page=${page}&perPage=${perPage}`
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
        setSeries((preVal) => [...preVal, res.results]);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: [...series, res.results]
        }
        dispatch(setSeriesAnime(data))
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [series, setSeries] = useState<Array<IAnimeResult[]>>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;

  
  const dispatch = useDispatch<AppDispatch>();
  const seriesAnime = useAppSelector((state) => state.utilityReducer.value.series)

  useEffect(() => {
    if (seriesAnime) {
      setSeries(seriesAnime.results);
      setPage(seriesAnime.currentPage);
      setHasMore(seriesAnime.hasNextPage)
    }
  }, []);
  

  useEffect(() => {
    if ((seriesAnime && page == 1) || seriesAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchSeries();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);
  

  return (
    <main>
      <div id="series" className="no-scrollbar overflow-y-scroll max-h-[600px]">
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
  );
};

export default FetchSeries;