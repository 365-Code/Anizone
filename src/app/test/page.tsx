"use client"
import React, { useEffect } from "react";


const Test = async () => {
    const fetchPopular = async () => {
      try {
        const res = await fetch('/api/anilist/fetchPopularAnime');
        const result = await res.json()
        console.log(result);
        
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
        fetchPopular()
    })

  return <div>Test</div>;
};

export default Test;
