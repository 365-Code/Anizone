import React, { useEffect, useState } from "react";
import CharacterCard from "../card/CharacterCard";
import { charDetails, charInfo } from "@/utils";
import { useAppSelector } from "@/redux/store";

const FetchAnimeCharacters = () => {
  const [characters, setCharacters] = useState<charDetails[]>([]);

  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime,
  );

  const fetchRes = async () => {
    try {
      const data = await fetch(
        process.env.NEXT_PUBLIC_JIKANAPI +
          "/anime/" +
          (currentAnime?.malId || 53434)  +
          "/characters",
      );
      const res = await data.json();
      if (res) {
        const { data } = res;
        let Chars = [] as charDetails[];
        data.forEach((element: charInfo) => {
          const character = element.character;
          Chars.push({
            name: character.name,
            image: character.images.jpg.image_url,
            role: element.role,
            malId: character.mal_id
          });
        });
        setCharacters(Chars);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // currentAnime?.malId && fetchRes();
    fetchRes();
  }, [currentAnime]);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
    const character = document.getElementById("characters");
    if (showAll) {
      character?.scrollTo(0, 0);
    }
  };

  return (
    <section className="relative space-y-4">
      {currentAnime?.malId && (
        <h2 className="text-xl sm:text-3xl">Characters</h2>
      )}
      <div
        id="characters"
        className={` ${showAll ? "h-[330px] overflow-y-scroll" : "h-[300px] overflow-hidden"} no-scrollbar flex max-h-[400px] flex-wrap items-start justify-center gap-2 transition-all`}
      >
        {characters.map((c, i) => (
          <CharacterCard key={i} character={c} />
        ))}
      </div>
      <button
        className={`${showAll ? "bg-black" : "absolute bottom-0 backdrop-blur-sm"} left-0 w-full p-4 text-white transition-all`}
        onClick={handleShowAll}
      >
        {showAll ? "Collapse" : "Expand "}
      </button>
    </section>
  );
};

export default FetchAnimeCharacters;
