import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Cookie-Richtlinie",
  description:
    "Informationen zu Cookies und ähnlichen Technologien auf dieser Website",
});

export default function CookiePolicy() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>
          {`
# Cookie-Richtlinie

Diese Cookie-Richtlinie informiert Sie darüber, wie wir auf der Website **titandevelopment.de** (und zugehörige Auftritte) Cookies und ähnliche Technologien einsetzen. Ergänzend gilt unsere [Datenschutzerklärung](/legal/privacy-policy).

## 1. Verantwortlicher

Simon Paweletz, TitanScale, Unterm Dörgen 3c, 32549 Bad Oeynhausen, Deutschland  
E-Mail: simon@titandevelopment.de, kevin@titandevelopment.de

## 2. Was sind Cookies?

Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie eine Website besuchen. Neben klassischen Cookies können auch vergleichbare Technologien verwendet werden (z. B. Local Storage, Session Storage oder Pixel), sofern sie Informationen auf Ihrem Gerät speichern oder auslesen.

## 3. Welche Cookies / Technologien nutzen wir?

### 3.1 Technisch notwendige Cookies und Funktionen

Für den Betrieb der Website können technisch notwendige Cookies oder Speicherungen eingesetzt werden, ohne die die Seite nicht oder nicht zuverlässig funktioniert (z. B. Sitzungssteuerung, Sicherheitsfunktionen, Cookie-Banner-Entscheidung).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und funktionsfähigen Betrieb) bzw. § 25 Abs. 2 TTDSG (soweit „unbedingt erforderlich“ im Sinne des Gesetzgebers).

### 3.2 Vercel Analytics (Reichweitenmessung)

Wir nutzen **Vercel Analytics** zur anonymisierten bzw. aggregierten Auswertung der Nutzung unserer Website. Nach Herstellerangaben werden hierfür keine herkömmlichen Tracking-Cookies gesetzt; die Messung erfolgt datenschutzfreundlicher als bei vielen klassischen Analyse-Tools. Je nach Konfiguration Ihres Browsers und unseres Einwilligungssystems kann die Aktivierung dennoch über den Cookie-Banner gesteuert werden.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Banner), soweit erforderlich, sonst Art. 6 Abs. 1 lit. f DSGVO.

### 3.3 Calendly (Terminbuchung)

Wenn Sie den Buchungsflow von **Calendly** nutzen, können Cookies oder ähnliche Technologien von Calendly gesetzt werden, um die Buchungsfunktion bereitzustellen (z. B. Sitzung, Sicherheit, Sprache).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) bzw. Art. 6 Abs. 1 lit. a DSGVO, soweit eine Einwilligung erforderlich ist.

### 3.4 Vimeo (Videoeinbindungen)

Beim Abspielen oder Laden von eingebundenen **Vimeo**-Videos können Vimeo-Cookies oder ähnliche Technologien eingesetzt werden.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), soweit erforderlich, sonst Art. 6 Abs. 1 lit. f DSGVO.

### 3.5 Supabase

**Supabase** wird primär serverseitig für Datenhaltung genutzt. In Ihrem Browser fallen hierfür in der Regel keine zusätzlichen „Marketing-Cookies“ an; es können jedoch technische Speicherungen im Rahmen der Anwendung erfolgen.

### 3.6 Optionale Tools (Google Analytics / Meta Pixel)

Sofern in den Projekteinstellungen aktiviert und Sie im Cookie-Banner zustimmen, können **Google Analytics** und/oder **Meta Pixel** Cookies oder ähnliche Technologien setzen. Details finden Sie in der Datenschutzerklärung.

## 4. Speicherdauer

Session-Cookies werden nach Ende Ihres Besuchs gelöscht. Andere Cookies können für einen festgelegten Zeitraum auf Ihrem Gerät verbleiben, bis sie ablaufen oder Sie sie löschen. Die Dauer entnehmen Sie bitte – soweit verfügbar – den Einstellungen Ihres Browsers oder den Informationen des jeweiligen Drittanbieters.

## 5. Widerspruch / Einstellungen

Sie können Cookies in Ihren Browser-Einstellungen einschränken oder löschen. Bitte beachten Sie, dass die Website dann ggf. nicht mehr alle Funktionen vollständig bereitstellt.

Sofern wir einen **Cookie-Banner** einsetzen, können Sie dort Ihre Einwilligung erteilen oder widerrufen. Ein einmal erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen.

## 6. Kontakt

Bei Fragen zu dieser Cookie-Richtlinie wenden Sie sich an die oben genannten Kontaktdaten.

---

**Stand:** 6. April 2026
          `}
        </Markdown>
      </Prose>
    </Section>
  );
}
