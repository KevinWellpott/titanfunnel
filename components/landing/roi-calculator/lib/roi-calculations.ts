import type { RoiAnswers, RoiResult, Hauptproblem } from "../types";

/**
 * Multiplikator je nach Bottleneck (potenzielles Umsatzplus).
 * A) Lead-Chaos = 0.5, B) Verkaufs-Hickhack = 0.4, C) Admin-Hölle = 0.3, D) Skalierung unmöglich = 0.6
 */
const MULTIPLIKATOR: Record<Hauptproblem, number> = {
  "lead-chaos": 0.5,
  "verkaufs-hickhack": 0.4,
  "admin-hoelle": 0.3,
  "skalierung-unmoeglich": 0.6,
};

export const HAUPTPROBLEM_LABEL: Record<Hauptproblem, string> = {
  "lead-chaos": "Lead-Chaos",
  "verkaufs-hickhack": "Verkaufs-Hickhack",
  "admin-hoelle": "Admin-Hölle",
  "skalierung-unmoeglich": "Skalierung unmöglich",
};

/**
 * Realistische Schätzung: (Umsatz / Kunden) * 3 * [Auswahl-Multiplikator]
 * Umsatz/Kunden = € pro Kunde/Monat; * 3 * Mult = Hebel; * 12 = Jahr.
 * Ergebnis = geschätztes zusätzliches Umsatzpotenzial pro Jahr (€).
 */
export function calculateROI(answers: RoiAnswers): RoiResult {
  const { umsatzProMonat, neueKundenProMonat, hauptproblem } = answers;
  const kunden = Math.max(1, neueKundenProMonat);
  const umsatzProKunde = umsatzProMonat / kunden;
  const mult = MULTIPLIKATOR[hauptproblem];
  const yearlyPotential = Math.round(umsatzProKunde * 3 * mult * 12);
  return {
    yearlyPotential: Math.max(0, yearlyPotential),
    problemLabel: HAUPTPROBLEM_LABEL[hauptproblem],
  };
}
