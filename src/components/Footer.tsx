import { alphabets } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="my-container flex h-fit min-h-[50vh] flex-col justify-between gap-8 bg-[#17024d] py-8 text-white min-[1100px]:flex-row">
      <div className="flex basis-1/4 flex-col justify-between gap-4 text-xs">
        <div>
          <Link href={"/home"}>
            <Image
              height={400}
              width={700}
              className="w-[160px]"
              src={"/anizone.png"}
              alt="logo"
            />
          </Link>
          <p className="sm:max-w-[80%]">
            AniZone is a site to watch anime you can even download subbed or
            dubbed anime in ultra HD quality. By having No Ads in all kinds, we
            are trying to make it the safest site for free anime
          </p>
        </div>
        <p className="text-nowrap text-base">
          &copy; Blank 2023 All Rights Reserved
        </p>
      </div>
      <div className="w-full border bg-white min-[1100px]:w-[1px]" />

      <div className="flex basis-1/2 flex-col justify-between gap-4 text-xs">
        <div>
          <h3 className="text-2xl font-medium capitalize">Order Filter</h3>
          <p className="text-xs">Search Anime by A to Z Alphabetic Order</p>
        </div>

        <div className="flex flex-wrap gap-4 text-base font-normal leading-3 ">
          {alphabets.map((alph, i) => (
            <Link
              key={i}
              href={"/search/results?query=" + alph.toLowerCase()}
              className="transition-all hover:underline"
            >
              {alph}
            </Link>
          ))}
        </div>

        <p className="min-[1100px]:max-w-[62%]">
          AniZone does not store any files on our server we only linked to the
          media which is hosted on 3rd party services.
        </p>
        <p className="text-sm">@AniZone.com</p>
      </div>

      <div className="border bg-white min-[1100px]:w-[1px]" />

      <div className="flex basis-1/5 flex-col justify-between gap-4 text-xs">
        <h3 className="text-2xl font-medium uppercase">Contacts</h3>
        <div>
          <p>\/\/\/\/\/\</p>
          <p>\/\/\/\/\/\</p>
          <p>AniZone@gmail.com</p>
        </div>

        <h3 className="text-xl font-medium uppercase">Follow</h3>
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex h-6 min-h-fit w-6 min-w-fit items-center justify-center rounded-full bg-white text-black transition-all hover:bg-black hover:text-white">
            <i className="fi fi-brands-google " />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
