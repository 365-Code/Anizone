import { META } from "@consumet/extensions";
import React from "react";

const fetchInfo = async () => {
  try {
    const anilist = new META.Anilist();
    // anilist.fetchEpisodeSources()
    // 51794
    // 148862
    let res
    // res = await anilist.fetchAnimeInfo("157883");
    // res = await anilist.advancedSearch("your name")
    // res = await anilist.fetchEpisodesListById()
    
    return res;
  } catch (error) {
    console.log(error);
  }
};

const Test = async () => {
  const animeList = await fetchInfo();k

  return <div>Test</div>;
};

export default Test;
