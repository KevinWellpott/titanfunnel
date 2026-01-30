"use client";

import {
  Heading,
  Text,
  Stack,
  VStack,
  Box,
  Container,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

const VIMEO_PARAMS = "title=0&byline=0&portrait=0";

export interface ProofRoiVideoProp {
  vimeoId: string;
}

const stats = [
  { value: "10k → 60k €", label: "Umsatz/Monat" },
  { value: ">650%", label: "ROI" },
  { value: "20h → 4h", label: "Admin/Woche" },
];

const quote = {
  text: "Endlich ein System, das mitdenkt, nicht nur ein Tool. In wenigen Monaten mehr Skalierung als in Jahren davor.",
  author: "Emre Kopal",
  role: "B2C Coach & Berater",
};

export function ProofRoi({ video }: { video?: ProofRoiVideoProp | null }) {
  return (
    <Section size="lg" bg="gray.900" color="white" py="2">
      <Container maxW="6xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "8", md: "12" }} w="full" minW="0">
          {/* Compact Header */}
          <MotionVStack
            gap={{ base: "3", md: "4" }}
            textAlign="center"
            maxW="3xl"
            px={{ base: "2", md: "0" }}
            w="full"
            minW="0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           

            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="600"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              color="white"
            >
              Wie können unsere Systeme{" "}
              <Box 
                as="span" 
                color="white"
            
              >
                aussehen?
              </Box>
            </Heading>
            
            <Text 
              color="gray.400" 
              fontSize={{ base: "md", md: "lg" }} 
              maxW="2xl" 
              lineHeight="relaxed"
              fontWeight="400"
            >
              Ein konkretes Beispiel von einem unserer Kunden
            </Text>
          </MotionVStack>

          {/* Compact Content Layout */}
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "8", md: "12" }}
            align="stretch"
            w="full"
            minW="0"
          >
            {/* Video - Same Size */}
            <MotionBox
              flex={{ base: "1", lg: "1.2" }}
              minW="0"
              w="full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  aspectRatio={16 / 9}
                  bg="gray.800"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.700"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                  boxShadow="0 20px 40px -12px rgba(0, 0, 0, 0.3)"
                  _before={{
                    content: '""',
                    position: "absolute",
                    inset: "-1px",
                    bg: "linear-gradient(135deg, transparent, rgba(1, 173, 213, 0.1), transparent)",
                    borderRadius: "inherit",
                    zIndex: "-1"
                  }}
                >
                  {video?.vimeoId ? (
                    <Box
                      position="absolute"
                      inset="0"
                      w="100%"
                      h="100%"
                      borderRadius="2xl"
                      overflow="hidden"
                    >
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}?${VIMEO_PARAMS}`}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          borderRadius: "var(--chakra-radii-2xl)",
                        }}
                        title="Case Study Video"
                      />
                    </Box>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          w="20"
                          h="20"
                          bg="#01ADD5"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          cursor="pointer"
                          position="relative"
                          boxShadow="0 0 0 0 rgba(1, 173, 213, 0.4)"
                          _before={{
                            content: '""',
                            position: "absolute",
                            inset: "-6px",
                            bg: "#01ADD5",
                            borderRadius: "50%",
                            opacity: 0.1,
                            filter: "blur(12px)"
                          }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </motion.div>
                        </Box>
                      </motion.div>

                      {/* Subtle grid pattern */}
                      <Box
                        position="absolute"
                        inset="0"
                        opacity="0.03"
                        backgroundImage="radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)"
                        backgroundSize="32px 32px"
                      />
                    </>
                  )}
                </Box>
              </motion.div>
            </MotionBox>

            {/* Compact Stats & Quote */}
            <MotionVStack
              flex="1"
              gap="8"
              align={{ base: "center", lg: "start" }}
              textAlign={{ base: "center", lg: "left" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Clean Stats - No Boxes */}
              <VStack gap="4" align={{ base: "center", lg: "start" }} w="full">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + i * 0.1 
                    }}
                    viewport={{ once: true }}
                    style={{ width: "100%" }}
                  >
                    <VStack 
                      align={{ base: "center", lg: "start" }} 
                      gap="1"
                    >
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="800"
                        lineHeight="tight"
                        color="white"
                      >
                        {stat.value}
                      </Text>
                      <Text 
                        fontSize={{ base: "2xs", md: "xs" }} 
                        color="gray.500" 
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        {stat.label}
                      </Text>
                    </VStack>
                  </motion.div>
                ))}
              </VStack>

              {/* Compact Quote */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                style={{ width: "100%" }}
              >
                <Box 
                  pt="6" 
                  borderTop="1px solid" 
                  borderColor="gray.800"
                  w="full"
                >
                  <VStack gap="4" align={{ base: "center", lg: "start" }}>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="500"
                      lineHeight="relaxed"
                      color="gray.200"
                      fontStyle="italic"
                      position="relative"
                      _before={{
                        content: '"\\201C"',
                        position: "absolute",
                        left: "-0.75rem",
                        top: "0",
                        fontSize: "2xl",
                        color: "blue.400",
                        fontFamily: "serif",
                        opacity: 0.7
                      }}
                    >
                      {quote.text}
                    </Text>
                    
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="3"
                      alignSelf={{ base: "center", lg: "flex-start" }}
                    >
                      <Box
                        w="10"
                        h="10"
                        bg="blue.500/10"
                        border="2px solid"
                        borderColor="blue.500/20"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          w="5"
                          h="5"
                          bg="blue.400"
                          borderRadius="full"
                        />
                      </Box>
                      
                      <VStack align="start" gap="0.5">
                        <Text fontWeight="700" fontSize={{ base: "xs", md: "sm" }} color="white">
                          {quote.author}
                        </Text>
                        <Text color="gray.500" fontSize={{ base: "2xs", md: "xs" }} fontWeight="500">
                          {quote.role}
                        </Text>
                      </VStack>
                    </Box>
                  </VStack>
                </Box>
              </motion.div>
            </MotionVStack>
          </Stack>
        </VStack>
      </Container>
    </Section>
  );
}