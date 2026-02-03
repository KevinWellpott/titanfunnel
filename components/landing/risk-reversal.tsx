"use client";

import {
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { glassCardStyles } from "./glass-card-styles";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "@phosphor-icons/react";

const steps = [
  {
    id: 1,
    title: "Architektur-Gespräch",
    duration: "30 Min",
    description:
      "Am Ende hast du Klarheit: Wie dein System aussehen wird, was es dir bringt und wann es steht.",
    details: [
      "Klarer Fahrplan für dein maßgeschneidertes System",
      "Konkrete Erwartung an Zeitersparnis & ROI",
      "Transparente Timeline und Investment",
    ],
  },
  {
    id: 2,
    title: "System Development",
    duration: "14-30 Tage",
    description:
      "Outcome: Ein lauffähiges System, das deine Prozesse bündelt und dein Team entlastet.",
    details: [
      "Ein System, das zu deinem Business passt",
      "Alle relevanten Module integriert und getestet",
      "Bereit für Go-Live ohne böse Überraschungen",
    ],
  },
  {
    id: 3,
    title: "Go-Live & Setup",
    duration: "3-5 Tage",
    description:
      "Outcome: Dein System läuft, dein Team kann damit arbeiten, die Migration ist durch.",
    details: [
      "System live – pünktlich wie vereinbart",
      "Team geschult und sicher im Umgang",
      "Daten übernommen, du bist sofort produktiv",
    ],
  },
  {
    id: 4,
    title: "Growth Optimierung",
    duration: "3 Monate",
    description:
      "Outcome: Mehr Umsatz, weniger Admin-Chaos – wir optimieren so lange, bis dein ROI stimmt.",
    details: [
      "Messbare Verbesserung von Conversion & Performance",
      "Weniger Zeit für Admin, mehr fürs Kerngeschäft",
      "ROI erreicht – erst dann ist unsere Arbeit getan",
    ],
  },
];

function RiskReversal() {
  return (
    <Section size="lg" color="white" py="0">
      <Container maxW="6xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "10", md: "16" }} w="full" minW="0">
          <VStack
            gap={{ base: "3", md: "4" }}
            textAlign="center"
            maxW="4xl"
            px={{ base: "2", md: "0" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
            >
              So sieht eine Zusammenarbeit mit uns aus
      
            </Heading>
            <Text
              color="gray.400"
              fontSize="lg"
              maxW="2xl"
              lineHeight="relaxed"
              fontWeight="400"
            >
              Von der Klarheit bis zum messbaren Ergebnis – in 4 Schritten zu deinem Outcome
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: "4", md: "6" }}
            w="full"
            maxW="5xl"
          >
            {steps.map((step) => (
                <Box
                  key={step.id}
                  borderRadius="xl"
                  p={{ base: "4", md: "6" }}
                  {...glassCardStyles}
                >
                  <VStack align="start" gap="4">
                    <HStack gap="3">
                      <Box
                        w="10"
                        h="10"
                        bg="blue.500"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight="700"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        {step.id}
                      </Box>
                      <HStack gap="2" flexWrap="wrap">
                        <Heading
                          as="h3"
                          fontSize={{ base: "md", md: "lg" }}
                          fontWeight="700"
                          color="white"
                        >
                          {step.title}
                        </Heading>
                        <Text
                          fontSize="xs"
                          color="gray.500"
                          fontWeight="600"
                          bg="gray.700"
                          px="2"
                          py="1"
                          borderRadius="md"
                        >
                          {step.duration}
                        </Text>
                      </HStack>
                    </HStack>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.400"
                      lineHeight="relaxed"
                    >
                      {step.description}
                    </Text>
                    <VStack align="start" gap="2" w="full">
                      {step.details.map((detail, i) => (
                        <HStack key={i} gap="2" align="start">
                          <Box
                            w="2"
                            h="2"
                            bg="blue.400"
                            borderRadius="full"
                            mt="2"
                            flexShrink="0"
                          />
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.300"
                            lineHeight="1.5"
                          >
                            {detail}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
            ))}
          </SimpleGrid>

   
        </VStack>
      </Container>
    </Section>
  );
}

export { RiskReversal };
