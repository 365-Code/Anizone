import { ANIME, IAnimeResult, META } from "@consumet/extensions";
import React from "react";
import DisplayAnime from "./DisplayAnime";
import ListAnime from "./ListAnime";
import Hero from "./Hero";
import Search from "./Search";

const fetchPopular = async () => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const { results } = await anime.fetchPopular();
    const anilist = new META.Anilist()
    const { results } = await anilist.fetchPopularAnime();
    // console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchTopAiring = async () => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const { results } = await anime.fetchTopAiring();
    const anilist = new META.Anilist()
    
    const { results } = await anilist.fetchAiringSchedule();
    
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchRecentMovies = async () => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const { results } = await anime.fetchRecentMovies();
    const anilist = new META.Anilist()
    const { results } = await anilist.search("movie");
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchRecentEpisodes = async () => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const { results } = await anime.fetchRecentEpisodes();
    
    const anilist = new META.Anilist()
    const { results } = await anilist.fetchRecentEpisodes();
    // console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchTrending = async () => {
  try {
    // const anilist = new META.Anilist();
    // const results = await anilist.fetchTrendingAnime();
    const anime = new ANIME.Zoro()
    const results = await anime.fetchLatestCompleted();
    console.log(results);
    
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchAnimeList = async () => {
  try {
    const anilist = new ANIME.Gogoanime();
    const results = await anilist.fetchAnimeList();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const HomePage = async () => {

  const popular = (await fetchPopular()) as IAnimeResult[];

  const recentMovies = (await fetchRecentMovies()) as IAnimeResult[];

  const recentEpisodes = (await fetchRecentEpisodes()) as IAnimeResult[];

  const topAiring = (await fetchTopAiring()) as IAnimeResult[];
  
  const trending = await fetchTrending()
  console.log(trending);
  
  const animeList = await fetchAnimeList();

  return (
    <>
      <Hero />
      <Search />
      {popular?.length > 0 && (
        <DisplayAnime title="popular" animeList={popular} />
      )}
      {recentMovies?.length > 0 && (
        <DisplayAnime title="recent movies" animeList={recentMovies} />
      )}
      {topAiring?.length > 0 && (
        <DisplayAnime title="top airing" animeList={topAiring} />
      )}
      {recentEpisodes?.length > 0 && (
        <DisplayAnime title="recent episodes" animeList={recentEpisodes} />
      )}
      {/* {animeList && <ListAnime title="Trending" animeList={trending} />} */}
    </>
  );
};

export default HomePage;
