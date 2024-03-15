"use client"
import FetchAnimeInfo from '@/components/FetchAnimeInfo'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {


    const params = useParams()
    const animeId = params["id"] as string || ""

  return (
    <div>
        <FetchAnimeInfo animeId={animeId} />
    </div>
  )
}

export default Page