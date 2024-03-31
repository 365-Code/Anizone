"use client";
import React, { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams } from "next/navigation";
import { IAnimeInfo, IVideo } from "@consumet/extensions";
import Loader from "./Loader";
import Image from "next/image";

const Watch = () => {
  const fetchEpisode = async () => {
    try {
      const data = await fetch(
        `/api/gogo/fetchEpSource?epId=${animeId + "-" + epId}`,
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
  const [epSources, setEpSources] = useState<IVideo[]>([]);
  const [epHeader, setEpHeader] = useState({
    Referer: "",
  });

  useEffect(() => {
    epId && animeId && fetchEpisode();
  }, [epId, animeId]);

  useEffect(() => {
    animId && fetchCurrentAnime();
  }, [animId]);

  return (
    <section className="my-container relative bg-[#17024d] py-8">
      {epSources.length > 0 ? (
        <Player
          source={String(epSources.find((s) => s.quality == "default")?.url)}
        />
      ) : (
        <div className="relative h-[589px] w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full px-4 sm:px-12 md:px-20">
            <Image
              width={600}
              height={600}
              src={currentAnime?.image || ""}
              alt=""
              className="h-full w-full object-cover object-center opacity-50"
            />
          </div>
          <Image
            width={600}
            height={600}
            src={currentAnime?.image || ""}
            alt=""
            className="relative h-full w-full bg-transparent object-contain object-center backdrop-blur-sm"
          />
          <div
            className={`absolute left-0 top-0 mx-auto flex h-full w-full flex-col justify-center sm:left-auto ${!currentAnime?.image && "bg-black"}`}
          >
            <div className="mx-auto">
              <Image
                width={300}
                height={300}
                alt="logo"
                src="/anizone.png"
                className="w-[100px] sm:w-[160px] min-[1100px]:w-[300px]"
              />
            </div>
            <Loader />
          </div>
        </div>
      )}
    </section>
  );
};

export default Watch;
