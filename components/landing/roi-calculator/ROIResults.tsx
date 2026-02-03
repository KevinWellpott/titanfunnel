"use client";

import * as React from "react";
import {
  Heading,
  Text,
  VStack,
  Box,
  Button,
  Input,
  Textarea,
  Field,
} from "@chakra-ui/react";
import { glassCardStyles } from "../glass-card-styles";
import type { RoiResult, RoiAnswers } from "./types";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

interface ROIResultsProps {
  result: RoiResult;
  answers: RoiAnswers;
  onReset?: () => void;
  onSubmit: (payload: {
    linkedinName: string;
    bremsklotz: string;
  }) => Promise<{ ok: boolean; error?: string }>;
}

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

export function ROIResults({
  result,
  answers,
  onReset,
  onSubmit,
}: ROIResultsProps) {
  const [linkedinName, setLinkedinName] = React.useState("");
  const [bremsklotz, setBremsklotz] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ln = linkedinName.trim();
    const br = bremsklotz.trim();
    if (!ln || !br) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError(null);
    const { ok, error } = await onSubmit({ linkedinName: ln, bremsklotz: br });
    setIsSubmitting(false);
    if (ok) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
      setSubmitError(error ?? "Fehler beim Senden.");
    }
  };

  const canSubmit =
    linkedinName.trim().length > 0 &&
    bremsklotz.trim().length > 0 &&
    !isSubmitting;

  return (
    <VStack gap={{ base: "6", md: "8" }} align="stretch" w="full" minW="0">
      <Heading as="h2" fontSize={{ base: "md", md: "lg" }} fontWeight="600" color="white">
        Dein Potenzial
      </Heading>

      <Box
        borderRadius="xl"
        p={{ base: "4", md: "6" }}
        textAlign="center"
        w="full"
        minW="0"
        {...glassCardStyles}
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="600"
          color="white"
          lineHeight="1.4"
        >
          Potenzial: Bis zu {formatCurrency(result.yearlyPotential)} mehr
          Umsatz pro Jahr, wenn du {result.problemLabel} löst.
        </Text>
      </Box>

      <Box
        as="form"
        onSubmit={handleSubmit}
        borderRadius="xl"
        p={{ base: "4", md: "6" }}
        w="full"
        minW="0"
        {...glassCardStyles}
      >
        <VStack gap="5" align="stretch">
          <Text fontSize="sm" fontWeight="600" color="white">
            Beantworte mir noch die beiden Fragen und ich sende dir ein 5 Minütiges Scaling Video auf LinkedIn zu.
          </Text>

          <Field.Root required>
            <Field.Label color="gray.300">
              LinkedIn-Name / Profil
            </Field.Label>
            <Input
              type="text"
              placeholder="z. B. Max Mustermann oder linkedin.com/in/maxmustermann"
              value={linkedinName}
              onChange={(e) => setLinkedinName(e.target.value)}
              {...inputStyles}
              maxLength={500}
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label color="gray.300">
              Was ist der eine größte Bremsklotz in deinem Business und bist du
              bereit, etwas zu ändern, um das zu lösen?
            </Field.Label>
            <Textarea
              placeholder="Deine Antwort..."
              value={bremsklotz}
              onChange={(e) => setBremsklotz(e.target.value)}
              minHeight="120px"
              resize="vertical"
              {...inputStyles}
              maxLength={2000}
            />
          </Field.Root>

          {submitStatus === "success" && (
            <Text color="green.400" fontSize="sm">
              Vielen Dank! Wir melden uns bei dir.
            </Text>
          )}
          {submitStatus === "error" && submitError && (
            <Text color="red.400" fontSize="sm">
              {submitError}
            </Text>
          )}

          <Button
            type="submit"
            size={{ base: "md", md: "lg" }}
            bg="#01ADD5"
            color="white"
            fontWeight="600"
            borderRadius="lg"
            w="full"
            _hover={{
              boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
              transform: "translateY(-1px)",
            }}
            disabled={!canSubmit}
          >
            {isSubmitting ? "Wird gesendet…" : "Absenden"}
          </Button>
        </VStack>
      </Box>

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
  );
}
