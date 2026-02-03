import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der Kevin Wellpott & Simon Paweletz GbR (titan.)",
});

const AGB_MARKDOWN = `
**Kevin Wellpott & Simon Paweletz GbR**  
Wilhelmstraße 8, 32602 Vlotho  
+49 160 7760350 | info@titanagency.de

Im folgenden Abschnitt werden die allgemeinen Geschäftsbedingungen der Kevin Wellpott & Simon Paweletz GbR dargestellt.

---

## §1 Geltungsbereich der Bedingungen

§1.1 Alle Angebote, Leistungen und Lieferungen der Kevin Wellpott & Simon Paweletz GbR an den Auftraggeber basieren ausschließlich auf diesen Geschäftsbedingungen.

§1.2 Sie gelten auch ohne ausdrücklichen Hinweis bei zukünftigen Geschäftsbeziehungen zwischen Auftraggeber und Auftragnehmer.

§1.3 Abweichungen sind nur dann gültig, wenn diese schriftlich durch die Kevin Wellpott & Simon Paweletz GbR genehmigt wurden.

---

## §2 Geheimhaltung

Kevin Wellpott & Simon Paweletz GbR ist aller ihr gegenüber vermittelten Informationen des Kunden zur Geheimhaltung verpflichtet.

---

## §3 Urheberrecht

§3.1 Alle durch die Kevin Wellpott & Simon Paweletz GbR erbrachten Leistungen, Skizzen, Dokumente und Entwürfe unterliegen dem deutschen Urheberrechtsgesetz (UrhG).

§3.2 Verstößt der Auftraggeber gegen Urheberrechte Kevin Wellpott & Simon Paweletz GbR, verwirkt er dieser gegenüber eine Vertragsstrafe in dreifacher Höhe der für diesen Auftrag vereinbarten Vergütung.

---

## §4 Eigentumsrechte

Die Eigentumsrechte an erbrachten Leistungen, Skizzen und Entwürfen werden nicht auf den Kunden der Kevin Wellpott & Simon Paweletz GbR übertragen. Stattdessen erhält dieser lediglich die Nutzungsrechte.

---

## §5 Nutzungsrechte

§5.1 Der Auftraggeber erhält die Nutzungsrechte nach erbrachter Leistung und vollständiger Zahlung der vereinbarten Vergütung.

§5.2 Eine Weitergabe der Nutzungsrechte an Dritte ist grundsätzlich unzulässig. Es sei denn, es wurde dem Auftraggeber eine ausdrückliche Genehmigung dafür erteilt.

---

## §6 Erwähnungsanspruch

Der Kevin Wellpott & Simon Paweletz GbR ist es gestattet, sich als Urheber auf erstellten Projekten, ohne ausdrückliche Genehmigung des Kunden, auszuweisen. Das ist grundsätzlich für Print- und Webmedien vorgesehen.

---

## §7 Kündigung oder Kundenrücktritt

§7.1 Zeitlich begrenzte Verträge können, ohne Angabe von Gründen, bis 14 Tage vor Ablauf des Vertrages gekündigt werden. Die Kündigung bedarf der Schriftform. Eine mündliche Kündigung ist unwirksam.

§7.2 Wird der Vertrag nicht gekündigt, verlängert er sich automatisch, um die zuvor vereinbarte Laufzeit.

---

## §8 Angebote

Von der Kevin Wellpott & Simon Paweletz GbR ausgestellte Angebote sind ab Angebotserstellung 14 Tage gültig. Danach verfällt der Anspruch auf die darin enthaltenen Preise.

---

## §9 Vorschussanspruch

Bei Projekten, die es erfordern im Vorfeld Ausgaben zu tätigen, ist es der Kevin Wellpott & Simon Paweletz GbR gestattet, beim Auftraggeber eine angebrachte Vorabvergütung zu verlangen. Die Höhe dieser Vorabvergütung errechnet sich aus den individuellen Kosten, die bei dem jeweiligen Projekt anfallen.

---

## §10 Leistungsdokumentation

Die Kevin Wellpott & Simon Paweletz GbR bewahrt die Projektunterlagen nach Beendigung des Auftrages, oder Auslauf eines zeitlich begrenzten Vertrages für drei Monate kostenfrei auf. Nach dieser Frist ist die Kevin Wellpott & Simon Paweletz GbR dazu befähigt, die Dokumente ohne Mitteilung an den Auftraggeber zu vernichten.

---

## §11 Datenschutz

§11.1 Daten, die im Zusammenhang mit der Ausführung eines Projektes für den Auftraggeber stehen, werden für diesen Zweck gespeichert.

§11.2 Dabei wird auf das Bundesdatenschutzgesetz (BDSG) und die EU-Datenschutzgrundverordnung (DSGVO) Bezug genommen.

§11.3 Zur Speicherung von Projektdateien werden zum Teil Dienste der Google Inc. beansprucht. Somit gelten zu diesen Allgemeinen Geschäftsbedingungen die AGB und die Datenschutzrichtlinien der Google Inc.

§11.4 Die Kevin Wellpott & Simon Paweletz GbR stellt ihren Kunden für einige Dienstleistungen einen Vertrag zur Auftragsverarbeitung (AV) zur Verfügung.

---

## §12 Haftung

§12.1 Die Kevin Wellpott & Simon Paweletz GbR ist nicht für vom Auftraggeber vermittelte Inhalte verantwortlich.

§12.2 Ist die Kevin Wellpott & Simon Paweletz GbR zur Erfüllung von Verträgen auf vom Auftraggeber empfohlene Dritte angewiesen, so wird für diese die Haftung nicht übernommen.

§12.3 Hat der Auftraggeber eine Zustimmung der betroffenen Projektmaterialien abgegeben, so übernimmt er die volle Verantwortung.

---

## §13 Zustandekommen von Verträgen

§13.1 Der Vertragsschluss zwischen der Kevin Wellpott & Simon Paweletz GbR und dem Auftraggeber kann schriftlich oder fernmündlich (Videochat, Telefon, etc.) erfolgen.

§13.2 Fernmündlich kommen Verträge zwischen der Kevin Wellpott & Simon Paweletz GbR und dem Kunden durch übereinstimmende Willenserklärungen zustande.

§13.3 Sofern kein Nachbetreuungspaket vereinbart wurde, das Projekt abgeschlossen ist und dennoch weitere technische Änderungswünsche aufkommen, berechnet sich die Kevin Wellpott & Simon Paweletz GbR einen Stundensatz von 140,00€ netto für weitere Aufwendungen.

---

## §14 Schlussbestimmungen

§14.1 Für diese Geschäftsbedingungen und alle Rechtsbeziehungen zwischen titan (Kevin Wellpott & Simon Paweletz GbR) und dem Auftraggeber gilt das Recht der Bundesrepublik Deutschland. Der Gerichtsstand für Streitigkeiten zwischen Auftraggeber und Auftragnehmer ist soweit möglich Bielefeld.

§14.2 Sollte eine Bestimmung dieser Allgemeinen Geschäftsbedingungen unwirksam sein, so bleiben diese im Übrigen wirksam.

---

**Zuletzt aktualisiert:** 11.03.25
`;

export default function TermsAndConditions() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>{AGB_MARKDOWN}</Markdown>
      </Prose>
    </Section>
  );
}
