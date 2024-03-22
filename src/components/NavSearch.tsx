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
    setSearch("")
    nav.push("/search/results?query=" + search);
    // nav.push("/test?query=" + search);
    localStorage.setItem(
      "recentSearches",
      JSON.stringify([search, ...recentSearches])
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
      className="ml-auto flex-1 flex justify-end justify-self-end items-center group/navSearch transition-all delay-200"
    >
      <input
        onChange={handleChange}
        value={search}
        type="search"
        placeholder="Search Anime..."
        // className="bg-transparent focus-within:w-full group-hover/navSearch:w-full delay-200 border-b border-b-white w-0 transition-all outline-none"
        className="bg-transparent focus-within:w-full group-hover/navSearch:w-full sm:w-full delay-200 border-b border-b-white w-0 transition-all outline-none"
        // className="bg-transparent w-full delay-200 border-b border-b-white transition-all outline-none"
      />
      <i className="fi fi-sr-search py-1 px-2" />
    </form>
  );
};

export default NavSearch;
