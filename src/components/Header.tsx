"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const navLinks = ["home", "movies", "series", "trending", "top rated"];

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
      <nav className="text-white my-container flex flex-wrap justify-between py-8 items-center">
        {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
        <h2 className="text-5xl">
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
        </h2>
        <ul className="flex flex-wrap items-center gap-12 uppercase font-normal">
          {navLinks.map((l, i) => (
            <li
              key={i}
              className={
                pathname.includes(l) ? "nav-link-selected" : "nav-link"
              }
            >
              <Link href={"/"+ l}>{l}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
