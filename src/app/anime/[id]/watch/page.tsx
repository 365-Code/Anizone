"use client"
import FetchEpisode from '@/components/FetchEpisode'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  
  const params = useParams()
  const animeId = params["id"] as string || ""

  return (
    <div>
      <FetchEpisode episodeId='horimiya-episode-1' />
    </div>
  )
}

export default Page