import React from "react";

const Header = () => {
  return (
    // <!-- Header -->
    // <!-- my-container => fixed-nav later remove -->
    <header className="relative">
    <nav className="my-container flex flex-wrap justify-between py-4 items-center bg-white">
      <h2 className="text-4xl text-[#230149] italic font-semibold">AniZone</h2>
      <ul className="flex flex-wrap items-center gap-8 uppercase font-normal">
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
