import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { toAnimeId, toAnimeTitle } from "@/utils";
import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdvSearchBar = () => {
  // React
  const nav = useRouter();

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  // UseState
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [advResults, setAdvResults] = useState<IAnimeResult[]>([]);

  // Fetch
  const fetchAdvResults = async () => {
    try {
      const sort = ["TRENDING_DESC"];
      const data = await fetch(
        `/api/anilist/advanceSearch?query=${search}&page=${1}&perPage=${4}&sort=${sort}`,
      );
      const res = await data.json();
      setLoading(false);
      if (res.success) {
        setAdvResults(res.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchAnimeInfo = async (anime: IAnimeResult) => {
    try {
      const animeTitle = anime.title as ITitle;
      const animeId = toAnimeTitle(animeTitle)?.toString().toLowerCase();
      const data = await fetch(`/api/gogo/searchAnime?anime=${animeId}`);
      const res = await data.json();

      if (res.success && res.result) {
        const resResult = res.result[0];
        const animeId = resResult.id;
        dispatch(setCurrentAnime(resResult));
        nav.push("/anime/" + animeId + "-" + anime.id);
      } else {
        nav.push("/anime/" + toAnimeId(animeTitle) + "-" + anime.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handles
  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    setAdvResults([]);
    const recSearches = recentSearches;
    if (!recSearches.find((s) => s.toLowerCase() == search.toLowerCase())) {
      localStorage.setItem(
        "recentSearches",
        JSON.stringify([search, ...recentSearches]),
      );
      setRecentSearches((preVal) => [search, ...preVal]);
    }
    nav.push("/search/results?query=" + search);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // UseEffect
  useEffect(() => {
    const data = localStorage.getItem("recentSearches");
    if (data) {
      setRecentSearches(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      search ? fetchAdvResults() : setSearch("");
    }, 300);
    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <form
      onSubmit={handleSearch}
      className="group/navSearch relative ml-auto flex flex-1 items-center justify-end justify-self-end transition-all delay-200"
    >
      <input
        onChange={handleChange}
        value={search}
        type="search"
        id="navSearchInput"
        name="navSearchInput"
        placeholder="Search Anime..."
        className="w-0 border-b border-b-white bg-transparent p-1 outline-none transition-all delay-200 focus-within:w-full group-hover/navSearch:w-full sm:w-full"
      />
      <Link
        href={"/search/results"}
        className="rounded-r-lg p-1 transition-all hover:bg-white/70 hover:text-black"
      >
        <i className="fi fi-sr-search px-2 py-1" />
      </Link>
      <div className="no-scrollbar absolute left-0 top-full z-10 flex max-h-[140px] w-full flex-col overflow-y-scroll bg-black">
        {advResults.map((anime, i) => (
          <div
            onClick={() => searchAnimeInfo(anime)}
            key={anime.id}
            className="mb-1 flex h-fit w-full cursor-pointer items-center gap-2 bg-white/30 transition-all hover:bg-white/50"
          >
            <div className="w-[72px]">
              <img
                src={anime.image}
                alt={anime.id}
                className="h-full w-full object-contain object-center"
              />
            </div>
            <p className="text-white">{toAnimeTitle(anime.title as ITitle)}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default AdvSearchBar;
