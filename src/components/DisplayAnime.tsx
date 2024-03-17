import { IAnimeResult } from "@consumet/extensions";
import React, { useRef } from "react";
import FetchAnime from "./FetchAnime";
import AnimeCard from "./AnimeCard";
import { Smooch } from "next/font/google";

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
      className="snap-start my-container py-8 flex flex-col gap-8"
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col -z-10">
        <div className="basis-1/2 bg-[#230149]"></div>
        <div className="basis-1/2 gradient-bg py-10"></div>
      </div>
      {title && <h2 className="text-5xl text-white capitalize">{title}</h2>}
      <div
        ref={scrollRef}
        className="relative flex items-center w-full snap-x snap-mandatory gap-6 overflow-x-scroll no-scrollbar rounded-r-2xl"
      >
        {animeList?.map((anime) => (
          // <FetchAnime key={anime.id} animeId={anime.id} />
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
      <button
        onClick={() => handleScroll(1)}
        className="text-8xl text-slate-400 absolute right-2 top-1/2 -translate-y-1/2"
      >
        <i className="fi fi-rr-caret-right hover:translate-x-1 transition-all" />
      </button>
      <button
        onClick={() => handleScroll(-1)}
        className="text-8xl text-slate-400 absolute left-2 top-1/2 -translate-y-1/2"
      >
        <i className="fi fi-rr-caret-left hover:-translate-x-1 transition-all" />
      </button>
    </section>
  );
};

export default DisplayAnime;
