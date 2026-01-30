import { Box, Button, VStack, AbsoluteCenter } from "@chakra-ui/react";
import { EnvelopeOpen, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/components/ui/link";
import Confetti from "@/components/ui/confetti";
import { generateMetadata } from "@/utils/metadata";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata = generateMetadata({
  title: "Vielen Dank",
  description:
    "Vielen Dank für deine Registrierung. Bitte überprüfe deine E-Mails, um die Registrierung abzuschließen",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <Confetti type="fireworks" />
      <Box p="relative" h="100vh" w="100vw">
        <AbsoluteCenter>
          <VStack>
            <EmptyState
              icon={<EnvelopeOpen />}
              title="Fast geschafft! Überprüfe dein Postfach."
              description="Wir haben dir eine E-Mail gesendet, um deine Registrierung abzuschließen und dein
                Passwort festzulegen. Falls du sie nicht gleich siehst, überprüfe bitte deinen Spam-Ordner."
            >
              <Box pt="4">
                <Link href="https://mail.google.com">
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
                    <ArrowSquareOut weight="duotone" />
                    Gmail öffnen
                  </Button>
                </Link>
              </Box>
            </EmptyState>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
