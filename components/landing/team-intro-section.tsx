import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Image as UiImage } from "@/components/ui/image";
import {
  testimonialLayout,
  testimonialSectionBackground,
  testimonialSpacing,
  testimonialTypography,
} from "./testimonial-types";
import type { TeamIntroFounder } from "@/app/(website)/team-intro-data";

/** Gleiche Hülle wie `VimeoCoverPlayer` (9:16, Rahmen, Schatten, Overlays) – statisches Bild statt Video */
function TeamIntroPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      w="full"
      maxW="full"
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      border="1px solid"
      borderColor="gray.700"
      style={{ aspectRatio: "9 / 16" }}
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.4)"
      bg="gray.800"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 92vw, 400px"
        quality={95}
        style={{
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
        }}
      />
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.25) 100%)"
        zIndex={1}
        pointerEvents="none"
        borderRadius="inherit"
      />
      <Box
        position="absolute"
        inset="-1px"
        bg="linear-gradient(135deg, transparent, rgba(1, 173, 213, 0.06), transparent)"
        borderRadius="inherit"
        zIndex={1}
        pointerEvents="none"
      />
    </Box>
  );
}

interface TeamIntroBlockProps {
  founder: TeamIntroFounder;
  layout: "left" | "right";
}

/**
 * 1:1 Struktur wie TestimonialLeft / TestimonialRight – nur Portrait-Bild statt VimeoCoverPlayer.
 */
