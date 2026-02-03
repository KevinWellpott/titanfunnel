import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import nodemailer from "nodemailer";

/** Nodemailer benötigt Node.js-Runtime (kein Edge). */
export const runtime = "nodejs";

const CSRF_COOKIE_NAME = "roi_csrf";
const CSRF_MAX_AGE = 60 * 60; // 1 Stunde

const HAUPTPROBLEM_VALUES = [
  "lead-chaos",
  "verkaufs-hickhack",
  "admin-hoelle",
  "skalierung-unmoeglich",
] as const;

const HAUPTPROBLEM_LABEL: Record<string, string> = {
  "lead-chaos": "Lead-Chaos",
  "verkaufs-hickhack": "Verkaufs-Hickhack",
  "admin-hoelle": "Admin-Hölle",
  "skalierung-unmoeglich": "Skalierung unmöglich",
};

/** GET: Liefert CSRF-Token und setzt Cookie (für Formular-Submit). */
export async function GET() {
  const token = randomBytes(32).toString("hex");
  const res = NextResponse.json({ csrfToken: token });
  res.cookies.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: CSRF_MAX_AGE,
    path: "/",
  });
  return res;
}

function validateBody(body: unknown): {
  ok: true;
  data: {
    linkedinName: string;
    bremsklotz: string;
    umsatzProMonat: number;
    neueKundenProMonat: number;
    hauptproblem: string;
    problemLabel: string;
    yearlyPotential: number;
    csrfToken: string;
  };
} | { ok: false; error: string } {
  if (body == null || typeof body !== "object") {
    return { ok: false, error: "Ungültige Anfrage." };
  }
  const b = body as Record<string, unknown>;

  const linkedinName = b.linkedinName;
  if (typeof linkedinName !== "string" || linkedinName.trim().length === 0) {
    return { ok: false, error: "LinkedIn-Name fehlt oder ist leer." };
  }
  if (linkedinName.length > 500) {
    return { ok: false, error: "LinkedIn-Name zu lang." };
  }

  const bremsklotz = b.bremsklotz;
  if (typeof bremsklotz !== "string" || bremsklotz.trim().length === 0) {
    return { ok: false, error: "Bremsklotz-Antwort fehlt oder ist leer." };
  }
  if (bremsklotz.length > 2000) {
    return { ok: false, error: "Bremsklotz-Antwort zu lang." };
  }

  const umsatzProMonat = b.umsatzProMonat;
  if (
    typeof umsatzProMonat !== "number" ||
    !Number.isFinite(umsatzProMonat) ||
    umsatzProMonat < 0
  ) {
    return { ok: false, error: "Ungültiger Umsatz." };
  }

  const neueKundenProMonat = b.neueKundenProMonat;
  if (
    typeof neueKundenProMonat !== "number" ||
    !Number.isFinite(neueKundenProMonat) ||
    neueKundenProMonat < 0
  ) {
    return { ok: false, error: "Ungültige Kundenanzahl." };
  }

  const hauptproblem = b.hauptproblem;
  if (
    typeof hauptproblem !== "string" ||
    !HAUPTPROBLEM_VALUES.includes(hauptproblem as (typeof HAUPTPROBLEM_VALUES)[number])
  ) {
    return { ok: false, error: "Ungültige Hauptproblem-Auswahl." };
  }

  const yearlyPotential = b.yearlyPotential;
  if (
    typeof yearlyPotential !== "number" ||
    !Number.isFinite(yearlyPotential) ||
    yearlyPotential < 0
  ) {
    return { ok: false, error: "Ungültiges Umsatzpotenzial." };
  }

  const csrfToken = b.csrfToken;
  if (typeof csrfToken !== "string" || csrfToken.length === 0) {
    return { ok: false, error: "CSRF-Token fehlt." };
  }

  const problemLabel =
    (typeof b.problemLabel === "string" && b.problemLabel) ||
    HAUPTPROBLEM_LABEL[hauptproblem] ||
    hauptproblem;

  return {
    ok: true,
    data: {
      linkedinName: linkedinName.trim(),
      bremsklotz: bremsklotz.trim(),
      umsatzProMonat,
      neueKundenProMonat,
      hauptproblem,
      problemLabel,
      yearlyPotential,
      csrfToken,
    },
  };
}

/**
 * Gmail-Versand: Es wird ein Gmail-App-Passwort benötigt (kein normales Passwort).
 * Zwei-Faktor-Auth im Google-Konto aktivieren, dann unter
 * Google-Konto → Sicherheit → App-Passwörter ein App-Passwort erstellen und hier eintragen.
 */
async function sendRoiEmail(data: {
  linkedinName: string;
  bremsklotz: string;
  umsatzProMonat: number;
  neueKundenProMonat: number;
  problemLabel: string;
  yearlyPotential: number;
}): Promise<void> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER oder GMAIL_APP_PASSWORD fehlt in .env");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  const formatted = [
    `LinkedIn: ${data.linkedinName}`,
    `Geschätzter Umsatz/Monat: ${data.umsatzProMonat}€`,
    `Neue Kunden/Monat: ${data.neueKundenProMonat}`,
    `Hauptproblem: ${data.problemLabel}`,
    `Bremsklotz & Bereitschaft: ${data.bremsklotz}`,
    `Geschätztes Umsatzpotenzial: ${data.yearlyPotential}€/Jahr`,
  ].join("\n");

  await transporter.sendMail({
    from: user,
    to: "rasmus.paweletz@gmail.com",
    subject: `Neue ROI-Analyse + Videoanfrage von ${data.linkedinName}`,
    text: formatted,
  });
}

/** POST: Formulardaten validieren, CSRF prüfen, E-Mail nur an rasmus.paweletz@gmail.com senden (keine Bestätigungsmail an Absender). */
export async function POST(request: NextRequest) {
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültiger JSON-Body." },
      { status: 400 }
    );
  }

  const validated = validateBody(body);
  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, error: validated.error },
      { status: 400 }
    );
  }

  const { data } = validated;
  if (!cookieToken || cookieToken !== data.csrfToken) {
    return NextResponse.json(
      { ok: false, error: "CSRF-Token ungültig. Bitte Seite neu laden." },
      { status: 403 }
    );
  }

  try {
    await sendRoiEmail({
      linkedinName: data.linkedinName,
      bremsklotz: data.bremsklotz,
      umsatzProMonat: data.umsatzProMonat,
      neueKundenProMonat: data.neueKundenProMonat,
      problemLabel: data.problemLabel,
      yearlyPotential: data.yearlyPotential,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("ROI submit email error:", err);
    return NextResponse.json(
      { ok: false, error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
