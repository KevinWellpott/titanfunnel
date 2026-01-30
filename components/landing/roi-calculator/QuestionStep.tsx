"use client";

import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { Slider } from "@/components/ui/slider";
import type { UmsatzRange, TicketpreisRange, RoiAnswers } from "./types";

const UMSATZ_OPTIONS: { value: UmsatzRange; label: string }[] = [
  { value: "5k-15k", label: "5k – 15k €" },
  { value: "15k-30k", label: "15k – 30k €" },
  { value: "30k-50k", label: "30k – 50k €" },
  { value: "50k+", label: "50k €+" },
];

const TICKET_OPTIONS: { value: TicketpreisRange; label: string }[] = [
  { value: "500-2k", label: "500 – 2k €" },
  { value: "2k-5k", label: "2k – 5k €" },
  { value: "5k-10k", label: "5k – 10k €" },
  { value: "10k+", label: "10k €+" },
];

const inputStyles = {
  width: "100%",
  minHeight: "44px",
  padding: "10px 14px",
  backgroundColor: "var(--chakra-colors-gray-800)",
  border: "1px solid var(--chakra-colors-gray-700)",
  borderRadius: "8px",
  color: "white",
  fontSize: "1rem",
};

interface QuestionStepProps {
  stepNumber: number;
  answers: Partial<RoiAnswers>;
  onAnswersChange: (updates: Partial<RoiAnswers>) => void;
  onNext: () => void;
  onReset?: () => void;
}

