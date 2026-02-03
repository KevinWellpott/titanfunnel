import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Datenschutz & Cookies",
  description:
    "Cookie-Richtlinie und Datenschutz – Kevin Wellpott & Simon Paweletz GbR (titan.)",
});

const COOKIE_POLICY_MARKDOWN = `
## Übersicht

Diese Website verwendet ausschließlich **Google Analytics** zur anonymen Analyse des Nutzerverhaltens. Cookies werden nur nach Ihrer ausdrücklichen Zustimmung gesetzt. Sie können Ihre Einstellungen jederzeit ändern.

---

## Verantwortlicher

**Kevin Wellpott & Simon Paweletz GbR**  
Wilhelmstraße 8, 32602 Vlotho  

- **E-Mail:** [info@titanagency.de](mailto:info@titanagency.de)

---

## Welche Cookies verwenden wir?

### Notwendige Cookies (immer aktiv)

- **Cookie:** \`titan-cookie-consent\` (bzw. das von unserem Cookie-Banner verwendete Cookie)
- **Zweck:** Speichert Ihre Cookie-Einstellungen
- **Speicherdauer:** Unbegrenzt (bis Sie sie löschen)
- **Rechtsgrundlage:** Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)

### Google Analytics Cookies (mit Zustimmung)

- **Cookies:** \`_ga\`, \`_ga_*\`, \`_gid\`
- **Zweck:** Anonyme Analyse des Nutzerverhaltens, Besucherstatistiken
- **Speicherdauer:** 2 Jahre (_ga), 24 Stunden (_gid)
- **Rechtsgrundlage:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
- **Datenverarbeitung:** Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland

---

## Zweck der Datenverarbeitung

Wir verwenden Google Analytics ausschließlich zur **anonymen Analyse** des Nutzerverhaltens auf unserer Website. Dies hilft uns dabei:

- Die Benutzerfreundlichkeit unserer Website zu verbessern
- Beliebte Inhalte zu identifizieren
- Technische Probleme zu erkennen
- Die Ladezeiten zu optimieren

**Wichtig:** Ihre IP-Adresse wird anonymisiert, keine personenbezogenen Daten werden gespeichert.

---

## Ihre Rechte nach der DSGVO

- **Widerruf der Einwilligung:** Sie können Ihre Zustimmung jederzeit widerrufen
- **Auskunft:** Informationen über gespeicherte Daten
- **Löschung:** Entfernung Ihrer Daten bei uns und Google
- **Beschwerde:** Bei der zuständigen Datenschutzbehörde

---

## Cookie-Einstellungen verwalten

Sie können Ihre Cookie-Einstellungen jederzeit ändern: Über den Cookie-Hinweis auf unserer Website (z. B. über den Link „Cookie-Einstellungen“ im Footer) oder direkt in den Einstellungen Ihres Browsers. Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer Website beeinträchtigen kann.

**Browser-Einstellungen:** Sie können Cookies auch direkt in Ihrem Browser verwalten oder blockieren. Weitere Informationen finden Sie z. B. auf [www.allaboutcookies.org](https://www.allaboutcookies.org/) oder [www.youronlinechoices.eu](https://www.youronlinechoices.eu/).

---

## Fragen zum Datenschutz?

Bei Fragen zu unseren Datenschutzpraktiken wenden Sie sich gerne an uns:

- **E-Mail:** [info@titanagency.de](mailto:info@titanagency.de)
- **Telefon:** [+49 160 7760350](tel:+491607760350)

---

**Zuletzt aktualisiert:** 18.11.25
`;

export default function CookiePolicy() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>{COOKIE_POLICY_MARKDOWN}</Markdown>
      </Prose>
    </Section>
  );
}