function TeamIntroBlock({ founder, layout }: TeamIntroBlockProps) {
  const isLeft = layout === "left";

  const avatar = (
    <Box flexShrink={0} borderRadius="full" overflow="hidden" w="12" h="12">
      <UiImage
        src={founder.image.src}
        alt={founder.image.alt}
        width={48}
        height={48}
        borderRadius="full"
        objectFit="cover"
      />
    </Box>
  );

  const metaBlock = (
    <VStack align="flex-start" gap="0" w="full">
      <HStack gap="3" align="flex-start" w="full" pb={{ lg: testimonialSpacing.metaToTitleLg }}>
        {avatar}
        <VStack align="flex-start" gap="0" flex="1" minW="0">
          <HStack gap="0.5" role="img" aria-label="5 von 5 Sternen" pb={testimonialSpacing.metaStarsToName}>
            {[...Array(5)].map((_, i) => (
              <Text key={i} color="gray.900" fontSize={testimonialTypography.stars} lineHeight="1">
                ★
              </Text>
            ))}
          </HStack>
          <Text
            fontSize={testimonialTypography.name}
            fontWeight="600"
            color="gray.900"
            lineHeight="1.3"
            pb={testimonialSpacing.metaNameToRole}
          >
            {founder.name}
          </Text>
          <Text fontSize={testimonialTypography.role} color="gray.600" lineHeight="1.35">
            {founder.role}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );

  const titleBlock = (
    <Heading
      as="h3"
      fontSize={testimonialTypography.headline}
      fontWeight="700"
      color="gray.900"
      lineHeight={testimonialTypography.headlineLineHeight}
      letterSpacing="-0.025em"
      mb={{ base: "5", lg: testimonialSpacing.titleToBodyLg }}
    >
      {founder.title}
    </Heading>
  );

  const imageBlock = (
    <Box
      gridArea="video"
      w="full"
      minW="0"
      maxW={{ base: "full", lg: testimonialLayout.videoColumnMaxW }}
      alignSelf={{ base: "stretch", lg: "start" }}
      justifySelf={isLeft ? undefined : { lg: "end" }}
    >
      <TeamIntroPortrait src={founder.image.src} alt={founder.image.alt} />
    </Box>
  );

  const bodyBlock = (
    <VStack
      align="flex-start"
      w="full"
      minW="0"
      gap={{ base: "5", lg: testimonialSpacing.blockGap }}
    >
      <VStack align="flex-start" w="full" gap={testimonialSpacing.labelToParagraph}>
        <Text
          fontSize={testimonialTypography.sectionLabel}
          fontWeight="700"
          color="gray.900"
          lineHeight="1.35"
        >
          {founder.focusHeading}
        </Text>
        <Text
          fontSize={testimonialTypography.body}
          color="gray.600"
          lineHeight={testimonialTypography.bodyLineHeight}
          fontWeight="400"
        >
          {founder.focusBody}
        </Text>
      </VStack>
      <VStack align="flex-start" w="full" gap={testimonialSpacing.sectionToList}>
        <Text
          fontSize={testimonialTypography.sectionLabel}
          fontWeight="700"
          color="gray.900"
          lineHeight="1.35"
        >
          Ergebnisse
        </Text>
        <VStack align="flex-start" w="full" gap={{ base: "3", lg: testimonialSpacing.listItemGap }}>
          {founder.bullets.map((line, index) => (
            <HStack key={index} gap="2.5" align="flex-start">
              <Box
                w="4"
                h="4"
                borderRadius="full"
                bg="green.500"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="10px"
                fontWeight="700"
                lineHeight="1"
                flexShrink={0}
                mt="1"
              >
                ✓
              </Box>
              <Text
                fontSize={testimonialTypography.body}
                color="gray.700"
                lineHeight={testimonialTypography.bodyLineHeight}
                fontWeight="700"
              >
                {line}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );

  return (
    <Box py={{ base: "12", md: "16" }} bg={testimonialSectionBackground} w="full" minW="0">
      <Container maxW={testimonialLayout.containerMaxW} px={{ base: "5", md: "8", lg: "10" }}>
        <Box
          display={{ base: "grid", lg: "grid" }}
          w="full"
          columnGap={testimonialLayout.columnGap}
          rowGap={{ base: "5", lg: "4" }}
          alignItems={{ lg: "start" }}
          gridTemplateColumns={
            isLeft
              ? {
                  base: "1fr",
                  lg: `minmax(0, ${testimonialLayout.videoColumnMaxW}) minmax(0, 1fr)`,
                }
              : {
                  base: "1fr",
                  lg: `minmax(0, 1fr) minmax(0, ${testimonialLayout.videoColumnMaxW})`,
                }
          }
          gridTemplateAreas={
            isLeft
              ? {
                  base: `"content" "video"` as const,
                  lg: `"video content"` as const,
                }
              : {
                  base: `"content" "video"` as const,
                  lg: `"content video"` as const,
                }
          }
        >
          <VStack
            gridArea="content"
            align="flex-start"
            w="full"
            minW="0"
            alignSelf={{ lg: "center" }}
            gap={{ base: "5", lg: "2" }}
          >
            {metaBlock}
            {titleBlock}
            {bodyBlock}
          </VStack>
          {imageBlock}
        </Box>
      </Container>
    </Box>
  );
}

interface TeamIntroSectionProps {
  headline: string;
  subline?: string;
  founders: TeamIntroFounder[];
}

export function TeamIntroSection({ headline, subline, founders }: TeamIntroSectionProps) {
  if (!founders.length) return null;

  return (
    <>
      <Box as="section" py={{ base: "10", md: "12" }} bg={testimonialSectionBackground} w="full" minW="0">
        <Container maxW={testimonialLayout.containerMaxW} px={{ base: "5", md: "8", lg: "10" }}>
          <VStack
            gap={{ base: "3", md: "4" }}
            textAlign="center"
            align="center"
            maxW="3xl"
            mx="auto"
            px={{ base: "0", md: "4" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="700"
              color="gray.900"
              letterSpacing="-0.03em"
              lineHeight="1.2"
            >
              {headline}
            </Heading>
            {subline ? (
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="relaxed">
                {subline}
              </Text>
            ) : null}
          </VStack>
        </Container>
      </Box>

      {founders.map((founder, index) => (
        <TeamIntroBlock key={founder.name} founder={founder} layout={index % 2 === 0 ? "left" : "right"} />
      ))}
    </>
  );
}
