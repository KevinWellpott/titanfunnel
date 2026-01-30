"use client";

import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { useROICalculator } from "./useROICalculator";
import { ProgressStepper } from "./ProgressStepper";
import { QuestionStep } from "./QuestionStep";
import { ROIResults } from "./ROIResults";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

export function RoiCalculator() {
  const {
    state,
    setStep,
    setAnswers,
    goToResults,
    result,
    reset,
  } = useROICalculator();

  const isResultsStep = state.step === 6;

  return (
    <Section size="lg" bg="gray.900" color="white" py="10" id="roi-rechner">
      <Container maxW="4xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "6", md: "8" }} align="stretch" w="full" minW="0">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            textAlign="center"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
              px={{ base: "2", md: "0" }}
            >
              ROI-Rechner
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              maxW="2xl"
              mx="auto"
              mt="3"
              px={{ base: "2", md: "0" }}
              textAlign="center"
            >
              Transparente, konservative Berechnung deines Return on Investment.
              Beantworte 5 kurze Fragen – wir berechnen deinen ROI und
              melden uns bei dir.
            </Text>
          </MotionBox>

          {!isResultsStep && (
            <ProgressStepper currentStep={state.step} />
          )}

          {state.step >= 1 && state.step <= 5 && (
            <MotionBox
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              w="full"
            >
              <QuestionStep
                stepNumber={state.step}
                answers={state.answers}
                onAnswersChange={setAnswers}
                onNext={
                  state.step < 5
                    ? () => setStep(state.step + 1)
                    : goToResults
                }
                onReset={reset}
              />
            </MotionBox>
          )}

          {isResultsStep && result && (
            <MotionBox
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              w="full"
            >
              <ROIResults result={result} onReset={reset} />
            </MotionBox>
          )}
        </VStack>
      </Container>
    </Section>
  );
}
