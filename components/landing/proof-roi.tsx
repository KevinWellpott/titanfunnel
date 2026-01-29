import { Heading, Text, Stack, VStack, Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";

const stats = [
  { value: "Von 10k auf 60k €", label: "Umsatz/Monat" },
  { value: ">650%", label: "ROI" },
  { value: "20h → 4h", label: "Admin/Woche" },
];

const quote = {
  text: "Endlich ein System, das mitdenkt – nicht nur ein Tool. Wir haben in wenigen Monaten mehr Skalierung erreicht als in Jahren davor.",
  author: "Sarah M.",
  role: "B2B Coach & Beraterin",
};

export function ProofRoi() {
  return (
    <Section size="lg" bg="bg">
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: "10", md: "16" }}
        align="stretch"
      >
        <VStack
          flex="1"
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          gap="4"
        >
          <Text
            textStyle={{ base: "xl", md: "2xl" }}
            fontWeight="500"
            lineHeight="relaxed"
          >
            „{quote.text}"
          </Text>
          <Stack gap="0">
            <Text fontWeight="700" textStyle="sm">
              {quote.author}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {quote.role}
            </Text>
          </Stack>
        </VStack>
        <VStack flex="1" gap="6" align={{ base: "center", md: "flex-end" }}>
          <Heading
            as="h2"
            textStyle={{ base: "xl", md: "2xl" }}
            fontWeight="700"
            color="fg.muted"
          >
            Eine konkrete Erfolgsstory
          </Heading>
          {stats.map((stat) => (
            <Box key={stat.label} textAlign={{ base: "center", md: "right" }}>
              <Text
                textStyle={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                lineHeight="tight"
              >
                {stat.value}
              </Text>
              <Text color="fg.muted" textStyle="sm">
                {stat.label}
              </Text>
            </Box>
          ))}
        </VStack>
      </Stack>
    </Section>
  );
}
