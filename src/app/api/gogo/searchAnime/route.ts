import { ANIME, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){

    try {
        const {searchParams} = new URL(req.url)
        const aName = searchParams.get('anime') || ""
        const anime = new ANIME.Gogoanime();
        const animeData = await anime.search(aName)
        return NextResponse.json({animeData, success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500, statusText: "Internal Server Error in SearchAnime"})
    }

}