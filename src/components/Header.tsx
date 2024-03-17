"use client";
import { loadCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const pathname = usePathname();
  const nav = useRouter();

  const navLinks = ["home", "movies", "series", "trending", "top rated"];
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(loadCurrentAnime())
  }, [])

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
      <nav className="text-white my-container flex flex-wrap justify-between py-8 items-center">

        {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
        <h2 className="text-5xl relative">
          {pathname.includes("movies")
            ? "Movies"
            : pathname.includes("anime")
            ? "Play Now"
            : pathname.includes("trending")
            ? "Trending"
            : pathname.includes("series")
            ? "Series"
            : pathname.includes("search")
            ? "Search Results"
            : pathname.includes("episode")
            ? "Search Results"
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
                pathname.includes(l) ? "nav-link-selected" : "nav-link"
              }
            >
              <Link href={"/"+ l.replace(' ', '-')}>{l}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
