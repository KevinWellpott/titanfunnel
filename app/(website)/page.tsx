import { generateMetadata } from "@/utils/metadata";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getLandingVideos } from "@/utils/supabase";
import {
  Hero,
  ScalingGap,
  ValueStack,
  ProofRoi,
  RiskReversal,
  ClearPath,
  RoiCalculator,
} from "@/components/landing";

export const metadata = generateMetadata({
  title: "Dein Skalierungspartner",
  description:
    "Wir bauen dir kein Standard-Tool, sondern dein maßgeschneidertes Betriebssystem – dein Wissen und deine Prozesse als profitables, automatisiertes Asset.",
});

export default async function Page() {
  const videos = await getLandingVideos();

  return (
    <>
      <Hero video={videos.hero} />
      <ScrollReveal>
        <ScalingGap />
      </ScrollReveal>
      
      <ScrollReveal>
        <ProofRoi video={videos.proof_roi} />
      </ScrollReveal>
      <RoiCalculator />
      <ScrollReveal>
        <RiskReversal />
      </ScrollReveal>
      <ScrollReveal>
        <ClearPath />
      </ScrollReveal>
    </>
  );
}
