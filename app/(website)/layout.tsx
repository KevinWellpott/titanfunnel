"use client";

import { WebsiteHeader } from "@/components/layout/website-header";
import { Footer } from "@/components/layout/footer";
import { CursorFollower } from "@/components/landing/cursor-follower";
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
    <Box as="div" minW="0" maxW="100vw" overflowX="hidden" position="relative" bg="white">
      <AnimatedBackground />
      <CursorFollower />
      <WebsiteHeader />
      <Box as="main" minW="0" maxW="100%" position="relative">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
