"use client"
import { IAnimeResult, ISearch } from "@consumet/extensions";
import React, { useState } from "react";
import StAnimeCard from "./StAnimeCard";

const ListAnime = ({title, animeList}: {title: string, animeList: IAnimeResult[]}) => {
  const [anime, setAnime] = useState(animeList)
  return (
      <section className="text-white my-container flex flex-col gap-8 py-8 gbg">
        <h2 className="text-5xl">{title}</h2>

        <div className="text-white flex flex-col-reverse items-center sm:items-start sm:flex-row gap-8 sm:gap-0">

          <div className="no-scrollbar max-h-[140vh] overflow-y-scroll flex gap-3 flex-1 justify-center sm:justify-start flex-wrap">
            {
              anime?.map((anim) => 
              <StAnimeCard key={anim.id} animeId={anim.id} />
              )
            }

          </div>

          <div id="search-box">
            <div className="p-4">
              <div className="rounded-full px-2 flex items-center overflow-hidden bg-black/50">
                {/* <span className="px-4 py-3"> */}
                <i className="fi fi-rr-search text-white" />
                {/* </span> */}
                <input
                  type="search"
                  className="outline-none border-none text-sm w-full py-2 px-4 bg-transparent"
                  placeholder="Search Anime Here....."
                />
              </div>
            </div>

            <ol className="bg-black/20 py-6 pl-10 text-[0.6rem] list-decimal flex flex-col gap-4 font-medium">
              <li>Dante&apos;s Inferno: An Animated Epic (2010)</li>
              <li>Legend of the Millennium dragon (2011)</li>
              <li>Phoenix (TV/2004)</li>
              <li>Ghiblies (TV/2000-2002)</li>
              <li>Space Pirate Captain Harlock (TV/1978)</li>
              <li>The Galaxy Railways (TV/2003)</li>
              <li>Cowboy Bebop (TV/1998)</li>
              <li>Galaxy express 999 (TV/1978)</li>
              <li>Hellsing (TV/2001)</li>
              <li>Ghost in the Shell: Stand Alonee Complex (TV/2001)</li>
              <li>FullMetal Alchemist (TC/2003)</li>
              <li>FullMetal Alchemist Brotherhood (TV/2009)</li>
              <li>FullMetal Alchemist: Sacred Star of Milos (2011)</li>
              <li>FullMetal Alchemist: The OVA</li>
            </ol>
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col -z-10">
            <div className="basis-1/2 bg-[#230149]"></div>
            <div className="basis-1/2 gradient-bg py-10"></div>
          </div>
        </div>
      </section>
  );
};

export default ListAnime;
