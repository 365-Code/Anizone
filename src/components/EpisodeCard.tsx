import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { IEpisodeCard, toAnimeId } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const EpisodeCard = ({ anime }: { anime: IEpisodeCard }) => {
  const animeTitle = anime.title as ITitle;
  const animeId = toAnimeId(animeTitle)
      const dispatch = useDispatch<AppDispatch>()
  return (
    <Link
    onClick={() => dispatch(setCurrentAnime({...anime, totalEpisodes: anime.episodeNumber}))}
      href={"/anime/" + animeId + "-" + anime.id + '/' + anime.episodeTitle.toLowerCase().replaceAll(' ', '-') + "?total=" + anime.episodeNumber }
    >
      <div className="transition-all group/epCard st-anime-card relative">
        <div className="st-anime-card-image">
          <img
            src={anime.image}
            className="group-hover/epCard:opacity-100 transition-all h-full w-full object-cover object-center opacity-40"
            alt=""
          />
        </div>
        <div className="transition-all group-hover/epCard:bg-black/70 w-full absolute bottom-0 left-0 p-4 hyphens-auto font-semibold">
          <h3 className="font-bold capitalize text-cyan-500 text-xs">
            {
              (animeTitle.english ||
                animeTitle.romaji ||
                animeTitle.userPreferred ||
                animeTitle.native ||
                anime.title) as string
            }
            <p className="text-xl font-medium text-white flex items-center gap-2">
              {anime.type}
              <span className="w-2 h-2 rounded-full bg-white" />
              {anime.episodeTitle}
            </p>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;

// <Link
//               onClick={() => dispatch(setCurrentAnime(anime))}
//               href={"/anime/" + animeId + "-" + anime.id}
//             >
//               <h3 id="anime-card-title" className="hyphens-auto text-3xl font-semibold">
//                 {
//                   (animeTitle.english ||
//                     animeTitle.romaji ||
//                     animeTitle.userPreferred ||
//                     animeTitle.native ||
//                     anime.title) as string
//                 }
//               </h3>
//             </Link>
