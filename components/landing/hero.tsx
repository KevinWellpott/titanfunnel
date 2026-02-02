"use client";

import { Box, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { ArrowRight } from "@phosphor-icons/react";

const CALENDLY_URL = "https://calendly.com/vertrieb-titandevelopment/30min";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

import { BrandedVideoPlayer } from "./branded-video-player";

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
                System?
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
             Wir bauen dir ein automatisiertes System, das Kunden gewinnt, verkauft und abwickelt – komplett unter deinem Branding.
            </MotionText>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <VStack gap={{ base: "3", md: "4" }} align={{ base: "center", lg: "flex-start" }} w="full" maxW={{ base: "full", sm: "md" }}>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  w={{ base: "full", sm: "auto" }}
                  display="block"
                  _hover={{ textDecoration: "none" }}
                >
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
                    Analysegespräch buchen
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Text as="p" fontSize={{ base: "2xs", sm: "xs" }} color="gray.500" fontWeight="600" textAlign="center">
                  Kostenlose Analyse • Keine Verkaufsshow
                </Text>
              </VStack>
            </motion.div>
          </MotionVStack>

          {/* Video Section – Optik 1:1 wie Proof ROI */}
          <MotionBox
            flex="1"
            minW="0"
            maxW={{ lg: "2xl" }}
            w="full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                aspectRatio={16 / 9}
                bg="gray.800"
                borderRadius="2xl"
                border="1px solid"
                borderColor="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
                boxShadow="0 20px 40px -12px rgba(0, 0, 0, 0.3)"
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  bg: "linear-gradient(135deg, transparent, rgba(1, 173, 213, 0.1), transparent)",
                  borderRadius: "inherit",
                  zIndex: "-1"
                }}
              >
                {video?.vimeoId ? (
                  <Box
                    position="absolute"
                    inset="0"
                    w="100%"
                    h="100%"
                    borderRadius="2xl"
                    overflow="hidden"
                  >
                    <BrandedVideoPlayer
                      vimeoId={video.vimeoId}
                      title="Erklärvideo"
                      variant="proofRoi"
                      thumbnailSrc="/thumbnail-hero.webp"
                    />
                  </Box>
                ) : (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        w="20"
                        h="20"
                        bg="#01ADD5"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        position="relative"
                        boxShadow="0 0 0 0 rgba(1, 173, 213, 0.4)"
                        _before={{
                          content: '""',
                          position: "absolute",
                          inset: "-6px",
                          bg: "#01ADD5",
                          borderRadius: "50%",
                          opacity: 0.1,
                          filter: "blur(12px)"
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </motion.div>
                      </Box>
                    </motion.div>

                    <Box
                      position="absolute"
                      inset="0"
                      opacity="0.03"
                      backgroundImage="radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)"
                      backgroundSize="32px 32px"
                    />
                  </>
                )}
              </Box>
            </motion.div>
          </MotionBox>
        </Stack>
      </motion.div>
    </Section>
  );
}