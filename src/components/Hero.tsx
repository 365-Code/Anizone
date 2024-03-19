import React from "react";

const Hero = () => {
  return (
    <section className="min-h-fit max-h-[65vh] overflow-hidden w-full relative text-white">
      <img
        src="https://www.itl.cat/pngfile/big/8-83033_naruto-vs-sasuke-4k-wallpaper-photo-naruto-sasuke.jpg"
        alt=""
        className="w-full h-full object-cover object-top opacity-50"
      />

      <div className="w-full h-full  absolute top-0 left-0 flex flex-col justify-center items-center">
        <div className="text-center max-w-full sm:max-w-[70%] flex flex-col items-center gap-2">
          <h1 className="text-5xl italic flex-col flex">
            AniZone{" "}
            <span className="text-base text-right">
              Stream. Explore. Anime.
            </span>
          </h1>
          <p>
            Embark on an epic anime journey with AniZone, your ultimate
            destination for immersive storytelling and boundless imagination.
            From pulse-pounding action to heartwarming tales, we bring you a
            handpicked selection of the finest anime series, ready to transport
            you to worlds beyond your wildest dreams.
          </p>
          {/* <!-- <button className="py-2 px-4 rounded-2xl bg-[#6200cf] text-white">
      Read More
    </button> --> */}
          <button className="btn-primary-sm capitalize">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
