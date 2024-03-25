import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { removeChars, toAnimeId } from "@/utils";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const StAnimeCard = ({ animeId: anime }: { animeId: IAnimeInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const animeTitle =
    (anime.title as ITitle).english ||
    (anime.title as ITitle).romaji ||
    (anime.title as ITitle).userPreferred ||
    "";

  const animeId = toAnimeId(anime.title as ITitle);

  return (
    <>
      {anime && (
        // <Link href={"/anime/" + anime.id}>
        <Link
          onClick={() => dispatch(setCurrentAnime(anime))}
          href={"/anime/" + animeId + "-" + anime.id}
        >
          <div className="st-anime-card">
            <div className="st-anime-card-image">
              <img
                src={anime.image}
                className="h-full w-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="st-anime-card-detail">
              <h3 className="font-bold capitalize text-cyan-500">
                {/* Attack on titan final season */}
                {(animeTitle as string).slice(0, 146)}
              </h3>
              <p className="hyphens-auto">
                {removeChars(
                  anime.description?.slice(
                    0,
                    146 - animeTitle.length,
                  ) as string,
                  ["<br>", "<i>", "</i>"],
                )}
                {(anime.description as string)?.length > 150 && (
                  <span>.....</span>
                )}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default StAnimeCard;
