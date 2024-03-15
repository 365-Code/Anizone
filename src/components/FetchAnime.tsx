import { ANIME, META } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

// const fetchAnime = async (aName: string) => {
//   try {
//     // const anime = new ANIME.Gogoanime();
//     // const results = await anime.fetchAnimeInfo(aName);
//     const anilist = new META.Anilist();
//       const results = await anilist.fetchAnimeInfo(aName);
//       return results;
//   } catch (error) {
//     console.log(error);
//   }
// };

const FetchAnime = ({ animeId }: { animeId: string }) => {
  // const anime = await fetchAnime(animeId);

  const fetchAnime = async (aName: string) => {
    try {
      const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      const res = await result.json();
      if (res.success) {
        setAnime(res.animeData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    animeId && fetchAnime(animeId);
  }, [animeId]);
  const [anime, setAnime] = useState();


  return (
    <div className="snap-start">{anime && <AnimeCard anime={anime} />}</div>
  );
};

export default FetchAnime;
