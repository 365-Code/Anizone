import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { toAnimeId } from "@/utils";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const AnimeCard = ({ anime }: { anime: IAnimeInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const animeTitle = anime.title as ITitle;

  const animeId = toAnimeId(animeTitle)
  return (
    <div className="snap-start pt-3 pl-3">
      <div className="anime-card">
        <div className="anime-tag">
          {anime.genres && anime.genres.length > 0
            ? anime.genres?.map(
                (g, i) =>
                  (i < 2 ? g : "") +
                  (anime?.genres?.length && anime?.genres?.length > 1 && i < 1
                    ? ", "
                    : "")
              )
            : "Genres: N/A"}
        </div>
        <div className="anime-card-detail">
          <img
            src={anime?.image}
            alt=""
            className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10 opacity-10 blur-sm"
          />
          <div className="flex flex-col gap-2">
            <p className="flex items-center text-xs gap-2">
              {anime.season && (
                <>
                  <span>{anime.season}</span>
                  <span className="w-1 h-1 rounded-full bg-white" />
                </>
              )}
              <span>{anime.releaseDate}</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>{anime.type}</span>
            </p>
            {/* <Link href={"/anime/" + anime.id}> */}
            <Link
              onClick={() => dispatch(setCurrentAnime(anime))}
              href={"/anime/" + animeId + "-" + anime.id}
            >
              <h3 id="anime-card-title" className="hyphens-auto text-3xl font-semibold">
                {
                  (animeTitle.english ||
                    animeTitle.romaji ||
                    animeTitle.userPreferred ||
                    animeTitle.native ||
                    anime.title) as string
                }
              </h3>
            </Link>

            <p className="text-orange-500 tesm font-medium">
              {(anime.studios && anime.studios[0]) || "Studio: N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold flex items-center gap-2">
              <i className="text-2xl fi fi-ss-star text-orange-500" />
              <span className="text-3xl">
                {anime.rating ? anime.rating + "%" : "Rating: N/A"}
              </span>
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
