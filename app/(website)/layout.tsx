"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () =>
    import("@/components/landing/animated-background").then((m) => ({
      default: m.AnimatedBackground,
    })),
  { ssr: false }
);

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box as="div" minW="0" maxW="100vw" overflowX="hidden" position="relative">
      <AnimatedBackground />
      <Navbar type="website" />
      <Box as="main" minW="0" maxW="100%" position="relative">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
