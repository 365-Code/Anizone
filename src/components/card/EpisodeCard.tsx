import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { IEpisodeCard, toAnimeId } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const EpisodeCard = ({ anime }: { anime: IEpisodeCard }) => {
  const animeTitle = anime.title as ITitle;
  const animeId = toAnimeId(animeTitle);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Link
      onClick={() =>
        dispatch(
          setCurrentAnime({ ...anime, totalEpisodes: anime.episodeNumber }),
        )
      }
      href={"/anime/" + animeId + "-" + anime.id}
    >
      <div className="group/epCard st-anime-card relative transition-all">
        <div className="st-anime-card-image">
          <img
            width={600}
            height={600}
            src={anime.image || ""}
            className="h-full w-full object-cover object-center opacity-40 transition-all group-hover/epCard:opacity-100"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full hyphens-auto p-4 font-semibold transition-all group-hover/epCard:bg-black/70">
          <h3 className="text-xs font-bold capitalize text-cyan-500">
            {
              (animeTitle.english ||
                animeTitle.romaji ||
                animeTitle.userPreferred ||
                animeTitle.native ||
                anime.title) as string
            }
            <p className="flex items-center gap-2 text-xl font-medium text-white">
              {anime.type}
              <span className="h-2 w-2 rounded-full bg-white" />
              {anime.episodeTitle}
            </p>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
