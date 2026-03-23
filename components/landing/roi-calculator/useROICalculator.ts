"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import type { RoiAnswers, RoiCalculatorState, RoiResult } from "./types";
import { calculateROI } from "./lib/roi-calculations";

const STORAGE_KEY = "roi-calculator-state";

function loadState(): Partial<RoiCalculatorState> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<RoiCalculatorState>;
    return parsed;
  } catch {
    return null;
  }
}

function saveState(state: RoiCalculatorState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function isAnswersComplete(answers: Partial<RoiAnswers>): answers is RoiAnswers {
  return (
    answers.umsatz != null &&
    answers.kundenVolumen != null &&
    answers.kundenVolumen >= 1 &&
    answers.ticketpreis != null &&
    answers.effizienzProzent != null &&
    (answers.feelingChange === "ja" || answers.feelingChange === "nein")
  );
}

export function useROICalculator() {
  const [state, setState] = useState<RoiCalculatorState>(() => {
    const saved = loadState();
    const step = saved?.step ?? 1;
    const answers = saved?.answers ?? {};
    // Alte/invalide Daten: Schritt 6 ohne vollständige Antworten → zurücksetzen
    if (step === 6 && !isAnswersComplete(answers)) {
      return { step: 1, answers: {} };
    }
    if (step < 1 || step > 6) {
      return { step: 1, answers: {} };
    }
    return { step, answers };
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setStep = useCallback((step: number) => {
    setState((s) => ({ ...s, step }));
  }, []);

  const setAnswers = useCallback((updates: Partial<RoiAnswers>) => {
    setState((s) => ({
      ...s,
      answers: { ...s.answers, ...updates },
    }));
  }, []);

  const goToResults = useCallback(() => {
    if (!isAnswersComplete(state.answers)) return;
    setState((s) => ({ ...s, step: 6 }));
  }, [state.answers]);

  const reset = useCallback(() => {
    setState({
      step: 1,
      answers: {},
    });
  }, []);

  const result: RoiResult | null = useMemo(() => {
    if (!isAnswersComplete(state.answers)) return null;
    return calculateROI(state.answers);
  }, [state.answers]);

  return {
    state,
    setStep,
    setAnswers,
    goToResults,
    reset,
    result,
    isComplete: isAnswersComplete(state.answers),
  };
}
