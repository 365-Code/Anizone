"use client";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PlayNowCard from "./PlayNowCard";
import { useParams, useSearchParams } from "next/navigation";
import { removeChars, toAnimeId } from "@/utils";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import Loader from "./Loader";

const FetchAnimeInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const animeId = (params["animeId"] as string).split("-").at(-1) || "";

  const setResources = (animeData: IAnimeInfo) => {
    setAnimeInfo(animeData);
    const animeTitle = animeData.title as ITitle;
    setAnimeTitle(animeTitle);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const fetchAnime = async (aName: string) => {
    try {
      const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      const res = await result.json();
      if (res.success) {
        setResources(res.animeData);
        dispatch(setCurrentAnime(res.animeData));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime,
  ) as IAnimeInfo;

  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [animeTitle, setAnimeTitle] = useState<ITitle>();
  const [moreLess, setMoreLess] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (currentAnime) {
      setResources(currentAnime);
    } else {
      animeId && fetchAnime(animeId);
    }
  }, [currentAnime, animeId]);
  

  return (
    // <!-- Play Now -->
    <section className="my-container relative flex flex-col gap-8 py-4 text-white sm:py-8">
      {loading && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-black/40 bg-opacity-25">
          <Loader />
          <h3 className="py-2 text-2xl font-bold text-[#09f]">
            Please Wait for a few...
          </h3>
        </div>
      )}
      {animeInfo && (
        <>
          {/* <h2 className="invisible text-5xl">Play Now</h2> */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <PlayNowCard animeInfo={animeInfo} animeTitle={animeTitle || {}} />
            <div className=" flex flex-1 flex-col items-center justify-between gap-4 py-8 sm:flex-row md:flex-col">
              <div className="flex justify-center gap-2 sm:flex-row sm:gap-4 md:flex-col">
                {
                  Number(currentAnime?.totalEpisodes) > 0 ? 
                  <Link
                  className="btn btn-primary"
                  href={
                    "/anime/" + (params["animeId"] as string) + "/episode-1"
                  }
                  >
                  Watch Now
                </Link>
                :
                <button className="btn btn-primary">
                  Not Yet Aired
                </button>
                }
                <button className="btn btn-secondary">Add to watchlist</button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl leading-tight sm:text-4xl md:max-w-[70%] md:text-6xl">
              {animeTitle?.english ||
                animeTitle?.romaji ||
                animeTitle?.userPreferred ||
                (animeInfo?.title as string)}
            </h1>
            <p className="pb-8 font-light sm:text-lg md:max-w-[80%]">
              {removeChars(
                animeInfo?.description?.slice(
                  0,
                  moreLess ? 260 : animeInfo.description.length,
                ) as string,
                ["<br>", "<i>", "</i>"],
              )}
              <button
                className={"text-blue-500"}
                onClick={() => setMoreLess(!moreLess)}
              >
                {Number(animeInfo.description?.length) > 260 &&
                  (moreLess ? <span>...show more</span> : <span>...hide</span>)}
              </button>
            </p>
          </div>

          <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col">
            <div className="basis-2/5 bg-[#1c073f]" />
            <div className="gradient-bg basis-3/5 py-10" />
          </div>
        </>
      )}
    </section>
  );
};

export default FetchAnimeInfo;
