"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ListAnime from './ListAnime'
import Search from './Search'
import Filter from './Filter'
import SearchBar from './SearchBar'

const FetchSearch = () => {

    const params = useParams()
    const query = params["query"] as string || ""

    const fetchSearchResults = async () => {
        try {
            const data = await fetch(`/api/anilist/advanceSearch?query=${query}`)
            const res = await data.json();
            if(res.success){
                setSearchResults(res.results)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetchSearchResults()
    }, [])

  return (
    <div>
        <div className='my-container'>
        <SearchBar />
        </div>
        <ListAnime title='' animeList={searchResults} />
    </div>
  )
}

export default FetchSearch