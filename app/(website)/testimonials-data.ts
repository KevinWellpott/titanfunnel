/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CASE STUDIES / TESTIMONIALS – Kontrollzentrum
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * WO KOMMEN DIE VIMEO-VIDEO-IDS HER?
 * ────────────────────────────────────
 * 1) DIREKT IN DIESER DATEI (empfohlen)
 *    → Im Array `testimonialsData` (unten): pro Eintrag das Feld `vimeoId`.
 *    → Nur die Zahl aus der Vimeo-URL, als String in Anführungszeichen.
 *      Beispiel: https://vimeo.com/123456789  →  vimeoId: "123456789"
 *    → Die Startseite (`app/(website)/page.tsx`) rendert diese Einträge; leere `vimeoId`
 *      + gesetztes `fallbackVideoSlot` nutzt stattdessen Supabase (siehe Punkt 2).
 *
 * 2) FALLBACK ÜBER SUPABASE (wenn vimeoId: "")
 *    → Tabelle `landing_videos`, Spalten `slug` + `vimeo_id`.
 *    → Erlaubte Slugs: `hero`, `proof_roi` (siehe `utils/supabase/videos.ts`).
 *    → Im Testimonial-Eintrag: vimeoId: "" und z.B. fallbackVideoSlot: "proof_roi".
 *
 * Pro Case Study: einen Block im Array `testimonialsData` (unten).
 *
 * PFLICHT / WICHTIG PRO BLOCK:
 * ───────────────────────────
 * • vimeoId     → Siehe oben „WO KOMMEN DIE VIMEO-VIDEO-IDS HER?“
 * • layout      → "left" = Video links, "right" = Video rechts (Desktop)
 * • photoSrc    → Optional. Bild unter `public/` (WebP/PNG), Pfad mit /.
 *                   Platzhalter: "/case-studies/social-proof/placeholder.png"
 * • videoPosterSrc → Eigenes Video-Thumbnail (WebP/PNG).
 *                   Bilder liegen hier:  public/case-studies/video-posters/
 *                   Im Code so verlinken:  videoPosterSrc: "/case-studies/video-posters/DEINNAME.webp"
 *                   Wenn gesetzt: kein Vimeo-Standbild.
 * • Wenn vimeoId leer ist ("", optional), wird fallbackVideoSlot genutzt (Supabase landing_videos).
 *
 * NEUEN CASE HINZUFÜGEN:
 * ─────────────────────
 * Kopiere einen kompletten { ... } Block, füge ihn im Array ein, alle Felder anpassen.
 */

import type { TestimonialLayout, TestimonialResultIcon } from "@/components/landing/testimonial-types";

export type { TestimonialLayout, TestimonialResultIcon };

export interface TestimonialEntry {
  layout: TestimonialLayout;
  /** Vimeo-ID (nur Zahlen). Leer "" → Video kommt aus fallbackVideoSlot (Supabase). */
  vimeoId: string;
  /** Nur wenn vimeoId leer: "proof_roi" oder "hero" aus Tabelle landing_videos */
  fallbackVideoSlot?: "proof_roi" | "hero";
  /** Kundenfoto: Pfad ab public/, z.B. "/case-studies/name.webp" */
  photoSrc?: string;
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
  /** Datei in `public/case-studies/video-posters/` → Pfad z.B. `/case-studies/video-posters/ali.webp` */
  videoPosterSrc?: string;
}

