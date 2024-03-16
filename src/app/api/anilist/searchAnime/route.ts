import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    try {
        const {searchParams} = new URL(req.url)

        const aName = searchParams.get('anime') || ""
        const anime = new META.Anilist();
        const {results} = await anime.search(aName )
        const animeData = results[0]
        return NextResponse.json({animeData, success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500, statusText: "Internal Server Error in SearchAnime"})
    }

}