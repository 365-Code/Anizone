import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    // const query = searchParams.get("query") ? (searchParams.get("query") != "All" ? searchParams.get("query") || "" : undefined)  : undefined;
    // const type = searchParams.get("type") ? (searchParams.get("type") != "All" ? searchParams.get("type") || "": undefined) : undefined;
    // const status = searchParams.get("status") ? (searchParams.get("status") != "All" ? searchParams.get("status") || "": undefined) : undefined;
    // const season = searchParams.get("season") ? (searchParams.get("season") != "All" ? searchParams.get("season") || "": undefined) : undefined;
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
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 10;
    const anilist = new META.Anilist();
    const { currentPage, hasNextPage, results } = await anilist.advancedSearch(
      query,
      "ANIME",
      Number(page),
      Number(perPage),
      type,
      undefined,
      genres,
      undefined,
      undefined,
      status,
      season
    );
    // const {currentPage, hasNextPage, results} = await anilist.search(query)
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

// import { META } from "@consumet/extensions";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const query = searchParams.get("query") != "All" ? searchParams.get("query") || "" : undefined;
//     const type = searchParams.get("type") != ("All") ? searchParams.get("type") || "" : undefined;
//     const status = searchParams.get("status") != ("All") ? searchParams.get("status") || "" : undefined;
//     const season = searchParams.get("season") != ("All") ? searchParams.get("season") || "" : undefined;
//     // const status = searchParams.get("status") || undefined;
//     // const season = searchParams.get("season") || undefined;
//     const genres = searchParams.get("genres") != "All"? (searchParams.get("genres") as string)?.split(',') : undefined;
//     console.log(type, season, status, genres);
//     const page = searchParams.get("page") || 1;
//     const perPage = searchParams.get("perPage") || 10;
//     const anilist = new META.Anilist();
//     const { currentPage, hasNextPage, results } = await anilist.advancedSearch(
//       query,
//       "ANIME",
//       Number(page),
//       Number(perPage),
//       type,
//       undefined,
//       genres,
//       undefined,
//       undefined,
//       status,
//       season
//     );
//     // const {currentPage, hasNextPage, results} = await anilist.search(query)
//     return NextResponse.json(
//       { currentPage, hasNextPage, results, success: true },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.msg, success: false },
//       { status: 500, statusText: "Internal Server Error advancedSearch" }
//     );
//   }
// }
