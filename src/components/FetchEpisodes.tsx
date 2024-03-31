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

  return (
    <section className="my-container bg-[#17024d] py-8">
      {Number(episodes) > 1 && (
        <>
          <h2 className="py-4 text-3xl font-normal text-white">Episodes</h2>
          <div className="custom-scrollbar flex max-h-[150px] items-start gap-2 overflow-y-scroll py-4 sm:gap-3">
            {[...Array(Number(episodes))].map((v, i) => (
              <Link
                href={basePath + "/episode-" + (i + 1)}
                key={"episode-" + (i + 1)}
                className="min-w-fit"
              >
                <button
                  className={` ${currentEpisode == i + 1 ? "btn-primary-sm" : "btn-secondary-sm"} btn-sm rounded-xl`}
                >
                  {"Episode " + (i + 1)}
                </button>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FetchEpisodes;
