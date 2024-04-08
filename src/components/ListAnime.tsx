"use client";
import { IAnimeResult } from "@consumet/extensions";
import React from "react";
import StAnimeCard from "./StAnimeCard";
import Background from "./Background";
import StAnimeCardSkeleton from "./StAnimeCardSkeleton";

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
    <section className="my-container gbg flex flex-col gap-4 py-4 text-white">
      {title && <h2 className="text-5xl">{title}</h2>}
      <div className="flex flex-col-reverse items-center gap-8 text-white sm:flex-row sm:items-start sm:gap-0">
        <div
          id={id}
          className="no-scrollbar grid max-h-[140vh] flex-1 grid-cols-2 flex-wrap justify-center gap-2 overflow-y-scroll sm:grid-cols-3 sm:justify-between sm:gap-4 md:gap-6 xl:grid-cols-4"
        >
          {anime?.map((anim) => <StAnimeCard key={anim.id} animeId={anim} />)}
          {
            animeList.length == 0 &&
            [...Array(20)].map((v,i)=>
              <StAnimeCardSkeleton key={i} />
            )
          }
        </div>
        {anime.length > 0 && <Background bgLength={1} />}
      </div>
    </section>
  );
};

export default ListAnime;
