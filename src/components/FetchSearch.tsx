"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ListAnime from "./ListAnime";
import Search from "./Search";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import InfiniteScroll from "./InfiniteScroll";

const FetchSearch = () => {
  const params = useParams();
  const query = (params["query"] as string) || "";

  const fetchSearchResults = async () => {
    try {
      const data = await fetch(`/api/anilist/advanceSearch?query=${query}&page=${page}&perPage=${perPage}`);
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        setSearchResults(res.results);
        setHasMore(res.hasNextPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 20;
  const pageId = "searchResults";

  useEffect(() => {
    setLoading(true)
    fetchSearchResults();
  }, []);

  return (
    <div>
      <div className="my-container">
        <SearchBar />
      </div>
      <ListAnime id={pageId} animeList={searchResults} />
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
