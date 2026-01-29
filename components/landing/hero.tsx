"use client";

import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { ArrowRight, Code } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

// Motion-wrapped Chakra components
const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionStack = motion.create(Stack);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

// Linear-style animated graphic component
const LinearGraphic = () => {
  return (
    <Box position="relative" w="full" h="full" overflow="hidden">
      {/* Main geometric shape */}
      <MotionBox
        position="absolute"
        top="50%"
        left="50%"
        w="120px"
        h="80px"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        borderRadius="lg"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
        style={{ transform: "translate(-50%, -50%)" }}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))",
          borderRadius: "lg",
          filter: "blur(20px)"
        }}
      >
        {/* Inner code lines */}
        <VStack gap="2" p="4" align="start">
          <MotionBox
            w="60%"
            h="2px"
            bg="rgba(255, 255, 255, 0.8)"
            borderRadius="full"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <MotionBox
            w="40%"
            h="2px"
            bg="rgba(255, 255, 255, 0.6)"
            borderRadius="full"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <MotionBox
            w="70%"
            h="2px"
            bg="rgba(255, 255, 255, 0.8)"
            borderRadius="full"
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 0.8, delay: 1.6 }}
          />
        </VStack>
      </MotionBox>

      {/* Floating elements */}
      <MotionBox
        position="absolute"
        top="20%"
        right="20%"
        w="12px"
        h="12px"
        bg="blue.400"
        borderRadius="full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7, y: [-10, 10, -10] }}
        transition={{
          scale: { duration: 0.6, delay: 1.8 },
          opacity: { duration: 0.6, delay: 1.8 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="25%"
        left="15%"
        w="8px"
        h="8px"
        bg="purple.400"
        borderRadius="sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6, rotate: [0, 360] }}
        transition={{
          scale: { duration: 0.6, delay: 2 },
          opacity: { duration: 0.6, delay: 2 },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Orbiting icon */}
      <MotionBox
        position="absolute"
        top="30%"
        left="70%"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Code size={20} color="#60A5FA" />
        </motion.div>
      </MotionBox>

      {/* Background particles */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          w="2px"
          h="2px"
          bg="gray.400"
          borderRadius="full"
          top={`${20 + i * 10}%`}
          left={`${10 + i * 15}%`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3, y: [-5, 5, -5] }}
          transition={{
            scale: { duration: 0.4, delay: 0.8 + i * 0.1 },
            opacity: { duration: 0.4, delay: 0.8 + i * 0.1 },
            y: {
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            },
          }}
        />
      ))}
    </Box>
  );
};

export function Hero() {
  return (
    <Section
      header
      size="lg"
      bg="bg.subtle"
      borderBottom="1px solid"
      borderColor="border"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "10", md: "16" }}
          align={{ md: "center" }}
          justify="space-between"
        >
          {/* Enhanced Video/Graphic Section */}
          <MotionBox
            flex="1"
            order={{ base: 2, md: 1 }}
            aspectRatio={16 / 9}
            bg="gray.900"
            borderRadius="l3"
            minH={{ base: "200px", md: "280px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.700"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(102, 126, 234, 0.2)"
            }}
          >
            <LinearGraphic />
            
            {/* Overlay text */}
            <MotionBox
              position="absolute"
              bottom="4"
              left="4"
              bg="rgba(0, 0, 0, 0.8)"
              borderRadius="md"
              px="3"
              py="2"
              backdropFilter="blur(10px)"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <Text color="white" fontSize="sm" fontWeight="500">
                Skalierung visualisiert
              </Text>
            </MotionBox>
          </MotionBox>

          {/* Enhanced Text Section */}
          <MotionVStack
            flex="1"
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            gap="6"
            order={{ base: 1, md: 2 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MotionStack 
              gap="4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MotionHeading
                as="h1"
                textStyle={{ base: "2xl", md: "5xl" }}
                maxW={{ md: "lg" }}
                lineHeight="tighter"
                fontWeight="700"
                bgGradient="linear(to-r, gray.900, gray.700)"
                bgClip="text"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Dein Wissen ist wertvoll.{" "}
                <Text as="span" color="blue.600">
                  Deine Zeit ist gedeckelt.
                </Text>
              </MotionHeading>
              
              <MotionText
                color="fg.muted"
                textStyle="lg"
                maxW={{ md: "md" }}
                fontWeight="400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Wir bauen dir das{" "}
                <Text as="span" fontWeight="600" color="gray.800">
                  Betriebssystem
                </Text>
                , das deine Expertise endlich skaliert.
              </MotionText>
            </MotionStack>
            
            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="#clear-path">
                <Button
                  size="xl"
                  gap="2"
                  bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  color="white"
                  _hover={{
                    bg: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 25px -5px rgba(102, 126, 234, 0.3)",
                    "&::before": { left: "100%" },
                  }}
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transition: "left 0.5s",
                  }}
                >
                  <motion.div
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Text>Starte deine Skalierung</Text>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowRight />
                    </motion.div>
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </MotionVStack>
        </Stack>
      </motion.div>
    </Section>
  );
}