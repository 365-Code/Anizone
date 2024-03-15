import { IAnimeResult } from "@consumet/extensions";
import React from "react";
import FetchAnime from "./FetchAnime";

const DisplayAnime = ({ animeList, title }: { animeList: IAnimeResult[], title: string }) => {
  return (
    <section className="my-container py-8 flex flex-col gap-8">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col -z-10">
        <div className="basis-1/2 bg-[#230149]"></div>
        <div className="basis-1/2 gradient-bg py-10"></div>
      </div>
      <h2 className="text-5xl text-white capitalize">{title}</h2>
      <div className="relative flex items-center w-full snap-x snap-mandatory gap-6 overflow-x-scroll no-scrollbar rounded-r-2xl">
        {animeList?.map((anime) => (
          <FetchAnime key={anime.id} animeId={anime.id} />
        ))}
      </div>
      {/* <i className="fi fi-rr-caret-right text-8xl text-slate-400 absolute -right-full top-1/2 -translate-x-1/2" /> */}
    </section>
  );
};

export default DisplayAnime;
