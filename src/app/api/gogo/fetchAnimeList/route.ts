import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    try {
        const {searchParams} = new URL(req.url)
        const anime = new ANIME.Gogoanime();
        const page = searchParams.get("page") || 1
        const {currentPage, hasNextPage, results} = await anime.fetchTopAiring()
        return NextResponse.json({currentPage, hasNextPage, results, success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500, statusText: "Internal Server Error in SearchAnime"})
    }
}