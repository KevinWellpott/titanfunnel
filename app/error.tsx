"use client";

import { Box, Container, Heading, Text, VStack, Center } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Center minH="100vh" as="main">
      <Container>
        <VStack gap="6" textAlign="center">
          <VStack gap="4">
            <Heading
              as="h1"
              textStyle={{ base: "2xl", md: "3xl" }}
              lineHeight="tight"
            >
              Etwas ist schiefgelaufen
            </Heading>
            <Text color="fg.muted" textStyle="md" maxW="md">
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut
              oder kehre zur Startseite zurück.
            </Text>
          </VStack>
          <Box display="flex" gap="3" flexWrap="wrap" justifyContent="center">
            <Button
              onClick={reset}
              size={{ base: "md", md: "lg" }}
              gap="2"
              bg="blue"
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
              Erneut versuchen
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                size={{ base: "md", md: "lg" }}
                gap="2"
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
                Zur Startseite
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Center>
  );
}
