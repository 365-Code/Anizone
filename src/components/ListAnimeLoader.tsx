import React from "react";
import StAnimeCardSkeleton from "./StAnimeCardSkeleton";
import Background from "./Background";

const ListAnimeLoader = ({size, perPage}: {size: number, perPage: number}) => {
  return (
    <div className="my-container relative no-scrollbar max-h-[140vh] overflow-y-scroll grid grid-cols-4 gap-4 flex-1 justify-center sm:justify-between flex-wrap">
      {[...Array(size)].map((v, i) => (
        <StAnimeCardSkeleton key={i} />
      ))}
      <Background bgLength={(size/perPage)} />
    </div>
  );
};

export default ListAnimeLoader;
