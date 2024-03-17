import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { removeChars, toAnimeId } from "@/utils";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const StAnimeCard = ({ animeId: anime }: { animeId: IAnimeInfo }) => {
  // const str = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Sequi Veritatis Aut Nemo Quibusdam Accusamus Cum Minus Reprehenderit Beatae. Aut, Maiores Facilis."
  // console.log(str.length);
  const dispatch = useDispatch<AppDispatch>();
  const animeTitle =
    (anime.title as ITitle).english ||
    (anime.title as ITitle).romaji ||
    (anime.title as ITitle).userPreferred ||
    "";

  // const animeId = ((animeTitle?.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')) || "")
  const animeId = toAnimeId(anime.title as ITitle);

  return (
    <>
      {anime && (
        // <Link href={"/anime/" + anime.id}>
        <Link
          onClick={() => dispatch(setCurrentAnime(anime))}
          href={"/anime/" + animeId}
        >
          <div className="st-anime-card">
            <div className="st-anime-card-image">
              <img
                // src="https://th.bing.com/th/id/OIP.H33BiuhCrb95ItvcmwoSmwHaLH?rs=1&pid=ImgDetMain"
                src={anime.image}
                className="w-full h-full object-center"
                alt=""
              />
            </div>
            <div className="st-anime-card-detail">
              <h3 className="text-cyan-500 font-bold capitalize">
                {/* Attack on titan final season */}
                {(animeTitle as string).slice(0, 146)}
              </h3>
              <p className="hyphens-auto">
                {/* Known in japan as shingeki no kyojin, many years ago, the last
          remnants of humanity were forced to retreat behind the towering walls
          ..... */}
                {removeChars(
                  anime.description?.slice(
                    0,
                    146 - animeTitle.length
                  ) as string,
                  ["<br>", "<i>", "</i>"]
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
