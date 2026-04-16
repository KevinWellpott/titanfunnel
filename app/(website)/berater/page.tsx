import { generateMetadata } from "@/utils/metadata";
import { getLandingVideos } from "@/utils/supabase";
import { getSocialProofGalleryConfig } from "@/app/(website)/social-proof-gallery-data";
import { SocialProofGallery } from "@/components/landing/social-proof-gallery";
import { HeroLikeSection } from "@/components/landing/hero-like-section";
import { HeroBackdrop } from "@/components/landing/hero-backdrop";
import { HeroTrustStrip } from "@/components/landing/hero-trust-strip";
import { TestimonialLeft } from "@/components/landing/testimonial-left";
import { TestimonialRight } from "@/components/landing/testimonial-right";
import { Link } from "@/components/ui/link";
import { heroPrimaryCtaButtonProps } from "@/components/landing/hero-primary-cta-props";
import { generalConfig } from "@/config/general-config";
import { heroTrustConfig } from "@/app/(website)/hero-trust-data";
import { testimonialsData } from "@/app/(website)/testimonials-data";
import { testimonialSectionBackground } from "@/components/landing/testimonial-types";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = generateMetadata({
  title: "Für Berater & Consultants — 4 Systeme die skalieren",
  description:
    "Wie Berater aufhören Zeit gegen Geld zu tauschen — 4 Systeme für höhere Margen, mehr Renewals und weniger Admin.",
});

const processes = [
  {
    num: "01",
    title: "Das Proposal-System",
    saving: "Von 3h auf 30 Min pro Angebot",
    problem: "Jedes Angebot startet bei null: Struktur, Texte, Preisfindung — 2–4 Stunden Handarbeit. Am Ende sagst du trotzdem öfter als nötig zu schlechten Konditionen zu.",
    fix: "Templates, Preismodule, automatisches Tracking. Neue Anfrage → 30 Minuten zum fertigen Angebot. Signiert → automatischer Onboarding-Start.",
    metric: "5 Angebote/Monat × 2h gespart = 10h zurück.",
  },
  {
    num: "02",
    title: "Das Client Portal",
    saving: "~8h/Woche reaktive Kommunikation eliminiert",
    problem: "Deine Kunden wissen nicht wo ihre Deliverables und Entscheidungen sind — also fragen sie dich. E-Mail, WhatsApp, LinkedIn-DMs. Dieselbe Rückfrage drei Mal in Folge.",
    fix: "Ein zentraler Ort für alles: Projekt-Status, Deliverables, Entscheidungen, Kommunikation. Dein Kunde findet alles selbst. Kein Status-Call mehr.",
    metric: "6 Kunden × 1h Status-Call/Woche eliminiert = 6h zurück.",
  },
  {
    num: "03",
    title: "Das Renewal-System",
    saving: "80% Verlängerungsrate automatisch",
    problem: "Vertragsende kommt — und du merkst es 2 Wochen vorher. Kein Prozess, kein frühzeitiger Touch. Der Kunde hat schon jemanden angefragt.",
    fix: "Automatische Sequenz: 90 Tage vor Ende → Impact-Summary. 60 Tage → Erweiterungsangebot. 30 Tage → Renewal-Gespräch. Kein manuelles Nachfassen.",
    metric: "1 Retainer der nicht abspringt (3.000€/Monat) = +36.000€/Jahr.",
  },
  {
    num: "04",
    title: "Die Ascending Offer Structure",
    saving: "3–5x höherer LTV pro Klient",
    problem: "Deine Kunden kaufen ein Projekt — danach Stille. Kein klarer nächster Schritt, kein System das zur nächsten Stufe führt.",
    fix: "Projekt → Retainer → Premium-Advisory. Jede Stufe führt automatisch auf die nächste — durch eingebettete Angebote, nicht durch aktiven Pitch.",
    metric: "1 Projekt-Klient wird Retainer (2.500€/Monat) = +30.000€/Jahr.",
  },
];

