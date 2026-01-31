"use client";

import {
  Center,
  CollapsibleContent,
  CollapsibleRoot,
  Container,
  HStack,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CollapsibleTrigger } from "@/components/ui/collapsible-trigger";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/vertrieb-titandevelopment/30min";

export function NavbarLinkMenu() {
  return (
    <HStack gap="1">
      <ChakraLink
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ textDecoration: "none" }}
      >
        <Button
          color="white"
          bg="#01ADD5"
          size="sm"
          _hover={{
            boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
            transform: "translateY(-1px)",
          }}
          transition="all 0.2s ease"
        >
          Kontakt
        </Button>
      </ChakraLink>
    </HStack>
  );
}

export function Navbar({ type }: { type: "website" | "app" }) {
  return (
    <Center
      as="header"
      position="fixed"
      zIndex="docked"
      top={{ base: "4", md: "6" }}
      w="full"
      maxW="100vw"
      overflowX="hidden"
    >
      <Container maxW={{ base: "full", md: "3xl" }} w="full" px={{ base: "4", md: "6" }}>
        <Box
          w="full"
          minW="0"
          maxW="100%"
          px="4"
          py="3"
          borderRadius="l3"
          background="white/10"
          backdropFilter="blur(12px)"
          borderWidth="1px"
          borderColor="white/20"
          boxShadow="0 4px 24px rgba(0,0,0,0.08)"
          _dark={{
            background: "black/20",
            borderColor: "white/10",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <CollapsibleRoot>
            <HStack gap={{ base: "3", md: "8" }} justify="space-between">
              <CollapsibleTrigger />
              <Link href="/" display="flex" alignItems="center" flexShrink={0}>
                <Text
                  fontFamily="heading"
                  fontWeight="500"
                  fontSize={{ base: "lg", md: "xl" }}
                  letterSpacing="-0.02em"
                  color="fg"
                >
                  titan.
                </Text>
              </Link>
              <HStack justify="flex-end" w="full" hideBelow="md">
                <NavbarLinkMenu />
              </HStack>
            </HStack>
            <CollapsibleContent hideFrom="md" mt="4" pt="2" borderTopWidth="1px" borderColor="white/10" _dark={{ borderColor: "white/10" }}>
              <NavbarLinkMenu />
            </CollapsibleContent>
          </CollapsibleRoot>
        </Box>
      </Container>
    </Center>
  );
}
