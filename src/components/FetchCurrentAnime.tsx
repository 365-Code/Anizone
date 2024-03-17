"use client"
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import { AppDispatch } from "@/redux/store";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const FetchCurrentAnime = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fetchCurrentAnime = async (aName: string) => {
    try {
      // const result = await fetch(`/api/anilist/fetchAnimeInfo?anime=${aName}`);
      let result
      result = await fetch(`/api/gogo/fetchAnimeInfo?anime=${aName}`);
      // const result = await fetch(`/api/anilist/searchAnime?anime=${aName}`);
      const res = await result.json();
      
      if (res.success) {
        dispatch(setCurrentAnime(res.animeData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const params = useParams()
  const animeId = params["animeId"] as string || ""
  
  useEffect(() => {
    fetchCurrentAnime(animeId)
  }, [])

  return <></>;
};

export default FetchCurrentAnime;
