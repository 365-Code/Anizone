"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const SearchBar = () => {
  const nav = useRouter();
  const [search, setSearch] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/search/results?query=" + search);
    localStorage.setItem("recentSearches", JSON.stringify([search, ...recentSearches]))
    setRecentSearches((preVal) => [search, ...preVal])
  };

  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    const data = localStorage.getItem("recentSearches");
    if(data){
      setRecentSearches(JSON.parse(data))
    }
  }, [])




  return (
    <div className="text-slate-950 px-4 h-fit border flex gap-1 items-center rounded-full overflow-hidden bg-slate-100">
      <span className="py-2">
        <i className="text-xl fi fi-rr-search" />
      </span>
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          className="outline-none border-none p-3 w-full bg-transparent"
          placeholder="Search Anime..."
        />
        <button type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
