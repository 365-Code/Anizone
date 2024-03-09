import React from "react";

const Footer = () => {
  return (
    <footer className="text-white my-container bg-[#17024d] py-8 flex justify-between h-fit gap-8 min-h-[50vh]">
      <div className="basis-1/4 flex flex-col gap-4 justify-between text-xs">
        <div>
          <h3 className="text-3xl font-medium">AniZone</h3>
          <p className="sm:max-w-[80%]">
            AniZone is a site to watch anime you can even download subbed or
            dubbed anime in ultra HD quality. By having No Ads in all kinds, we
            are trying to make it the safest site for free anime
          </p>
        </div>
        <p className="text-base text-nowrap">
          &copy; Blank 2023 All Rights Reserved
        </p>
      </div>
      <div className="w-[1px] bg-white border"></div>

      <div className="basis-1/2 flex flex-col gap-4 justify-between text-xs">
        <div>
          <h3 className="text-2xl font-medium capitalize">Order Filter</h3>
          <p className="text-xs">Search Anime by A to Z Alphabetic Order</p>
        </div>

        <div className="font-normal text-base flex gap-4 leading-3 flex-wrap ">
          <a className="hover:underline underline">A</a>
          <a>B</a>
          <a>C</a>
          <a>D</a>
          <a>E</a>
          <a>F</a>
          <a>G</a>
          <a>H</a>
          <a>I</a>
          <a>J</a>
          <a>K</a>
          <a>L</a>
          <a>M</a>
          <a>N</a>
          <a>O</a>
          <a>P</a>
          <a>Q</a>
          <a>R</a>
          <a>S</a>
          <a>T</a>
          <a>U</a>
          <a>V</a>
          <a>W</a>
          <a>X</a>
          <a>Y</a>
          <a>Z</a>
        </div>

        <p className="sm:max-w-[62%]">
          AniZone does not store any files on our server we only linked to the
          media which is hosted on 3rd party services.
        </p>
        <p className="text-sm">@AniZone.com </p>
      </div>

      <div className="w-[1px] bg-white border"></div>

      <div className="basis-1/5 flex flex-col gap-4 justify-between text-xs">
        <h3 className="text-2xl uppercase font-medium">Contacts</h3>
        <div>
          <p>9384593475</p>
          <p>3948539460</p>
          <p>AniZone@gmail.com</p>
        </div>

        <h3 className="text-xl uppercase font-medium">Follow</h3>
        <div className="flex flex-wrap items-center gap-4">
          <span className="w-6 h-6 bg-white rounded-full"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
