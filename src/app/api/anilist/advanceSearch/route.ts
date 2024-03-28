import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query =
      searchParams.get("query") != "All"
        ? searchParams.get("query") || undefined
        : undefined;
    const type =
      searchParams.get("type") != "All"
        ? searchParams.get("type") || undefined
        : undefined;
    const status =
      searchParams.get("status") != "All"
        ? searchParams.get("status") || undefined
        : undefined;
    const season =
      searchParams.get("season") != "All"
        ? searchParams.get("season") || undefined
        : undefined;
    const genres =
      searchParams.get("genres") != "All"
        ? (searchParams.get("genres") as string)?.split(",")
        : undefined;
    const sort =
      searchParams.get("sort") != "All"
        ? (searchParams.get("sort") as string)?.split(",")
        : undefined;
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 10;
    const anilist = new META.Anilist();
    const { currentPage, hasNextPage, results } = await anilist.advancedSearch(
      query,
      "ANIME",
      Number(page),
      Number(perPage),
      type,
      sort,
      genres,
      undefined,
      undefined,
      status,
      season
    );
    
    return NextResponse.json(
      { currentPage, hasNextPage, results, success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.msg, success: false },
      { status: 500, statusText: "Internal Server Error advancedSearch" }
    );
  }
}