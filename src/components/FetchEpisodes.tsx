"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { IAnimeInfo } from "@consumet/extensions";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const FetchEpisodes = () => {
  const pathname = usePathname();
  const params = useParams()
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = pathname.split("/episode-")[1];

  const epRef = useRef<HTMLAnchorElement>(null);


  const aId = (params["animeId"] as string) || "";
  const animId = aId.slice(aId.lastIndexOf("-") + 1);

  const dispatch = useDispatch<AppDispatch>();

  const fetchEpisodeInfo = async () => {
    try {
      const data = await fetch('/api/anilist/fetchAnimeInfo?anime=' + animId);
      const res = await data.json();
      if(res.success){
        dispatch(setCurrentAnime(res.animeData))
      }
    } catch (error) {
      console.log(error);   
    }
  }

  
  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime
  ) as IAnimeInfo;

  const [episodes, setEpisodes] = useState(0);

  useEffect(() => {
    currentAnime ? setEpisodes(currentAnime.currentEpisode || currentAnime.totalEpisodes) : fetchEpisodeInfo()
  }, [currentAnime])

  useEffect(() => {
    if (epRef.current) {
      // epRef.current.onclick = () => {
      const curEp = epRef.current.innerText.split(" ").at(-1);
      if (curEp == currentEpisode) {
        epRef.current?.scrollIntoView(true);
        window.scrollTo(0,0)
      }
      // }
    }
  });

  return (
    <>
      {Number(episodes) > 1 && (
        <section className="my-container bg-[#17024d] py-4 ">
          {/* <div className=""> */}
          <h2 className="text-3xl font-normal text-white">Episodes</h2>
          <div className="custom-scrollbar flex h-[130px] flex-wrap gap-2 overflow-y-scroll py-4 sm:gap-4">
            {Number(episodes) > 1 &&
              [...Array(Number(episodes))].map((v, i) => (
                <Link
                  ref={epRef}
                  href={basePath + "/episode-" + (i + 1) 
                  // + "?total=" + total
                }
                  className={`${
                    Number(currentEpisode) == i + 1
                      ? "btn-primary-sm"
                      : "btn-secondary-sm"
                  } text-sm sm:text-base`}
                  key={"episode-" + (i + 1)}
                  defaultValue={i + 1}
                >
                  <button>{"Episode " + (i + 1)}</button>
                </Link>
              ))}
          </div>
          {/* </div> */}
        </section>
      )}
    </>
  );
};

export default FetchEpisodes;
