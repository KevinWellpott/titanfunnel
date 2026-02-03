import { Box, Text } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { generateMetadata } from "@/utils/metadata";
import { PRIVACY_TEXT } from "./content";

export const metadata = generateMetadata({
  title: "Datenschutzerklärung",
  description:
    "Erfahre, wie wir deine persönlichen Informationen sammeln, verwenden und schützen",
});

export default function PrivacyPolicy() {
  return (
    <Section>
      <Box w="full" minW="0" maxW="100%" px={{ base: "4", md: "6" }}>
        <Text
          as="article"
          mx="auto"
          mt="28"
          maxW="65ch"
          minW="0"
          fontSize="sm"
          lineHeight="1.8"
          color="fg.muted"
          whiteSpace="pre-wrap"
          overflowWrap="break-word"
          wordBreak="break-word"
        >
          {PRIVACY_TEXT}
        </Text>
      </Box>
    </Section>
  );
}
