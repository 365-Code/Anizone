import { IAnimeResult } from "@consumet/extensions";
import React, { useRef } from "react";
import FetchAnime from "./FetchAnime";
import AnimeCard from "./AnimeCard";
import { Smooch } from "next/font/google";
import AnimeCardSkeleton from "./skeleton/AnimeCardSkeleton";

const DisplayAnime = ({
  animeList,
  title,
}: {
  animeList: IAnimeResult[];
  title?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="disp"
      className="my-container flex snap-start flex-col gap-8 py-8"
    >
      <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col">
        <div className="basis-1/2 bg-[#230149]" />
        <div className="gradient-bg basis-1/2 py-10" />
      </div>
      {title && <h2 className="text-5xl capitalize text-white">{title}</h2>}

      <button className=" absolute right-4 top-4 block text-right text-xl text-slate-400 transition-all sm:hidden">
        <i className="fi fi-rr-arrow-right bounceH transition-all" />
      </button>
      <div
        ref={scrollRef}
        className="no-scrollbar relative flex w-full snap-x snap-mandatory items-center gap-6 overflow-x-scroll rounded-r-2xl"
      >
        {animeList?.map((anime) => (
          // <FetchAnime key={anime.id} animeId={anime.id} />
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>

      <button
        onClick={() => handleScroll(1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 text-8xl text-slate-400 sm:block"
      >
        <i className="fi fi-rr-caret-right transition-all hover:translate-x-1" />
      </button>
      <button
        onClick={() => handleScroll(-1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 text-8xl text-slate-400 sm:block"
      >
        <i className="fi fi-rr-caret-left transition-all hover:-translate-x-1" />
      </button>
    </section>
  );
};

export default DisplayAnime;
