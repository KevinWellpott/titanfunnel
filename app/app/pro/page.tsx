import { Heading, Text } from "@chakra-ui/react";
import { generateMetadata } from "@/utils/metadata";
import { Section } from "@/components/layout/section";
import ProtectedRoute from "@/components/auth/protect-route";

export const metadata = generateMetadata({
  title: "Pro Plan",
  description: "Vollwertiger Blue Print zu Skalierung",
  noIndex: true,
});

export default function Pro() {
  return (
    <ProtectedRoute plansWithAccess="pro">
      <Section header>
        <Heading>Pro Plan</Heading>
        <Text mt="4">
          Willkommen im Pro Plan! Hier erhältst du den vollwertigen Blue Print 
          zur Skalierung. Mit diesem Plan bist du bestens vorbereitet, um 
          TitanScale selbst zu nutzen und dein Business auf die nächste Stufe zu bringen.
        </Text>
      </Section>
    </ProtectedRoute>
  );
}
