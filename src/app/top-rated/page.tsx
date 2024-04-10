import FetchTopRated from '@/components/fetch/FetchTopRated'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Top-Rated Anime - Critically Acclaimed Picks",
  description: "Dive into the best of the best! Our top-rated anime selection features masterpieces, hidden gems, and unforgettable moments. Experience excellence.",
  keywords: ["top-rated anime", "critically acclaimed", "must-watch", "highest rated", "anime classics"]
};


const Page = () => {
  return (
    <FetchTopRated />
  )
}

export default Page