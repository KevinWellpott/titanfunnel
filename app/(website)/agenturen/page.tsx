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
  title: "Für Agenturen — Die Fulfillment-Falle sprengen",
  description:
    "4 Prozesse die Agenturen in der Wachstumsphase bremsen — und wie du die Umsatzachterbahn stoppst.",
});

const processes = [
  {
    num: "01",
    title: "Das Performance Dashboard",
    saving: "~3h/Woche Reporting eliminiert",
    problem:
      "Jeden Monat dieselbe Prozedur: Daten aus 4 verschiedenen Tools zusammensuchen, in Excel aufbereiten, als PDF verschicken. Deine Kunden fragen trotzdem nach — weil sie den Report nicht finden oder nicht verstehen.",
    rootCause:
      "Kein Live-System das sich automatisch aktualisiert. Jeder Report ist manuell, jeder Report ist neu, jeder Report kostet Zeit die du nicht hast. 6 Kunden × 30 Minuten = 3h Woche rein für Dinge die dein Kunde eigentlich selbst checken sollte.",
    fix: "Ein Live-Dashboard pro Kunde das sich automatisch mit deinen Tools verbindet — Ad-Spend, ROAS, Follower-Wachstum, SEO-Rankings, Meilensteine. Dein Kunde sieht alles in Echtzeit. Du schreibst keinen Report mehr.",
    metric: "3h/Woche × 52 Wochen = 156h/Jahr. Das sind fast 4 Arbeitswochen zurück.",
  },
  {
    num: "02",
    title: "Das Onboarding-System",
    saving: "~2h/Neukunde + weniger Churn in Monat 1",
    problem:
      "Die ersten 4 Wochen mit einem neuen Kunden sind jedes Mal chaotisch: Zugänge manuell anfordern, Briefings nochmal erklären, Meilensteine im Kopf behalten. Und genau dann entscheiden die meisten ob sie bleiben oder gehen.",
    rootCause:
      "47% der Agenturkunden kündigen wegen Onboarding-Chaos und fehlender Transparenz — nicht wegen schlechter Ergebnisse. Das Problem ist nicht deine Dienstleistung, sondern der erste Eindruck den dein Prozess hinterlässt.",
    fix: "Automatisierter Onboarding-Flow: neuer Vertrag unterschrieben → Zugangsliste, Briefing-Fragen, Checklisten und Meilensteine für Woche 1/2/4/8 laufen automatisch. Du öffnest einen neuen Kunden — der Rest passiert ohne dich.",
    metric: "Sauberes Onboarding reduziert Early Churn direkt. 1 Kunde der 2 Monate länger bleibt = +5.000€ (bei 2.500€/Monat).",
  },
  {
    num: "03",
    title: "Das Async-Kommunikations-System",
    saving: "6–10h/Woche Status-Calls eliminiert",
    problem:
      "6 Kunden × 1h wöchentlicher Status-Call = 6h weg. Dazu WhatsApp, Slack und E-Mail parallel. Alles verteilt, nichts dokumentiert — nächste Woche fangen alle wieder von vorne an.",
    rootCause:
      "Kein zentraler Hub → Infos existieren in 5 verschiedenen Kanälen. Deine Kunden kommen zu dir weil sie keine andere Option haben. Der Status-Call dient nicht dem Fortschritt, sondern dem Informationsausgleich den ein gutes System überflüssig machen würde.",
    fix: "Zentraler Kommunikations-Hub wo alles lebt: Strategie, Briefings, Updates, Entscheidungen. Automatische wöchentliche Async-Updates ersetzen den Status-Call. Dein Kunde liest, kommentiert und ist informiert — ohne dass du einen Call brauchst.",
    metric: "6–10h/Woche zurück = genug Zeit für 2–3 neue Vertriebsgespräche. Das ist der direkte Hebel gegen die Umsatzachterbahn.",
  },
  {
    num: "04",
    title: "Die Fulfillment-Automatisierung",
    saving: "~4h/Woche recurring Tasks eliminiert",
    problem:
      "Jeden Monat dieselben Tasks manuell anlegen: Kampagnen-Optimierungen, Content-Planung, Reports, Analysen. Dem Team briefen was für welchen Kunden zu tun ist. Nachfragen was noch offen ist.",
    rootCause:
      "Die meiste Fulfillment-Zeit geht nicht für die kreative Arbeit drauf — sondern für den operativen Overhead drumherum. Kein System das recurring Tasks automatisch anlegt, dem richtigen Teammitglied zuweist und den Fortschritt trackt.",
    fix: "Monatsbeginn → alle Tasks für alle Kunden erscheinen automatisch, richtig zugewiesen, mit Deadline. Kein manuelles Anlegen, kein Briefing-Meeting für Standardaufgaben, kein \"haben wir das schon gemacht?\".",
    metric: "4h/Woche × 12 Monate = 208h/Jahr. Das ist die Zeit die du brauchst um die Umsatzachterbahn zu stoppen.",
  },
];

