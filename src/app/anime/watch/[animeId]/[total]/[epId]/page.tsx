import Episodes from "@/components/Episodes";
import Watch from "@/components/Watch";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* <FetchEpisode episodeId='horimiya-episode-1' /> */}
      {/* <Player source={"https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8"} /> */}
      <Watch />
      <Episodes/>
    </div>
  );
};

export default Page;
