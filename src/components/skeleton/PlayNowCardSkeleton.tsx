import React from "react";

const PlayNowCardSkeleton = () => {
  return (
    <div
      className="animate-pulse play-now-card"
      style={{
        animationDelay: `${1 * 0.25}s`,
        animationDuration: "1s",
      }}
    />
  );
};

export default PlayNowCardSkeleton;
