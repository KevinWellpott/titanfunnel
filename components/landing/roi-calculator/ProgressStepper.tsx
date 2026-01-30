"use client";

import { HStack, Box, Text } from "@chakra-ui/react";

const STEPS = [
  { num: 1, label: "Umsatz" },
  { num: 2, label: "Kunden" },
  { num: 3, label: "Deal-Wert" },
  { num: 4, label: "Effizienz" },
  { num: 5, label: "Prozess" },
];

interface ProgressStepperProps {
  currentStep: number;
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <HStack
      gap={{ base: "2", md: "4" }}
      flexWrap="wrap"
      justify="center"
      py="4"
      aria-label="Fortschritt im ROI-Rechner"
    >
      {STEPS.map((step) => {
        const isActive = step.num === currentStep;
        const isPast = step.num < currentStep;
        return (
          <HStack key={step.num} gap="2" role="listitem">
            <Box
              w="8"
              h="8"
              borderRadius="full"
              bg={isActive ? "gray.700" : isPast ? "gray.600" : "gray.800"}
              borderWidth="1px"
              borderColor={isActive ? "gray.600" : "gray.700"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              fontWeight="600"
              color={isActive || isPast ? "white" : "gray.500"}
              aria-current={isActive ? "step" : undefined}
            >
              {step.num}
            </Box>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color={isActive ? "white" : "gray.500"}
              fontWeight={isActive ? "600" : "400"}
              display={{ base: "none", sm: "block" }}
            >
              {step.label}
            </Text>
          </HStack>
        );
      })}
    </HStack>
  );
}
