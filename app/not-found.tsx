import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { projectConfig } from "@/config";
import { generateMetadata } from "@/utils/metadata";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata = generateMetadata({
  title: "Seite nicht gefunden",
  description: "Die gesuchte Seite existiert nicht oder wurde verschoben",
  noIndex: true,
});

export default function NotFound() {
  return (
    <Center minH="100vh">
      <Container>
        <VStack gap="6" textAlign="center">
          <VStack gap="4">
            <Heading
              as="h1"
              textStyle={{ base: "3xl", md: "4xl" }}
              lineHeight="tight"
            >
              Seite nicht gefunden
            </Heading>
            <Text
              color="fg.muted"
              textStyle={{ base: "md", md: "lg" }}
              maxW="md"
            >
              Entschuldigung, wir konnten die gesuchte Seite nicht finden. 
              Bitte überprüfe die URL oder kehre zur Startseite zurück.
            </Text>
            <Text color="fg.muted" maxW="sm">
              Brauchst du Hilfe? Schicke uns eine Nachricht an{" "}
              <Link
                variant="underline"
                href={`mailto:${projectConfig.general.support.email}`}
                support
              >
                {projectConfig.general.support.email}
              </Link>
              . Wir helfen gerne!
            </Text>
          </VStack>
          <Box pt="4">
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
                <ArrowLeft />
                Zur Startseite
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Center>
  );
}
