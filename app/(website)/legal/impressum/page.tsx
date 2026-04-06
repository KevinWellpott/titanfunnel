import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG / § 18 MStV – Impressum",
});

export default function ImpressumPage() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>
          {`
# Impressum

## Angaben gemäß § 5 TMG / § 18 MStV

**Simon Paweletz**  
Einzelunternehmer  
**TitanScale** (Geschäftsbezeichnung)  
**Unterm Dörgen 3c**  
**32549 Bad Oeynhausen**  
**Deutschland**

## Kontakt

**Telefon:** nicht angeboten  
**E-Mail:** simon@titandevelopment.de, kevin@titandevelopment.de  
**Website:** [https://www.titandevelopment.de](https://www.titandevelopment.de)

## Vertretungsberechtigt / Inhaber

Simon Paweletz (Inhaber des Einzelunternehmens)

## Umsatzsteuer-Identifikationsnummer

**USt-IdNr.:** [Platzhalter – eintragen, sobald vorliegend; falls nicht erteilt: „nicht erteilt“ oder entsprechenden Sachverhalt beschreiben]

## Steuerliche Angaben (Platzhalter)

**Steuernummer:** [Platzhalter – zuständiges Finanzamt und Steuernummer eintragen]  
**Wirtschafts-Identifikationsnummer:** [Platzhalter – falls vorhanden]

## Handelsregister

[Platzhalter – z. B. „Kein Eintrag im Handelsregister (Einzelunternehmen ohne Eintragungspflicht).“ oder Angaben zu einem etwaigen Eintrag]

## Tätigkeitsschwerpunkt

Entwicklung von Software und Erbringung zugehöriger IT-Dienstleistungen, insbesondere individuelle Softwareentwicklung und Beratung für Unternehmen (B2B).

## Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV

Simon Paweletz  
Unterm Dörgen 3c  
32549 Bad Oeynhausen  
Deutschland

## Streitbeilegung / Verbraucherschlichtung

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:  
[https://ec.europa.eu/consumers/odr/](https://ec.europa.eu/consumers/odr/)

Wir richten uns mit unseren Leistungen ausschließlich an Unternehmer im Sinne von § 14 BGB (B2B). Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder verpflichtet noch bereit.

## Haftung für Inhalte

Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.

## Haftung für Links

Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.

---

**Stand:** 6. April 2026
          `}
        </Markdown>
      </Prose>
    </Section>
  );
}
