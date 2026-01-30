import { Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { ContactCalendly } from "./ContactCalendly";

export default function ContactPage() {
  return (
    <>
      <Section
        header
        bg="bg.muted"
        borderBottomColor="border"
        borderBottomWidth="1px"
        pb={28}
      >
        <VStack gap={{ base: "4", md: "6" }} textAlign="center">
          <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
            Kontakt
          </Heading>
          <Text color="fg.muted" textStyle={{ base: "lg", md: "xl" }} maxW="lg">
            Buche direkt einen Termin – wir melden uns bei dir.
          </Text>
        </VStack>
      </Section>
      <Section py={{ base: "10", md: "16" }}>
        <ContactCalendly />
      </Section>
    </>
  );
}
