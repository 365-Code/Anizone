import React from "react";

const Background = ({ bgLength }: { bgLength: number }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col -z-10">
      {/* {[...Array(bgLength)].map((v, i) => ( */}
        {/* <div key={i} className="h-full border "> */}
          <div className="basis-1/2 bg-[#230149]"></div>
          <div className="basis-1/2 gradient-bg py-10"></div>
        {/* </div> */}
      {/* // ))} */}
    </div>
  );
};

export default Background;
