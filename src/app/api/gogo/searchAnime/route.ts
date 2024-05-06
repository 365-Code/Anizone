import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const aName = (searchParams.get("anime") || "").toString();
    const anime = new ANIME.Gogoanime();
    const data = await anime.search(aName);

    if(!data)
        return NextResponse.json({success: false, error: "Anime Couldn't find"}, {status: 404})
    return NextResponse.json(
      { result: data.results, success: true },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Internal Server Error in SearchAnime" },
    );
  }
}
