import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {

        const {searchParams} = new URL(req.url)
        const query = searchParams.get("query") || ""
        const anilist = new META.Anilist();
        const {currentPage, hasNextPage, results} = await anilist.search(query)
        return NextResponse.json({currentPage, hasNextPage, results, success: true}, {status: 200})
        
    } catch (error: any) {
        return NextResponse.json({error: error.msg, success: false}, {status:500, statusText:"Internal Server Error fetchAnimeList"})
    }
}