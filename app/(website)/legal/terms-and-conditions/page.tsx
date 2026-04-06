import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "AGB für Softwareentwicklung und IT-Dienstleistungen im B2B-Bereich",
});

export default function TermsAndConditions() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>
          {`
# Allgemeine Geschäftsbedingungen (AGB)

## 1. Geltungsbereich und Vertragspartner

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge und sonstigen Leistungen zwischen

**Simon Paweletz**, Einzelunternehmer, Geschäftsbezeichnung **TitanScale**, Unterm Dörgen 3c, 32549 Bad Oeynhausen, Deutschland  
(nachfolgend „Auftragnehmer“)

und seinen **Unternehmer-Kunden** im Sinne von § 14 BGB (nachfolgend „Auftraggeber“).

(2) Unternehmer im Sinne dieser AGB sind natürliche oder juristische Personen oder rechtsfähige Personengesellschaften, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln.

(3) Diese AGB gelten ausschließlich. Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers erkennen wir nicht an, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.

(4) **Hinweis:** Es handelt sich um ein **B2B-Geschäft**. Ein gesetzliches Widerrufsrecht für Verbraucher nach den Vorschriften über Fernabsatzverträge kommt nicht zur Anwendung.

## 2. Vertragsgegenstand

(1) Gegenstand der Leistungen des Auftragnehmers ist die Erbringung von **Softwareentwicklung**, **individueller Programmierung**, **technischer Beratung** und **zugehörigen IT-Dienstleistungen** im Rahmen der jeweils vereinbarten Leistungsbeschreibung (Angebot, Projektvereinbarung, Statement of Work, Leistungsverzeichnis o. Ä.).

(2) Es werden – soweit nicht ausdrücklich anders vereinbart – **keine festen wirtschaftlichen Erfolge** (z. B. Umsatz-, Gewinn- oder ROI-Ziele) geschuldet. Maßgeblich ist die vereinbarte **Leistungserbringung** nach den anerkannten Regeln der Technik und der vertraglichen Spezifikation.

## 3. Angebote und Vertragsschluss

(1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern nicht ausdrücklich etwas anderes vereinbart ist.

(2) Ein Vertrag kommt durch schriftliche oder textformliche (E-Mail) Annahme des Angebots, durch Unterzeichnung einer Projektvereinbarung oder durch konkludentes Handeln zustande, soweit dies den Umständen nach üblich ist (z. B. Freigabe eines Konzepts bei klarer Beauftragung).

## 4. Mitwirkungspflichten des Auftraggebers

(1) Der Auftraggeber stellt dem Auftragnehmer alle für die Leistungserbringung erforderlichen Informationen, Zugänge, Testumgebungen, Inhalte und Freigaben rechtzeitig, vollständig und in der vereinbarten Form zur Verfügung.

(2) Verzögert sich die Leistung des Auftragnehmers, weil der Auftraggeber seinen Mitwirkungspflichten nicht nachkommt, verlängern sich Fristen angemessen; zusätzlich entstehende Aufwände können gesondert berechnet werden, sofern der Auftragnehmer den Mehraufwand nachweist und den Auftraggeber vorher in Textform hingewiesen hat, soweit zumutbar.

## 5. Änderungen und Zusatzleistungen

(1) Änderungen oder Erweiterungen des vereinbarten Leistungsumfangs bedürfen der **Abstimmung in Textform** (E-Mail genügt). Dabei werden Zeitplan und Vergütung angepasst, soweit erforderlich.

(2) Zusatzleistungen, die nicht im ursprünglichen Leistungsumfang enthalten sind, werden nach Aufwand oder nach gesonderter Vereinbarung vergütet.

## 6. Preise und Zahlungsbedingungen

(1) Es gelten die im Angebot oder der Projektvereinbarung genannten Preise. Alle Preise verstehen sich **zzgl. der gesetzlichen Umsatzsteuer**, sofern diese anfällt.

(2) Rechnungen sind – sofern nicht anders vereinbart – **innerhalb von 14 Tagen** nach Rechnungsdatum ohne Abzug fällig.

(3) Der Auftragnehmer ist berechtigt, bei größeren Projekten **Abschlagsrechnungen** zu stellen. Eine Aufrechnung durch den Auftraggeber ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.

(4) Bei Zahlungsverzug gelten die gesetzlichen Regelungen; der Auftragnehmer kann die Leistung nach Mahnung vorübergehend einstellen, soweit dies nach Treu und Glauben gerechtfertigt ist.

## 7. Termine und Leistungszeit

(1) Liefer- und Projekttermine sind nur verbindlich, wenn sie **ausdrücklich als verbindlich** vereinbart wurden.

(2) Höhere Gewalt und andere vom Auftragnehmer nicht zu vertretende Umstände verlängern Fristen angemessen.

## 8. Abnahme (Werkleistungen)

(1) Soweit eine Werkleistung vereinbart ist, ist der Auftraggeber zur **Abnahme** verpflichtet, sobald die vereinbarte Leistung erbracht ist. Die Abnahme gilt als erteilt, wenn der Auftraggeber die Leistung **zwei Wochen** nach Mitteilung der Fertigstellung nutzt oder daraufhin keine wesentlichen Mängel innerhalb dieser Frist in Textform gerügt hat, es sei denn, es liegt ein wesentlicher Mangel vor, der der Abnahme entgegensteht.

(2) Geringfügige, die Nutzung nicht wesentlich beeinträchtigende Mängel stehen der Abnahme nicht entgegen; der Auftragnehmer ist zur Beseitigung verpflichtet.

## 9. Gewährleistung

(1) Für Mängel an der Leistung gelten die gesetzlichen Gewährleistungsregeln für **Werkverträge** bzw. **Dienstverträge**, je nach vertraglicher Einordnung der konkreten Leistung, soweit nicht nachfolgend etwas Abweichendes vereinbart ist.

(2) Die Gewährleistungsfrist beträgt bei Unternehmern **12 Monate**, gerechnet ab Abnahme bzw. bei fortlaufenden Dienstleistungen ab Leistungsende des jeweiligen Teils, sofern nicht gesetzlich kürzere Fristen zwingend vorgehen.

(3) Der Auftraggeber hat Mängel **unverzüglich** in Textform anzuzeigen.

(4) Nachbesserung kann durch den Auftragnehmer nach Wahl des Auftragnehmers erfolgen (Nachbesserung oder Ersatzleistung), soweit zumutbar.

## 10. Haftung

(1) Der Auftragnehmer haftet **unbeschränkt** für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf **Vorsatz oder grober Fahrlässigkeit** beruhen.

(2) Bei einfach fahrlässiger Verletzung **wesentlicher Vertragspflichten** (Kardinalpflichten) ist die Haftung der Höhe nach begrenzt auf den **typischerweise vorhersehbaren Schaden**.

(3) Im Übrigen ist die Haftung bei einfacher Fahrlässigkeit **ausgeschlossen**.

(4) Die Haftung nach dem **Produkthaftungsgesetz** bleibt unberührt.

(5) **Keine Zusicherung einer Berufshaftpflichtversicherung:** Ein besonderes Haftungsversicherungsschutz oder eine Berufshaftpflichtversicherung des Auftragnehmers wird **nicht geschuldet** und **nicht zugesichert**, es sei denn, dies ist im Einzelfall ausdrücklich schriftlich vereinbart.

## 11. Geistiges Eigentum und Nutzungsrechte

(1) Soweit nicht anders vereinbart, bleiben bereits bestehende **Vorleistungen, Frameworks, Bibliotheken und allgemeine Know-how-Bausteine** des Auftragnehmers Eigentum des Auftragnehmers oder der jeweiligen Drittanbieter.

(2) Nutzungsrechte an spezifisch für den Auftraggeber erstellten Ergebnissen werden **erst mit vollständiger Zahlung** der vereinbarten Vergütung eingeräumt, soweit nicht ausdrücklich anders vereinbart. Umfang (exklusiv/nicht exklusiv, Zeit, Raum) richtet nach der konkreten Vereinbarung.

(3) Open-Source-Komponenten können unter den jeweiligen Lizenzbedingungen stehen; der Auftraggeber wird darauf hingewiesen, soweit für das Projekt relevant.

## 12. Vertraulichkeit

Die Parteien verpflichten sich, vertrauliche Informationen der jeweils anderen Partei geheim zu halten und nur zur Vertragserfüllung zu verwenden, soweit keine gesetzliche Offenlegungspflicht besteht.

## 13. Unterauftragnehmer

Der Auftragnehmer darf zur Erfüllung des Vertrags **Unterauftragnehmer** einsetzen, sofern nicht ausdrücklich etwas anderes vereinbart ist. Der Auftragnehmer bleibt für deren Handeln verantwortlich.

## 14. Beendigung

(1) Dauerschuldverhältnisse können – soweit vereinbart – unter Einhaltung der vereinbarten Kündigungsfristen gekündigt werden.

(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

## 15. Schlussbestimmungen

(1) Es gilt das Recht der **Bundesrepublik Deutschland** unter Ausschluss des UN-Kaufrechts (CISG).

(2) **Gerichtsstand** für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist – soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist – der **Sitz des Auftragnehmers** (Bad Oeynhausen).

(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.

---

**Stand:** 6. April 2026  
**Kontakt:** simon@titandevelopment.de, kevin@titandevelopment.de
          `}
        </Markdown>
      </Prose>
    </Section>
  );
}
