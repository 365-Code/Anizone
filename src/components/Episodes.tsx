"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Episodes = () => {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const episodes = total;
  const pathname = usePathname();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = pathname.split("/episode-")[1];

  return (
    <section className="my-container py-4 bg-[#17024d] ">
      <div className="">
        {Number(episodes) > 1 && (
          <h2 className="text-3xl text-white font-normal">Episodes</h2>
        )}
        <div className="flex flex-wrap gap-4 py-4 max-h-[130px] overflow-y-scroll custom-scrollbar">
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
      </div>
    </section>
  );
};

export default Episodes;
