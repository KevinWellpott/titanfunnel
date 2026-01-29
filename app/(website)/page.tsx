import { generateMetadata } from "@/utils/metadata";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Hero,
  ScalingGap,
  ValueStack,
  ProofRoi,
  RiskReversal,
  ClearPath,
} from "@/components/landing";

export const metadata = generateMetadata({
  title: "Dein Skalierungspartner",
  description:
    "Wir bauen dir kein Standard-Tool, sondern dein maßgeschneidertes Betriebssystem – dein Wissen und deine Prozesse als profitables, automatisiertes Asset.",
});

export default async function Page() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <ScalingGap />
      </ScrollReveal>
      <ScrollReveal>
        <ValueStack />
      </ScrollReveal>
      <ScrollReveal>
        <ProofRoi />
      </ScrollReveal>
      <ScrollReveal>
        <RiskReversal />
      </ScrollReveal>
      <ScrollReveal>
        <ClearPath />
      </ScrollReveal>
    </>
  );
}
