import {
  Heading,
  Text,
  Card,
  Icon,
  Stack,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import {
  Funnel,
  Buildings,
  Gauge,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

const layers = [
  {
    number: "01",
    icon: <Funnel />,
    title: "Autopilot-Funnel",
    description:
      "Vom Interessent zum zahlenden Kunden – automatisiert. Kein manuelles Nachlaufen mehr.",
  },
  {
    number: "02",
    icon: <Buildings />,
    title: "White-Label-Kundenportal & Akademie",
    description:
      "Die professionelle Heimat für dein Wissen und deine Kunden. 100% dein Branding.",
  },
  {
    number: "03",
    icon: <Gauge />,
    title: "Command-Center mit KPIs",
    description:
      "Echtzeit-Daten für Entscheidungen, kein Bauchgefühl. Du siehst, was läuft – und was nicht.",
  },
  {
    number: "04",
    icon: <Robot />,
    title: "Intelligente Prozess-Automatisierung",
    description:
      "Die Maschine übernimmt die Logistik, du übernimmst die Strategie.",
  },
];

export function ValueStack() {
  return (
    <Section size="lg" bg="bg.subtle">
      <VStack gap="12">
        <Stack gap="4" textAlign="center">
          <Heading
            as="h2"
            textStyle={{ base: "2xl", md: "4xl" }}
            maxW={{ md: "2xl" }}
            mx="auto"
            lineHeight="tighter"
            fontWeight="700"
          >
            Your Value Stack – die Lösung als maßgeschneiderter Stack
          </Heading>
          <Text color="fg.muted" textStyle="lg" maxW={{ md: "xl" }} mx="auto">
            Keine Feature-Liste. Eine integrative Lösung, die zu deinem Business
            passt.
          </Text>
        </Stack>
        <Stack gap="4" w="full" maxW="3xl" mx="auto">
          {layers.map((layer) => (
            <Card.Root key={layer.number}>
              <Card.Body>
                <HStack gap="4" align="flex-start" flexWrap="wrap">
                  <Box
                    color="fg.subtle"
                    fontFamily="mono"
                    textStyle="sm"
                    fontWeight="600"
                  >
                    {layer.number}
                  </Box>
                  <Icon size="xl" color="fg.muted">
                    {layer.icon}
                  </Icon>
                  <Stack gap="1" flex="1" minW="0">
                    <Text fontWeight="700" textStyle="lg">
                      {layer.title}
                    </Text>
                    <Text color="fg.muted" textStyle="sm">
                      {layer.description}
                    </Text>
                  </Stack>
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Stack>
      </VStack>
    </Section>
  );
}
