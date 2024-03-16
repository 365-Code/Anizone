"use client";
import HomePage from "@/components/HomePage";
import ListAnime from "@/components/ListAnime";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";

const Page = () => {
  const fetchAnimeList = async () => {
    try {
      const res = await fetch(
        `/api/anilist/fetchPopularAnime?page=${page}&perPage=10`
      );
      const result = await res.json();
      if (result.success) {
        const { results } = result.animeList;
        if (results) {
          setAnimeList((preVal) => [...preVal, ...results]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [animeList, setAnimeList] = useState<IAnimeResult[]>([]);

  
  useEffect(() => {
    setTimeout(() => {
      fetchAnimeList();
    }, 1000);
  }, []);

  const [page, setPage] = useState(1)

  return (
    <HomePage />
  );
};

export default Page;
