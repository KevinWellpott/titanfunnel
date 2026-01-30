"use client";

import { Box } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/components/ui/link";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box
        as="header"
        position="fixed"
        zIndex="docked"
        top="6"
        left="6"
        w="full"
      >
        <Link href="/">
          <Button
            colorPalette="gray"
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
            Back home
          </Button>
        </Link>
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
}
