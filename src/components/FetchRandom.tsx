import { IAnimeResult, ITitle } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import { IEpisodeCard } from "@/utils";

const FetchRandom = () => {
  const fetchRandomAnime = async () => {
    try {
      const data = await fetch("/api/anilist/fetchRandomAnime");
      const res = await data.json();
      if (res.success) {
        setRandom((preVal) => [...preVal, res.result, ...res.recommendations]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    //   const debounce = setTimeout(() => {
          fetchRandomAnime();
        // }, 100);
        // () => clearTimeout(debounce)
    }, []);
    
    const [random, setRandom] = useState<IEpisodeCard[]>([]);

  return (
      <div className="flex items-start gap-8 overflow-x-scroll no-scrollbar">

      {random?.map((anime, i) => (
        <EpisodeCard
        key={i}
          anime={{
            ...anime,
            title: anime.title as ITitle,
            episodeNumber: 1,
            episodeTitle: "Episode" + 1,
            totalEpisodes: (Number(anime.episodes?.toString()))
          }}
        />
      ))}
    </div>
  );
};

export default FetchRandom;
