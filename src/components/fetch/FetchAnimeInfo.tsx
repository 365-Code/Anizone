"use client";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import PlayNowCard from "../card/PlayNowCard";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { removeChars, toAnimeId } from "@/utils";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import Watch from "../Watch";
import FetchAnimeInfoSkeleton from "../skeleton/FetchAnimeInfoSkeleton";
import FetchAnimeCharacters from "./FetchAnimeCharacters";

const FetchAnimeInfo = () => {

  // React
  const params = useParams();
  const animeId = (params["animeId"] as string).split("-").at(-1) || "";
  const searchParams = useSearchParams();
  const paramsEpId = searchParams.get("episode") as string;
  
  const nav = useRouter();
  const animePath = usePathname();
  
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime,
  ) as IAnimeInfo;

  // UseState
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [animeTitle, setAnimeTitle] = useState<ITitle>();
  const [moreLess, setMoreLess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);


  // handles
  const setResources = (animeData: IAnimeInfo) => {
    setAnimeInfo(animeData);
    const animeTitle = animeData.title as ITitle;
    setAnimeTitle(animeTitle);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  
  const handlePlaying = () => {
    setPlaying((prev) => {
      if (prev) {
        nav.push(animePath);
      }
      return !prev;
    });
  };

  // Fetch API
  const fetchAnime = async (aName: string) => {
    try {
      const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      const res = await result.json();
      if (res.success) {
        setResources(res.animeData);
        dispatch(setCurrentAnime(res.animeData));
        setLoading(false);
      } else {
        if(!currentAnime)
          nav.push("/not-found");
        else setResources(currentAnime)
      }
    } catch (error) {
      console.log(error);
      nav.push("/not-found");
    }
  };

  // UseEffect
  useEffect(() => {
    setLoading(true);
    const debounce = setTimeout(() => {
      animeId && fetchAnime(animeId);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [animeId]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      paramsEpId ? setPlaying(true) : setPlaying(false);
    }, 100);
    return () => clearTimeout(debounce)
  }, [paramsEpId]);

  return (
    <section
      className={`${!loading ? "my-container" : ""} relative flex flex-col gap-8 py-4 text-white sm:py-8`}
    >
      {loading && <FetchAnimeInfoSkeleton />}
      {animeInfo && (
        <>
          <div className="flex flex-col justify-between gap-4 min-[1100px]:flex-row">
            {playing ? (
              <Watch />
            ) : (
              <PlayNowCard
                animeInfo={animeInfo}
                animeTitle={animeTitle || {}}
              />
            )}

            <div className=" flex flex-1 flex-col items-center justify-between gap-4 py-8 sm:flex-row md:flex-col">
              <div className="flex justify-center gap-2 sm:flex-row sm:gap-4 min-[1100px]:flex-col">
                {Number(currentAnime?.totalEpisodes) > 0 ? (
                  <button className="btn btn-primary" onClick={handlePlaying}>
                    {playing ? "Anime Info" : "Watch Now"}
                  </button>
                ) : (
                  <button className="btn btn-primary">Not Yet Aired</button>
                )}
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

          <FetchAnimeCharacters />

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
