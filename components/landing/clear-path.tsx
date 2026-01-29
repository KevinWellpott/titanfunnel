import { Heading, Text, VStack, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com";

export function ClearPath() {
  return (
    <Section size="lg" bg="bg" id="clear-path">
      <VStack gap="10" maxW="xl" mx="auto" textAlign="center">
        <Stack gap="4">
          <Heading
            as="h2"
            textStyle={{ base: "2xl", md: "4xl" }}
            lineHeight="tighter"
            fontWeight="700"
          >
            Der nächste Schritt
          </Heading>
          <Text color="fg.muted" textStyle="lg">
            In einem 25-minütigen Call analysieren wir deine größte
            Skalierungsblockade – unverbindlich und auf den Punkt.
          </Text>
        </Stack>
        <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Button size="xl" gap="2">
            <CalendarBlank />
            Call buchen
          </Button>
        </Link>
      </VStack>
    </Section>
  );
}
