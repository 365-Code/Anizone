"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const nav = useRouter();
  const [search, setSearch] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/search/" + search);
    const recentSearches = localStorage.getItem("recentSearches");
    console.log(recentSearches);
    // localStorage.setItem("recentSearches", JSON.stringify([search]))
  };
  return (
    <div className="px-4 h-fit border flex gap-1 items-center rounded-full overflow-hidden bg-slate-100">
      <span className="py-2">
        <i className="text-xl fi fi-rr-search" />
      </span>
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          className="outline-none border-none p-3 w-full bg-transparent text-slate-950"
          placeholder="Search Anime..."
        />
        <button type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
