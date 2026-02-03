import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";

export const metadata = generateMetadata({
  title: "Impressum",
  description:
    "Impressum und Angaben gemäß § 5 TMG – Kevin Wellpott & Simon Paweletz GbR (titan.)",
});

const IMPRESSUM_MARKDOWN = `
## Angaben gemäß § 5 TMG

**Kevin Wellpott & Simon Paweletz GbR**  
Wilhelmstraße 8  
32602 Vlotho

---

## Kontakt

- **Telefon:** [+49 160 7760350](tel:+491607760350)
- **E-Mail:** [info@titanagency.de](mailto:info@titanagency.de)

---

## Verantwortlich für den Inhalt

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:

Kevin Wellpott & Simon Paweletz  
Wilhelmstraße 8  
32602 Vlotho

---

**Zuletzt aktualisiert:** 11.03.25
`;

export default function ImpressumPage() {
  return (
    <Section>
      <Prose mx="auto" size="lg" mt="28">
        <Markdown>{IMPRESSUM_MARKDOWN}</Markdown>
      </Prose>
    </Section>
  );
}
