"use client";
import React, { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams } from "next/navigation";
import { IAnimeInfo, IVideo } from "@consumet/extensions";
import Loader from "./Loader";
import Image from "next/image";
import { movInfo } from "@/utils/test";

const Watch = () => {
  const fetchEpisode = async () => {
    try {
      const data = await fetch(
        `/api/gogo/fetchEpSource?epId=${animeId + "-" + epId}`
      );
      const res = await data.json();
      if (res.success) {
        setEpSources(res.sources);
        const epHeader = res.headers;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCurrentAnime = async () => {
    try {
      const data = await fetch(`/api/anilist/fetchAnimeInfo?anime=${animId}`);
      const res = await data.json();
      if (res.success) {
        setCurrentAnime(res.animeData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [currentAnime, setCurrentAnime] = useState<IAnimeInfo>();

  const params = useParams();
  const epId = (params["epId"] as string) || "";
  const aId = (params["animeId"] as string) || "";
  const animeId = aId.slice(0, aId.lastIndexOf("-"));
  const animId = aId.slice(aId.lastIndexOf("-") + 1);
  const [epSources, setEpSources] = useState<IVideo[]>([{url: movInfo.sources[4].url, quality: "default"}]);
  const [epHeader, setEpHeader] = useState({
    Referer: "",
  });
  

  useEffect(() => {
    const debounce = setTimeout(() => {
      // epId && animeId && fetchEpisode();
      // animId && fetchCurrentAnime();
    }, 100);
    return () => clearTimeout(debounce);
    
  }, []);

  return (
    <section className="bg-[#17024d] py-8 h-fit [650px]">
      {epSources.length > 0 ? (
        <Player
          source={
            String(epSources.find((s) => s.quality == "default")?.url)
          }
        />
      ) : (
        <div className="my-container overflow-hidden w-full h-[600px] relative">
          <div className="px-4 sm:px-12 md:px-20 absolute top-0 left-0 w-full h-full">
            <img
              src={currentAnime?.image}
              alt=""
              className="w-full h-full object-cover object-center opacity-50"
            />
          </div>
          <img
            src={currentAnime?.image}
            alt=""
            className="backdrop-blur-sm w-full h-full object-contain object-center bg-transparent relative"
          />
          <div className={`mx-auto w-full left-0 sm:w-[86.8%] sm:left-auto absolute top-0 h-full flex flex-col justify-center ${!currentAnime?.image && "bg-black"}`}>
            <div className="mx-auto">
            <Image width={300} height={300} alt="logo" src='/logo2.png' className="w-[100px] sm:w-[160px] min-[1100px]:w-[300px]" />
            </div>
            <Loader />
          </div>
        </div>
      )}
    </section>
  );
};

export default Watch;
