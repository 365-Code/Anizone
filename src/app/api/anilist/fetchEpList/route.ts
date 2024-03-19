import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const {searchParams} = new URL(req.url)
        const anId = searchParams.get('animeId') || ""
        const anime = new META.Anilist();
        const animeList = await anime.fetchEpisodesListById(anId)
        return NextResponse.json({animeList, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchAnimeInfo"})
    }

}