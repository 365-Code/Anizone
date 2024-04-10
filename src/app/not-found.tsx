import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className=" my-container flex items-center justify-between gap-4 py-8 text-white">
      <div className="flex flex-1 flex-col items-center gap-8 text-center">
        <div className="w-[180px]">
          <Image
            width={500}
            height={500}
            src={"/404.png"}
            alt="404"
            className="h-full w-full object-contain object-center"
          />
        </div>
        <h1>HMM... THIS PAGE DOES NOT EXIST, NO WORRIES!</h1>
        <Link href={"/home"} className="w-fit rounded-full bg-black px-8 py-4">
          GO BACK HOME
        </Link>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={"/404bg.png"}
          alt="404bg"
          className="absolute left-0 top-0 -z-10 h-full w-full object-contain object-center opacity-35 sm:relative sm:opacity-100"
        />
      </div>
    </main>
  );
};

export default Page;
