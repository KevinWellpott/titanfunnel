/**
 * Team / Kennenlernen – Bild unter public/case-studies/team/
 * Layout & Typo 1:1 wie Case Study (Testimonial), nur Bild statt Video.
 */

export interface TeamIntroFounder {
  name: string;
  role: string;
  /** Hauptüberschrift im Block (h3), wie `title` bei Case Studies */
  title: string;
  image: { src: string; alt: string };
  /** Label über dem Fließtext (wie beforeText) */
  focusHeading: string;
  /** Fließtext (wie beforeValue) */
  focusBody: string;
  bullets: string[];
}

export const teamIntroConfig = {
  headline: "Unsere Ergebnisse sind geil, ja. Du willst uns aber erst kennenlernen?",
  subline: "Kurz zu uns – dann weißt du, wer hinter TitanScale steckt.",
  founders: [
    {
      name: "Kevin",
      role: "Co-Founder",
      title: "Ich progammiere gerne Software, bin ein Vertriebsmensch & ein Tierfreund",
      image: { src: "/case-studies/team/kevin-01.webp", alt: "Kevin" },
      focusHeading: "Kaffee, Snus & stabile Ergebnisse",
      focusBody:
        "Ich programmiere & trinke gerne Kaffee, viel Kaffee (wie ein richtiger Softwareentwickler eben). ",
      bullets: [
        "Ich will deinen Umsatz oben sehen, damit du uns auf deine zukünftigeMegayacht einladen kannst.",
        "Ich will das du keinen Stress mehr hast und du deine Freizeit wieder bekommst.",
        "dein Scaling zu einem Nobrainer zu machen, so das meine kleine Schwester dein Business skalieren kann.",
      ],
    },
    {
      name: "Simon",
      role: "Founder",
      title: "Ich liebe Rückentraining, Sales & Softwareentwicklung",
      image: { src: "/case-studies/team/simon-01.webp", alt: "Simon" },
      focusHeading: "Snus, Koffeintabletten & stabile Ergebnisse",
      focusBody:
        "Ich bin täglich auf Snus und Koffeintabletten. Im Austausch liefere ich stabile Ergebnisse. ",
      bullets: [
        "Ich will deinen Adminaufwand minimieren.",
        "Ich will deinen Stress minimieren.",
        "Ich will das du beim Porsche kaufen nicht auf den Preis schauen musst.",
      ],
    },
  ] satisfies TeamIntroFounder[],
};
