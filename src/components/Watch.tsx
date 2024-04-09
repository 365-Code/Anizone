"use client";
import React, { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams } from "next/navigation";
import { IAnimeInfo, ITitle, IVideo } from "@consumet/extensions";
import Loader from "./Loader";
import Image from "next/image";
import dynamic from "next/dynamic";
import FetchEpisodes from "./FetchEpisodes";
import Loader2 from "./Loader2";

const Watch = () => {
  const fetchEpisode = async () => {
    try {
      const data = await fetch(
        `/api/gogo/fetchEpSource?epId=${animeId + "-" + epId}`,
      );
      const res = await data.json();
      setEpLoading(false);
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
  // const epId = (params["epId"] as string) || "";
  const aId = (params["animeId"] as string) || "";
  const animeId = aId.slice(0, aId.lastIndexOf("-"));
  const animId = aId.slice(aId.lastIndexOf("-") + 1);
  const [epSources, setEpSources] = useState<IVideo[]>([
    {
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      quality: "default",
    },
  ]);

  const [ep, setEp] = useState<number>(1);
  const [epId, setEpId] = useState<string>("episode-1");
  const [epLoading, setEpLoading] = useState(true);

  useEffect(() => {
    setEpId("episode-" + ep);
  }, [ep]);

  useEffect(() => {
    if (epId && animeId) {
      setEpLoading(true);
      fetchEpisode();
    }
  }, [epId, animeId]);

  useEffect(() => {
    animId && fetchCurrentAnime();
  }, [animId]);

  // const Player = dynamic(() => import('../components/VideoPlayer'), { ssr: false })

  return (
    // <section className="my-container relative bg-[#17024d] py-8">
    <section className="video-card relative">
      <div className="absolute right-0 top-0 z-10 ">
        <FetchEpisodes ep={ep} setEp={setEp} />
      </div>
      {epLoading && (
        <div className="absolute left-0 top-0 z-10 flex h-full max-h-[480px] w-full flex-col items-center justify-center bg-black/70">
          <Loader2 />
        </div>
      )}
      <Player
        source={String(epSources.find((s) => s.quality == "default")?.url)}
      />
    </section>
  );
};

export default Watch;
