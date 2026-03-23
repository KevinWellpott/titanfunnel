/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CASE STUDIES / TESTIMONIALS – Kontrollzentrum
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Pro Case Study: einen Block im Array `testimonialsData` (unten).
 *
 * PFLICHT / WICHTIG PRO BLOCK:
 * ───────────────────────────
 * • vimeoId     → Nur die Ziffern aus der Vimeo-URL.
 *                   Beispiel: https://vimeo.com/123456789  →  vimeoId: "123456789"
 * • layout      → "left" = Video links, "right" = Video rechts (Desktop)
 * • photoSrc    → Optional. Bild unter `public/` (WebP/PNG), Pfad mit /.
 *                   Platzhalter: "/case-studies/social-proof/placeholder.png"
 * • Wenn vimeoId leer ist ("", optional), wird fallbackVideoSlot genutzt (Supabase landing_videos).
 *
 * NEUEN CASE HINZUFÜGEN:
 * ─────────────────────
 * Kopiere einen kompletten { ... } Block, füge ihn im Array ein, alle Felder anpassen.
 */
export const testimonialsData = [
    {
        layout: "left",
        vimeoId: "",
        fallbackVideoSlot: "proof_roi",
        photoSrc: "/case-studies/social-proof/placeholder.png",
        title: "Vom unplanbaren Coach zu fünfstelligen Monaten",
        subtitle: "Zufriedene Kunden",
        name: "Ali Duhoky",
        role: "Finanz/Trading Mentor",
        beforeText: "Vor der Zusammenarbeit",
        beforeValue: "unter 10.000 € pro Monat, kaum Prozesse - Kein Raum und keine Zeit zum skalieren gehabt.",
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
        },
    },
    {
        layout: "right",
        vimeoId: "",
        fallbackVideoSlot: "hero",
        photoSrc: "/case-studies/social-proof/placeholder.png",
        title: "Vom Fitnesscoach zum profitablen SaaS Betreiber",
        subtitle: "Zufriedene Kunden",
        name: "Felix Mangold",
        role: "Fitnesscoach",
        beforeText: "Vor der Zusammenarbeit",
        beforeValue: "Hier und da ein Close, unplanbare mal gute mal weniger gute Umsätze",
        results: [
            { icon: "💰", text: "Eigenes SaaS Business für seine Kunden mit uns entwickelt" },
            {
                icon: "✅",
                text: "Eigenes Coaching auf 10k/m skaliert → Durch unsere Systeme, mehr Geld weniger Arbeit",
            },
            {
                icon: "⚡",
                text: "Customer Lifetime Value erhöht → seit unserer Zusammenarbeit keine Kündigung",
            },
        ],
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/felix-mangold-performance-coaching/",
            instagram: "https://www.instagram.com/felix_mangold/",
            website: "https://example.com",
        },
    },
];
