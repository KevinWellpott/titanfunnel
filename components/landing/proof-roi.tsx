"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Box,
  Container,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { motion } from "motion/react";
import { DialogRoot, DialogContent, DialogCloseTrigger } from "@/components/ui/dialog";
import { BrandedVideoPlayer } from "./branded-video-player";
import { glassCardStyles } from "./glass-card-styles";
import { proofRoiGalleryCategories } from "./proof-roi-gallery-data";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

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
  const [lightboxCategory, setLightboxCategory] = useState<{
    label: string;
    images: string[];
  } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = lightboxCategory?.images ?? [];
  const currentImage = images[lightboxIndex] ?? null;
  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!lightboxCategory) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setLightboxCategory(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxCategory, goPrev, goNext]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) goPrev();
    if (dx < -50) goNext();
    setTouchStartX(null);
  };

  return (
    <Section size="lg" color="white" py="2">
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
                      <BrandedVideoPlayer
                        vimeoId={video.vimeoId}
                        title="Case Study Video"
                        variant="proofRoi"
                        thumbnailSrc="/thumbnail-proof-roi.webp"
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

              {/* Galerie: 3 Kästchen für Case-Study-Screenshots */}
              <VStack gap="3" w="full" minW="0" mt="4" align="stretch">
                <Heading
                  as="h3"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="600"
                  color="gray.300"
                  textAlign="center"
                >
                  So sieht der Umsatzmagnet von SNT aus
                </Heading>
                <SimpleGrid columns={3} gap="3" w="full" minW="0">
                  {proofRoiGalleryCategories.map((cat) => (
                    <Box
                      key={cat.id}
                      as="button"
                      onClick={() => {
                        setLightboxCategory({ label: cat.label, images: cat.images });
                        setLightboxIndex(0);
                      }}
                      borderRadius="lg"
                      p="3"
                      textAlign="center"
                      {...glassCardStyles}
                      cursor="pointer"
                      transition="transform 0.2s, box-shadow 0.2s"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        fontWeight="600"
                        color="white"
                      >
                        {cat.label}
                      </Text>
                      <Text fontSize="2xs" color="gray.500" mt="0.5">
                        {cat.images.length} Screens
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
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
              {/* Kennzahlen leicht hervorgehoben */}
              <VStack gap="4" align={{ base: "center", lg: "start" }} w="full">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.1,
                    }}
                    viewport={{ once: true }}
                    style={{ width: "100%" }}
                  >
                    <Box
                      w="full"
                      maxW={{ base: "full", sm: "xs" }}
                      px="4"
                      py="3"
                      borderRadius="lg"
                      {...glassCardStyles}
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
                          color="gray.400"
                          fontWeight="600"
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          {stat.label}
                        </Text>
                      </VStack>
                    </Box>
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

          {/* Lightbox: Screenshots 16:9, Swipe + Pfeile */}
          <DialogRoot
            open={!!lightboxCategory}
            onOpenChange={(e) => {
              if (!e.open) setLightboxCategory(null);
            }}
          >
            <DialogContent
              maxW="5xl"
              w="full"
              margin={{ base: "4", md: "auto" }}
              mx="auto"
              borderRadius="2xl"
              overflow="hidden"
              bg="gray.900"
              p="0"
            >
              <DialogCloseTrigger aria-label="Schließen" />
              {lightboxCategory && currentImage && (
                <Box
                  position="relative"
                  aspectRatio={16 / 9}
                  w="full"
                  bg="black"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentImage}
                    alt={`${lightboxCategory.label} Screenshot ${lightboxIndex + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {images.length > 1 && (
                    <>
                      <IconButton
                        aria-label="Vorheriges Bild"
                        position="absolute"
                        left="2"
                        top="50%"
                        transform="translateY(-50%)"
                        size="md"
                        borderRadius="full"
                        bg="black/60"
                        color="white"
                        _hover={{ bg: "black/80" }}
                        onClick={goPrev}
                      >
                        <CaretLeft size={24} />
                      </IconButton>
                      <IconButton
                        aria-label="Nächstes Bild"
                        position="absolute"
                        right="2"
                        top="50%"
                        transform="translateY(-50%)"
                        size="md"
                        borderRadius="full"
                        bg="black/60"
                        color="white"
                        _hover={{ bg: "black/80" }}
                        onClick={goNext}
                      >
                        <CaretRight size={24} />
                      </IconButton>
                      <Box
                        position="absolute"
                        bottom="2"
                        left="50%"
                        transform="translateX(-50%)"
                        px="3"
                        py="1"
                        borderRadius="full"
                        bg="black/60"
                        color="white"
                        fontSize="xs"
                        fontWeight="600"
                      >
                        {lightboxIndex + 1} / {images.length}
                      </Box>
                    </>
                  )}
                </Box>
              )}
              {lightboxCategory && (
                <Box px="4" py="3" borderTopWidth="1px" borderColor="gray.800">
                  <Text fontSize="sm" fontWeight="600" color="white">
                    {lightboxCategory.label}
                  </Text>
                </Box>
              )}
            </DialogContent>
          </DialogRoot>
        </VStack>
      </Container>
    </Section>
  );
}