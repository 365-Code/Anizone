"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const InfiniteScroll = ({
  page,
  setPage,
  loading,
  setLoading,
  hasMore,
  id,
}: {
  page: number;
  setPage: any;
  loading: boolean;
  setLoading: any;
  hasMore: any;
  id: string;
}) => {
  const handleInfiniteScroll = async () => {
    try {
      const upScroll = document.getElementById(id);

      if (upScroll) {
        if (
          upScroll.clientHeight + upScroll.scrollTop + 1 >=
            upScroll.scrollHeight &&
          hasMore
        ) {
          setPage(page + 1);
          setLoading(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const upScroll = document.getElementById(id);
    if (upScroll) {
      upScroll.addEventListener("scroll", handleInfiniteScroll);
    }
    return () => {
      page > 2 && upScroll?.scrollBy({ top: 40, behavior: "smooth" });
      upScroll?.removeEventListener("scroll", handleInfiniteScroll);
    };
  });
  return (
    <>
      {loading && (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-opacity-25 bg-black/40 top-0 left-0 fixed z-10">
          <Loader />
          <h3 className="text-[#09f] text-2xl font-bold py-2">Please Wait for a few...</h3>
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
