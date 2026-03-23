const SESSION_KEY = "roi-calculator-contact-prefill";
export function saveRoiPrefill(result, answers, name, email) {
    if (typeof window === "undefined")
        return;
    try {
        const data = {
            name,
            email,
            estimatedROIYearly: result.yearlyROI,
            feelingChange: answers.feelingChange,
            investmentTier: result.investmentTier,
            timestamp: new Date().toISOString(),
        };
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
    }
    catch {
        // ignore
    }
}
export function loadRoiPrefill() {
    if (typeof window === "undefined")
        return null;
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw)
            return null;
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}
export function clearRoiPrefill() {
    if (typeof window === "undefined")
        return;
    try {
        sessionStorage.removeItem(SESSION_KEY);
    }
    catch {
        // ignore
    }
}
