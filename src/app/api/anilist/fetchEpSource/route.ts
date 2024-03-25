import { ANIME, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const {searchParams} = new URL(req.url)
        const epId = searchParams.get('epId') || ""
        const anime = new META.Anilist();
        const animeList = await anime.fetchEpisodeSources(epId)
        return NextResponse.json({animeList, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchEpSource"})
    }
}