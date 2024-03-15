"use client"
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {


  const pathname = usePathname()

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
    <nav className="my-container flex flex-wrap justify-between py-8 items-center text-white">
      {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
      <h2 className="text-5xl text-white">
        {
          pathname.includes('movies') ? "Movies" :
          pathname.includes('anime') ? "Play Now" :
          pathname.includes('Trending') ? "Trending" :
          pathname.includes('Series') ? "Series" :
          "AniZone"
        }
      </h2>
      <ul className="flex flex-wrap items-center gap-12 uppercase font-normal">
        <li className="nav-link">
          <a href="">home</a>
        </li>
        <li className="nav-link">
          <a href="">movies</a>
        </li>
        <li className="nav-link">
          <a href="">series</a>
        </li>
        <li className="nav-link">
          <a href="">trending</a>
        </li>
        <li className="nav-link">
          <a href="">top rated</a>
        </li>
      </ul>
    </nav>
    </header>

  );
};

export default Header;
