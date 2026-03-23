"use client";

import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroTrustStrip } from "./hero-trust-strip";
import { heroTrustConfig } from "@/app/(website)/hero-trust-data";
import { HeroBackdrop } from "./hero-backdrop";
import { heroPrimaryCtaButtonProps } from "./hero-primary-cta-props";
import { generalConfig } from "@/config/general-config";

/**
 * Startseiten-Hero – gleiche Copy & Reihenfolge, deutlich stärkeres visuelles Statement:
 * dunkles Mesh, Neon-Akzente.
 */
export function HomeHero() {
  return (
    <Box
      as="section"
      position="relative"
      zIndex={1}
      overflow="hidden"
      bg="#030308"
      color="white"
      minH="100svh"
      display="flex"
      flexDirection="column"
    >
      <HeroBackdrop />

      <Box position="relative" zIndex={1} display="flex" flexDirection="column" flex="1" minH="0">
        {/* Haupt-Content: zentriert im verbleibenden Raum, kompakter für 1 Viewport */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt={{ base: "16", md: "20" }}
          pb={{ base: "4", md: "6" }}
          minH="0"
        >
          <Container maxW="4xl" px={{ base: "4", md: "6" }}>
            <VStack gap={{ base: "4", md: "5" }} textAlign="center" align="center">
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
                textTransform="none"
              >
                Für Online-Unternehmer die nicht broke sind
              </Box>

              <Heading
                as="h1"
                fontSize={{ base: "1.75rem", sm: "2rem", md: "2.5rem", lg: "2.75rem", xl: "3rem" }}
                fontWeight="800"
                lineHeight={{ base: "1.12", md: "1.08" }}
                letterSpacing="-0.035em"
                color="white"
                maxW="4xl"
                textAlign="center"
                textShadow="0 2px 48px rgba(132, 132, 255, 0.22)"
              >
                Wir{" "}
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
                  programmieren
                </Box>{" "}
                damit Dein Business ohne mehr Arbeitszeit mehr Geld abwirft
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.400"
                lineHeight="1.55"
                maxW="3xl"
                fontWeight="400"
              >
                Deine Prozesse rauben dir Zeit und Geld. Wir programmieren dir eine maßgeschneiderte Software, die sie
                automatisiert – ob Fulfillment, Kundenbetreuung oder interne Abläufe. Mehr Umsatz, weniger Arbeit.
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
                  Ich will keine Zeit verschwenden
                  <ArrowRight size={20} weight="bold" aria-hidden />
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
