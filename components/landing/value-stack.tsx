"use client";

import {
  Heading,
  Text,
  Box,
  VStack,
  Container,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import {
  UserCircle,
  ChartLine,
  CurrencyDollar,
  Wrench,
  Stack as StackIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

// Pain Points Data mit Gradients
const painPoints = [
  {
    icon: UserCircle,
    title: "Identity Crisis",
    problem: "Dein Angebot ist ein Flickenteppich",
    hueA: 340,
    hueB: 10, // Red gradient
  },
  {
    icon: ChartLine,
    title: "Black Box Business", 
    problem: "Du fliegst blind ohne Daten",
    hueA: 20,
    hueB: 40, // Orange gradient
  },
  {
    icon: CurrencyDollar,
    title: "Revenue Leak",
    problem: "Umsatz versickert täglich",
    hueA: 60,
    hueB: 90, // Yellow gradient
  },
  {
    icon: Wrench,
    title: "Founder Bottleneck",
    problem: "Du bist der Flaschenhals",
    hueA: 260,
    hueB: 290, // Purple gradient
  },
  {
    icon: StackIcon,
    title: "Tool Chaos",
    problem: "8 Tools, null Integration",
    hueA: 180,
    hueB: 220, // Cyan gradient
  },
];

const hue = (h: number) => `hsl(${h}, 70%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    opacity: 1,
    transition: {
      type: "spring" as const,
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const PainCard = ({ pain, index }: { pain: any; index: number }) => {
  const background = `linear-gradient(306deg, ${hue(pain.hueA)}, ${hue(pain.hueB)})`;
  const IconComponent = pain.icon;
  
  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: "20px",
        marginBottom: "-120px",
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Background Splash */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />
      
      {/* Card */}
      <motion.div
        variants={cardVariants}
        style={{
          width: "100%",
          maxWidth: "350px",
          minWidth: "280px",
          minHeight: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          background: "#1A1A1A",
          boxShadow: "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
          transformOrigin: "10% 60%",
          color: "white",
          padding: "clamp(1rem, 5vw, 2rem)",
          gap: "clamp(0.75rem, 3vw, 1.5rem)",
        }}
      >
        <IconComponent size={48} color="white" style={{ flexShrink: 0 }} />
        
        <VStack gap={{ base: "2", md: "3" }} textAlign="center" px="1" w="full" minW="0">
          <Text
            fontSize={{ base: "2xs", sm: "xs" }}
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="wide"
            color="gray.400"
          >
            Problem #{String(index + 1).padStart(2, '0')}
          </Text>
          
          <Heading
            as="h3"
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="600"
            color="white"
            lineHeight="tight"
          >
            {pain.title}
          </Heading>
          
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.300"
            lineHeight="1.4"
            textAlign="center"
          >
            {pain.problem}
          </Text>
        </VStack>
      </motion.div>
    </motion.div>
  );
};

export function ValueStack() {
  return (
    <Section size="lg" bg="gray.900" color="white" py="16">
      <Container maxW="6xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "10", md: "16" }} w="full" minW="0">
          {/* Header */}
          <VStack gap={{ base: "4", md: "6" }} textAlign="center" maxW="3xl" px={{ base: "2", md: "0" }}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
            >
              Fünf strukturelle{" "}
              <Box as="span" color="red.400">
                Blockaden
              </Box>
            </Heading>
            
            <Text color="gray.400" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
              Fast jedes Business trifft sie. Scrolle, um die Probleme zu analysieren.
            </Text>
          </VStack>

          {/* Scroll-Triggered Pain Cards */}
          <Box 
            w="full" 
            minW="0"
            maxW="500px"
            mx="auto"
            py={{ base: "12", md: "20" }}
            px={{ base: "3", md: "4" }}
          >
            {painPoints.map((pain, index) => (
              <PainCard key={pain.title} pain={pain} index={index} />
            ))}
          </Box>

          {/* Bottom Text */}
          <VStack gap={{ base: "3", md: "4" }} textAlign="center" maxW="2xl" px={{ base: "2", md: "0" }}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="600"
              color="white"
            >
              Kommt dir bekannt vor?
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.400" lineHeight="relaxed">
              Diese strukturellen Probleme kosten täglich Umsatz und Nerven.{" "}
              <Box as="span" color="red.400" fontWeight="600">
                Zeit für systematische Lösungen.
              </Box>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}