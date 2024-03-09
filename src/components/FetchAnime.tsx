import { ANIME, META } from "@consumet/extensions";
import React from "react";
import AnimeCard from "./AnimeCard";

const fetchAnime = async (aName: string) => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const results = await anime.fetchAnimeInfo(aName);
    const anilist = new META.Anilist();
    // setTimeout(async () => {
      const results = await anilist.fetchAnimeInfo(aName);
      return results;
    // }, 1000);
    // return results;
  } catch (error) {
    console.log(error);
  }
};

const FetchAnime = async ({ animeId }: { animeId: string }) => {
  const anime = await fetchAnime(animeId);
  return (
    <div className="snap-start">{anime && <AnimeCard anime={anime} />}</div>
  );
};

export default FetchAnime;
