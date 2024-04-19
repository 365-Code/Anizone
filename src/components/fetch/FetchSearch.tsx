"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ListAnime from "../ListAnime";
import InfiniteScroll from "../InfiniteScroll";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeResult } from "@consumet/extensions";
import { setSearchAnime } from "@/redux/features/utilitySlice";

const FetchSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const season = searchParams.get("season");
  const genres = searchParams.get("genres");
  const route = `query=${query || "All"}&type=${type || "All"}&status=${
    status || "All"
  }&season=${season || "All"}&genres=${genres || "All"}`;

  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;
  const pageId = "searchResults";

  const dispatch = useDispatch<AppDispatch>();
  const searchAnime = useAppSelector(
    (state) => state.utilityReducer.value.searchAnime,
  );

  const fetchSearchResults = async () => {
    try {
      const sort = ["TRENDING_DESC"];
      const data = await fetch(
        `/api/anilist/advanceSearch?${route}&page=${page}&perPage=${perPage}&sort=${sort}`,
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        page == 1
          ? setSearchResults(res.results)
          : setSearchResults((preVal) => [...preVal, ...res.results]);
        setHasMore(res.hasNextPage);
        setPage(res.currentPage);
        const data = {
          currentPage: res.currentPage,
          hasNextPage: res.hasNextPage,
          results: page == 1 ? res.results : [...searchResults, ...res.results],
        };
        dispatch(setSearchAnime(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchAnime) {
      setSearchResults(searchAnime.results);
      setPage(searchAnime.currentPage || 1);
      setHasMore(searchAnime.hasNextPage || true);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setPage(1);
    const debounce = setTimeout(() => {
      fetchSearchResults();
      const searchResults = document.getElementById("FetchSearch");
      if(searchResults){
        searchResults.scrollIntoView({behavior: "smooth"});
      }
    }, 100);
    return () => clearTimeout(debounce);
  }, [route]);

  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      fetchSearchResults();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <div id="FetchSearch">
      <ListAnime id={pageId} animeList={searchResults} />
      {searchResults.length == 0 && !loading && (
        <h2 className="py-8 text-center text-6xl text-white">
          No Results Found
        </h2>
      )}
      <InfiniteScroll
        id={pageId}
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
        hasMore={hasMore}
      />
    </div>
  );
};

export default FetchSearch;
