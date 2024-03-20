import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const results = await anilist.fetchRandomAnime()
    const {id, title, season, type, studios, status, description, releaseDate, rating, image, cover, genres, recommendations} = results
    const result = {id, title, season, type, studios, status, description, releaseDate, rating, image, cover, genres}
    return NextResponse.json(
      { result, recommendations, success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.msg, success: false },
      { status: 500, statusText: "Internal Server Error advancedSearch" }
    );
  }
}