"use client";
import { ANIME, IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PlayNowCard from "./PlayNowCard";

const fetchAnimeInfo = async (animeId: string) => {
  try {
    // const anilist = new META.Anilist()
    const anime = new ANIME.Gogoanime();
    const results = await anime.fetchAnimeInfo(animeId);
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    // console.log(error);
  }
};

// const FetchAnimeInfo = async ({ animeId }: { animeId: string }) => {
const FetchAnimeInfo = ({ animeId }: { animeId: string }) => {
  // const animeInfo = await fetchAnimeInfo(animeId) as IAnimeInfo;
  const fetchAnime = async (aName: string) => {
    try {
      const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      const res = await result.json();
      if (res.success) {
        setAnimeInfo(res.animeData);
        setAnimeTitle(res.animeData.title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    animeId && fetchAnime(animeId);
  }, [animeId]);

  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [animeTitle, setAnimeTitle] = useState<ITitle>();
  const [moreLess, setMoreLess] = useState(true)

  console.log(animeInfo?.description);
  


  return (
    // <!-- Play Now -->
    <section className="text-white py-8 my-container flex flex-col gap-8 relative">
      {animeInfo && (
        <>
          <h2 className="text-5xl invisible">Play Now</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between">

            {/* <div className="play-now-card">
              <div className="play-now-card-detail">
                <img
                  src={animeInfo?.image}
                  alt=""
                  className="w-full h-full object-cover object-center absolute top-0 left-0 opacity-10 blur-sm"
                />
                <div className="flex flex-col gap-2">
                  <p className="flex items-center text-xs gap-2">
                    {animeInfo?.type?.split(" ").map((t, ind) => (
                      <span key={ind} className="flex gap-2 items-center">
                        <span>{t}</span>
                        {ind + 1 != animeInfo.type?.split(" ")?.length && (
                          <span className="w-1 h-1 rounded-full bg-white" />
                        )}
                      </span>
                    ))}
                  </p>
                  <h3 className="text-3xl font-semibold">
                    {animeTitle?.english ||
                      animeTitle?.romaji ||
                      animeTitle?.userPreferred}
                  </h3>
                  <p className="text-orange-500 font-semibold">CLAP</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold space-x-2">
                    <span className="text-orange-500">R</span>
                    <span>74%</span>
                  </p>
                  <ul className="flex items-center gap-2 text-xs font-medium flex-wrap">
                    {animeInfo?.genres?.map((g, i) => (
                      <li
                        key={i}
                        className="bg-white/20 py-1 px-4 rounded-full"
                      >
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="play-now-card-img ">
                <img
                  src={animeInfo?.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div> */}
            <PlayNowCard animeInfo={animeInfo} animeTitle={animeTitle || {}} />

            <div className="flex-1 items-center flex sm:flex-row md:flex-col flex-col gap-4 justify-between py-8">
              <div className="flex md:flex-col justify-center gap-4">
                {/* <button className="btn-primary">Watch Now</button> */}
                <Link href={"/anime/" + animeInfo?.id + "/watch"}>
                  <button className="btn-primary">Watch Now</button>
                </Link>
                <button className="btn-secondary">Add to watchlist</button>
              </div>

              <div className="flex items-center font-semibold text-lg gap-10 justify-center md:justify-between">
                <span className="flex flex-col items-center gap-2 text-2xl font-normal">
                  <i className="fi fi-sr-heart text-4xl" />
                  50.5k
                </span>
                <span className="flex flex-col items-center gap-2 text-2xl font-normal">
                <i className="fi fi-sr-beacon text-4xl" />
                  2.3k
                </span>
                <span className="flex flex-col items-center gap-2 text-2xl font-normal">
                <i className="fi fi-sr-paper-plane text-4xl" />
                  5.3k
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="md:max-w-[70%] leading-tight text-3xl sm:text-4xl md:text-6xl">
              {
                animeTitle?.english ||
                animeTitle?.romaji ||
                animeTitle?.userPreferred ||
                (animeInfo?.title as string)
              }
            </h1>
            <p className="md:max-w-[80%] font-light sm:text-lg pb-8">
              {(animeInfo?.description?.slice(0, moreLess ? 260 : -1) as string).split("<br>")[0]}
              <button className={"text-blue-500"} onClick={() => setMoreLess(!moreLess)} >
              {
                moreLess ?
                <span>...show</span>
                :
                <span>{" "}...hide</span>
              }
              </button>
            </p>
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col -z-10">
            <div className="basis-2/5 bg-[#1c073f]"></div>
            <div className="basis-3/5 gradient-bg py-10"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default FetchAnimeInfo;