export default async function BeraterPage() {
  const [videos, socialProofConfig] = await Promise.all([
    getLandingVideos(),
    getSocialProofGalleryConfig(),
  ]);

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
    return t.layout === "left"
      ? <TestimonialLeft key={key} {...props} />
      : <TestimonialRight key={key} {...props} />;
  });

  return (
    <Box as="main" minW="0">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        bg="#030308"
        color="white"
        minH="100svh"
        display="flex"
        flexDirection="column"
      >
        <HeroBackdrop />
        <Box
          position="relative"
          zIndex={1}
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt={{ base: "16", md: "20" }}
          pb={{ base: "10", md: "14" }}
        >
          <Container maxW="4xl" px={{ base: "4", md: "6" }}>
            <VStack gap={{ base: "5", md: "6" }} textAlign="center" align="center">

              {/* Badge */}
              <Box
                as="span"
                display="inline-block"
                px={{ base: "3", md: "4" }}
                py="1.5"
                borderRadius="full"
                borderWidth="1px"
                borderColor="rgba(255,255,255,0.14)"
                bg="rgba(255,255,255,0.05)"
                backdropFilter="blur(12px)"
                fontSize="xs"
                fontWeight="600"
                color="gray.300"
                letterSpacing="0.04em"
              >
                Für Berater &amp; Consultants · 90-Tage-Garantie
              </Box>

              {/* Headline */}
              <Heading
                as="h1"
                fontSize={{ base: "2.25rem", sm: "2.75rem", md: "3.5rem", lg: "4rem" }}
                fontWeight="800"
                lineHeight={{ base: "1.08", md: "1.05" }}
                letterSpacing="-0.04em"
                color="white"
                maxW="3xl"
                textAlign="center"
                textShadow="0 2px 48px rgba(132, 132, 255, 0.22)"
              >
                Mehr Kunden.{" "}
                <Box
                  as="span"
                  fontFamily="mono"
                  fontWeight="700"
                  fontSize="0.92em"
                  px={{ base: "1.5", md: "2" }}
                  py={{ base: "0.5", md: "1" }}
                  borderRadius="md"
                  color="#e0e7ff"
                  bg="rgba(132, 132, 255, 0.15)"
                  borderWidth="1px"
                  borderColor="rgba(132, 132, 255, 0.55)"
                  boxShadow="0 0 32px rgba(132, 132, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                  whiteSpace={{ base: "normal", sm: "nowrap" }}
                  display="inline-block"
                  verticalAlign="middle"
                >
                  Weniger Stunden.
                </Box>{" "}
                +10.000€/Monat mehr Umsatz.
              </Heading>

              {/* Outcome stats */}
              <HStack
                gap={{ base: "6", md: "12" }}
                justify="center"
                flexWrap="wrap"
                pt="1"
              >
                {[
                  { value: "+10.000€", label: "Mehrwert/Monat" },
                  { value: "20h", label: "Zurück pro Woche" },
                  { value: "90 Tage", label: "Garantiert" },
                ].map((stat) => (
                  <VStack key={stat.label} gap="0.5" align="center">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="white" lineHeight="1">
                      {stat.value}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="500" letterSpacing="0.03em">
                      {stat.label}
                    </Text>
                  </VStack>
                ))}
              </HStack>

              {/* Sub */}
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.400"
                lineHeight="1.55"
                maxW="2xl"
                fontWeight="400"
              >
                4 done-for-you Systeme: Proposal-Automation, Client Portal, Renewal-System &amp; Ascending Offer Structure. Wir bauen alles — du fokussierst dich auf die Beratung.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="700"
                color="gray.200"
                lineHeight="1.55"
              >
                Idiotengarantie: Wir erreichen deine Ziele in 90 Tagen – oder wir arbeiten kostenlos.
              </Text>

              <HeroTrustStrip config={heroTrustConfig} />

              <Link href={generalConfig.primaryCtaHref} style={{ marginTop: "0.25rem" }}>
                <Button {...heroPrimaryCtaButtonProps}>
                  Kostenloses Gespräch buchen
                  <ArrowRight size={20} weight="bold" aria-hidden />
                </Button>
              </Link>

            </VStack>
          </Container>
        </Box>
      </Box>

      {/* ── SYSTEMS CONTENT ─────────────────────────────────────── */}
      <Box bg={testimonialSectionBackground} color="gray.900">
        <Container maxW="1200px" px={{ base: "5", md: "8", lg: "10" }}>
          <Box py={{ base: "16", md: "24" }}>

            {/* Section header */}
            <VStack gap={{ base: "3", md: "4" }} textAlign="center" mb={{ base: "12", md: "16" }}>
              <Text
                fontSize="xs"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="gray.500"
              >
                Die 4 Systeme
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "1.75rem", md: "2.25rem" }}
                fontWeight="800"
                letterSpacing="-0.03em"
                lineHeight="1.15"
                color="gray.900"
                maxW="2xl"
                mx="auto"
              >
                Was Berater die skalieren systemisch anders machen
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                maxW="xl"
                mx="auto"
                lineHeight="1.6"
              >
                Keine Theorie. Nur die 4 konkreten Systeme hinter Beratern die
                mehr verdienen ohne mehr Stunden reinzustecken.
              </Text>
            </VStack>

            {/* Process cards */}
            <VStack gap={{ base: "6", md: "8" }}>
              {processes.map((p) => (
                <Box
                  key={p.num}
                  w="full"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)"
                  _hover={{ boxShadow: "0 4px 24px rgba(99,102,241,0.10)", borderColor: "purple.100" }}
                  transition="all 0.2s"
                >
                  {/* Card top bar */}
                  <Box
                    px={{ base: "6", md: "8" }}
                    pt={{ base: "6", md: "7" }}
                    pb={{ base: "4", md: "5" }}
                    borderBottom="1px solid"
                    borderColor="gray.50"
                  >
                    <HStack gap="4" align="center" flexWrap="wrap">
                      <Box
                        flexShrink={0}
                        w="9"
                        h="9"
                        borderRadius="lg"
                        bg="linear-gradient(135deg, #8484ff 0%, #6366f1 100%)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="xs"
                        fontWeight="800"
                        letterSpacing="0.02em"
                        fontFamily="mono"
                      >
                        {p.num}
                      </Box>
                      <Heading
                        as="h3"
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="800"
                        color="gray.900"
                        letterSpacing="-0.02em"
                        flex="1"
                      >
                        {p.title}
                      </Heading>
                      <Box
                        display="inline-flex"
                        alignItems="center"
                        gap="1.5"
                        px="3"
                        py="1"
                        borderRadius="full"
                        bg="green.50"
                        border="1px solid"
                        borderColor="green.100"
                        flexShrink={0}
                      >
                        <Box w="1.5" h="1.5" borderRadius="full" bg="green.500" />
                        <Text fontSize="xs" fontWeight="700" color="green.700">
                          {p.saving}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  {/* Card body */}
                  <Box
                    display={{ base: "flex", md: "grid" }}
                    flexDirection={{ base: "column", md: undefined }}
                    gridTemplateColumns={{ md: "1fr 1fr" }}
                    gap="0"
                  >
                    {/* Problem */}
                    <Box
                      px={{ base: "6", md: "8" }}
                      py={{ base: "5", md: "6" }}
                      borderRight={{ base: "none", md: "1px solid" }}
                      borderBottom={{ base: "1px solid", md: "none" }}
                      borderColor="gray.50"
                    >
                      <Text
                        fontSize="11px"
                        fontWeight="700"
                        letterSpacing="0.08em"
                        textTransform="uppercase"
                        color="red.500"
                        mb="2"
                      >
                        Das Problem
                      </Text>
                      <Text fontSize={{ base: "sm", md: "md" }} color="gray.700" lineHeight="1.65">
                        {p.problem}
                      </Text>
                    </Box>

                    {/* Outcome + Fix */}
                    <Box px={{ base: "6", md: "8" }} py={{ base: "5", md: "6" }} display="flex" flexDirection="column" gap="4">
                      {/* Metric — prominent first */}
                      <Box
                        px="4"
                        py="3.5"
                        borderRadius="xl"
                        bg="purple.50"
                        border="1px solid"
                        borderColor="purple.200"
                      >
                        <HStack gap="2" align="start">
                          <Text color="purple.500" fontWeight="800" fontSize="md" flexShrink={0} lineHeight="1.4">
                            →
                          </Text>
                          <Text fontSize={{ base: "md", md: "lg" }} color="purple.800" lineHeight="1.4" fontWeight="800">
                            {p.metric}
                          </Text>
                        </HStack>
                      </Box>
                      {/* Fix */}
                      <Box>
                        <Text
                          fontSize="11px"
                          fontWeight="700"
                          letterSpacing="0.08em"
                          textTransform="uppercase"
                          color="purple.500"
                          mb="2"
                        >
                          Die Lösung
                        </Text>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.65">
                          {p.fix}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </VStack>

          </Box>
        </Container>
      </Box>

      {/* ── ROI CTA ─────────────────────────────────────────────── */}
      <HeroLikeSection py={{ base: "16", md: "20" }} px={{ base: "4", md: "6" }}>
        <Container maxW="3xl" px="0">
          <VStack gap={{ base: "5", md: "6" }} textAlign="center" align="center">
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="gray.500"
            >
              Was das in Euro bedeutet
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              lineHeight="1.2"
              letterSpacing="-0.02em"
              color="white"
            >
              20h/Woche zurück + 1 Retainer-Conversion/Monat —{" "}
              <Box as="span" color="purple.300">
                das Offer zahlt sich im ersten Monat zurück
              </Box>
            </Heading>

            {/* ROI rows */}
            <Box
              w="full"
              maxW="xl"
              bg="rgba(255,255,255,0.04)"
              border="1px solid"
              borderColor="rgba(255,255,255,0.08)"
              borderRadius="xl"
              overflow="hidden"
            >
              {[
                { label: "20h/Woche Admin gespart × 125€/h × 4 Wochen", value: "+10.000€/Monat" },
                { label: "1 Klient verlängert der sonst abgesprungen wäre", value: "+3.000€" },
                { label: "1 Projekt-Klient wird Retainer (2.500€/Monat)", value: "+2.500€/Monat" },
              ].map((row, i, arr) => (
                <HStack
                  key={row.label}
                  justify="space-between"
                  px="5"
                  py="3.5"
                  borderBottom={i < arr.length - 1 ? "1px solid" : "none"}
                  borderColor="rgba(255,255,255,0.06)"
                  gap="4"
                  flexWrap="wrap"
                >
                  <Text fontSize="sm" color="gray.400" flex="1" textAlign="left">
                    {row.label}
                  </Text>
                  <Text fontSize="sm" fontWeight="700" color="white">
                    {row.value}
                  </Text>
                </HStack>
              ))}
              <Box px="5" py="4" bg="rgba(132,132,255,0.08)">
                <HStack justify="space-between" gap="4" flexWrap="wrap">
                  <Text fontSize="sm" fontWeight="700" color="gray.200" flex="1" textAlign="left">
                    Monatlicher Mehrwert
                  </Text>
                  <Text fontSize="xl" fontWeight="800" color="green.400">
                    +15.500€/Monat
                  </Text>
                </HStack>
              </Box>
            </Box>

            <Link href={generalConfig.primaryCtaHref}>
              <Button {...heroPrimaryCtaButtonProps}>
                Kostenloses Gespräch buchen
                <ArrowRight size={20} weight="bold" aria-hidden />
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.500">
              Im Worst Case nimmst du 2–3 Tipps mit. Kein Pitch, kein Druck.
            </Text>
          </VStack>
        </Container>
      </HeroLikeSection>

      {/* ── CASE STUDIES ────────────────────────────────────────── */}
      <Box bg={testimonialSectionBackground} color="gray.900">
        <Box py={{ base: "10", md: "14" }}>
          <VStack gap={{ base: "2", md: "3" }} textAlign="center" mb={{ base: "4", md: "6" }}>
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="gray.400"
            >
              Das sagen unsere Kunden
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              letterSpacing="-0.025em"
              color="gray.900"
            >
              Echte Ergebnisse. Keine Versprechen.
            </Heading>
          </VStack>
        </Box>
        {testimonialBlocks}
      </Box>

      {/* ── CHAT SCREENSHOTS ────────────────────────────────────── */}
      <SocialProofGallery
        title="Was unsere Kunden schreiben"
        subtitle="Echte Screenshots aus Chats & Community"
        images={socialProofConfig.images}
      />

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <HeroLikeSection py={{ base: "16", md: "24" }} px={{ base: "4", md: "6" }}>
        <Container maxW="3xl" px="0">
          <VStack gap={{ base: "6", md: "8" }} textAlign="center" align="center">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              fontWeight="800"
              lineHeight="1.1"
              letterSpacing="-0.02em"
              color="white"
            >
              Wie sieht das konkret
              <br />
              bei dir aus?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.200" lineHeight="relaxed" maxW="2xl">
              Lass uns in 20 Minuten durchgehen wo du gerade Zeit verlierst —
              und was das bei deinen Zahlen bedeutet.
            </Text>
            <Link href={generalConfig.primaryCtaHref}>
              <Button {...heroPrimaryCtaButtonProps}>
                Kostenloses Erstgespräch
                <ArrowRight size={20} weight="bold" aria-hidden />
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.400">
              Im Worst Case nimmst du 2–3 Tipps mit ✌️
            </Text>
          </VStack>
        </Container>
      </HeroLikeSection>

    </Box>
  );
}
