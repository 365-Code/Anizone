import React from "react";

const AnimeCardSkeleton = () => {
  return (
    <div
      className="animate-pulse snap-start pl-3 pt-3"
      style={{
        animationDelay: `${2 * 0.25}s`,
        animationDuration: "1s",
      }}
    >
      <div className="anime-card">
        <div
          className="anime-tag animate-pulse"
          style={{
            animationDelay: `${1 * 0.25}s`,
            animationDuration: "1s",
          }}
        >
          <span className="invisible">G</span>
        </div>
        <div className="anime-card-detail">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs">
              <span className="invisible">Season</span>
              <span className="h-1 w-1 rounded-full bg-white" />
              <span className="invisible">ReleaseDate</span>
              <span className="h-1 w-1 rounded-full bg-white" />
              <span className="invisible">Type</span>
            </p>
            <button>
              <h3
                id="anime-card-title"
                className="hyphens-auto text-lg font-semibold  sm:text-3xl"
              >
                <span className="invisible">Animetitle</span>
              </h3>
            </button>

            <p className="text-sm font-medium text-orange-500">
              <span className="invisible">Studio: N/A</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <i className="fi fi-ss-star text-lg text-orange-500 sm:text-2xl" />
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <li className="invisible rounded-full bg-white/20 px-2 py-1">
                g
              </li>
            </ul>
          </div>
        </div>
        <div className="anime-card-img "></div>
      </div>
    </div>
  );
};

export default AnimeCardSkeleton;
