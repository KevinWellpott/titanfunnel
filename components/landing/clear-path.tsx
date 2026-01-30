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
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ArrowRight, ShieldCheck, Clock, ChartLineUp } from "@phosphor-icons/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

const guarantees = [
  {
    number: "01",
    title: "Die Go-Live-Garantie",
    subtitle: "„Dein System, pünktlich fertig.",
    body: "Wir liefern dein maßgeschneidertes Skalierungs-System innerhalb der vereinbarten Frist (14 bzw. 30 Werktage). Punkt. Sollten wir zu spät sein, erlassen wir dir automatisch 50% des Gesamtpreises. Keine Diskussion, keine Ausreden. Unsere Planung muss stimmen – sonst zahlen wir dafür.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Die Zeitersparnis-Garantie",
    subtitle: "„Wir kaufen dir deine Zeit zurück.",
    body: "Das Kernversprechen ist deine gewonnene Lebenszeit. Wir bleiben so lange an deiner Seite und optimieren, bis das System dir nachweislich mindestens 10 Stunden administrative Arbeit pro Woche einspart. Du trackst deine gesparte Zeit, wir passen an, bis das Ziel erreicht ist. Wir verdienen unseren Erfolg erst mit deinem.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Die ROI-Garantie",
    subtitle: "„Dein Investment zahlt sich aus – oder wir sind weiter für dich da.",
    body: "Unser Ziel ist dein finanzieller und zeitlicher Gewinn. In der 3-monatigen Growth-Phase nach dem Launch arbeiten wir aktiv mit dir daran, das System profitabel zu machen. Wir analysieren Daten, optimieren Conversion-Punkte und justieren, bis du den vollen Nutzen ziehst. Erst wenn du zufrieden bist, ist unsere Arbeit wirklich getan. Kein „Liefern und Verschwinden.",
    icon: ChartLineUp,
  },
];

