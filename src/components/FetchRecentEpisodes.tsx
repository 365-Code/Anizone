"use client";
import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import { IEpisodeCard } from "@/utils";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setRecentEpisodes } from "@/redux/features/utilitySlice";
import StAnimeCardSkeleton from "./StAnimeCardSkeleton";

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
    (state) => state.utilityReducer.value.recentEpisodes,
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
    <section className="my-container space-y-2 py-4">
      <h2 className="text-3xl font-normal text-white">Recent Episodes</h2>
      {!recents && (
        // <Loader2 />
        <div className="no-scrollbar flex items-start gap-8 overflow-x-scroll">
          {[...Array(20)].map((v, i) => (
            <div key={i} style={{
              animationDelay: `${i * 0.25}s`,
              animationDuration: "1s"
            }} className={`min-w-fit animate-pulse`}>
              <StAnimeCardSkeleton key={i} />
            </div>
          ))}
        </div>
      )}
      <div className="no-scrollbar flex items-start gap-8 overflow-x-scroll">
        {recents?.map((e, i) => (
          <div className="min-w-fit" key={e.id}>
            <EpisodeCard key={e.id} anime={e} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FetchRecentEpisodes;
