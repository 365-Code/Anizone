"use client";
import {
  loadCurrentAnime,
  setCurrentAnime,
} from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import NavSearch from "./NavSearch";

const Header = () => {
  const pathname = usePathname();
  const nav = useRouter();

  const navLinks = ["home", "movies", "series", "trending", "top rated"];

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
      <nav className="text-white my-container flex flex-wrap justify-between py-8 items-center">
        {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
        <h2 className="text-5xl relative">
          {pathname.includes("movies")
            ? "Movies"
            : pathname.includes("episode")
            ? "Playing"
            : pathname.includes("anime")
            ? "Play Now"
            : pathname.includes("trending")
            ? "Trending"
            : pathname.includes("series")
            ? "Series"
            : pathname.includes("top-rated")
            ? "Top Rated"
            : pathname.includes("search")
            ? "Results"
            : "AniZone"}
          <button onClick={() => nav.back()}>
            <i className="fi fi-rr-arrow-small-left absolute top-0 -left-16" />
          </button>
        </h2>
        <ul className="flex flex-wrap items-center gap-12 uppercase font-normal">
          {navLinks.map((l, i) => (
            <li
              key={i}
              className={
                pathname.includes(l.replace(" ", "-").toLowerCase())
                  ? "nav-link-selected"
                  : "nav-link"
              }
            >
              <Link href={"/" + l.replace(" ", "-")}>{l}</Link>
            </li>
          ))}
        </ul>
        <div className="basis-[200px]">
          <NavSearch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
