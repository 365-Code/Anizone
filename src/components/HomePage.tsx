"use client";
import { ANIME, IAnimeResult, META } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import DisplayAnime from "./DisplayAnime";
import ListAnime from "./ListAnime";
import Hero from "./Hero";
import Search from "./Search";
import { animeData } from "@/utils";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const fetchPopular = async () => {
  try {
    // const anime = new ANIME.Gogoanime();
    // const { results } = await anime.fetchPopular();
    const anilist = new META.Anilist();
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
    const anilist = new META.Anilist();

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
    const anilist = new META.Anilist();
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

    const anilist = new META.Anilist();
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
    const anime = new ANIME.Zoro();
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



const HomePage = () => {
  
  const fetchPopular = async () => {
    try {
      const res = await fetch("/api/anilist/fetchPopularAnime?page=1&perPage=10");
      const result = await res.json();
      if(result.success){
        const { results } = result.animeList;
        if(results){
          setPopular((preVal) => [...preVal, ...results]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTrending = async (page?: number, perPage?: number) => {
    try {
      const res = await fetch(`/api/anilist/fetchTrendingAnime?page=${page || 1}&perPage=${perPage || 10}`);
      const result = await res.json();
      if(result.success){
        const { results } = result.animeList;
        if(results){
          setTrending((preVal) => [...preVal, ...results]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  const fetchRecentMovies = async (page?: number, perPage?: number) => {
    try {
      const res = await fetch(`/api/anilist/fetchRecentMovies?page=${page || 1}&perPage=${perPage || 10}`);
      const result = await res.json();
      if(result.success){
        const { results } = result.animeList;
        if(results){
          setRecentMovies((preVal) => [...preVal, ...results]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const popular = (await fetchPopular()) as IAnimeResult[];

  // const recentMovies = (await fetchRecentMovies()) as IAnimeResult[];

  // const recentEpisodes = (await fetchRecentEpisodes()) as IAnimeResult[];

  // const topAiring = (await fetchTopAiring()) as IAnimeResult[];
  // const trending = await fetchTrending()
  // const animeList = await fetchAnimeList();
  
  const [popular, setPopular] = useState<IAnimeResult[]>( [] );
  const [trending, setTrending] = useState<IAnimeResult[]>([]);
  const [recentMovies, setRecentMovies] = useState<IAnimeResult[]>([]);

  useEffect(() => {
    // setTimeout(() => {
      fetchPopular();
    // }, 1000);
  }, []);

  useEffect(() => {
    // setTimeout(() => {
      fetchTrending();
    // }, 2000);
  }, []);

  useEffect(() => {
    // setTimeout(() => {
      fetchRecentMovies();
    // }, 3000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // fetchPopular();
  //   }, 5000);
  // }, []);

  return (
    <>
    <SearchBar />
      {popular?.length > 0 && (
        <DisplayAnime title="popular" animeList={popular || animeData} />
      )}
      {trending?.length > 0 && (
        <DisplayAnime title="trending" animeList={trending || animeData} />
      )}
      {recentMovies?.length > 0 && (
        <DisplayAnime title="recent movies" animeList={recentMovies || animeData} />
        )}
      {/* 
      {topAiring?.length > 0 && (
        <DisplayAnime title="top airing" animeList={topAiring} />
      )}
      {recentEpisodes?.length > 0 && (
        <DisplayAnime title="recent episodes" animeList={recentEpisodes} />
      )} */}
      {/* {animeList && <ListAnime title="Trending" animeList={trending} />} */}
    </>
  );
};

export default HomePage;
