"use client";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import { IEpisodeCard } from "@/utils";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setRecentEpisodes } from "@/redux/features/utilitySlice";
import Background from "./Background";
import Loader2 from "./Loader2";

const FetchRecentEpisodes = () => {
  const fetchRecentEpisodes = async () => {
    try {
      const data = await fetch("/api/anilist/fetchRecentEpisodes");
      const res = await data.json();
      if (res.success) {
        setRecents(res.results);
        dispatch(setRecentEpisodes(res.results));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [recents, setRecents] = useState<IEpisodeCard[]>();
  const recentEpisodes = useAppSelector(
    (state) => state.utilityReducer.value.recentEpisodes
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (recentEpisodes) {
      setRecents(recentEpisodes);
    } else {
      // const debounce = setTimeout(() => {
        fetchRecentEpisodes();
      // }, 100);
      // return () => clearTimeout(debounce);
    }
  }, []);

  return (
    <section className="my-container py-4 space-y-2">
      <h2 className="text-3xl text-white font-normal">Recent Episodes</h2>
      {!recents && <Loader2 />}
      <div className="flex items-start gap-8 overflow-x-scroll no-scrollbar">
        {recents?.map((e, i) => (
          <EpisodeCard key={e.id} anime={e} />
        ))}
      </div>
    </section>
  );
};

export default FetchRecentEpisodes;
