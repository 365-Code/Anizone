"use client";
import React, { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { useParams } from "next/navigation";
import { IAnimeEpisode, IVideo } from "@consumet/extensions";
import FetchEpisode from "./FetchEpisode";

const Watch = () => {
  const fetchEpisode = async () => {
    try {
      const data = await fetch(`/api/gogo/fetchEpSource?epId=${animeId+"-"+epId}`);
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
  const animeId = (params["animeId"] as string) || "";

  const [epSources, setEpSources] = useState<IVideo[]>([]);
  const [epHeader, setEpHeader] = useState({
    Referer: "",
  });

  useEffect(() => {
    epId && fetchEpisode();
    // console.log(epId);
  }, []);

  // const epSource = "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:NAME=\"360\"\nhttps://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.360.m3u8\n#EXT-X-STREAM-INF:NAME=\"480\"\nhttps://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.480.m3u8\n#EXT-X-STREAM-INF:NAME=\"720\"\nhttps://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.720.m3u8\n#EXT-X-STREAM-INF:NAME=\"1080\"\nhttps://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.1080.m3u8"

  return (
    <div>
      {/* {epSources.length > 0 && ( */}
        <Player
          source={
            // "https://www116.vipanicdn.net/streamhls/49979d0674bcda313a04defd97c92a25/ep.1.1709184073.480.m3u8"
            epSources[2]?.url || epSources[1]?.url || epSources[0]?.url || epSources[3]?.url || "https://cdn.dribbble.com/users/93245/screenshots/3231739/loader.gif"
          }
        />
      {/* )} */}
      {/* <FetchEpisode /> */}
    </div>
  );
};

export default Watch;
