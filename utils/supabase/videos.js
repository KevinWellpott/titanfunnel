import { createServerClient } from "./server";
const SLUGS = ["hero", "proof_roi"];
export async function getLandingVideos() {
    const empty = { hero: null, proof_roi: null };
    try {
        const client = createServerClient();
        const { data, error } = await client
            .from("landing_videos")
            .select("slug, vimeo_id, title")
            .in("slug", [...SLUGS]);
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
