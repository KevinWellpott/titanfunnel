import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box as="div" minW="0" maxW="100vw" overflowX="hidden">
      <Navbar type="website" />
      <Box as="main" minW="0" maxW="100%">{children}</Box>
      <Footer />
    </Box>
  );
}
