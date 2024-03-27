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
  const currentEpisode = pathname.split("/episode-")[1];

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
    <>
      {Number(episodes) > 1 && (
        <section className="my-container bg-[#17024d] py-4 ">
          <h2 className="py-4 text-3xl font-normal text-white">Episodes</h2>
          <div className="custom-scrollbar flex h-[150px] flex-wrap items-start gap-2 overflow-y-scroll py-4 sm:gap-4">
            {Number(episodes) > 1 &&
              [...Array(Number(episodes))].map((v, i) => (
                <Link
                  href={basePath + "/episode-" + (i + 1)}
                  key={"episode-" + (i + 1)}
                >
                  <span
                    className={`${
                      (Number(currentEpisode) == (i + 1))
                        ? "bg-[#6200cf] text-white"
                        : "bg-[#ffffff] text-slate-900 hover:text-white hover:bg-[#6200cf]"
                    } btn-sm text-sm sm:text-base`}
                  >
                    {"Episode " + (i + 1)}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default FetchEpisodes;
