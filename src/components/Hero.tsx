import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="sm:min-h-fit h-[500px] sm:max-h-[65vh] overflow-hidden w-full relative text-white">
      <Image
        width={1000}
        height={1000}
        src="/bg2.jpg"
        alt="bg"
        className="w-full h-full object-cover md:object-fill object-top opacity-50"
      />

      <div className="w-full h-full  absolute top-0 left-0 flex flex-col justify-center items-center">
        <div className="text-center max-w-full sm:max-w-[70%] flex flex-col items-center gap-2">
          <div className="relative">
          <Link href={"/home"}>
            <Image
              height={400}
              width={700}
              className="w-[300px]"
              src={"/anizone.png"}
              alt="logo"
              />
          </Link>
              <Image
              height={400}
              width={700}
              className="w-[180px] ml-auto"
              src={"/tag.png"}
              alt="tag"
              />
          </div>
          <p className="text-sm sm:text-base">
            Embark on an epic anime journey with AniZone, your ultimate
            destination for immersive storytelling and boundless imagination.
            From pulse-pounding action to heartwarming tales, we bring you a
            handpicked selection of the finest anime series, ready to transport
            you to worlds beyond your wildest dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
