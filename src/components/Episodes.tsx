"use client";
import { useAppSelector } from "@/redux/store";
import { IAnimeInfo } from "@consumet/extensions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Episodes = () => {
  const currentAnime = useAppSelector(
    (state) => state.utilityReducer.value.currentAnime
  ) as IAnimeInfo;
  const episodes = currentAnime.totalEpisodes;
  const pathname = usePathname();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = pathname.split("/episode-")[1];

  return (
    <section className="my-container">
      <div className="flex flex-wrap gap-4 py-8">
        {Number(episodes) > 1 &&
          [...Array(Number(episodes))].map((v, i) => (
            <Link
              href={basePath + "/episode-" + (i + 1)}
              className={
                Number(currentEpisode) == i + 1
                  ? "btn-primary-sm"
                  : "btn-secondary-sm"
              }
              key={"episode-" + (i + 1)}
            >
              {"Episode " + (i + 1)}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Episodes;
