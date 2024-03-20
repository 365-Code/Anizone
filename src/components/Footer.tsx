import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <footer className="text-white my-container bg-[#17024d] py-8 flex justify-between h-fit gap-8 min-h-[50vh]">
      <div className="basis-1/4 flex flex-col gap-4 justify-between text-xs">
        <div>
          {/* <h3 className="text-3xl font-medium">AniZone</h3> */}
          <Link href={"/home"}>
            <Image
              height={400}
              width={700}
              className="w-[160px]"
              src={"/logo2.png"}
              alt="logo"
            />
          </Link>
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
          {
            alphabets.map((alph, i) => <Link key={i} href={"/search/results?query=" + alph.toLowerCase()} className="hover:underline transition-all">{alph}</Link>)
          }
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
