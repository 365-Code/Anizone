import { IAnimeInfo, ITitle } from "@consumet/extensions";
import React from "react";

const PlayNowCard = ({
  animeInfo,
  animeTitle,
}: {
  animeInfo: IAnimeInfo;
  animeTitle: ITitle;
}) => {
  return (
    <div className="play-now-card">
      <div className="play-now-card-detail">
        <img
          src={animeInfo?.image}
          alt=""
          className="w-full h-full object-cover object-center absolute top-0 left-0 opacity-10 blur-sm"
        />
        <div className="flex flex-col gap-2">
          <p className="flex items-center text-xs gap-2">
            {/* {animeInfo?.type?.split(" ").map((t, ind) => (
              <span key={ind} className="flex gap-2 items-center">
                <span>{t}</span>
                {ind + 1 != animeInfo.type?.split(" ")?.length && (
                  <span className="w-1 h-1 rounded-full bg-white" />
                )}
              </span>
            ))} */}
            {animeInfo.season || animeInfo.type == "TV" && (
                <>
                  <span>{animeInfo.season || "Season 1"}</span>
                  <span className="w-1 h-1 rounded-full bg-white" />
                </>
              )}
              <span>{animeInfo.releaseDate}</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>{animeInfo.type}</span>
          </p>
          <h3 className="text-3xl font-semibold">
            {animeTitle?.english ||
              animeTitle?.romaji ||
              animeTitle?.userPreferred}
          </h3>
          <p className="text-orange-500 font-semibold">
          {(animeInfo.studios && animeInfo.studios[0]) || "Studio: N/A"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold flex items-center gap-2">
            <i className="text-2xl fi fi-ss-star text-orange-500" />
            <span className="text-3xl">
              {animeInfo.rating ? animeInfo.rating + "%" : "Rating: N/A"}
            </span>
          </p>
          <ul className="flex items-center gap-2 text-xs font-medium flex-wrap">
            {animeInfo?.genres?.map((g, i) => (
              <li key={i} className="bg-white/20 py-1 px-4 rounded-full">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="play-now-card-img ">
        <img
          src={animeInfo?.image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default PlayNowCard;
