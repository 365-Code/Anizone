import React from 'react'
import PlayNowCardSkeleton from './PlayNowCardSkeleton'

const FetchAnimeInfoSkeleton = () => {
  return (
    <section className="my-container relative flex flex-col gap-8 py-4 text-white sm:py-8">
      {/* <h2 className="invisible text-5xl">Play Now</h2> */}
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        
        <PlayNowCardSkeleton />

        <div className=" flex flex-1 flex-col items-center justify-between gap-4 py-8 sm:flex-row md:flex-col">
          <div className="flex justify-center gap-2 sm:flex-row sm:gap-4 md:flex-col">
            <button className="animate-pulse btn bg-black/30 backdrop-blur-sm" style={{
        animationDelay: `${2 * 0.25}s`,
        animationDuration: "1s",
      }}>
              <span className="invisible">btn</span>
            </button>
            <button className="animate-pulse btn bg-black/30 backdrop-blur-sm" style={{
        animationDelay: `${3 * 0.25}s`,
        animationDuration: "1s",
      }}>
              <span className="invisible">btn</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="animate-pulse bg-black/30 text-3xl leading-tight backdrop-blur-sm sm:text-4xl md:max-w-[70%] md:text-6xl" style={{
        animationDelay: `${4 * 0.25}s`,
        animationDuration: "1s",
      }}>
          <span className="invisible">AnimeTitle</span>
        </h1>
        <p className="animate-pulse bg-black/30 pb-8 font-light backdrop-blur-sm sm:text-lg md:max-w-[80%]" style={{
        animationDelay: `${5 * 0.25}s`,
        animationDuration: "1s",
      }}/>
        <p className="animate-pulse bg-black/30 pb-8 font-light backdrop-blur-sm sm:text-lg md:max-w-[80%]" style={{
        animationDelay: `${6 * 0.25}s`,
        animationDuration: "1s",
      }}/>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col">
        <div className="basis-2/5 bg-[#1c073f]" />
        <div className="gradient-bg basis-3/5 py-10" />
      </div>
    </section>
  )
}

export default FetchAnimeInfoSkeleton