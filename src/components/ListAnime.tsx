"use client";
import { IAnimeResult } from "@consumet/extensions";
import React from "react";
import StAnimeCard from "./StAnimeCard";
import Background from "./Background";
import Loader from "./Loader";

const ListAnime = ({
  title,
  animeList,
  id,
}: {
  title?: string;
  animeList: IAnimeResult[];
  id?: string;
}) => {
  const anime = animeList;

  return (
    <section className="text-white my-container flex flex-col gap-4 py-4 gbg">
      {title && <h2 className="text-5xl">{title}</h2>}
      
      <div className="text-white flex flex-col-reverse items-center sm:items-start sm:flex-row gap-8 sm:gap-0">
        {/* <div className="no-scrollbar max-h-[140vh] overflow-y-scroll flex gap-3 flex-1 justify-center sm:justify-start flex-wrap"> */}
        {/* <div className="no-scrollbar max-h-[140vh] overflow-y-scroll flex gap-4 flex-1 justify-center sm:justify-between flex-wrap"> */}
        <div
          id={id}
          className="no-scrollbar max-h-[140vh] overflow-y-scroll grid grid-cols-4 gap-4 flex-1 justify-center sm:justify-between flex-wrap"
        >
          {anime?.map((anim) => (
            <StAnimeCard key={anim.id} animeId={anim} />
          ))}
        </div>
        {anime.length > 0 && <Background bgLength={1} />}
        {/* <Background bgLength={anime?.length / 12} /> */}
        {/* 12 = perPage */}
      </div>
    </section>
  );
};

export default ListAnime;
