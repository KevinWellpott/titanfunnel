import { Box, type BoxProps, Container } from "@chakra-ui/react";
import type React from "react";

export interface SectionProps extends BoxProps {
  children?: React.ReactNode;
  header?: boolean;
  size?: "sm" | "md" | "lg";
}

const PADDING_Y = {
  sm: { base: "6", md: "8" },
  md: { base: "12", md: "16" },
  lg: { base: "16", md: "24" },
} as const;

const TOP_PADDING = {
  sm: { base: "112px", md: "120px" },
  md: { base: "136px", md: "152px" },
  lg: { base: "152px", md: "184px" },
} as const;

type SectionSize = keyof typeof PADDING_Y;

export const Section = ({ header, size = "md", ...props }: SectionProps) => {
  const { ...rootProps } = props;
  const effectiveSize: SectionSize =
    size && size in PADDING_Y ? (size as SectionSize) : "md";
  const paddingY = PADDING_Y[effectiveSize];
  const topPadding = TOP_PADDING[effectiveSize];

  if (header) {
    return (
      <Box as="header" w="full" minW="0" maxW="100%" overflowX="hidden" {...rootProps}>
        <Container maxW={{ base: "full", md: "6xl", lg: "7xl" }} w="full" minW="0" px={{ base: "4", md: "6" }}>
          <Box
            pt={{ base: topPadding.base, md: topPadding.md }}
            pb={{ base: paddingY.base, md: paddingY.md }}
          >
            {props.children}
          </Box>
        </Container>
      </Box>
    );
  }
  return (
    <Box as="section" w="full" minW="0" maxW="100%" overflowX="hidden" {...rootProps}>
      <Container maxW={{ base: "full", md: "6xl", lg: "7xl" }} w="full" minW="0" px={{ base: "4", md: "6" }}>
        <Box py={{ base: paddingY.base, md: paddingY.md }}>
          {props.children}
        </Box>
      </Container>
    </Box>
  );
};
