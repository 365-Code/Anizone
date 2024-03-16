"use client";
import ListAnime from "@/components/ListAnime";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";

const Page = () => {
  const fetchAnimeList = async () => {
    try {
      const res = await fetch(
        "/api/anilist/fetchPopularAnime?page=1&perPage=10"
      );
      const result = await res.json();
      if (result.success) {
        const { results } = result.animeList;
        if (results) {
          setPopular((preVal) => [...preVal, ...results]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [popular, setPopular] = useState<IAnimeResult[]>([]);

  
  useEffect(() => {
    setTimeout(() => {
      fetchAnimeList();
    }, 1000);
  }, []);

  return (
    <div>
      <ListAnime title="Home" animeList={popular} />
    </div>
  );
};

export default Page;
