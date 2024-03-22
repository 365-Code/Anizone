import React from 'react'
import ListAnime from './ListAnime'
import { homeAnime } from '@/utils'
import { IAnimeInfo, IAnimeResult } from '@consumet/extensions'
import "./css/test.css"

const Test = () => {
  

  return (
    <div>
      <ListAnime animeList={homeAnime} />
    </div>
  )
}

export default Test