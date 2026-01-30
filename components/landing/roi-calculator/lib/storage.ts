import type { RoiAnswers, RoiResult } from "../types";

const SESSION_KEY = "roi-calculator-contact-prefill";

export interface RoiContactPrefill {
  name?: string;
  email?: string;
  estimatedROIYearly: number;
  feelingChange?: "ja" | "nein";
  investmentTier: string;
  timestamp: string;
}

export function saveRoiPrefill(
  result: RoiResult,
  answers: RoiAnswers,
  name?: string,
  email?: string
): void {
  if (typeof window === "undefined") return;
  try {
    const data: RoiContactPrefill = {
      name,
      email,
      estimatedROIYearly: result.yearlyROI,
      feelingChange: answers.feelingChange,
      investmentTier: result.investmentTier,
      timestamp: new Date().toISOString(),
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function loadRoiPrefill(): RoiContactPrefill | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as RoiContactPrefill;
  } catch {
    return null;
  }
}

export function clearRoiPrefill(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
