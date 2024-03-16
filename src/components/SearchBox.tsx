import React from 'react'

const SearchBox = () => {
  return (
    
    <div id="search-box">
    <div className="p-4">
      <div className="rounded-full px-2 flex items-center overflow-hidden bg-black/50">
        {/* <span className="px-4 py-3"> */}
        <i className="fi fi-rr-search text-white" />
        {/* </span> */}
        <input
          type="search"
          className="outline-none border-none text-sm w-full py-2 px-4 bg-transparent"
          placeholder="Search Anime Here....."
        />
      </div>
    </div>

    <ol className="bg-black/20 py-6 pl-10 text-[0.6rem] list-decimal flex flex-col gap-4 font-medium">
      <li>Dante&apos;s Inferno: An Animated Epic (2010)</li>
      <li>Legend of the Millennium dragon (2011)</li>
      <li>Phoenix (TV/2004)</li>
      <li>Ghiblies (TV/2000-2002)</li>
      <li>Space Pirate Captain Harlock (TV/1978)</li>
      <li>The Galaxy Railways (TV/2003)</li>
      <li>Cowboy Bebop (TV/1998)</li>
      <li>Galaxy express 999 (TV/1978)</li>
      <li>Hellsing (TV/2001)</li>
      <li>Ghost in the Shell: Stand Alonee Complex (TV/2001)</li>
      <li>FullMetal Alchemist (TC/2003)</li>
      <li>FullMetal Alchemist Brotherhood (TV/2009)</li>
      <li>FullMetal Alchemist: Sacred Star of Milos (2011)</li>
      <li>FullMetal Alchemist: The OVA</li>
    </ol>
  </div>
  )
}

export default SearchBox