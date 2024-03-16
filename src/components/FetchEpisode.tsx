import { ANIME } from '@consumet/extensions';
import React from 'react'
import VideoPlayer from './VideoPlayer';


const proxyURL = async (referer: string, source: string) => {
    try {
        const res = await fetch(source, {
            headers: {
                "Referer": referer
            }
        })
        const results = await res.text()
        return results
    } catch (error) {
        console.log(error);
    }
}



const FetchEpisode = async ({episodeId}: {episodeId: string}) => {

  return (
    <div>

    </div>
  )
}

export default FetchEpisode