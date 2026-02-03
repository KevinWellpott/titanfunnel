import { generateMetadata } from "@/utils/metadata";
import { getLandingVideos } from "@/utils/supabase";
import {
  Hero,
  ScalingGap,
  ValueStack,
  ProofRoi,
  RiskReversal,
  ClearPath,
  RoiCalculator,
  Faq,
} from "@/components/landing";

export const metadata = generateMetadata({
  title: "Dein Skalierungspartner",
  description:
    "Wir bauen dir kein Standard-Tool, sondern dein maßgeschneidertes Betriebssystem – dein Wissen und deine Prozesse als profitables, automatisiertes Asset.",
});

/** Landing-Videos aus der DB werden alle 60 Sekunden neu geladen (ISR). */
export const revalidate = 60;

export default async function Page() {
  const videos = await getLandingVideos();

  return (
    <>
      <Hero video={videos.hero} />
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          opacity: 0.2,
        }}
        aria-hidden
      />
      <ScalingGap />
      <ProofRoi video={videos.proof_roi} />
      <RoiCalculator />
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          opacity: 0.2,
        }}
        aria-hidden
      />
      <RiskReversal />
      <ClearPath />
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          opacity: 0.2,
        }}
        aria-hidden
      />
      <Faq />
    </>
  );
}
