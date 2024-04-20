"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import NavSearch from "./NavSearch";
import Image from "next/image";
import AdvSearchBar from "./AdvSearchBar";

const Header = () => {
  const pathname = usePathname();
  const nav = useRouter();

  const navLinks = ["movies", "series", "trending", "top rated"];

  const [showNav, setShowNav] = useState(false);
  let imgSrc = "/anizone.png";
  pathname.includes("movies")
    ? (imgSrc = "/movies.png")
    : pathname.includes("episode")
      ? (imgSrc = "/playing.png")
      : pathname.includes("anime")
        ? (imgSrc = "/playNow.png")
        : pathname.includes("trending")
          ? (imgSrc = "/trending.png")
          : pathname.includes("series")
            ? (imgSrc = "/series.png")
            : pathname.includes("top-rated")
              ? (imgSrc = "/topRated.png")
              : pathname.includes("search")
                ? (imgSrc = "/results.png")
                : (imgSrc = "/anizone.png");

  return (
    <header className="relative">
      <nav className="flex flex-wrap items-center justify-between gap-2 px-4 py-8 text-white">
        <div className="relative flex items-center">
          <button
            onClick={() => setShowNav(!showNav)}
            className={`pr-4 text-xl sm:hidden`}
          >
            <i className="fi fi-sr-menu-burger" />
          </button>

          <button onClick={() => nav.back()} className="hidden sm:block text-4xl sm:text-5xl">
            <i className="fi fi-rr-arrow-small-left sm:absolute sm:-left-16 sm:top-1/2 sm:-translate-y-1/2" />
          </button>

          <Link href={"/home"} className="text-xl md:text-5xl">
            <Image
              height={400}
              width={700}
              className="w-[110px] sm:w-[140px] min-[1100px]:w-[180px]"
              src={imgSrc}
              alt="logo"
            />
          </Link>
        </div>

        <ul
          className={`${showNav ? "z-20 w-full flex-col items-start bg-black px-4" : "w-0 overflow-hidden"} fixed left-0 top-0 flex h-full flex-wrap gap-12 py-8 font-normal uppercase transition-all sm:static sm:w-fit sm:items-center sm:overflow-visible sm:py-0`}
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

        <div className="min-w-[100px] flex-1 min-[1100px]:max-w-[300px]">
          {/* <NavSearch /> */}
          <AdvSearchBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
