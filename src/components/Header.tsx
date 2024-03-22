"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import NavSearch from "./NavSearch";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const nav = useRouter();

  const navLinks = [
    // "home",
    "movies",
    "series",
    "trending",
    "top rated",
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
      <nav className="flex flex-wrap items-center justify-between gap-2 px-4 py-8 text-white">
        {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
        <div className="relative flex items-center">
          <button
            onClick={() => setShowNav(!showNav)}
            className={`pr-4 text-xl sm:hidden`}
          >
            <i className="fi fi-sr-menu-burger" />
          </button>

          <Link href={"/home"} className="text-xl md:text-5xl">
            {
              pathname.includes("movies")
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
                            : pathname.includes("/") && (
                                // <Link href={"/home"}>
                                <Image
                                  height={400}
                                  width={700}
                                  className="w-[90px] sm:w-[130px] min-[1100px]:w-[180px]"
                                  src={"/logo2.png"}
                                  alt="logo"
                                />
                              )
              // </Link>
            }
          </Link>
          <button onClick={() => nav.back()} className="text-5xl">
            <i className="fi fi-rr-arrow-small-left absolute -left-16 top-1/2 -translate-y-1/2" />
          </button>
        </div>

        <ul
          className={`${showNav ? "z-20 w-full flex-col items-start bg-black px-4" : "w-0 overflow-hidden"} fixed left-0 top-0 sm:overflow-visible flex flex-wrap h-full gap-12 py-8 font-normal uppercase transition-all sm:py-0 sm:w-fit sm:static sm:items-center`}
        >
          <button
            onClick={() => setShowNav(false)}
            className={`${showNav ? "block" : "hidden"} relative top-2 sm:hidden`}
          >
            <i className="fi fi-sr-cross" />
          </button>
          {navLinks.map((l, i) => (
            <li
              key={i}
              onClick={() => setShowNav(false)}
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

        <div className="flex-1 min-w-[100px] min-[1100px]:max-w-[300px]">
          <NavSearch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
