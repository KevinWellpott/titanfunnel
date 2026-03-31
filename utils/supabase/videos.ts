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
const LANDING_VIDEOS_TIMEOUT_MS = 4000;

export async function getLandingVideos(): Promise<LandingVideosResult> {
  const empty: LandingVideosResult = { hero: null, proof_roi: null };

  try {
    const client = createServerClient();
    const queryPromise = client
      .from("landing_videos")
      .select("slug, vimeo_id, title")
      .in("slug", [...SLUGS]);

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Landing videos query timeout")), LANDING_VIDEOS_TIMEOUT_MS);
    });

    const { data, error } = (await Promise.race([queryPromise, timeoutPromise])) as Awaited<typeof queryPromise>;

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
