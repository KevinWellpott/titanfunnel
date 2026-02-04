"use client";

import { useState } from "react";
import {
  Heading,
  Text,
  Box,
  VStack,
  Container,
  Link,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { glassCardStyles } from "./glass-card-styles";
import { faqItems } from "./faq-data";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

const CALENDLY_URL = "https://calendly.com/vertrieb-titandevelopment/30min";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section size="lg" color="white" py={{ base: "10", md: "16" }} id="faq">
      <Container maxW="4xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "8", md: "12" }} w="full" minW="0">
          <VStack
            gap={{ base: "3", md: "4" }}
            textAlign="center"
            maxW="2xl"
            px={{ base: "2", md: "0" }}
            w="full"
            minW="0"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
            >
              Häufige Fragen
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="relaxed"
              fontWeight="400"
            >
              Kurz und ehrlich – damit du weißt, woran du bist
            </Text>
          </VStack>

          <VStack gap="2" w="full" minW="0" align="stretch">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Box
                  key={index}
                  borderRadius="xl"
                  overflow="hidden"
                  minW="0"
                  w="full"
                  {...glassCardStyles}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    w="full"
                    minW="0"
                    h="auto"
                    minH="0"
                    textAlign="left"
                    px={{ base: "4", md: "5" }}
                    py={{ base: "4", md: "5" }}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="3"
                    cursor="pointer"
                    transition="background 0.2s"
                    _hover={{ bg: "white/5" }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="600"
                      color="white"
                      flex="1"
                      minW="0"
                      overflowWrap="break-word"
                      wordBreak="break-word"
                    >
                      {item.question}
                    </Text>
                    <Box
                      as="span"
                      flexShrink={0}
                      transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                      transition="transform 0.2s"
                      color="gray.400"
                    >
                      <CaretDown size={20} weight="bold" />
                    </Box>
                  </Button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          px={{ base: "4", md: "5" }}
                          pb={{ base: "4", md: "5" }}
                          pt="0"
                          minW="0"
                          overflow="hidden"
                        >
                          <Text
                            fontSize={{ base: "sm", md: "md" }}
                            color="gray.300"
                            lineHeight="relaxed"
                            pl="0"
                            overflowWrap="break-word"
                            wordBreak="break-word"
                          >
                            {item.answer}
                          </Text>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              );
            })}
          </VStack>

          <VStack gap="4" w="full" minW="0" pt="4">
            <Text
              color="gray.400"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="600"
              textAlign="center"
            >
              Noch Fragen? Im Analysegespräch klären wir alles.
            </Text>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              w="full"
              maxW="md"
              display="block"
              _hover={{ textDecoration: "none" }}
            >
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
                Kostenloses Analysegespräch buchen
                <ArrowRight size={16} />
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
