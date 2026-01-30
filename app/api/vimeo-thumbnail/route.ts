import { NextRequest, NextResponse } from "next/server";

const VIMEO_OEMBED = "https://vimeo.com/api/oembed.json";

export async function GET(request: NextRequest) {
  const vimeoId = request.nextUrl.searchParams.get("vimeoId");
  if (!vimeoId || !/^\d+$/.test(vimeoId)) {
    return NextResponse.json(
      { error: "Missing or invalid vimeoId" },
      { status: 400 }
    );
  }

  try {
    const url = `${VIMEO_OEMBED}?url=${encodeURIComponent(`https://vimeo.com/${vimeoId}`)}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Vimeo oEmbed failed" },
        { status: 502 }
      );
    }
    const data = (await res.json()) as { thumbnail_url?: string };
    const thumbnailUrl = data.thumbnail_url ?? null;
    return NextResponse.json({ thumbnailUrl });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch thumbnail" },
      { status: 502 }
    );
  }
}
