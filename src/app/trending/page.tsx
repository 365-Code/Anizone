import FetchTrending from '@/components/FetchTrending'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Trending Anime - Whats' Hot Right Now",
  description: "Stay up-to-date with the latest anime trends! Explore the most talked-about series, character rankings, and fan theories. Don’t miss out on the buzz!",
  keywords: ["trending anime", "popular series", "fan favorites", "viral characters", "anime community"]
};


const Page = () => {
  return (
    <FetchTrending />   
  )
}

export default Page