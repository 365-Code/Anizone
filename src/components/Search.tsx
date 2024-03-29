"use client";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setRecentSearches } from "@/redux/features/utilitySlice";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const recentSearches = useAppSelector(
    (state) => state.utilityReducer.value.recentSearches
  ) as string[];
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setRecentSearches());
  }, []); 

  const recSearches = [
    "Black Clover: Sword of the Wizard King",
    "One Piece",
    "Black Clover",
    "Demon Slayer",
    "Kimetsu no Yaiba-Swordsmith Village",
    "ArcMashle: Magic and Muscles",
    "Naruto: Shippuden",
    "Hell's Paradise",
    "Demon Slayer: Kimetsu no Yaiba",
    "Naruto-Boruto: Naruto Next Genrerations"
  ] 

  return (
    <section className="min-h-[55vh] my-container py-8 gradient-bg flex text-white">
      <div className="sm:basis-1/2 flex-col flex gap-6 h-full">
        <Image
          height={400}
          width={700}
          className="w-[350px]"
          src={"/tag.png"}
          alt="tag"
        />

        <SearchBar />

        <p>
          {" "}
          <span className="font-bold text-lg text-green-400">
            Recent Searches :{" "}
          </span>
          {recentSearches?.length > 5 ? (
            recentSearches?.map(
              (r, i) =>
                i < 27 && (
                  <span className="capitalize" key={i}>
                    {r},{" "}
                  </span>
                )
            )
          ) : (
              recSearches.map((s, i) => <Link key={i} href={"/search/results?query="+ s}>{s + ", "}</Link>)
          )}
        </p>
      </div>

      <div className="hidden sm:flex items-center flex-col justify-center basis-1/2 min-h-full text-center">
        <Image
          height={400}
          width={700}
          className="w-[350px]"
          src={"/anizone.png"}
          alt="logo"
        />
      </div>
    </section>
  );
};

export default Search;
