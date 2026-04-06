import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO",
});

export default function PrivacyPolicy() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>
          {`
# Datenschutzerklärung

## 1. Verantwortlicher

Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

Simon Paweletz  
Einzelunternehmer, Geschäftsbezeichnung TitanScale  
Unterm Dörgen 3c  
32549 Bad Oeynhausen  
Deutschland  

E-Mail: simon@titandevelopment.de, kevin@titandevelopment.de  
Website: [https://www.titandevelopment.de](https://www.titandevelopment.de)

## 2. Allgemeines zur Datenverarbeitung

Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, unserer Inhalte und Leistungen erforderlich ist oder Sie eingewilligt haben. Die Verarbeitung erfolgt im Einklang mit der DSGVO und dem Bundesdatenschutzgesetz (BDSG), soweit anwendbar.

## 3. Hosting (Vercel)

Diese Website wird bei **Vercel Inc.** (USA / globale Infrastruktur) gehostet. Beim Aufruf der Seite werden durch den Hosting-Dienst technisch erforderliche Informationen verarbeitet (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Datei, übertragene Datenmenge, HTTP-Status). Die Verarbeitung dient der Auslieferung der Website und der Sicherheit (z. B. Missbrauchserkennung).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Webauftritt).

Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: [https://vercel.com/legal/privacy-policy](https://vercel.com/legal/privacy-policy)

Sofern Daten in ein Drittland (z. B. USA) übermittelt werden, stützen wir uns – soweit erforderlich – auf die vom EU-Kommission festgestellten Angemessenheitsbeschlüsse und/oder die EU-Standardvertragsklauseln im Sinne von Art. 46 DSGVO.

## 4. Webanalyse (Vercel Analytics)

Wir setzen **Vercel Analytics** ein, um die Nutzung unserer Website in aggregierter Form auszuwerten (z. B. Seitenaufrufe, allgemeine Nutzungsmuster). Ziel ist die Verbesserung unseres Angebots. Nach Angaben von Vercel werden dabei keine personenbezogenen Cookies gesetzt; die Auswertung erfolgt weitgehend anonymisiert bzw. aggregiert.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Reichweitenmessung und Optimierung). Sofern Sie über unseren Cookie-/Einwilligungsbanner nur nach Einwilligung zustimmen, ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO.

Hinweise zu Vercel: [https://vercel.com/docs/analytics/privacy-policy](https://vercel.com/docs/analytics/privacy-policy)

## 5. Terminbuchung (Calendly)

Wenn Sie über unsere Website einen Termin bei uns buchen, nutzen wir den Dienst **Calendly LLC** (USA). Dabei werden die von Ihnen im Buchungsformular eingegebenen Daten (z. B. Name, E-Mail-Adresse, ggf. weitere von Ihnen angegebene Angaben sowie der gewählte Termin) verarbeitet, um den Termin zu vereinbahren und mit Ihnen zu kommunizieren.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragserfüllung), soweit die Buchung der Anbahnung oder Durchführung eines Vertrags dient; andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Terminkoordination).

Datenschutzerklärung Calendly: [https://calendly.com/privacy](https://calendly.com/privacy)

Eine Übermittlung in die USA kann erfolgen. Soweit erforderlich, stützen wir uns auf geeignete Garantien gemäß Art. 46 DSGVO (z. B. Standardvertragsklauseln).

## 6. Backend-Datenbank (Supabase)

Soweit unsere Website oder verbundene Anwendungen Daten in einer Datenbank bei **Supabase Inc.** speichern oder abrufen (z. B. zur Bereitstellung von Inhalten wie eingebundenen Videoinformationen oder anderen serverseitig verwalteten Daten), werden die hierfür erforderlichen Daten verarbeitet. Art und Umfang hängen von der konkreten Nutzung der Website ab.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technisch stabilem Betrieb) und/oder Art. 6 Abs. 1 lit. b DSGVO, soweit es um die Erfüllung eines Vertrags mit Ihnen geht.

Datenschutz bei Supabase: [https://supabase.com/privacy](https://supabase.com/privacy)

## 7. Vimeo (Videoeinbindungen)

Auf unserer Website können Videos der Plattform **Vimeo, LLC** (USA) eingebunden sein. Wenn Sie eine Seite mit Vimeo-Player aufrufen, kann Vimeo technische Daten verarbeiten (z. B. IP-Adresse, Geräteinformationen) und ggf. Cookies setzen. Wir haben keinen vollständigen Einblick in alle Verarbeitungen durch Vimeo.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an ansprechender Darstellung von Inhalten), ggf. ergänzend Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung über den Cookie-Banner erforderlich ist.

Datenschutz Vimeo: [https://vimeo.com/privacy](https://vimeo.com/privacy)

## 8. Optional: Weitere Analyse- oder Marketing-Tools

In unserem Projekt können zusätzlich **Google Analytics** und/oder **Meta Pixel** technisch angebunden sein. Diese werden **nur** aktiv, wenn dies in den Projekteinstellungen freigeschaltet ist **und** Sie der jeweiligen Kategorie in unserem Cookie-Banner zugestimmt haben. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO.

## 9. Kontakt per E-Mail

Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (E-Mail-Inhalt, Metadaten wie Absenderadresse und Zeitpunkt), um Ihre Anfrage zu bearbeiten.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) bzw. Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen).

## 10. Speicherdauer

Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Danach werden die Daten gelöscht oder anonymisiert, soweit keine Aufbewahrungspflichten entgegenstehen.

## 11. Ihre Rechte

Sie haben – unter den gesetzlichen Voraussetzungen – folgende Rechte:

- Auskunft über die Sie betreffenden gespeicherten Daten (Art. 15 DSGVO)  
- Berichtigung unrichtiger Daten (Art. 16 DSGVO)  
- Löschung (Art. 17 DSGVO)  
- Einschränkung der Verarbeitung (Art. 18 DSGVO)  
- Datenübertragbarkeit (Art. 20 DSGVO)  
- Widerspruch gegen die Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)  
- Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)

## 12. Beschwerderecht

Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.

Zuständige Aufsichtsbehörde für Nordrhein-Westfalen (beispielhaft, soweit zutreffend):  
**Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)**  
[https://www.ldi.nrw.de](https://www.ldi.nrw.de)

## 13. Pflicht zur Bereitstellung von Daten

Eine gesetzliche Pflicht zur Bereitstellung von Daten besteht in der Regel nicht. Für die Nutzung reiner Informationsseiten sind Sie nicht verpflichtet, Daten anzugeben. Für Terminbuchungen oder Vertragsabschlüsse können bestimmte Angaben erforderlich sein.

## 14. Änderungen

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen unserer Leistungen abbildet. Es gilt die jeweils veröffentlichte Fassung.

---

**Stand:** 6. April 2026
          `}
        </Markdown>
      </Prose>
    </Section>
  );
}
