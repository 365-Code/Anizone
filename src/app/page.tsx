import About from '@/components/About'
import FetchCurrentAnime from '@/components/FetchCurrentAnime'
import Hero from '@/components/Hero'
import HomePage from '@/components/HomePage'
import Search from '@/components/Search'
import React from 'react'

const Page = () => {
  return (
    <>
    <Hero />
    <Search />
    <About />
    </>
    // <HomePage />
  )
}

export default Page