"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const SearchBar = () => {
  // React
  const nav = useRouter();

  // UseState
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // handles
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/search/results?query=" + search);
    const recSearches = recentSearches;
    if (!recSearches.find((s) => s.toLowerCase() == search.toLowerCase())) {
      localStorage.setItem(
        "recentSearches",
        JSON.stringify([search, ...recentSearches]),
      );
      setRecentSearches((preVal) => [search, ...preVal]);
    }
  };

  // useEffect
  useEffect(() => {
    const data = localStorage.getItem("recentSearches");
    if (data) {
      setRecentSearches(JSON.parse(data));
    }
  }, []);

  return (
    <div className="flex h-fit items-center gap-1 overflow-hidden rounded-full border bg-slate-100 px-4 text-slate-950">
      <span className="py-2">
        <i className="fi fi-rr-search text-xl" />
      </span>
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          className="w-full border-none bg-transparent p-3 outline-none"
          placeholder="Search Anime..."
        />
        <button type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
