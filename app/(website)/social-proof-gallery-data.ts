import type { SocialProofImageItem } from "@/components/landing/social-proof-gallery";
import { readdir } from "node:fs/promises";
import path from "node:path";

export type { SocialProofImageItem };

const PUBLIC_DIR = path.join(process.cwd(), "public", "case-studies", "social-proof");
const PUBLIC_WEB_PATH = "/case-studies/social-proof";
const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg"]);

/**
 * Dynamisch aus dem Ordner laden:
 * `public/case-studies/social-proof`
 *
 * Ergebnis:
 * - nur tatsächlich vorhandene Dateien werden gezeigt
 * - beliebig viele Screenshots möglich
 * - wenn nur 6 Dateien da sind, werden exakt 6 gerendert
 */
export async function getSocialProofGalleryConfig() {
  let filenames: string[] = [];

  try {
    filenames = await readdir(PUBLIC_DIR);
  } catch {
    filenames = [];
  }

  const images = filenames
    .filter((filename) => IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "de", { numeric: true, sensitivity: "base" }))
    .map((filename) => ({
      src: `${PUBLIC_WEB_PATH}/${filename}`,
      alt: `Social Proof ${path.parse(filename).name}`,
    })) satisfies SocialProofImageItem[];

  return {
    title: "Social Proof",
    subtitle: "Echte Screenshots aus Chats & Community",
    images,
  };
}

export const socialProofGalleryConfig = {
  title: "Social Proof",
  subtitle: "Echte Screenshots aus Chats & Community",
  images: [] as SocialProofImageItem[],
};
