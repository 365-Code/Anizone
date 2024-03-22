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
    <>
      {Number(episodes) > 1 && (
        <section className="my-container bg-[#17024d] py-4 ">
          <div className="">
            <h2 className="text-3xl font-normal text-white">Episodes</h2>
            <div className="custom-scrollbar flex max-h-[130px] flex-wrap gap-4 overflow-y-scroll py-4">
              {Number(episodes) > 1 &&
                [...Array(Number(episodes))].map((v, i) => (
                  <Link
                    href={basePath + "/episode-" + (i + 1) + "?total=" + total}
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
      )}
    </>
  );
};

export default Episodes;
