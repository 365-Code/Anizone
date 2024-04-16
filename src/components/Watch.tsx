"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { IVideo } from "@consumet/extensions";
import FetchEpisodes from "./fetch/FetchEpisodes";
import Loader2 from "./Loader2";

const Watch = () => {

  const [epFailed, setEpFailed] = useState(false)

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
      } else{
        setEpFailed(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const params = useParams();
  const aId = (params["animeId"] as string) || "";
  const animeId = aId.slice(0, aId.lastIndexOf("-"));
  const animId = aId.slice(aId.lastIndexOf("-") + 1);
  const [epSources, setEpSources] = useState<IVideo[]>([
    {
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      quality: "default",
    },
  ]);

  const [ep, setEp] = useState<number>(0);
  const [epId, setEpId] = useState<string>("episode-1");
  const [epLoading, setEpLoading] = useState(true);

  const nav = useRouter();

  const searchParams = useSearchParams();
  const paramsEpId = (searchParams.get("episode") || 0) as number;

  useEffect(() => {
    if (paramsEpId) {
      setEp(paramsEpId);
    } else {
      const data = localStorage.getItem("animeEp");
      const epRoute = "/anime/" + (params["animeId"] as string) + "?episode=";
      if (data) {
        const animeEp = JSON.parse(data);
        if (!animeEp[animId]) {
          handleEpBackup();
        }
        setEp((animeEp[animId] as number) || 1);
        nav.push(epRoute + (animeEp[animId] || 1));
      } else {
        localStorage.setItem("animeEp", JSON.stringify({ [animId]: 1 }));
        setEp(1);
      }
    }
  }, [paramsEpId]);

  const handleEpBackup = () => {
    const data = localStorage.getItem("animeEp");
    const epRoute = "/anime/" + (params["animeId"] as string) + "?episode=";
    if (data) {
      const animeEp = JSON.parse(data);
      localStorage.setItem(
        "animeEp",
        JSON.stringify({ ...animeEp, [animId]: ep || 1 }),
      );
    }
  };

  useEffect(() => {
    if (ep) {
      setEpId("episode-" + ep);
      handleEpBackup();
    }
  }, [ep]);

  useEffect(() => {
    if (epId && animeId) {
      setEpLoading(true);
      fetchEpisode();
    }
  }, [epId, animeId]);

  return (
    <section className="video-card relative">
      <div className="absolute right-0 top-0 z-10 ">
        <FetchEpisodes
          ep={ep as number}
          setEp={setEp as Dispatch<SetStateAction<number>>}
        />
      </div>
      {epLoading && (
        <div className="absolute left-0 top-0 z-10 flex h-full max-h-[480px] w-full flex-col items-center justify-center bg-black/70">
          <Loader2 />
        </div>
      )}
      {
        epFailed && 
        <p>Couldn&apos;t Fetch Episode</p>
      }
      <Player
        source={String(epSources.find((s) => s.quality == "default")?.url)}
      />
    </section>
  );
};

export default Watch;
