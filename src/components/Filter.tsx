"use client";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import {
  genreList,
  genreMap,
  seasons,
  stauses,
  toAnimeId,
  types,
} from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader2 from "./Loader2";
const Filter = () => {
  // React
  const nav = useRouter();
  const searchParams = useSearchParams();

  const genreParams = searchParams.get("genres")
    ? ((searchParams.get("genres") as string).split(",") as string[])
    : [];

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  // UseState
  const [selectedGenres, setSelectedGenres] = useState<boolean[]>(
    genreList.map(() => false),
  );

  const [filter, setFilter] = useState({
    type: "All",
    status: "All",
    genres: [] as string[],
    season: "All",
  });

  const [rLoading, setRLoading] = useState(false);

  // handles
  const handleFilter = () => {
    const route = `type=${filter.type}&status=${filter.status}&season=${filter.season}&genres=${filter.genres}`;
    nav.push("/search/results?" + route);
  };

  const handleRandom = async () => {
    setRLoading(true);
    try {
      const data = await fetch("/api/anilist/fetchRandomAnime");
      const res = await data.json();
      if (res.success) {
        setRLoading(false);
        const animeId = toAnimeId(res.result.title) + "-" + res.result.id;
        nav.push("/anime/" + animeId);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  // UseEffect
  useEffect(() => {
    let selGenres = selectedGenres;
    genreParams.forEach((gen: string) => {
      const genreIndex = genreMap[gen] as number;
      selGenres[genreIndex] = true;
    });
    setSelectedGenres((prev) => [...prev, ...selGenres]);
  }, []);

  return (
    <section className="my-container flex flex-col gap-8 bg-[#1c073f] py-8 pb-16 text-white">
      <h2 className="text-4xl">Filter</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium text-cyan-400">Genre</h3>
          <ul
            id="genre"
            className="flex flex-wrap gap-4 md:grid md:grid-cols-5"
          >
            {genreList?.map((g, i) => (
              <li key={g}>
                <button
                  onClick={() => handleGenre(g, i)}
                  className={`${
                    selectedGenres[i] ? "" : "border-transparent"
                  } border-b transition-all hover:border-white`}
                >
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 md:grid md:grid-cols-5">
          <div className="flex w-full items-center gap-2 font-semibold sm:w-auto">
            <p className="gradient-bg w-fit rounded-lg px-2 py-1">Type</p>
            <div className="group/filterTypes relative flex-1">
              <p className="flex w-full items-center justify-center">
                <span className="flex-1 text-center">{filter.type}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="custom-scrollbar absolute right-0 flex h-0 w-full min-w-fit flex-col overflow-hidden overflow-y-scroll bg-[#2c073f] text-sm transition-all focus:h-0 group-hover/filterTypes:z-10 group-hover/filterTypes:h-[70px]">
                {types.map((type, i) => (
                  <button
                    onClick={() => setFilter((preVal) => ({ ...preVal, type }))}
                    className="px-4 py-1 hover:bg-[#230149]"
                    key={i}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 font-semibold sm:w-auto">
            <p className="gradient-bg w-fit rounded-lg px-2 py-1">Status</p>
            <div className="group/filterStatuses relative flex-1">
              <p className="flex items-center justify-center">
                <span className="flex-1 text-center">{filter.status}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="custom-scrollbar absolute right-0 flex h-0 w-full min-w-fit flex-col overflow-hidden overflow-y-scroll bg-[#2c073f] text-sm transition-all focus:h-0 group-hover/filterStatuses:z-10 group-hover/filterStatuses:h-[70px]">
                {stauses.map((status, i) => (
                  <button
                    onClick={() =>
                      setFilter((preVal) => ({ ...preVal, status }))
                    }
                    className="px-4 py-1 hover:bg-[#230149]"
                    key={i}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 font-semibold sm:w-auto">
            <p className="gradient-bg w-fit rounded-lg px-2 py-1">Season</p>
            <div className="group/filterSeasons relative flex-1">
              <p className="flex w-full items-center justify-center">
                <span className="flex-1 text-center">{filter.season}</span>
                <i className="fi fi-sr-angle-small-down" />
              </p>
              <div className="custom-scrollbar absolute right-0 flex h-0 w-full min-w-fit flex-col overflow-hidden overflow-y-scroll bg-[#2c073f] text-sm transition-all focus:h-0 group-hover/filterSeasons:z-10 group-hover/filterSeasons:h-[70px]">
                {seasons.map((season, i) => (
                  <button
                    onClick={() =>
                      setFilter((preVal) => ({ ...preVal, season }))
                    }
                    className="px-4 py-1 hover:bg-[#230149]"
                    key={i}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleFilter}
            className="btn-sm btn-primary-sm w-fit"
          >
            Filter Here
          </button>
          <button
            onClick={handleRandom}
            className="btn-sm btn-secondary-sm flex w-fit items-center gap-2"
          >
            <span>Get Random</span>
            {rLoading ? (
              <i className="fi fi-sr-spinner animate-spin" />
            ) : (
              <i className="fi fi-sr-shuffle" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
