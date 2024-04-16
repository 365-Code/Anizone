import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const epId = searchParams.get("epId") || "";
    const anime = new ANIME.Gogoanime();
    const {headers, sources} = await anime.fetchEpisodeSources(epId);
    if (!headers || !sources) {
      return NextResponse.json(
        { success: false },
        { status: 404, statusText: "Couldn't fetch Episode" },
      );
    }
    return NextResponse.json({ success: true, headers, sources });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "Internal Server Error in FetchAnimeInfo",
    });
  }
}
