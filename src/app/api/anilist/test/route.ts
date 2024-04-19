import { ANIME, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    try {
        const {searchParams} = new URL(req.url)
        const aName = (searchParams.get('anime') || "").toString()
        const anime = new META.Anilist();
        const {results} = await anime.advancedSearch(aName)
        const {results: resultss} = await anime.search(aName)
        return NextResponse.json({result: results, success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500, statusText: "Internal Server Error in SearchAnime"})
    }
}