import React from 'react'
import AnimeCardSkeleton from './AnimeCardSkeleton'

const DisplayAnimeSkeleton = ({show}: {show : boolean}) => {
  return (
    <>
    {
        show &&
        <div className="my-container no-scrollbar flex snap-start gap-8 overflow-x-scroll py-8">
        {[...Array(20)].map((v, i) => (
          <AnimeCardSkeleton key={i} />
        ))}
      </div>
      }
    </>

  )
}

export default DisplayAnimeSkeleton