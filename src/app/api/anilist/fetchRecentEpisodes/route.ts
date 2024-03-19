import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){

    try {
        const {searchParams} = new URL(req.url)
        const page = searchParams.get('page') || 1
        const perPage = searchParams.get('perPage') || 10
        const anime = new META.Anilist();
        const {currentPage, hasNextPage, results} = await anime.fetchRecentEpisodes("zoro")
        return NextResponse.json({currentPage, hasNextPage, results, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchAnimeInfo"})
    }

}