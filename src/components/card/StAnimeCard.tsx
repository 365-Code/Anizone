import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { removeChars, toAnimeId } from "@/utils";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const StAnimeCard = ({ animeId: anime }: { animeId: IAnimeInfo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const animeTitle = anime.title as ITitle;

  const nav = useRouter();
  const searchAnimeInfo = async () => {
    try {
      const animeId = (
        animeTitle.romaji ||
        animeTitle.english ||
        animeTitle.userPreferred ||
        animeTitle.native
      )
        ?.toString()
        .toLowerCase();
      const data = await fetch(`/api/gogo/searchAnime?anime=${animeId}`);
      const res = await data.json();

      // dispatch(setCurrentAnime(anime));
      if (res.success && res.result) {
        const animeId = res.result.id;
        nav.push("/anime/" + animeId + "-" + anime.id);
      } else {
        nav.push("/anime/" + toAnimeId(animeTitle) + "-" + anime.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {anime && (
        <div onClick={searchAnimeInfo} className="st-anime-card cursor-pointer">
          <div className="st-anime-card-image">
            <img
              width={600}
              height={600}
              src={anime.image || ""}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="st-anime-card-detail">
            <h3 className="font-bold capitalize text-cyan-500">
              {(
                (animeTitle.english ||
                  animeTitle.romaji ||
                  animeTitle.userPreferred ||
                  animeTitle.native) as string
              ).slice(0, 146)}
            </h3>
            <p className="hyphens-auto">
              {removeChars(
                anime.description?.slice(
                  0,
                  146 -
                    (
                      (animeTitle.english ||
                        animeTitle.romaji ||
                        animeTitle.userPreferred ||
                        animeTitle.native) as string
                    ).length,
                ) as string,
                ["<br>", "<i>", "</i>"],
              )}
              {(anime.description as string)?.length > 150 && (
                <span>.....</span>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default StAnimeCard;
