"use client";
import Image from "next/image";
import AnimeCardSkeleton from "../skeleton/AnimeCardSkeleton";
import Link from "next/link";
import FetchAnimeInfoSkeleton from "../skeleton/FetchAnimeInfoSkeleton";
import AdvSearchBar from "../AdvSearchBar";
import { useEffect, useState } from "react";
import FetchAnimeCharacters from "../fetch/FetchAnimeCharacters";

const Test = () => {


  const jikanApi = "https://api.jikan.moe/v4"
const options = {
  method: 'GET',
  url: 'https://anihub.p.rapidapi.com/upcomingAnimeAniList',
  headers: {
    'X-RapidAPI-Host': 'anihub.p.rapidapi.com'
  }
};

interface charInfo{
  character: {
    images: {
      jpg: {
        image_url: string
      }
    },
    name: string
  },
  role: string
}

interface charDetails{
  image: string,
  name: string,
  role: string
}

const [characters, setCharacters] = useState<charDetails[]>([])

const fetchRes = async () =>{
    try {
      const data = await fetch(jikanApi + "/anime/" + 42897 + "/characters");
      const res = await data.json()
      
      if(res){
        const {data} = res
        let Chars = [] as charDetails[]
        data.forEach((element: charInfo) => {
          const chImage = element.character.images.jpg.image_url
          const character = element.character
          Chars.push({name: character.name, image:character.images.jpg.image_url, role: element.role})
        });
        setCharacters(Chars)
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchRes()
  }, [])

  return (
    <div>
      {/* <AdvSearchBar /> */}
      <FetchAnimeCharacters />
    </div>
  );
};

export default Test;

{
  /* <main className="flex flex-col gap-4 text-white items-center justify-center">
        <Image width={500} height={500} src={'/404bg.png'} alt="404" className="-z-10 absolute top-0 left-0 opacity-10 w-full h-full object-contain object-center" />
      <div className="w-[180px]">
        <Image width={500} height={500} src={'/404.png'} alt="404" className="w-full h-full object-contain object-center" />
      </div>
      <h1>HMM... THIS PAGE DOES NOT EXIST, NO WORRIES!</h1>
      <Link href={'/home'} className="w-fit p-4 bg-black rounded-full">GO BACK HOME</Link>
    </main> */
}
