import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const result = await anilist.fetchRandomAnime()
    return NextResponse.json(
      { result, success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.msg, success: false },
      { status: 500, statusText: "Internal Server Error advancedSearch" }
    );
  }
}