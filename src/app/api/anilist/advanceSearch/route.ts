import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {

        const {searchParams} = new URL(req.url)
        const query = searchParams.get("query") || undefined
        const type = searchParams.get("type") || undefined
        const page = searchParams.get("page") || 1
        const perPage = searchParams.get("perPage") || 10
        const genres = searchParams.get("genres") || undefined
        const sort = searchParams.get("sort") || undefined

        const anilist = new META.Anilist();
        const {currentPage, hasNextPage, results} = await anilist.advancedSearch(query, "ANIME", Number(page), Number(perPage), type)
        // const {currentPage, hasNextPage, results} = await anilist.search(query)
        return NextResponse.json({currentPage, hasNextPage, results, success: true}, {status: 200})
        
    } catch (error: any) {
        return NextResponse.json({error: error.msg, success: false}, {status:500, statusText:"Internal Server Error advancedSearch"})
    }
}