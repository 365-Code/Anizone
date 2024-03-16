import { ANIME, META } from "@consumet/extensions";
import React from "react";

const fetchFilters = async () => {
  try {
    // const anilist = new META.Anilist()
    const anime = new ANIME.Gogoanime()
    const results = await anime.fetchGenreList()

    return results

  } catch (error) {
    
  }
}

const Filter = async () => {

  const genreList = await fetchFilters()
  

  return (
    <section className="my-container bg-[#230149] py-8 flex flex-col gap-8 text-white">
      <h2 className="text-4xl">Filter</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-cyan-400 font-medium text-xl">Genre</h3>
        <ul id="genre" className="md:grid flex-wrap flex md:grid-cols-5 gap-4">
          {
            genreList?.map((g, i) => 
              <li key={g.id}>
                <a href="">{g.title}</a>
              </li>
            )
          }
          <li>
            <a href="">Action</a>
          </li>
          <li>
            <a href="">Adventure</a>
          </li>
          <li>
            <a href="">Comedy</a>
          </li>
          <li>
            <a href="">Demons</a>
          </li>
          <li>
            <a href="">Drama</a>
          </li>
          <li>
            <a href="">Fantasy</a>
          </li>
          <li>
            <a href="">Historical</a>
          </li>
          <li>
            <a href="">Horror</a>
          </li>
          <li>
            <a href="">Magic</a>
          </li>
          <li>
            <a href="">Mystery</a>
          </li>
          <li>
            <a href="">Psychological</a>
          </li>
          <li>
            <a href="">School</a>
          </li>
          <li>
            <a href="">Sci-Fi</a>
          </li>
          <li>
            <a href="">Slice of Life</a>
          </li>
          <li>
            <a href="">Super Power</a>
          </li>
          <li>
            <a href="">Supernatural</a>
          </li>
          <li>
            <a href="">Romance</a>
          </li>
          <li>
            <a href="">Thriller</a>
          </li>
        </ul>
        <div className="md:grid md:grid-cols-6 flex flex-wrap gap-4">
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Type</p>
            <button>All</button>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Status</p>
            <button>All</button>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Rated</p>
            <button>All</button>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Score</p>
            <button>All</button>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Season</p>
            <button>All</button>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="gradient-bg px-2 rounded-lg w-fit">Language</p>
            <button>All</button>
          </div>
        </div>
      </div>

      <button className="btn-primary">Filter</button>
    </section>
  );
};

export default Filter;
