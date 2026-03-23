/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HERO – Trust-Strip (Avatare + Sterne + Copy)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * BILDER (Kundenköpfe, z. B. WebP/PNG, quadratisch, mind. ca. 96×96 px):
 *   → Lege die Dateien hier ab:  public/hero/trust/
 *   → Benennung wie unten bei `src`, z. B. customer-01.webp … customer-06.webp
 *
 * COPY:
 *   → Alles in dieser Datei anpassen: `line1`, `line2Bold`, `line2Suffix`
 *   → Zeile 2 = fetter Teil + normaler Rest (z. B. „… € mehr Umsatz“ fett, „pro Monat“ normal)
 */

export interface HeroTrustAvatar {
  /** Pfad ab `public/`, z. B. `/hero/trust/customer-01.webp` */
  src: string;
  alt: string;
}

export interface HeroTrustConfig {
  avatars: HeroTrustAvatar[];
  /** Erste Textzeile unter den Sternen */
  line1: string;
  /** Fetter Teil in Zeile 2 */
  line2Bold: string;
  /** Rest von Zeile 2 (normal gewichtet) */
  line2Suffix: string;
}

export const heroTrustConfig: HeroTrustConfig = {
  avatars: [
    { src: "/hero/trust/customer-01.webp", alt: "Kunde 1" },
    { src: "/hero/trust/customer-02.webp", alt: "Kunde 2" },
    { src: "/hero/trust/customer-03.webp", alt: "Kunde 3" },
    { src: "/hero/trust/customer-04.webp", alt: "Kunde 4" },
    { src: "/hero/trust/customer-05.webp", alt: "Kunde 5" },
    { src: "/hero/trust/customer-06.webp", alt: "Kunde 6" },
  ],
  line1: "Wegen uns skalieren 25+ Online-Unternehmer",
  line2Bold: "Im Ø 10 Stunden/Woche weniger Adminarbeit & im Ø 50% mehr Umsatz pro Monat",
  line2Suffix: "",
};
