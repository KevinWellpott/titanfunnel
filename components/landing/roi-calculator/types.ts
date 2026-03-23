/** Umsatz-Range: durchschnittlicher Monatsumsatz (€) */
export type UmsatzRange = "5k-15k" | "15k-30k" | "30k-50k" | "50k+";

/** Ticketpreis-Range: durchschnittlicher Deal-Wert (€) */
export type TicketpreisRange = "500-2k" | "2k-5k" | "5k-10k" | "10k+";

export interface RoiAnswers {
  /** Frage 1: Umsatz-Range (Mittelwert der Range für Berechnung) */
  umsatz: UmsatzRange;
  /** Frage 2: Anzahl zahlende Kunden/Mandate pro Monat (1–50) */
  kundenVolumen: number;
  /** Frage 3: Ticketpreis-Range (Mittelwert für Berechnung) */
  ticketpreis: TicketpreisRange;
  /** Frage 4: Admin-Anteil in % (10–60) */
  effizienzProzent: number;
  /** Frage 5: Hast du das Gefühl, dass du was ändern solltest? */
  feelingChange: "ja" | "nein";
}

export type InvestmentTier = "foundation" | "scale" | "enterprise";

export interface RoiResult {
  /** Hebel 1: Zeitwert pro Monat (€) */
  timeValueMonthly: number;
  /** Hebel 2: Skalierungswert pro Monat (€) */
  scalingValue: number;
  /** Hebel 3: Upsell-Wert pro Monat (€) */
  upsellValue: number;
  /** Gesamt-ROI pro Monat (€) */
  monthlyROI: number;
  /** Gesamt-ROI pro Jahr (€) */
  yearlyROI: number;
  /** Empfohlene Investitionsstufe */
  investmentTier: InvestmentTier;
  /** Investitionsempfehlung in € (zur Anzeige) */
  investmentAmount: number;
}

export interface RoiCalculatorState {
  step: number;
  answers: Partial<RoiAnswers>;
}
