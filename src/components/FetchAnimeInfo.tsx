"use client";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PlayNowCard from "./PlayNowCard";
import { useParams, useSearchParams } from "next/navigation";
import { removeChars, toAnimeId } from "@/utils";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  loadCurrentAnime,
  setCurrentAnime,
} from "@/redux/features/utilitySlice";
import Loader from "./Loader";

// const FetchAnimeInfo = async ({ animeId }: { animeId: string }) => {
const FetchAnimeInfo = () => {
  // const animeInfo = await fetchAnimeInfo(animeId) as IAnimeInfo;

  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  // const animeId = (params["animeId"] as string).split("-").at(-1) || "";
  const searchParams = useSearchParams();
  const animeId = searchParams.get("aId") || "";

  const setResources = (animeData: IAnimeInfo) => {
    setAnimeInfo(animeData);
    const animeTitle = animeData.title as ITitle;
    setAnimeTitle(animeTitle);
    setAnimeId(toAnimeId(animeTitle));
    setTimeout(() => {
      setLoading(false);
    }, 100)
  };

  const fetchAnime = async (aName: string) => {
    try {
      const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      // const result = await fetch(`/api/anilist/searchAnime?anime=${aName}`);
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
    (state) => state.utilityReducer.value.currentAnime
  ) as IAnimeInfo;

  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [animeTitle, setAnimeTitle] = useState<ITitle>();
  const [moreLess, setMoreLess] = useState(true);
  const [animId, setAnimeId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    if(currentAnime){
      setResources(currentAnime)
    } else{
      animeId && fetchAnime(animeId);
    }
  }, [currentAnime]);

  return (
    // <!-- Play Now -->
    <section className="text-white py-8 my-container flex flex-col gap-8 relative">
      {loading && (
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-opacity-25 bg-black/40 top-0 left-0 fixed z-10">
              <Loader />
              <h3 className="text-[#09f] text-2xl font-bold py-2">
                Please Wait for a few...
              </h3>
            </div>
          )}
      {animeInfo && (
        <>
          <h2 className="text-5xl invisible">Play Now</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <PlayNowCard animeInfo={animeInfo} animeTitle={animeTitle || {}} />

            <div className="flex-1 items-center flex sm:flex-row md:flex-col flex-col gap-4 justify-between py-8">
              <div className="flex md:flex-col justify-center gap-4">
                {/* <button className="btn-primary">Watch Now</button> */}
                <Link
                  className="btn-primary"
                  href={
                    "/anime/" +
                    animId +
                    "/episode-1?total=" +
                    animeInfo.totalEpisodes
                  }
                >
                  Watch Now
                </Link>
                <button className="btn-secondary">Add to watchlist</button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="md:max-w-[70%] leading-tight text-3xl sm:text-4xl md:text-6xl">
              {animeTitle?.english ||
                animeTitle?.romaji ||
                animeTitle?.userPreferred ||
                (animeInfo?.title as string)}
            </h1>
            <p className="md:max-w-[80%] font-light sm:text-lg pb-8">
              {removeChars(
                animeInfo?.description?.slice(
                  0,
                  moreLess ? 260 : animeInfo.description.length
                ) as string,
                ["<br>", "<i>", "</i>"]
              )}
              <button
                className={"text-blue-500"}
                onClick={() => setMoreLess(!moreLess)}
              >
                {Number(animeInfo.description?.length) > 260 &&
                  (moreLess ? <span>...show more</span> : <span> hide</span>)}
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
