import FetchEpisodes from "@/components/FetchEpisodes";
import Watch from "@/components/Watch";
import React from "react";

const Page = () => {
  return (
    <main>
      <Watch />
      <FetchEpisodes />
    </main>
  );
};

export default Page;
