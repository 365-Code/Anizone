import { ANIME, META } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const FetchAnime = ({ animeId }: { animeId: string }) => {
  // const anime = await fetchAnime(animeId);

  const fetchAnime = async () => {
    try {
      const result = await fetch(
        `/api/anilist/fetchAnimeInfo?anime=${animeId}`
      );
      const res = await result.json();
      if (res.success) {
        setAnime(res.animeData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchAnime();
    }, 500);

    return () => clearTimeout(debounce);
  }, []);
  
  const [anime, setAnime] = useState();

  return (
    <div className="snap-start">{anime && <AnimeCard anime={anime} />}</div>
  );
};

export default FetchAnime;
