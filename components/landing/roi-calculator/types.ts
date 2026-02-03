/** Frage 3: Was raubt dir am meisten Zeit und Nerven? */
export type Hauptproblem =
  | "lead-chaos"
  | "verkaufs-hickhack"
  | "admin-hoelle"
  | "skalierung-unmoeglich";

export interface RoiAnswers {
  /** Frage 1: Durchschnittlicher Monatsumsatz (€) */
  umsatzProMonat: number;
  /** Frage 2: Anzahl neuer Kunden pro Monat */
  neueKundenProMonat: number;
  /** Frage 3: Hauptproblem (Single Choice) */
  hauptproblem: Hauptproblem;
}

export interface RoiResult {
  /** Geschätztes Umsatzpotenzial pro Jahr (€) */
  yearlyPotential: number;
  /** Label des gewählten Problems für Anzeige */
  problemLabel: string;
}

export interface RoiCalculatorState {
  step: number;
  answers: Partial<RoiAnswers>;
}

/** Formulardaten für Submit (LinkedIn + Bremsklotz) */
export interface RoiSubmitPayload {
  linkedinName: string;
  bremsklotz: string;
  /** Aus ROI-Berechnung */
  umsatzProMonat: number;
  neueKundenProMonat: number;
  hauptproblem: Hauptproblem;
  problemLabel: string;
  yearlyPotential: number;
  csrfToken: string;
}
