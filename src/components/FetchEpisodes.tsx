"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

const FetchEpisodes = () => {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const episodes = total;
  const pathname = usePathname();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = pathname.split("/episode-")[1];

  const epRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (epRef.current) {
      // epRef.current.onclick = () => {
      const curEp = epRef.current.innerText.split(" ").at(-1);
      if (curEp == currentEpisode) {
        epRef.current?.scrollIntoView(true);
      }
      // }
    }
  });

  return (
    <>
      {Number(episodes) > 1 && (
        <section className="my-container bg-[#17024d] py-4 ">
          {/* <div className=""> */}
          <h2 className="text-3xl font-normal text-white">Episodes</h2>
          <div className="custom-scrollbar flex h-[130px] flex-wrap gap-2 overflow-y-scroll py-4 sm:gap-4">
            {Number(episodes) > 1 &&
              [...Array(Number(episodes))].map((v, i) => (
                <Link
                  ref={epRef}
                  href={basePath + "/episode-" + (i + 1) + "?total=" + total}
                  className={`${
                    Number(currentEpisode) == i + 1
                      ? "btn-primary-sm"
                      : "btn-secondary-sm"
                  } text-sm sm:text-base`}
                  key={"episode-" + (i + 1)}
                  defaultValue={i + 1}
                >
                  <button>{"Episode " + (i + 1)}</button>
                </Link>
              ))}
          </div>
          {/* </div> */}
        </section>
      )}
    </>
  );
};

export default FetchEpisodes;
