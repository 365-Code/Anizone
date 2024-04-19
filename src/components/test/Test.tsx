"use client";
import Image from "next/image";
import AnimeCardSkeleton from "../skeleton/AnimeCardSkeleton";
import Link from "next/link";
import FetchAnimeInfoSkeleton from "../skeleton/FetchAnimeInfoSkeleton";

const Test = () => {
  return (
    <div>
      <button className="btn btn-primary">
        TEST
      </button>
    </div>
  );
};

export default Test;

{
  /* <main className="flex flex-col gap-4 text-white items-center justify-center">
        <Image width={500} height={500} src={'/404bg.png'} alt="404" className="-z-10 absolute top-0 left-0 opacity-10 w-full h-full object-contain object-center" />
      <div className="w-[180px]">
        <Image width={500} height={500} src={'/404.png'} alt="404" className="w-full h-full object-contain object-center" />
      </div>
      <h1>HMM... THIS PAGE DOES NOT EXIST, NO WORRIES!</h1>
      <Link href={'/home'} className="w-fit p-4 bg-black rounded-full">GO BACK HOME</Link>
    </main> */
}
