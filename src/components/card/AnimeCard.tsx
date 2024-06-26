"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { toAnimeId, toAnimeTitle } from "@/utils";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const AnimeCard = ({ anime }: { anime: IAnimeInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const animeTitle = anime.title as ITitle;

  const nav = useRouter();
  const searchAnimeInfo = async () => {
    try {
      const animeId = toAnimeTitle(animeTitle)?.toString().toLowerCase();
      const data = await fetch(`/api/gogo/searchAnime?anime=${animeId}`);
      const res = await data.json();
      // dispatch(setCurrentAnime(anime));
      if (res.success && res.result) {
        const resResult = res.result[0]
        const animeId = resResult.id;
        nav.push("/anime/" + animeId + "-" + anime.id);
      } else {
        nav.push("/anime/" + toAnimeId(animeTitle) + "-" + anime.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const animeId = toAnimeId(animeTitle);

  return (
    <div className="snap-start pl-3 pt-3">
      <div className="anime-card">
        <Image
          width={400}
          height={400}
          src={anime?.image || ""}
          alt={animeId}
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-50 sm:opacity-10 sm:blur-sm"
        />
        <div className="anime-tag">
          {anime.genres && anime.genres.length > 0
            ? anime.genres?.map(
                (g, i) =>
                  (i < 2 ? g : "") +
                  (anime?.genres?.length && anime?.genres?.length > 1 && i < 1
                    ? ", "
                    : ""),
              )
            : "Genres: N/A"}
        </div>
        <div className="anime-card-detail">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs">
              {anime.season && (
                <>
                  <span>{anime.season}</span>
                  <span className="h-1 w-1 rounded-full bg-white" />
                </>
              )}
              <span>{anime.releaseDate}</span>
              <span className="h-1 w-1 rounded-full bg-white" />
              <span>{anime.type}</span>
            </p>
            <button onClick={searchAnimeInfo}>
              <h3
                id="anime-card-title"
                className="hyphens-auto text-lg font-semibold  sm:text-3xl"
              >
                {
                  (animeTitle.english ||
                    animeTitle.romaji ||
                    animeTitle.userPreferred ||
                    animeTitle.native ||
                    anime.title) as string
                }
              </h3>
            </button>
            <p className="text-sm font-medium text-orange-500">
              {(anime.studios && anime.studios[0]) ||
                anime.status ||
                "Studio: N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <i className="fi fi-ss-star text-lg text-orange-500 sm:text-2xl" />
              <span className="text-lg sm:text-3xl">
                {anime.rating ? anime.rating + "%" : "Rating: N/A"}
              </span>
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs font-medium">
              {anime.genres?.slice(0, 4).map((g, i) => (
                <li key={i} className="rounded-full bg-white/20 px-2 py-1">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="anime-card-img ">
          <Image
            width={500}
            height={500}
            src={anime.image || ""}
            alt={animeId}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