export default async function AgenturenPage() {
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
            <VStack gap={{ base: "4", md: "5" }} textAlign="center" align="center">

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
                📘 Gratis-Guide für Agenturen
              </Box>

              {/* Headline */}
              <Heading
                as="h1"
                fontSize={{ base: "1.75rem", sm: "2rem", md: "2.5rem", lg: "2.75rem" }}
                fontWeight="800"
                lineHeight={{ base: "1.12", md: "1.08" }}
                letterSpacing="-0.035em"
                color="white"
                maxW="4xl"
                textAlign="center"
                textShadow="0 2px 48px rgba(132, 132, 255, 0.22)"
              >
                Die{" "}
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
                  Fulfillment-Falle
                </Box>{" "}
                — warum Agenturen stagnieren und 4 Systeme die das aufbrechen
              </Heading>

              {/* Sub */}
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.400"
                lineHeight="1.55"
                maxW="3xl"
                fontWeight="400"
              >
                Du gewinnst neue Kunden — aber mit jedem neuen Kunden wächst der
                operative Druck stärker als der Umsatz. Das ist kein
                Disziplinproblem. Das ist ein Systemproblem. Hier sind die 4
                Stellen wo du täglich Zeit und Wachstum verlierst.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="700"
                color="gray.200"
                lineHeight="1.55"
                maxW="3xl"
              >
                Mit Idiotengarantie: Wir erreichen deine Ziele in 90 Tagen – oder wir arbeiten kostenlos.
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

      {/* ── FREEBIE CONTENT ─────────────────────────────────────── */}
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
                Was Agenturen die skalieren systemisch anders machen
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                maxW="xl"
                mx="auto"
                lineHeight="1.6"
              >
                Keine Theorie. Nur die 4 konkreten Systeme hinter Agenturen die
                trotz vollem Fulfillment noch Zeit für Vertrieb haben.
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
                    {/* Problem + Root Cause */}
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
                      <Text fontSize={{ base: "sm", md: "md" }} color="gray.700" lineHeight="1.65" mb="4">
                        {p.problem}
                      </Text>
                      <Text
                        fontSize="11px"
                        fontWeight="700"
                        letterSpacing="0.08em"
                        textTransform="uppercase"
                        color="gray.400"
                        mb="2"
                      >
                        Warum das passiert
                      </Text>
                      <Text fontSize="sm" color="gray.500" lineHeight="1.65">
                        {p.rootCause}
                      </Text>
                    </Box>

                    {/* Fix + Metric */}
                    <Box px={{ base: "6", md: "8" }} py={{ base: "5", md: "6" }}>
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
                      <Text fontSize={{ base: "sm", md: "md" }} color="gray.700" lineHeight="1.65" mb="5">
                        {p.fix}
                      </Text>
                      <Box
                        px="4"
                        py="3"
                        borderRadius="xl"
                        bg="purple.50"
                        border="1px solid"
                        borderColor="purple.100"
                      >
                        <HStack gap="2" align="start">
                          <Text color="purple.500" fontWeight="800" fontSize="sm" flexShrink={0}>
                            →
                          </Text>
                          <Text fontSize="sm" color="purple.700" lineHeight="1.55" fontWeight="600">
                            {p.metric}
                          </Text>
                        </HStack>
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
              10h/Woche zurückgewonnen + 1 Kunde der länger bleibt —{" "}
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
                { label: "10h/Woche zurückgewonnen × 100€/h × 4 Wochen", value: "+4.000€/Monat" },
                { label: "1 Kunde bleibt 2 Monate länger (kein Onboarding-Churn)", value: "+5.000€" },
                { label: "1 neuer Kunde durch zurückgewonnene Vertriebszeit", value: "+2.500€/Monat" },
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
                    +11.500€/Monat
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
              Lass uns in 20 Minuten durchgehen wo deine Agentur gerade Zeit
              verliert — und was das konkret in deinen Zahlen bedeutet.
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
