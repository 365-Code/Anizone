import { META } from "@consumet/extensions";
import React from "react";

const fetchPopular = async () => {
  try {
    const res = await fetch('/api/anilist/fetchPopularAnime');
    console.log(res);
    
  } catch (error) {
    console.log(error);
  }
}

const Test = async () => {

  return <div>Test</div>;
};

export default Test;
