"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Episodes = () => {
  const params = useParams();
  const episodes = (params["total"] as string) || "";
  const pathname = usePathname();
  const basePath = pathname.split("/episode-")[0];
  const currentEpisode = pathname.split("/episode-")[1];

  return (
    <div className="flex flex-wrap gap-4">
        
      { Number(episodes) > 1 && [...Array(Number(episodes))].map((v, i) => (
        <Link
          href={basePath + "/episode-" + (i + 1)}
          className={
            Number(currentEpisode) == i + 1 ? "btn-primary" : "btn-secondary"
          }
          key={"episode-" + (i + 1)}
        >
          {"Episode " + (i + 1)}
        </Link>
      ))}
    </div>
  );
};

export default Episodes;
