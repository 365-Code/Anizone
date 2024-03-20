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
  

  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
      <nav className="text-white my-container flex flex-wrap justify-between py-8 items-center">
        {/* <h2 className="text-5xl text-[#230149] font-semibold"> */}
        <div className="relative flex items-center">
        <Link href={'/home'} className="text-5xl">
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
            : pathname.includes('/') &&
            // <Link href={"/home"}>
              <Image
                height={400}
                width={700}
                className="w-[180px]"
                src={"/logo2.png"}
                alt="logo"
                />
            // </Link>
            }
        </Link>
          <button onClick={() => nav.back()} className="text-5xl">
            <i className="fi fi-rr-arrow-small-left absolute top-1/2 -translate-y-1/2 -left-16" />
          </button>
        </div>
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