export function QuestionStep({
  stepNumber,
  answers,
  onAnswersChange,
  onNext,
  onReset,
}: QuestionStepProps) {
  const canProceed =
    stepNumber === 1 ? answers.umsatz != null :
    stepNumber === 2 ? answers.kundenVolumen != null && answers.kundenVolumen >= 1 :
    stepNumber === 3 ? answers.ticketpreis != null :
    stepNumber === 4 ? answers.effizienzProzent != null :
    stepNumber === 5
      ? answers.feelingChange === "ja" || answers.feelingChange === "nein"
      : false;

  if (stepNumber === 1) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Was ist dein durchschnittlicher Monatsumsatz aus deinem Kerngeschäft?
        </Text>
        <VStack gap="2" align="stretch">
          {UMSATZ_OPTIONS.map((opt) => (
            <Button
              key={opt.value}
              type="button"
              variant="outline"
              textAlign="left"
              justifyContent="flex-start"
              size={{ base: "md", md: "lg" }}
              gap="2"
              px={{ base: "5", md: "8" }}
              py={{ base: "3", md: "4" }}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="600"
              borderRadius="lg"
              whiteSpace="normal"
              borderWidth="1px"
              borderColor={answers.umsatz === opt.value ? "#01ADD5" : "gray.700"}
              bg="gray.800"
              color="white"
              _hover={{ borderColor: "gray.600", boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)", transform: "translateY(-1px)" }}
              transition="all 0.2s ease"
              onClick={() => onAnswersChange({ umsatz: opt.value })}
            >
              {opt.label}
            </Button>
          ))}
        </VStack>
        <HStack justify="flex-end" pt="4">
          <Button
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
            disabled={!canProceed}
            onClick={onNext}
          >
            Weiter
          </Button>
        </HStack>
      </VStack>
    );
  }

  if (stepNumber === 2) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Wie viele zahlende Kunden/Mandate betreust du aktiv pro Monat?
        </Text>
        <Box w="full">
          <Slider
            value={[answers.kundenVolumen ?? 5]}
            onValueChange={(v: { value: number[] } | number[]) => {
              const val = Array.isArray(v) ? v[0] : v?.value?.[0];
              onAnswersChange({ kundenVolumen: val ?? 5 });
            }}
            min={1}
            max={50}
            step={1}
            showValue
            label="Anzahl Kunden/Mandate"
          />
        </Box>
        <HStack justify="flex-end" pt="4">
          <Button
            size={{ base: "md", md: "lg" }}
            bg="#01ADD5"
            color="white"
            fontWeight="600"
            borderRadius="lg"
            _hover={{
              boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
              transform: "translateY(-1px)",
            }}
            disabled={!canProceed}
            onClick={onNext}
          >
            Weiter
          </Button>
        </HStack>
      </VStack>
    );
  }

  if (stepNumber === 3) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Wie hoch ist dein durchschnittlicher Deal-Wert (pro Kunde/Mandat)?
        </Text>
        <VStack gap="2" align="stretch">
          {TICKET_OPTIONS.map((opt) => (
            <Button
              key={opt.value}
              type="button"
              variant="outline"
              textAlign="left"
              justifyContent="flex-start"
              size={{ base: "md", md: "lg" }}
              gap="2"
              px={{ base: "5", md: "8" }}
              py={{ base: "3", md: "4" }}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="600"
              borderRadius="lg"
              whiteSpace="normal"
              borderWidth="1px"
              borderColor={
                answers.ticketpreis === opt.value ? "#01ADD5" : "gray.700"
              }
              bg="gray.800"
              color="white"
              _hover={{ borderColor: "gray.600", boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)", transform: "translateY(-1px)" }}
              transition="all 0.2s ease"
              onClick={() => onAnswersChange({ ticketpreis: opt.value })}
            >
              {opt.label}
            </Button>
          ))}
        </VStack>
        <HStack justify="flex-end" pt="4">
          <Button
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
            disabled={!canProceed}
            onClick={onNext}
          >
            Weiter
          </Button>
        </HStack>
      </VStack>
    );
  }

  if (stepNumber === 4) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Wie viel deiner Arbeitszeit (%) geht für Administration statt für
          wertschöpfende Arbeit drauf?
        </Text>
        <Box w="full">
          <Slider
            value={[answers.effizienzProzent ?? 30]}
            onValueChange={(v: { value: number[] } | number[]) => {
              const val = Array.isArray(v) ? v[0] : v?.value?.[0];
              onAnswersChange({ effizienzProzent: val ?? 30 });
            }}
            min={10}
            max={60}
            step={5}
            showValue
            label="Administrations-Anteil"
          />
        </Box>
        <Text fontSize="xs" color="gray.500">
          Standard: 30 %. Je höher der Wert, desto größer das Einsparpotenzial.
        </Text>
        <HStack justify="flex-end" pt="4">
          <Button
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
            disabled={!canProceed}
            onClick={onNext}
          >
            Weiter
          </Button>
        </HStack>
      </VStack>
    );
  }

  if (stepNumber === 5) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Hast du das Gefühl, dass du was ändern solltest?
        </Text>
        <HStack gap="3" pt="2">
          <Button
            type="button"
            variant="outline"
            flex="1"
            size={{ base: "md", md: "lg" }}
            gap="2"
            px={{ base: "5", md: "8" }}
            py={{ base: "3", md: "4" }}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="600"
            borderRadius="lg"
            whiteSpace="normal"
            borderWidth="1px"
            borderColor={answers.feelingChange === "ja" ? "#01ADD5" : "gray.700"}
            bg="gray.800"
            color="white"
            _hover={{ borderColor: "gray.600", boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)", transform: "translateY(-1px)" }}
            transition="all 0.2s ease"
            onClick={() => onAnswersChange({ feelingChange: "ja" })}
          >
            Ja
          </Button>
          <Button
            type="button"
            variant="outline"
            flex="1"
            size={{ base: "md", md: "lg" }}
            gap="2"
            px={{ base: "5", md: "8" }}
            py={{ base: "3", md: "4" }}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="600"
            borderRadius="lg"
            whiteSpace="normal"
            borderWidth="1px"
            borderColor={answers.feelingChange === "nein" ? "#01ADD5" : "gray.700"}
            bg="gray.800"
            color="white"
            _hover={{ borderColor: "gray.600", boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)", transform: "translateY(-1px)" }}
            transition="all 0.2s ease"
            onClick={() => onAnswersChange({ feelingChange: "nein" })}
          >
            Nein
          </Button>
        </HStack>
        <VStack pt="4" gap="2" align="center" w="full">
          <Button
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
            disabled={!canProceed}
            onClick={onNext}
          >
            ROI anzeigen
          </Button>
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
    );
  }

  return null;
}