export const testimonialsData: TestimonialEntry[] = [
  {
    layout: "left",
    vimeoId: "1175735360",
    fallbackVideoSlot: "proof_roi",
    // videoPosterSrc: "/case-studies/video-posters/ali.webp",
    photoSrc: "/hero/trust/customer-01.webp",
    title: "Vom unplanbaren Coach zu fünfstelligen Monaten",
    subtitle: "Zufriedene Kunden",
    name: "Ali Duhoky",
    role: "Finanz/Trading Mentor",
    beforeText: "Vor der Zusammenarbeit",
    beforeValue:
      "unter 10.000 € pro Monat, kaum Prozesse - Kein Raum und keine Zeit zum skalieren gehabt.",
    results: [
      {
        icon: "💰",
        text: "60.000€ im Launchmonat, das war 2 Monate nach dem Beginn der Zusammenarbeit",
      },
      {
        icon: "✅",
        text: "Copy Paste Customer Journey → Er arbeitet weniger und verdient mehr als davor",
      },
      {
        icon: "⚡",
        text: "Upsells mit eingebracht → vom nur 50€ Ticket hoch zu 3k als Upsell",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/alivonsnt/",
      linkedin: "https://www.linkedin.com/in/ali-duhoky-10088b3a1/",
     
      website: "https://www.snttrades.de/",
    },
  },
  {
    layout: "right",
    vimeoId: "1175735586",
    fallbackVideoSlot: "hero",
    // videoPosterSrc: "/case-studies/video-posters/felix.webp",
    photoSrc: "/case-studies/video-posters/daniel.webp",
    title: "Ecom Betreiber hat 50% weniger Adminarbeit/Woche",
    subtitle: "Zufriedene Kunden",
    name: "Daniel Onishenko",
    role: "Parfumbrand",
    beforeText: "Vor der Zusammenarbeit",
    beforeValue: "Ø 3-4 Stunden Adminarbeit pro Tag. Wenig Zeit für Marketing & Sales",
    results: [
      { icon: "💰", text: "Interne Plattform um effizienter mit Cuttern, influencern & Affiliate-Partnern zu arbeiten → deutlich mehr Zeit für Marketing & Sales" },
      {
        icon: "✅",
        text: "Optimierter Instagrambot für automatisierten Outreach an Influencer → 5 Stunden Zeitersparnis pro Woche",
      },
      {
        icon: "⚡",
        text: "Durch unsere Systeme hat er seine ersten 20k/m erzielt → Weil er deutlich mehr Zeit für Marketing & Sales hatte",
      },
    ],
    socialLinks: {
      linkedin: "",
      instagram: "https://www.instagram.com/onishenko.de/",
      website: "https://onishenko.de/",
    },
  },

  {
    layout: "left",
    vimeoId: "1176251183",
    fallbackVideoSlot: "proof_roi",
    // videoPosterSrc: "/case-studies/video-posters/emre.webp",
    photoSrc: "/hero/trust/customer-02.webp",
    title: "Coach hat jetzt weniger Adminarbeit/Woche und mehr Zeit für Sales & Marketing",
    subtitle: "Zufriedene Kunden",
    name: "Emre Kopal",
    role: "Finanzcoach & Berater",
    beforeText: "Vor der Zusammenarbeit",
    beforeValue:
      "10-15 Stunden Adminarbeit pro Woche & super viel Fulfillmentaufwand. Wenig Zeit für Sales & Marketing",
    results: [
      {
        icon: "💰",
        text: "Starker Umsatzanstieg → klarer Funnel, Upsellprozesse & klare Customer Journey",
      },
      {
        icon: "✅",
        text: "Neue interne Plattform → 10 Stunden Zeitersparnis pro Woche",
      },
      {
        icon: "⚡",
        text: "Deutlich mehr Zeit für Sales & Marketing → mehr Umsatz & mehr Skalierung",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/emre.capital",
  
     
      website: "https://capitalcircletrading.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfJy8OJpog3tcm8YyC8DzDJ1I4r8rO5kAgi40ctAsIAFwNHup73tn1OeF8h8_aem_VkiBa125swhsOwGKqCFw3g",
    },
  },

  {
    layout: "right",
    vimeoId: "1177787292",
    fallbackVideoSlot: "proof_roi",
    // videoPosterSrc: "/case-studies/video-posters/emre.webp",
    photoSrc: "/hero/trust/customer-03.webp",
    title: "Geschäftsführer hat jetzt 50% weniger Adminarbeit/Woche, obwohl er so viele Projekte gleichzeitig managed",
    subtitle: "Zufriedene Kunden",
    name: "Tom Musa Kruschinski",
    role: "Geschäftsführer und Vertriebler",
    beforeText: "Vor der Zusammenarbeit",
    beforeValue:
      "Schlaflose Nächte, viel Stress und keine Zeit für sich selbst",
    results: [
      {
        icon: "💰",
        text: "Weniger Adminarbeit → Mehr Zeit für Sales & für sich selbst",
      },
      {
        icon: "✅",
        text: "Mehr Umsatz durch individuelle Software-Lösungen → Er kann jetzt zwei Urlaube mehr im Jahr machen",
      },
      {
        icon: "⚡",
        text: "Er kann ruhiger schlafen und mehr Zeit mit der Familie verbringen",
      },
    ],
    socialLinks: {
     
  linkedin: "https://www.linkedin.com/in/tom-kruschinski-787a5228b/",
     
      website: "https://meister-wartung.de/",
     
    },
  },
];
