"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { toAnimeId } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loader2 from "./Loader2";
const Filter = () => {

  const genreList = [
    "Action",
    "Adventure",
    "Cars",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mahou Shoujo",
    "Mecha",
    "Music",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Thriller",
  ];

  const [selectedGenres, setSelectedGenres] = useState<boolean[]>(
    genreList.map(() => false)
  );

  const seasons = ["All", "WINTER", "SPRING", "SUMMER", "FALL"];

  const types = [
    "All",
    "TV",
    "TV_SHORT",
    "OVA",
    "ONA",
    "MOVIE",
    "SPECIAL",
    "MUSIC",
  ];

  const stauses = [
    "All",
    "RELEASING",
    "NOT_YET_RELEASED",
    "FINISHED",
    "CANCELLED",
    "HIATUS",
  ];

  const [filter, setFilter] = useState({
    type: "All",
    status: "All",
    genres: [] as string[],
    season: "All",
  });

  const nav = useRouter();

  const handleFilter = () => {
    const route = `type=${filter.type}&status=${filter.status}&season=${filter.season}&genres=${filter.genres}`;
    nav.push("/search/results?" + route);
  };

  const dispatch = useDispatch<AppDispatch>()
  const [rLoading, setRLoading] = useState(false)
  const handleRandom = async () => {
    setRLoading(true)
    try {
      const data = await fetch("/api/anilist/fetchRandomAnime")
      const res = await data.json()
      if(res.success){
        setRLoading(false)
        dispatch(setCurrentAnime(res.result))
        const animeId = toAnimeId(res.result.title) + '-' + res.result.id
        nav.push('/anime/'+animeId)
      }
    } catch (error) {
      console.log(error);
    }

  }

  const handleGenre = (genre: string, ind: number) => {
    const index = filter.genres.findIndex((g) => g == genre);
    let nGr = selectedGenres;
    if (index == -1) {
      setFilter((preVal) => ({ ...preVal, genres: [...preVal.genres, genre] }));
      nGr[ind] = true;
    } else {
      const genreList = filter.genres;
      setFilter((preVal) => ({
        ...preVal,
        genres: genreList.filter((g) => g != genre),
      }));
      nGr[ind] = false;
    }
    setSelectedGenres(nGr);
  };

  return (
    <section className="my-container bg-[#1c073f] py-8 pb-16 flex flex-col gap-8 text-white">
      <h2 className="text-4xl">Filter</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-cyan-400 font-medium text-xl">Genre</h3>
        <ul id="genre" className="md:grid flex-wrap flex md:grid-cols-5 gap-4">
          {genreList?.map((g, i) => (
            <li key={g}>
              <button
                onClick={() => handleGenre(g, i)}
                className={`${
                  selectedGenres[i] ? "border-b" : "border-b border-transparent"
                } transition-all`}
              >
                {g}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:grid md:grid-cols-5 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <p className="gradient-bg px-2 py-1 rounded-lg w-fit">Type</p>
            <div className="relative flex-1 group/filterTypes">
              <p className="w-full justify-center flex items-center">
                <span className="flex-1 text-center">{filter.type}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="focus:h-0 group-hover/filterTypes:h-[70px] overflow-y-scroll custom-scrollbar overflow-hidden transition-all h-0 absolute text-sm flex flex-col right-0 bg-[#2c073f] w-full">
                {types.map((type, i) => (
                  <button
                    onClick={() => setFilter((preVal) => ({ ...preVal, type }))}
                    className="hover:bg-[#230149] px-4 py-1"
                    key={i}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <p className="gradient-bg px-2 py-1 rounded-lg w-fit">Status</p>
            <div className="relative flex-1 group/filterStatuses">
              <p className="w-full justify-center flex items-center">
                <span className="flex-1 text-center">{filter.status}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="focus:h-0 group-hover/filterStatuses:h-[70px] overflow-y-scroll custom-scrollbar overflow-hidden transition-all h-0 absolute text-sm flex flex-col right-0 bg-[#2c073f] w-full">
                {stauses.map((status, i) => (
                  <button
                    onClick={() =>
                      setFilter((preVal) => ({ ...preVal, status }))
                    }
                    className="hover:bg-[#230149] px-4 py-1"
                    key={i}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <p className="gradient-bg px-2 py-1 rounded-lg w-fit">Season</p>
            <div className="relative flex-1 group/filterSeasons">
              <p className="w-full justify-center flex items-center">
                <span className="flex-1 text-center">{filter.season}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="focus:h-0 group-hover/filterSeasons:h-[70px] overflow-y-scroll custom-scrollbar overflow-hidden transition-all h-0 absolute text-sm flex flex-col right-0 bg-[#2c073f] w-full">
                {seasons.map((season, i) => (
                  <button
                    onClick={() =>
                      setFilter((preVal) => ({ ...preVal, season }))
                    }
                    className="hover:bg-[#230149] px-4 py-1"
                    key={i}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button onClick={handleFilter} className="btn-sm btn-primary-sm w-fit">
            Filter Here
          </button>
          <button onClick={handleRandom} className="flex items-center gap-2 btn-sm btn-secondary-sm w-fit">
            <span>Get Random</span>
            {
              rLoading ?
              <i className="fi fi-sr-spinner animate-spin" />
              :
              <i className="fi fi-sr-shuffle" />
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
