import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";

const AnimeCard = ({ anime }: { anime: IAnimeInfo }) => {
  const animeTitle = anime.title as ITitle;

  return (
    <div className="pt-3 pl-3">
      <div className="anime-card">
        <div className="anime-tag">
          {anime.genres
            ? anime.genres?.map(
                (g, i) =>
                  (i < 2 ? g : "") +
                  (anime?.genres?.length && anime?.genres?.length > 1 && i < 1
                    ? ", "
                    : "")
              )
            : "N/A"}
        </div>
        <div className="anime-card-detail">
          <img
            src={anime?.image}
            alt=""
            className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10 opacity-10 blur-sm"
          />
          <div className="flex flex-col gap-2">
            <p className="flex items-center text-xs gap-2">
              {/* {anime?.type?.split(" ").map((t, ind) => (
                <span key={ind} className="flex gap-2 items-center">
                  <span>{t}</span>
                  {ind + 1 != anime.type?.split(" ")?.length && (
                    <span className="w-1 h-1 rounded-full bg-white" />
                    )}
                    </span>
                  ))} */}
              <span>{anime.season}</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>{anime.releaseDate}</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>{anime.type}</span>
            </p>
            <Link href={"/anime/" + anime.id}>
              <h3 className="text-3xl font-semibold">
                {
                  (animeTitle.english ||
                    animeTitle.romaji ||
                    animeTitle.romaji ||
                    animeTitle.userPreferred ||
                    anime.title) as string
                }
              </h3>
            </Link>

            <p className="text-orange-500 tesm font-medium">
              {(anime.studios && anime.studios[0]) || "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold flex items-center gap-2">
              <i className="text-2xl fi fi-ss-star text-orange-500" />
              <span className="text-3xl">{anime.rating || "N/A"}%</span>
            </p>
            <ul className="flex items-center gap-2 text-xs font-medium flex-wrap">
              {anime.genres?.slice(0, 4).map((g, i) => (
                <li key={i} className="bg-white/20 py-1 px-2 rounded-full">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="anime-card-img ">
          <img
            src={anime.image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
