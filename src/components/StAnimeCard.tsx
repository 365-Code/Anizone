import { IAnimeInfo, ITitle } from "@consumet/extensions";
import React from "react";

const StAnimeCard = ({ animeId: anime }: { animeId: IAnimeInfo }) => {
  // const str = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Sequi Veritatis Aut Nemo Quibusdam Accusamus Cum Minus Reprehenderit Beatae. Aut, Maiores Facilis."
  // console.log(str.length);
  const animeTitle =
    (anime.title as ITitle).romaji ||
    (anime.title as ITitle).english ||
    (anime.title as ITitle).userPreferred ||
    "";

  return (
    <>
      {anime && (
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
              {anime.description?.slice(0, 146 - animeTitle.length).replaceAll("<br>", ' ')}
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
