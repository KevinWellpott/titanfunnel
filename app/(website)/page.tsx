import { generateMetadata } from "@/utils/metadata";
import { getLandingVideos } from "@/utils/supabase";
import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "@/components/ui/link";
import { TestimonialLeft } from "@/components/landing/testimonial-left";
import { TestimonialRight } from "@/components/landing/testimonial-right";
import { testimonialsData } from "./testimonials-data";
import { getSocialProofGalleryConfig } from "./social-proof-gallery-data";
import { SocialProofGallery } from "@/components/landing/social-proof-gallery";
import { TeamIntroSection } from "@/components/landing/team-intro-section";
import { testimonialSectionBackground } from "@/components/landing/testimonial-types";
import { HomeHero } from "@/components/landing/home-hero";
import { HeroLikeSection } from "@/components/landing/hero-like-section";
import { teamIntroConfig } from "./team-intro-data";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { heroPrimaryCtaButtonProps } from "@/components/landing/hero-primary-cta-props";
import { generalConfig } from "@/config/general-config";

export const metadata = generateMetadata({
  title: "Dein Skalierungspartner",
  description:
    "Vorhersagbar & wiederholbar Neukunden gewinnen – ohne finanzielles Risiko. Wir räumen auf, was Business-Coaches kaputt gemacht haben.",
});

export default async function Page() {
  const videos = await getLandingVideos();
  const socialProofGalleryConfig = await getSocialProofGalleryConfig();

  const testimonialBlocks = testimonialsData.map((t, i) => {
    const fromSupabase =
      t.fallbackVideoSlot === "proof_roi"
        ? videos.proof_roi?.vimeoId
        : t.fallbackVideoSlot === "hero"
          ? videos.hero?.vimeoId
          : undefined;
    const vimeoId = t.vimeoId.trim() || fromSupabase;
    if (!vimeoId) return null;
    const props = {
      vimeoId,
      title: t.title,
      subtitle: t.subtitle,
      name: t.name,
      role: t.role,
      beforeText: t.beforeText,
      beforeValue: t.beforeValue,
      results: t.results,
      socialLinks: t.socialLinks,
      photoSrc: t.photoSrc,
      videoPosterSrc: t.videoPosterSrc,
    };
    const key = `testimonial-${i}-${t.name}`;
    return t.layout === "left" ? <TestimonialLeft key={key} {...props} /> : <TestimonialRight key={key} {...props} />;
  });

  return (
    <Box as="main" minW="0" bg={testimonialSectionBackground} color="gray.900">
      <HomeHero />
      {testimonialBlocks}
      <HeroLikeSection py={{ base: "12", md: "16" }} px={{ base: "4", md: "6" }}>
        <Container maxW="3xl" px="0">
          <VStack gap={{ base: "5", md: "6" }} textAlign="center" align="center">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="700"
              lineHeight="1.15"
              letterSpacing="-0.02em"
              color="white"
            >
              Du brauchst noch mehr Überzeugung?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.200" lineHeight="relaxed" maxW="2xl">
              Hab dir hier einfach mal den ein oder anderen Screenshot reingeklatscht
            </Text>
            <Link href={generalConfig.primaryCtaHref}>
              <Button {...heroPrimaryCtaButtonProps}>
                Kostenloses Erstgespräch
                <ArrowRight size={20} weight="bold" aria-hidden />
              </Button>
            </Link>
          </VStack>
        </Container>
      </HeroLikeSection>
      <SocialProofGallery
        title={socialProofGalleryConfig.title}
        subtitle={socialProofGalleryConfig.subtitle}
        images={socialProofGalleryConfig.images}
      />
      
      <HeroLikeSection py={{ base: "16", md: "24" }} px={{ base: "4", md: "6" }}>
        <Container maxW="3xl" px="0">
          <VStack gap={{ base: "6", md: "8" }} textAlign="center" align="center">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "5xl" }}
              fontWeight="700"
              lineHeight="1.1"
              letterSpacing="-0.02em"
              color="white"
            >
              Stop Doomscrolling!
              <br />
              Buch dir einen Call
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.200" lineHeight="relaxed" maxW="3xl">
              Mal schauen was wir für Dich tun können und wie wir dein Business skalieren können.
            </Text>
            <Link href={generalConfig.primaryCtaHref}>
              <Button {...heroPrimaryCtaButtonProps}>
                Einfach mal Call buchen
                <ArrowRight size={20} weight="bold" aria-hidden />
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.400">
              Vertrau mir Bruder
            </Text>
          </VStack>
        </Container>
      </HeroLikeSection>
      <TeamIntroSection
        headline={teamIntroConfig.headline}
        subline={teamIntroConfig.subline}
        founders={teamIntroConfig.founders}
      />
      <HeroLikeSection py={{ base: "16", md: "24" }} px={{ base: "4", md: "6" }}>
        <Container maxW="3xl" px="0">
          <VStack gap={{ base: "6", md: "8" }} textAlign="center" align="center">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "5xl" }}
              fontWeight="700"
              lineHeight="1.1"
              letterSpacing="-0.02em"
              color="white"
            >
              Jetzt oder nie!
              <br />
              Ich glaube das reicht mit Call to Actions
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.200" lineHeight="relaxed" maxW="3xl">
              Wenn du schon so weit gescrollt hast, dann kannst du auch einfach mal Call buchen.
            </Text>
            <Link href={generalConfig.primaryCtaHref}>
              <Button {...heroPrimaryCtaButtonProps}>
                Lass quatschen
                <ArrowRight size={20} weight="bold" aria-hidden />
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.400">
              Rein da!
            </Text>
          </VStack>
        </Container>
      </HeroLikeSection>
    </Box>
    
  );
}