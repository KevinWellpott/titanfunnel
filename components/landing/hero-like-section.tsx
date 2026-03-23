"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { HeroBackdrop } from "./hero-backdrop";

type HeroLikeSectionProps = BoxProps & { children: ReactNode };

/** Section mit gleichem visuellen Layer wie der Home-Hero (#030308 + Mesh/Orbs). */
export function HeroLikeSection({ children, ...props }: HeroLikeSectionProps) {
  return (
    <Box as="section" position="relative" overflow="hidden" bg="#030308" color="white" {...props}>
      <HeroBackdrop />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
