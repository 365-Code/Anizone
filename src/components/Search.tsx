"use client"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import SearchBar from "./SearchBar";

const Search = () => {


  return (
    <section className="min-h-[55vh] my-container py-8 gradient-bg flex text-white">
      <div className="sm:basis-2/3 flex-col flex gap-6 h-full">
        <h2 className="text-3xl">Stream. Explore. Anime.</h2>

        <SearchBar />

        <p>
          {" "}
          <span className="font-bold text-lg text-green-400">
            Recent Searches :{" "}
          </span>
          Black Clover: Sword of the Wizard King, One Piece, Black Clover, Demon
          Slayer, Kimetsu no Yaiba-Swordsmith Village, ArcMashle: Magic and
          Muscles, Naruto: Shippuden, Hell&apos;s Paradise, Demon Slayer: Kimetsu no
          Yaiba, Naruto-Boruto: Naruto Next Genrerations
        </p>
      </div>

      <div className="hidden sm:flex flex-col justify-center basis-1/3 min-h-full text-center">
        <h1 className="font-medium text-3xl">AniStream</h1>
      </div>
    </section>
  );
};

export default Search;
