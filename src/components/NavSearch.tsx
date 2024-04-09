import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const NavSearch = () => {
  const nav = useRouter();
  const [search, setSearch] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    nav.push("/search/results?query=" + search);
    localStorage.setItem(
      "recentSearches",
      JSON.stringify([search, ...recentSearches]),
    );
    setRecentSearches((preVal) => [search, ...preVal]);
  };

  const [recentSearches, setRecentSearches] = useState<string[]>([]);

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
        // className="bg-transparent focus-within:w-full group-hover/navSearch:w-full delay-200 border-b border-b-white w-0 transition-all outline-none"
        className="w-0 border-b border-b-white bg-transparent outline-none transition-all delay-200 focus-within:w-full group-hover/navSearch:w-full sm:w-full"
        // className="bg-transparent w-full delay-200 border-b border-b-white transition-all outline-none"
      />
      <Link href={"/search/results"} className="rounded-lg p-1 transition-all hover:bg-black/70">
          <i className="fi fi-sr-search px-2 py-1" />
      </Link>
    </form>
  );
};

export default NavSearch;
