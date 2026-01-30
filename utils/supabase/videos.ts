import { createServerClient } from "./server";

export interface LandingVideoSlot {
  vimeoId: string;
  title?: string | null;
}

export interface LandingVideosResult {
  hero: LandingVideoSlot | null;
  proof_roi: LandingVideoSlot | null;
}

const SLUGS = ["hero", "proof_roi"] as const;

export async function getLandingVideos(): Promise<LandingVideosResult> {
  const empty: LandingVideosResult = { hero: null, proof_roi: null };

  try {
    const client = createServerClient();
    const { data, error } = await client
      .from("landing_videos")
      .select("slug, vimeo_id, title")
      .in("slug", [...SLUGS]);

    if (error || !data?.length) {
      return empty;
    }

    const bySlug: Record<string, { vimeoId: string; title?: string | null }> = {};
    for (const row of data as { slug: string; vimeo_id: string; title: string | null }[]) {
      bySlug[row.slug] = {
        vimeoId: row.vimeo_id,
        title: row.title ?? null,
      };
    }

    return {
      hero: bySlug.hero ?? null,
      proof_roi: bySlug.proof_roi ?? null,
    };
  } catch {
    return empty;
  }
}
