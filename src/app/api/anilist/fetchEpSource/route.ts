import { ANIME, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const {searchParams} = new URL(req.url)
        const epId = searchParams.get('epId') || ""
        const anime = new META.Anilist();
        const animeList = await anime.fetchEpisodeSources(epId)
        // const animeList = await anime.fetchEpisodesListById(anId)
        return NextResponse.json({animeList, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchAnimeInfo"})
    }

} 
// "id": "142769",
// "malId": 50593,
// Natsu e no Tunnel, Sayonara-no-deguchi

// "id": "124080",
// "malId": 42897,
// Horimiya