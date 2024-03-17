"use client";
import React, { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams } from "next/navigation";
import { IAnimeEpisode, IVideo } from "@consumet/extensions";
import FetchEpisode from "./FetchEpisode";
import { useAppSelector } from "@/redux/store";

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

  const params = useParams();

  const epId = (params["epId"] as string) || "";
  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime
  );
  const animeId = (params["animeId"] as string) || "";

  const [epSources, setEpSources] = useState<IVideo[]>([]);
  const [epHeader, setEpHeader] = useState({
    Referer: "",
  });

  useEffect(() => {
    epId && fetchEpisode();
  }, []);

  return (
    <div>
      {epSources.length > 0 ? (
        <Player
          source={
            // "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.480.m3u8"
            epSources[3]?.url ||
            epSources[2]?.url ||
            epSources[1]?.url ||
            epSources[0]?.url
          }
        />
      ) : (
        <div className="my-container overflow-hidden w-full h-[500px] relative">
          <img
            src={currentAnime?.image}
            alt=""
            className="w-full h-full object-scale-down object-center"
          />
          <div className="px-4 sm:px-12 md:px-20 absolute top-0 left-0 w-full h-full -z-10">
            <img
              src={currentAnime?.image}
              alt=""
              className="w-full h-full object-cover object-center opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Watch;
