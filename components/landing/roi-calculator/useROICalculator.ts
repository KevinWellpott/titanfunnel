"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import type {
  RoiAnswers,
  RoiCalculatorState,
  RoiResult,
  RoiSubmitPayload,
} from "./types";
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
    typeof answers.umsatzProMonat === "number" &&
    answers.umsatzProMonat > 0 &&
    typeof answers.neueKundenProMonat === "number" &&
    answers.neueKundenProMonat >= 0 &&
    answers.hauptproblem != null
  );
}

export function useROICalculator() {
  const [state, setState] = useState<RoiCalculatorState>(() => {
    const saved = loadState();
    const step = saved?.step ?? 1;
    const answers = saved?.answers ?? {};
    if (step === 4 && !isAnswersComplete(answers)) {
      return { step: 1, answers: {} };
    }
    if (step < 1 || step > 4) {
      return { step: 1, answers: {} };
    }
    return { step, answers };
  });

  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    if (state.step !== 4) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/submit-roi");
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as { csrfToken?: string };
        if (data.csrfToken && !cancelled) setCsrfToken(data.csrfToken);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [state.step]);

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
    setState((s) => ({ ...s, step: 4 }));
  }, [state.answers]);

  const reset = useCallback(() => {
    setState({ step: 1, answers: {} });
    setCsrfToken(null);
  }, []);

  const result: RoiResult | null = useMemo(() => {
    if (!isAnswersComplete(state.answers)) return null;
    return calculateROI(state.answers);
  }, [state.answers]);

  const submitRoi = useCallback(
    async (payload: {
      linkedinName: string;
      bremsklotz: string;
    }): Promise<{ ok: boolean; error?: string }> => {
      if (!isAnswersComplete(state.answers) || !result || !csrfToken) {
        return { ok: false, error: "Bitte lade die Seite neu und fülle alle Felder aus." };
      }
      const body: RoiSubmitPayload = {
        ...payload,
        umsatzProMonat: state.answers.umsatzProMonat,
        neueKundenProMonat: state.answers.neueKundenProMonat,
        hauptproblem: state.answers.hauptproblem,
        problemLabel: result.problemLabel,
        yearlyPotential: result.yearlyPotential,
        csrfToken,
      };
      try {
        const res = await fetch("/api/submit-roi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          error?: string;
        };
        if (res.ok && data.ok) return { ok: true };
        return { ok: false, error: data.error ?? "Senden fehlgeschlagen." };
      } catch (e) {
        return {
          ok: false,
          error: e instanceof Error ? e.message : "Senden fehlgeschlagen.",
        };
      }
    },
    [state.answers, result, csrfToken]
  );

  return {
    state,
    setStep,
    setAnswers,
    goToResults,
    reset,
    result,
    isComplete: isAnswersComplete(state.answers),
    submitRoi,
    answers: isAnswersComplete(state.answers) ? state.answers : null,
  };
}
