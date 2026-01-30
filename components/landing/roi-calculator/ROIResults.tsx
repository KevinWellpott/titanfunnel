"use client";

import {
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "@phosphor-icons/react";
import type { RoiResult } from "./types";
import { getMaxMonthlyROIForDisplay } from "./lib/roi-calculations";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

const TIER_LABEL: Record<string, string> = {
  foundation: "Foundation (6.900 €)",
  scale: "Scale (9.000 €)",
  enterprise: "Enterprise (15.000 €+)",
};

interface ROIResultsProps {
  result: RoiResult;
  onReset?: () => void;
}

export function ROIResults({ result, onReset }: ROIResultsProps) {
  const maxMonthly = getMaxMonthlyROIForDisplay();
  const timePct = Math.min(100, (result.timeValueMonthly / maxMonthly) * 100);
  const scalePct = Math.min(100, (result.scalingValue / maxMonthly) * 100);
  const upsellPct = Math.min(100, (result.upsellValue / maxMonthly) * 100);

  return (
    <VStack gap={{ base: "6", md: "8" }} align="stretch" w="full" minW="0">
      <Heading as="h2" fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="white">
        Dein ROI – 3 Hebel, transparent berechnet
      </Heading>

      <Box
        bg="gray.800"
        borderRadius="xl"
        borderWidth="1px"
        borderColor="gray.700"
        p={{ base: "4", md: "6" }}
        textAlign="center"
        w="full"
        minW="0"
      >
        <Text
          fontSize="xs"
          color="gray.500"
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="0.05em"
          mb="2"
        >
          Geschätzter ROI pro Jahr
        </Text>
        <Heading
          as="p"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          fontWeight="700"
          color="white"
          lineHeight="1"
        >
          {formatCurrency(result.yearlyROI)}
        </Heading>
        <Text fontSize="sm" color="gray.400" mt="2">
          {formatCurrency(result.monthlyROI)} / Monat
        </Text>
      </Box>

      <VStack align="stretch" gap="4">
        <Heading as="h3" size="sm" fontWeight="600" color="white">
          Aufschlüsselung nach Hebel
        </Heading>

        <Box
          bg="gray.800"
          borderRadius="xl"
          borderWidth="1px"
          borderColor="gray.700"
          p={{ base: "4", md: "5" }}
          minW="0"
        >
          <VStack align="stretch" gap={{ base: "4", md: "5" }}>
            <Box>
              <HStack justify="space-between" mb="2">
                <Text fontSize="sm" color="gray.400">
                  1. Zeithebel (Effizienz)
                </Text>
                <Text fontSize="sm" fontWeight="600" color="white">
                  {formatCurrency(result.timeValueMonthly)}/Monat
                </Text>
              </HStack>
              <Progress.Root value={timePct} size="sm" borderRadius="full">
                <Progress.Track bg="gray.700">
                  <Progress.Range bg="#01ADD5" />
                </Progress.Track>
              </Progress.Root>
            </Box>

            <Box>
              <HStack justify="space-between" mb="2">
                <Text fontSize="sm" color="gray.400">
                  2. Skalierungshebel (mehr Kapazität)
                </Text>
                <Text fontSize="sm" fontWeight="600" color="white">
                  {formatCurrency(result.scalingValue)}/Monat
                </Text>
              </HStack>
              <Progress.Root value={scalePct} size="sm" borderRadius="full">
                <Progress.Track bg="gray.700">
                  <Progress.Range bg="#01ADD5" />
                </Progress.Track>
              </Progress.Root>
            </Box>

            <Box>
              <HStack justify="space-between" mb="2">
                <Text fontSize="sm" color="gray.400">
                  3. Upsell-Hebel (konservativ)
                </Text>
                <Text fontSize="sm" fontWeight="600" color="white">
                  {formatCurrency(result.upsellValue)}/Monat
                </Text>
              </HStack>
              <Progress.Root value={upsellPct} size="sm" borderRadius="full">
                <Progress.Track bg="gray.700">
                  <Progress.Range bg="#01ADD5" />
                </Progress.Track>
              </Progress.Root>
            </Box>
          </VStack>
        </Box>
      </VStack>

      <Box
        bg="gray.800"
        borderRadius="xl"
        borderWidth="1px"
        borderColor="gray.700"
        p={{ base: "4", md: "5" }}
        minW="0"
      >
        <Text fontSize="xs" color="gray.500" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" mb="1">
          Empfohlene Investitionsstufe
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="700" color="white">
          {TIER_LABEL[result.investmentTier] ?? result.investmentTier}
        </Text>
      </Box>

      <VStack gap="4" pt="4" w="full" minW="0" align="center">
        <VStack gap="2" align="center" w="full" maxW="md">
          <Link href="/contact" w="full">
            <Button
              w="full"
              size={{ base: "md", md: "lg" }}
              gap="2"
              bg="#01ADD5"
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
              Jetzt ROI zur Wirklichkeit machen
              <ArrowRight size={16} />
            </Button>
          </Link>
          {onReset && (
            <Button
              variant="link"
              size={{ base: "md", md: "lg" }}
              gap="2"
              px={{ base: "5", md: "8" }}
              py={{ base: "3", md: "4" }}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="600"
              color="gray.500"
              _hover={{ color: "gray.400" }}
              onClick={onReset}
              aria-label="ROI neu berechnen"
              transition="all 0.2s ease"
            >
              neu berechnen
            </Button>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
}
