"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "@/components/ui/link";
import { generalConfig } from "@/config/general-config";

const navFont = "var(--font-inter), Inter, system-ui, sans-serif";

/**
 * Floating Glass-Nav: „Titan.“ links (Pill), CTA rechts (Glass).
 * Fixed oben (wie Referenz: über dem Hero), bleibt beim Scrollen sichtbar.
 */
export function WebsiteHeader() {
  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="docked"
      w="full"
      maxW="100vw"
      pt={{ base: "3", md: "4" }}
      pb="2"
      px={{ base: "4", md: "6" }}
      bg="transparent"
      pointerEvents="none"
      fontFamily={navFont}
    >
      <HStack
        maxW="7xl"
        mx="auto"
        justify="space-between"
        align="center"
        gap={{ base: "3", md: "6" }}
        w="full"
        pointerEvents="auto"
        fontFamily={navFont}
      >
        <Link href="/" display="flex" alignItems="center" flexShrink={0}>
          <Box
            px={{ base: "3", md: "4" }}
            py={{ base: "2", md: "2.5" }}
            borderRadius="full"
            bg="rgba(10, 10, 16, 0.45)"
            backdropFilter="blur(20px) saturate(180%)"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.18)"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="box-shadow 0.2s ease"
            _hover={{
              borderColor: "rgba(255, 255, 255, 0.35)",
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.14)",
            }}
          >
            <Text
              as="span"
              fontFamily={navFont}
              fontWeight="600"
              fontSize={{ base: "md", md: "lg" }}
              letterSpacing="-0.02em"
              color="white"
              lineHeight="1"
            >
              Titan.
            </Text>
          </Box>
        </Link>

        <Link href={generalConfig.primaryCtaHref} flexShrink={0}>
          <Button
            borderRadius="full"
            px={{ base: "4", md: "6" }}
            py={{ base: "2", md: "2.5" }}
            h="auto"
            fontSize={{ base: "sm", md: "sm" }}
            fontWeight="600"
            letterSpacing="-0.01em"
            fontFamily={navFont}
            gap="2"
            bg="rgba(10, 10, 16, 0.4)"
            backdropFilter="blur(20px) saturate(180%)"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.22)"
            color="white"
            boxShadow="0 2px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
            _hover={{
              bg: "rgba(18, 18, 28, 0.55)",
              borderColor: "rgba(255, 255, 255, 0.38)",
              transform: "translateY(-1px)",
            }}
            transition="all 0.2s ease"
          >
            <Box as="span" aria-hidden display="inline-flex" fontSize="1.1em" lineHeight="1">
              ☕
            </Box>
            Onlinekaffee buchen
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