export function ClearPath() {
  return (
    <Section size="lg"  color="white" py="0" id="clear-path">
      <Container maxW="6xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "10", md: "16" }} w="full" minW="0">
          {/* Clean Header */}
          <MotionVStack
            gap={{ base: "3", md: "4" }}
            textAlign="center"
            maxW="4xl"
            px={{ base: "2", md: "0" }}
            w="full"
            minW="0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
            >
              Unser Risiko. Dein Gewinn.
            
            </Heading>
            
            <Text 
              color="gray.400" 
              fontSize="lg" 
              maxW="3xl" 
              lineHeight="relaxed"
              fontWeight="400"
            >
              Wir übernehmen 100% des Risikos - du bekommst garantierte Ergebnisse
            </Text>
          </MotionVStack>

          {/* 3 Clean Guarantees */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "8" }} w="full" maxW="6xl" minW="0">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <MotionBox
                  key={g.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.700"
                    borderRadius="xl"
                    p={{ base: "4", md: "6" }}
                    h="full"
                    minW="0"
                    display="flex"
                    flexDirection="column"
                    _hover={{
                      borderColor: "gray.600",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                    }}
                    transition="transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <VStack align="start" gap="4" flex="1">
                      {/* Icon & Number */}
                      <HStack gap="3" align="center">
                        <Box
                          w="10"
                          h="10"
                          bg="blue.500/10"
                          border="1px solid"
                          borderColor="blue.500/20"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          color="blue.400"
                        >
                          <Icon size={20} weight="duotone" />
                        </Box>
                        <Text fontSize="sm" fontWeight="700" color="blue.400">
                          {g.number}
                        </Text>
                      </HStack>

                      {/* Title */}
                      <Heading 
                        as="h3" 
                        fontSize={{ base: "md", md: "lg" }} 
                        fontWeight="700" 
                        color="white"
                        lineHeight="tight"
                      >
                        {g.title}
                      </Heading>

                      {/* Subtitle */}
                      <Text 
                        fontSize={{ base: "xs", md: "sm" }} 
                        color="gray.400" 
                        fontStyle="italic"
                      >
                        {g.subtitle}
                      </Text>

                      {/* Key Promise - Condensed */}
                      <Text 
                        fontSize={{ base: "xs", md: "sm" }} 
                        color="gray.300" 
                        lineHeight="1.5"
                      >
                        {g.body.split('.')[0]}.
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              );
            })}
          </SimpleGrid>

          {/* Simple Comparison */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            w="full"
            maxW="5xl"
          >
            <VStack gap={{ base: "5", md: "8" }} w="full" minW="0">
              <Heading 
                as="h3" 
                fontSize={{ base: "lg", md: "xl" }} 
                fontWeight="700" 
                color="white" 
                textAlign="center"
              >
                Das bedeutet für dich
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "4", md: "6" }} w="full" minW="0">
                {/* With Us */}
                <Box
                  bg="gray.800"
                  border="2px solid"
                  borderColor="blue.500/30"
                  borderRadius="xl"
                  p={{ base: "4", md: "6" }}
                  position="relative"
                  minW="0"
                >
                  <Box
                    position="absolute"
                    top="-1"
                    left="6"
                    bg="blue.500"
                    color="white"
                    px="3"
                    py="1"
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="700"
                  >
                    Mit uns
                  </Box>
                  
                  <VStack align="start" gap={{ base: "3", md: "4" }} mt="2" w="full" minW="0">
                    <Heading as="h4" fontSize={{ base: "md", md: "lg" }} fontWeight="700" color="white">
                      100% Risikofreier Erfolg
                    </Heading>
                    <VStack align="start" gap="2" w="full">
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="blue.400" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300">Pünktlich oder 50% Rückerstattung</Text>
                      </HStack>
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="blue.400" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300">10+ Stunden/Woche gespart - garantiert</Text>
                      </HStack>
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="blue.400" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300">3 Monate aktiver Success Support</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>

                {/* Without Us */}
                <Box
                  bg="gray.850"
                  border="1px solid"
                  borderColor="gray.700"
                  borderRadius="xl"
                  p={{ base: "4", md: "6" }}
                  position="relative"
                  minW="0"
                >
                  <Box
                    position="absolute"
                    top="-1"
                    left="6"
                    bg="gray.700"
                    color="gray.400"
                    px="3"
                    py="1"
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="700"
                  >
                    Status Quo
                  </Box>
                  
                  <VStack align="start" gap="4" mt="2">
                    <Heading as="h4" size="md" fontWeight="600" color="gray.400" lineHeight="tight">
                      Du trägst weiter das Risiko
                    </Heading>
                    <VStack align="start" gap="2" w="full">
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="gray.600" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Zeit verbrennt in Admin-Arbeit</Text>
                      </HStack>
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="gray.600" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Leads gehen verloren</Text>
                      </HStack>
                      <HStack gap={{ base: "2", md: "3" }} align="start">
                        <Box w="2" h="2" bg="gray.600" borderRadius="full" mt="1.5" flexShrink="0" />
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Umsatz bleibt gedeckelt</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>
              </SimpleGrid>

              <Text 
                color="gray.400" 
                fontSize={{ base: "md", md: "lg" }} 
                fontWeight="600" 
                textAlign="center"
                maxW="2xl"
                px={{ base: "2", md: "0" }}
              >
                Die einfachste Entscheidung: Lass uns das Risiko tragen
              </Text>
            </VStack>
          </MotionBox>

          {/* Clean CTA */}
          <MotionBox
            w="full"
            maxW="4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              bg="gray.800"
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
              p={{ base: "5", md: "8" }}
              textAlign="center"
            >
              <VStack gap={{ base: "4", md: "6" }}>
                <VStack gap={{ base: "2", md: "3" }} px={{ base: "2", md: "0" }}>
                  <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="white">
                    Bereit für den risikofreien Weg?
                  </Heading>
                  <Text color="white" fontSize={{ base: "sm", md: "md" }} maxW="2xl">
                    Kostenloses Architektur-Gespräch - in 30 Min klären wir alles
                  </Text>
                </VStack>

                <Link href="#os-architektur-gespraech" w="full" maxW="md">
                  <Button
                    w="full"
                    size={{ base: "md", md: "lg" }}
                    gap="2"
                    bg="#01ADD5"
                    color="white"
                    px={{ base: "5", md: "8" }}
                    py={{ base: "3", md: "4" }}
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="600"
                    borderRadius="lg"
                    whiteSpace="normal"
                    _hover={{
                      boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Architektur-Gespräch buchen
                    <ArrowRight size={16} />
                  </Button>
                </Link>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  Keine Verkaufsshow. Kein Druck. Nur Klarheit.
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Section>
  );
}