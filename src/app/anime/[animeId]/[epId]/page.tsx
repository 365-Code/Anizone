import FetchEpisodes from "@/components/FetchEpisodes";
import Watch from "@/components/Watch";
import React from "react";

const Page = () => {
  return (
    <div>
      <Watch />
      <FetchEpisodes/>
    </div>
  );
};

export default Page;
