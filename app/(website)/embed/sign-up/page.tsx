import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { generateMetadata } from "@/utils/metadata";
import { Heading, VStack, Box, Container } from "@chakra-ui/react";
import { SignUp } from "@/components/auth/embed";

export const metadata = generateMetadata({
  title: "Registrierung Embed Demo",
  description:
    "Sieh dir an, wie das Registrierungs-Embed im Popup- und eingebetteten Modus funktioniert",
});

export default function SignUpEmbedPage() {
  return (
    <>
      <Section
        header
        bg="bg.muted"
        borderBottomColor="border"
        borderBottomWidth="1px"
      >
        <VStack gap={{ base: "6", md: "8" }} textAlign="center">
          <VStack gap={{ base: "5", md: "6" }}>
            <VStack gap={{ base: "3", md: "4" }}>
              <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
                Registrierung Embed
              </Heading>
            </VStack>
          </VStack>
        </VStack>
      </Section>
      <Section>
        <VStack gap={8}>
          <Heading size="3xl">Popup</Heading>
          <SignUp popup>
            <Button
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
              Registrierungs-Popup öffnen
            </Button>
          </SignUp>
          <Heading size="3xl">Auf der Seite</Heading>
          <Box w="full" p={6} borderWidth="1px" borderRadius="lg" bg="bg.muted">
            <SignUp />
          </Box>
        </VStack>
      </Section>
    </>
  );
}
