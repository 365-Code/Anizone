import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){
    try {
        const {searchParams} = new URL(req.url)
        const page = searchParams.get('page') || 1
        const perPage = searchParams.get('perPage') || 10
        const anime = new META.Anilist();
        // const {currentPage, hasNextPage, results} = await anime.search("movie",Number(page), Number(perPage))
        const {currentPage, hasNextPage, results} = await anime.advancedSearch(undefined,"ANIME",Number(page), Number(perPage), "MOVIE")
        return NextResponse.json({currentPage, hasNextPage, totalResults: results.length, results, success: true})
    } catch (error) {
        return NextResponse.json({},{status: 500, statusText: "Internal Server Error in FetchRecentMovies"})
    }
}