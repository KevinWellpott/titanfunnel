"use client";

import { Box, Text, VStack, HStack, Button, Input } from "@chakra-ui/react";
import type { RoiAnswers, Hauptproblem } from "./types";
import { HAUPTPROBLEM_LABEL } from "./lib/roi-calculations";

const HAUPTPROBLEM_OPTIONS: { value: Hauptproblem; label: string }[] = [
  { value: "lead-chaos", label: "A) Lead-Chaos (Anfragen gehen verloren, Follow-up ist ein Albtraum)" },
  { value: "verkaufs-hickhack", label: "B) Verkaufs-Hickhack (Manuelles Verträge schicken, zahlen hinterherrennen)" },
  { value: "admin-hoelle", label: "C) Admin-Hölle (Wiederholende Tasks fressen jeden Tag)" },
  { value: "skalierung-unmoeglich", label: "D) Skalierung unmöglich (Mehr Kunden = mehr Chaos, kein System)" },
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
    stepNumber === 1
      ? typeof answers.umsatzProMonat === "number" && answers.umsatzProMonat > 0
      : stepNumber === 2
        ? typeof answers.neueKundenProMonat === "number" &&
          answers.neueKundenProMonat >= 0
        : stepNumber === 3
          ? answers.hauptproblem != null
          : false;

  if (stepNumber === 1) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Wie viel Umsatz machst du durchschnittlich im Monat?
        </Text>
        <Input
          type="number"
          min={1}
          step={100}
          placeholder="z. B. 25000"
          value={answers.umsatzProMonat ?? ""}
          onChange={(e) => {
            const v = e.target.value ? Number(e.target.value) : undefined;
            onAnswersChange({ umsatzProMonat: v });
          }}
          {...inputStyles}
        />
        <Text fontSize="xs" color="gray.500">
          Angabe in € (nur Zahl, z. B. 25000)
        </Text>
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

  if (stepNumber === 2) {
    return (
      <VStack gap={{ base: "5", md: "6" }} align="stretch" w="full" minW="0">
        <Text as="label" fontSize="sm" color="gray.300" display="block">
          Wie viele <em>neuen</em> Kunden gewinnst du aktuell pro Monat?
        </Text>
        <Input
          type="number"
          min={0}
          step={1}
          placeholder="z. B. 5"
          value={answers.neueKundenProMonat ?? ""}
          onChange={(e) => {
            const v =
              e.target.value !== "" ? Number(e.target.value) : undefined;
            onAnswersChange({ neueKundenProMonat: v });
          }}
          {...inputStyles}
        />
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
          Was raubt dir aktuell am meisten Zeit und Nerven?
        </Text>
        <VStack gap="2" align="stretch">
          {HAUPTPROBLEM_OPTIONS.map((opt) => (
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
                answers.hauptproblem === opt.value ? "#01ADD5" : "gray.700"
              }
              bg="gray.800"
              color="white"
              _hover={{
                borderColor: "gray.600",
                boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s ease"
              onClick={() => onAnswersChange({ hauptproblem: opt.value })}
            >
              {opt.label}
            </Button>
          ))}
        </VStack>
        <VStack pt="4" gap="2" align="center" w="full">
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
            Potenzial anzeigen
          </Button>
          {onReset && (
            <Button
              variant="ghost"
              size={{ base: "md", md: "lg" }}
              fontWeight="600"
              color="gray.500"
              _hover={{ color: "gray.400" }}
              onClick={onReset}
              aria-label="ROI neu berechnen"
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
