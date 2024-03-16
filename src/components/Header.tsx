"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname()
  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
    <nav className="text-white my-container flex flex-wrap justify-between py-8 items-center">
      {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
      <h2 className="text-5xl">
        {
          pathname.includes('movies') ? "Movies" :
          pathname.includes('anime') ? "Play Now" :
          pathname.includes('trending') ? "Trending" :
          pathname.includes('series') ? "Series" : "AniZone"
        }
      </h2>
      <ul className="flex flex-wrap items-center gap-12 uppercase font-normal">
        <li className="nav-link">
          <Link href="/home">home</Link>
        </li>
        <li className="nav-link">
          <Link href="/movies">movies</Link>
        </li>
        <li className="nav-link">
          <Link href="/series">series</Link>
        </li>
        <li className="nav-link">
          <Link href="/trending">trending</Link>
        </li>
        <li className="nav-link">
          <Link href="/top-rated">top rated</Link>
        </li>
      </ul>
    </nav>
    </header>

  );
};

export default Header;
