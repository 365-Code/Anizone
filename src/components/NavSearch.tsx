import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const NavSearch = () => {
  // React
  const nav = useRouter();

  // useState
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // handles
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  // useEffect
  useEffect(() => {
    const data = localStorage.getItem("recentSearches");
    if (data) {
      setRecentSearches(JSON.parse(data));
    }
  }, []);

  return (
    <form
      onSubmit={handleSearch}
      className="group/navSearch ml-auto flex flex-1 items-center justify-end justify-self-end transition-all delay-200"
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
    </form>
  );
};

export default NavSearch;
