import { createServerClient } from "./server";
const SLUGS = ["hero", "proof_roi"];
const LANDING_VIDEOS_TIMEOUT_MS = 4000;
export async function getLandingVideos() {
    const empty = { hero: null, proof_roi: null };
    try {
        const client = createServerClient();
        const queryPromise = client
            .from("landing_videos")
            .select("slug, vimeo_id, title")
            .in("slug", [...SLUGS]);
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Landing videos query timeout")), LANDING_VIDEOS_TIMEOUT_MS);
        });
        const { data, error } = (await Promise.race([queryPromise, timeoutPromise]));
        if (error || !data?.length) {
            return empty;
        }
        const bySlug = {};
        for (const row of data) {
            bySlug[row.slug] = {
                vimeoId: row.vimeo_id,
                title: row.title ?? null,
            };
        }
        return {
            hero: bySlug.hero ?? null,
            proof_roi: bySlug.proof_roi ?? null,
        };
    }
    catch {
        return empty;
    }
}
