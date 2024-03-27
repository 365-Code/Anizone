import FetchMovies from '@/components/FetchMovies'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Anizone Movies",
  description: "Explore a collection of captivating anime movies, from timeless classics to the latest releases. Dive into thrilling adventures, heartwarming stories, and mind-bending mysteries. Discover your next favorite anime film!",
  keywords: ["anime movies", "animated films", "Japanese animation", "anime cinema", "anime classics", "anime releases", "anime movie database"]

};

const Page = () => {
  return (

    <FetchMovies />
  )
}

export default Page