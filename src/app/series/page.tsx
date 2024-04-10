import FetchSeries from '@/components/fetch/FetchSeries'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Anime Series Library - Explore Your Favorites",
  description: " Discover an extensive collection of anime series. From action-packed shonen to heartwarming slice-of-life, find your next binge-worthy show here.",
  keywords: ["anime series", "TV shows", "episodes", "watch online", "streaming", "Japanese animation"]
};


const Page = () => {
  return (
    <FetchSeries />
  )
}

export default Page