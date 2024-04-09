"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const FetchEpisodes = ({ep, setEp}: {ep: number, setEp: Dispatch<SetStateAction<number>>}) => {

  const pathname = usePathname();
  const params = useParams();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = Number(pathname.split("/episode-")[1]);
  const aId = (params["animeId"] as string) || "";
  const animId = aId.slice(aId.lastIndexOf("-") + 1);

  const dispatch = useDispatch<AppDispatch>();

  const fetchEpisodeInfo = async () => {
    try {
      const data = await fetch("/api/anilist/fetchAnimeInfo?anime=" + animId);
      const res = await data.json();
      if (res.success) {
        setEpisodes(
          res.animeData.currentEpisode || res.animeData.totalEpisodes,
        );
        dispatch(setCurrentAnime(res.animeData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime,
  ) as IAnimeInfo;

  const [episodes, setEpisodes] = useState(0);

  useEffect(() => {
    currentAnime
      ? setEpisodes(currentAnime.currentEpisode || currentAnime.totalEpisodes)
      : fetchEpisodeInfo();
  }, []);
  
  const animeTitle = currentAnime ? (currentAnime?.title as ITitle).english || (currentAnime?.title as ITitle).romaji || (currentAnime?.title as ITitle).userPreferred || (currentAnime?.title as ITitle).native : ""

  const handleEpisode = (leap: number) => {
    if(ep+leap > 0 && ep+leap <= Number(currentAnime?.totalEpisodes)){
      setEp((prev) => (prev+leap))
    }
  }

  return (
    // <section className="bg-[#17024d] py-4 flex items-center justify-between">
    <section className="bg-black/30 p-2 flex items-center justify-between">
      {/* <div>
      <Link href={'/anime/' + aId} className="text-3xl text-white py-8">{animeTitle}</Link>
      </div>
       */}
    {/* <section> */}
      {currentAnime?.type != "MOVIE" && (
      <div className='flex items-center gap-2 text-white'>
        <button onClick={() => handleEpisode(-1)} className='hover:text-green-500 transition-all flex items-center gap-2'>
          <i className="text-2xl fi fi-sr-caret-square-left_1" />
          <span className="hidden sm:block">Prev</span>
        </button>
        <div className=" group/episodes relative">
              <p className=" bg-black/40 rounded-t-xl gap-2 py-2 px-4 flex w-fit items-center justify-center">
                <span className="text-center text-sm"><span className="hidden sm:inline-block">Episode</span><span className="sm:hidden">Ep</span> - {ep}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="no-scrollbar w-full absolute right-0 flex flex-col overflow-hidden overflow-y-scroll bg-black/40 text-sm transition-all focus:h-0 group-hover/episodes:z-10 group-hover/episodes:h-auto h-0 max-h-[95px]">
                {[...Array(Number(episodes))].map((episode, i) => (
                  <button
                  onClick={() =>
                    setEp(i+1)
                  }
                    className={`transition-all px-4 py-2 hover:bg-black/80 ${ep == i+1 ? "bg-black/80" : ""}`}
                    key={i+1}
                  >
                    Ep - {i+1}
                  </button>
                ))}
              </div>
            </div>
        <button onClick={() => handleEpisode(1)} className='hover:text-green-500 transition-all flex items-center gap-2'>
          <span className="hidden sm:block">Next</span>
        <i className="text-2xl fi fi-sr-caret-square-right" />
        </button>
      </div>
      )}

    {/* </section> */}
      {/* {currentAnime?.type != "MOVIE" && (
        <>
          <h2 className="py-4 text-3xl font-normal text-white">Episodes</h2>
          <div className="custom-scrollbar flex items-start gap-2 overflow-y-scroll py-4 sm:gap-3">
            {[...Array(Number(episodes))].map((v, i) => (
              <Link
                href={basePath + "/episode-" + (i + 1)}
                key={"episode-" + (i + 1)}
                className="min-w-fit"
              >
                <button
                  className={` ${currentEpisode == i + 1 ? "btn-primary-sm" : "btn-secondary-sm"} btn-sm`}
                >
                  {"Episode " + (i + 1)}
                </button>
              </Link>
            ))}
          </div>
        </>
      )} */}
    </section>
  );
};

export default FetchEpisodes;
