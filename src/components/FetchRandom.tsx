import React, { useState } from 'react'

const FetchRandom = () => {

    const fetchRandomAnime = async () => {
        try {
            const data = await fetch('/api/anilist/fetchRandomAnime')
            const res = await data.json()
            if(res.success){
                setRandom(res.result)
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const [random, setRandom] = useState()
    
  return (
    <div>FetchRandom</div>
  )
}

export default FetchRandom