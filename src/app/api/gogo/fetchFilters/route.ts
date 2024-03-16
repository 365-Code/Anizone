import { ANIME, Genres, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const anime = new ANIME.Gogoanime()
        const genres = await anime.fetchGenreList()
        return NextResponse.json({genres, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchAnimeInfo"})
    }

}