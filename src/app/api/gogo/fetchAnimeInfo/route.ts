import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const aName = searchParams.get("anime") || "";
    const anime = new ANIME.Gogoanime();
    
    const results = await anime.fetchAnimeInfo(aName);
    console.log(results);
    return NextResponse.json({ results, success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Internal Server Error in FetchAnimeInfo" },
    );
  }
}
