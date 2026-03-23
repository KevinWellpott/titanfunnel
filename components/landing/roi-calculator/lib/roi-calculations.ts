import type { RoiAnswers, RoiResult, InvestmentTier } from "../types";

const UMSATZ_MID: Record<string, number> = {
  "5k-15k": 10_000,
  "15k-30k": 22_500,
  "30k-50k": 40_000,
  "50k+": 60_000,
};

const TICKET_MID: Record<string, number> = {
  "500-2k": 1_250,
  "2k-5k": 3_500,
  "5k-10k": 7_500,
  "10k+": 12_500,
};

const TIME_FACTOR = 0.7;
const UPSELL_RATE = 0.25;
const UPSELL_CONSERVATIVE = 0.5;

const INVESTMENT: Record<InvestmentTier, number> = {
  foundation: 6_900,
  scale: 9_000,
  enterprise: 15_000,
};

export function calculateROI(answers: RoiAnswers): RoiResult {
  const monatsumsatz = UMSATZ_MID[answers.umsatz] ?? 10_000;
  const ticketpreis = TICKET_MID[answers.ticketpreis] ?? 3_500;
  const timePercentage = answers.effizienzProzent;
  const currentCapacity = answers.kundenVolumen;

  // 1. ZEITHEBEL
  const timeValueMonthly =
    (monatsumsatz * (timePercentage / 100)) * TIME_FACTOR;

  // 2. SKALIERUNGSHEBEL
  const potentialCapacity = Math.floor(
    currentCapacity * (1 + timePercentage / 100)
  );
  const scalingValue =
    Math.max(0, potentialCapacity - currentCapacity) * ticketpreis;

  // 3. UPSELLHEBEL
  const upsellValue =
    currentCapacity * UPSELL_RATE * ticketpreis * UPSELL_CONSERVATIVE;

  const monthlyROI = timeValueMonthly + scalingValue + upsellValue;
  const yearlyROI = monthlyROI * 12;

  let investmentTier: InvestmentTier;
  if (yearlyROI > 75_000) investmentTier = "enterprise";
  else if (yearlyROI > 35_000) investmentTier = "scale";
  else investmentTier = "foundation";

  return {
    timeValueMonthly,
    scalingValue,
    upsellValue,
    monthlyROI,
    yearlyROI,
    investmentTier,
    investmentAmount: INVESTMENT[investmentTier],
  };
}

/** Maximaler monatlicher ROI für Progress-Bar (großzügige Obergrenze) */
export function getMaxMonthlyROIForDisplay(): number {
  return 15_000;
}
