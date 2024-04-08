"use client";
import { IAnimeInfo, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { removeChars, toAnimeId } from "@/utils";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setCurrentAnime } from "@/redux/features/utilitySlice";
import Loader from "../Loader";
import PlayNowCard from "../PlayNowCard";
import PlayNowCardSkeleton from "../skeleton/PlayNowCardSkeleton";
import FetchAnimeInfoSkeleton from "../skeleton/FetchAnimeInfoSkeleton";
import AnimeCardSkeleton from "../skeleton/AnimeCardSkeleton";

const Test = () => {
  return (
    // <!-- Play Now -->
    <AnimeCardSkeleton/>
  );
};

export default Test;
