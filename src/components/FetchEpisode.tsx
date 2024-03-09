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

const fetchEpisode = async (episodeId: string) => {
    
    try {
        const anime = new ANIME.Gogoanime()
        // const results = await anime.search(episodeId)
        const results = await anime.fetchEpisodeServers(episodeId)
        const {headers, sources} = await anime.fetchEpisodeSources(episodeId)
        if(headers && sources){
            const episode = await proxyURL(headers?.Referer, sources[0].url)
            return episode
        }
        return results || ""
    } catch (error) {
    }
}


const FetchEpisode = async ({episodeId}: {episodeId: string}) => {
    const episode = await fetchEpisode(episodeId);

  return (
    <div>
        FetchEpisode
        <button className='flex items-center px-4 py-2 rounded-lg text-white hover:bg-[#6200cf]'>
            360p
        </button>
        <VideoPlayer source={""} />
    </div>
  )
}

export default FetchEpisode