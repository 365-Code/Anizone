import React from "react";

const Background = ({ bgLength }: { bgLength: number }) => {
  return (
    <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col">
      <div className="basis-1/2 bg-[#230149]" />
      <div className="gradient-bg basis-1/2 py-10" />
    </div>
  );
};

export default Background;
