/** Hintergrundfarbe der Case-Study-Section (äußerer Wrapper in testimonial-left / testimonial-right) */
export const testimonialSectionBackground = "#fbfbff";

/**
 * Layout wie Referenz-Screenshot: ~1200px Container, Video-Spalte ~400px, Gutter ~56px, Text ~60%.
 */
export const testimonialLayout = {
  containerMaxW: "1200px",
  videoColumnMaxW: "400px",
  /** horizontaler Abstand Video ⟷ Text (Chakra-Spacing: 14 ≈ 56px) */
  columnGap: { base: "6", md: "10", lg: "14" },
} as const;

/**
 * Typo + vertikale Rhythmik nah am Referenz-Screenshot (Headline ~24–28px, Fließtext 14px, Abstände ~24px zwischen Blöcken).
 */
export const testimonialTypography = {
  stars: "13px",
  name: "17px",
  role: "15px",
  /** Hauptüberschrift Case Study – deutlich größer als Name/Zwischenüberschriften */
  headline: { base: "1.4rem", md: "1.85rem", lg: "2rem" },
  headlineLineHeight: 1.12,
  /** „Vor der Zusammenarbeit“, „Ergebnisse“ – kleiner als Headline, fett */
  sectionLabel: "1.125rem",
  /** Fließtext + Ergebnis-Zeilen */
  body: "1rem",
  bodyLineHeight: 1.35,
} as const;

/** Vertikal: Meta→Titel enger, Titel→erster Absatz ~24px, zwischen Content-Blöcken ~24px */
export const testimonialSpacing = {
  metaToTitleLg: "10px",
  titleToBodyLg: "14px",
  blockGap: "14px",
  labelToParagraph: "4px",
  sectionToList: "6px",
  listItemGap: "6px",
  metaStarsToName: "2px",
  metaNameToRole: "0px",
} as const;

export type TestimonialLayout = "left" | "right";

export type TestimonialResultIcon = "✅" | "💰" | "⚡" | "🚀" | "📈";

export interface TestimonialBlockProps {
  vimeoId: string;
  title: string;
  subtitle: string;
  name: string;
  role: string;
  beforeText: string;
  beforeValue: string;
  results: Array<{ icon: TestimonialResultIcon; text: string }>;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
  /** Pfad unter `public/`, z.B. `/case-studies/kunde.webp` */
  photoSrc?: string;
  /** Standbild: Datei in `public/case-studies/video-posters/` → z.B. `/case-studies/video-posters/kunde.webp` */
  videoPosterSrc?: string;
}
