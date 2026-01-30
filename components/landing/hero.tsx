"use client";

import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const VIMEO_PARAMS = "title=0&byline=0&portrait=0";

export interface HeroVideoProp {
  vimeoId: string;
}

export function Hero({ video }: { video?: HeroVideoProp | null }) {
  return (
    <Section header size="lg" py={{ base: "0", md: "0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "8", md: "12", lg: "20" }}
          align="center"
          justify="space-between"
          w="full"
          minW="0"
        >
          {/* Clean Text Section */}
          <MotionVStack
            flex="1"
            minW="0"
            w="full"
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            gap={{ base: "5", md: "6", lg: "8" }}
            maxW={{ lg: "xl" }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <MotionHeading
              as="h1"
              fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
              fontWeight="700"
              lineHeight="1.1"
              letterSpacing="-0.02em"
              color="white"
              wordBreak="break-word"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Dein Business läuft auf{" "}
              <Text as="span" color="white">
                Chaos
              </Text>
              {" "}statt auf einem{" "}
              <Text as="span" color="white">
                System
              </Text>
            </MotionHeading>

            <MotionText
              as="h2"
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              color="white"
              lineHeight="relaxed"
              maxW="2xl"
              fontWeight="400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Wir bauen dir das Betriebssystem, das Akquise, Verkauf und 
              Delivery nahtlos automatisiert – unter deinem Branding.
            </MotionText>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <VStack gap={{ base: "3", md: "4" }} align={{ base: "center", lg: "flex-start" }} w="full" maxW={{ base: "full", sm: "md" }}>
                <Link href="#os-architektur-gespraech" w={{ base: "full", sm: "auto" }}>
                  <Button
                    w={{ base: "full", sm: "auto" }}
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
                    OS-Architektur-Gespräch buchen
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Text as="p" fontSize={{ base: "2xs", sm: "xs" }} color="gray.500" fontWeight="600" textAlign="center">
                  Kostenlose Analyse • Keine Verkaufsshow
                </Text>
              </VStack>
            </motion.div>
          </MotionVStack>

          {/* Clean Video Section */}
          <MotionBox
            flex="1"
            minW="0"
            maxW={{ lg: "2xl" }}
            w="full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              aspectRatio={16 / 9}
              bg="gray.50"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              overflow="hidden"
              _hover={{
                borderColor: "gray.300"
              }}
              transition="border-color 0.2s ease"
            >
              {video?.vimeoId ? (
                <Box
                  position="absolute"
                  inset="0"
                  w="100%"
                  h="100%"
                  borderRadius="xl"
                  overflow="hidden"
                >
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?${VIMEO_PARAMS}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "var(--chakra-radii-xl)",
                    }}
                    title="Erklärvideo"
                  />
                </Box>
              ) : (
                <>
                  <VStack gap="4" color="gray.400">
                    <Box
                      w="16"
                      h="16"
                      bg="gray.200"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </Box>
                    <VStack gap="2" textAlign="center" px="2">
                      <Text fontWeight="600" fontSize={{ base: "md", md: "lg" }} color="gray.600">
                        Erklärvideo
                      </Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                        Sieh, wie ein Business-OS funktioniert
                      </Text>
                    </VStack>
                  </VStack>
                  <Box
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.02) 100%)"
                    pointerEvents="none"
                  />
                </>
              )}
            </Box>
          </MotionBox>
        </Stack>
      </motion.div>
    </Section>
  );
}