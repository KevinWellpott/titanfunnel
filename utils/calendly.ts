/**
 * Baut die Calendly-URL mit optionaler Prefill für Name und E-Mail.
 * Custom Questions (z. B. Geschätzter ROI, Besonderer Prozess-Schritt) müssen
 * ggf. im Calendly-Event als versteckte Felder angelegt werden; Werte werden
 * hier als Query-Parameter angehängt, falls Calendly sie unterstützt.
 */
export interface CalendlyPrefill {
  name?: string;
  email?: string;
  estimatedROIYearly?: number;
  specialStep?: string;
}

export function buildCalendlyUrl(
  baseUrl: string,
  prefill?: CalendlyPrefill | null
): string {
  if (!baseUrl.trim()) return "";
  const url = new URL(baseUrl.replace(/\/$/, ""));
  if (!prefill) return url.toString();
  if (prefill.name?.trim()) {
    url.searchParams.set("name", prefill.name.trim());
  }
  if (prefill.email?.trim()) {
    url.searchParams.set("email", prefill.email.trim());
  }
  if (prefill.estimatedROIYearly != null && prefill.estimatedROIYearly > 0) {
    url.searchParams.set(
      "a1",
      `Geschätzter ROI: ${Math.round(prefill.estimatedROIYearly)} €/Jahr`
    );
  }
  if (prefill.specialStep?.trim()) {
    url.searchParams.set("a2", prefill.specialStep.trim());
  }
  return url.toString();
}

export function getCalendlyBaseUrl(): string {
  if (typeof process === "undefined") return "";
  return process.env.NEXT_PUBLIC_CALENDLY_LINK ?? "";
}

/** Erzeugt die Embed-URL für Calendly Inline-Widget (calendly.com/embed/event/...) */
export function getCalendlyEmbedUrl(
  baseUrl: string,
  prefill?: CalendlyPrefill | null
): string {
  if (!baseUrl.trim()) return "";
  const normalized = baseUrl.replace(/\/$/, "");
  const embedBase =
    normalized.replace(
      /^https:\/\/calendly\.com\//,
      "https://calendly.com/embed/event/"
    ) || normalized;
  const url = buildCalendlyUrl(embedBase, prefill);
  return url;
}
