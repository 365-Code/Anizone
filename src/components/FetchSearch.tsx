"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ListAnime from "./ListAnime";
import InfiniteScroll from "./InfiniteScroll";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeResult } from "@consumet/extensions";
import { setSearchAnime } from "@/redux/features/utilitySlice";
import FetchRandom from "./FetchRandom";

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

  const fetchSearchResults = async () => {
    try {
      // const data = await fetch(`/api/anilist/advanceSearch?query=${query}&page=${page}&perPage=${perPage}`);
      const data = await fetch(
        `/api/anilist/advanceSearch?${route}&page=${page}&perPage=${perPage}`
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        setSearchResults((preVal) => ([...preVal, ...res.results]));
        setHasMore(res.hasNextPage);
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

  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;
  const pageId = "searchResults";

  const dispatch = useDispatch<AppDispatch>();
  const searchAnime = useAppSelector(
    (state) => state.utilityReducer.value.searchAnime
  );
  useEffect(() => {
    if (searchAnime) {
      setSearchResults(searchAnime.results);
      setPage(searchAnime.currentPage || 1);
      setHasMore(searchAnime.hasNextPage || true);
    }
  }, []);

  useEffect(() => {
    if ((searchAnime && page == 1) || searchAnime?.currentPage == page) {
      return;
    } else {
      setLoading(true);
      const debounce = setTimeout(() => {
        fetchSearchResults();
      }, 1000);
      return () => clearTimeout(debounce);
    }
  }, [page]);


  return (
    <div>
      <ListAnime id={pageId} animeList={searchResults} />
      {
        (searchResults.length == 0 && !loading) && <h2 className="text-center py-8 text-white text-6xl">No Results Found</h2>
      }
      {/* <FetchRandom /> */}
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
