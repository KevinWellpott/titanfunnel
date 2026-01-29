import { Heading, Text, Card, Stack, VStack, Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";

const testimonials = [
  {
    quote: "Der Hebel war sofort spürbar – weniger Admin, mehr Fokus aufs Kerngeschäft.",
    type: "B2B Coach",
  },
  {
    quote: "Kein Zeit-für-Geld-Tausch mehr. Das System arbeitet mit.",
    type: "B2C Unternehmer",
  },
];

export function RiskReversal() {
  return (
    <Section size="lg" bg="bg.subtle">
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: "10", md: "16" }}
        align="stretch"
      >
        <VStack flex="1" gap="6" align={{ base: "center", md: "flex-start" }}>
          <Heading
            as="h2"
            textStyle={{ base: "xl", md: "2xl" }}
            fontWeight="700"
          >
            Was andere sagen
          </Heading>
          <Stack gap="4" w="full">
            {testimonials.map((t, i) => (
              <Box key={i}>
                <Text textStyle="sm" fontWeight="500" mb="1">
                  „{t.quote}"
                </Text>
                <Text color="fg.muted" textStyle="xs">
                  — {t.type}
                </Text>
              </Box>
            ))}
          </Stack>
        </VStack>
        <Box flex="1" display="flex" justifyContent={{ base: "center", md: "flex-end" }}>
          <Card.Root
            bg="bg.panel"
            borderWidth="2px"
            borderColor="primary.solid"
            maxW="sm"
            w="full"
          >
            <Card.Body gap="4">
              <Text
                fontWeight="800"
                textStyle="lg"
                textAlign="center"
                color="primary.fg"
              >
                10h oder Geld zurück
              </Text>
              <Text
                fontWeight="700"
                textStyle="sm"
                textAlign="center"
                color="fg.muted"
              >
                Go-Live-Garantie: Wenn wir in den ersten 10 Stunden nicht den
                Mehrwert liefern, den wir versprechen, bekommst du dein Geld
                zurück. Kein Risiko für dich.
              </Text>
            </Card.Body>
          </Card.Root>
        </Box>
      </Stack>
    </Section>
  );
}
