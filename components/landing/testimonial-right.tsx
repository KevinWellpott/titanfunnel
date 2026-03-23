"use client";

import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { VimeoCoverPlayer } from "./vimeo-cover-player";
import { Link } from "@/components/ui/link";
import { Image } from "@/components/ui/image";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import {
  testimonialSectionBackground,
  testimonialLayout,
  testimonialTypography,
  testimonialSpacing,
  type TestimonialBlockProps,
} from "./testimonial-types";

export function TestimonialRight(props: TestimonialBlockProps) {
  const {
    vimeoId,
    title,
    name,
    role,
    beforeText,
    beforeValue,
    results,
    socialLinks,
    photoSrc,
    videoPosterSrc,
  } = props;

  const hasSocial = Boolean(
    socialLinks?.linkedin || socialLinks?.instagram || socialLinks?.website
  );

  const avatar = photoSrc ? (
    <Box flexShrink={0} borderRadius="full" overflow="hidden" w="12" h="12">
      <Image
        src={photoSrc}
        alt={name}
        width={48}
        height={48}
        borderRadius="full"
        objectFit="cover"
      />
    </Box>
  ) : (
    <Box
      w="12"
      h="12"
      bg="gray.100"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="lg"
      flexShrink={0}
    >
      👤
    </Box>
  );

  const metaBlock = (
    <VStack align="flex-start" gap="0" w="full" gridArea="meta">
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
            {name}
          </Text>
          <Text fontSize={testimonialTypography.role} color="gray.600" lineHeight="1.35">
            {role}
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
      gridArea="title"
      mb={{ base: "5", lg: testimonialSpacing.titleToBodyLg }}
    >
      {title}
    </Heading>
  );

  const videoBlock = (
    <Box
      gridArea="video"
      w="full"
      minW="0"
      maxW={{ base: "full", lg: testimonialLayout.videoColumnMaxW }}
      alignSelf={{ base: "stretch", lg: "start" }}
      justifySelf={{ lg: "end" }}
    >
      <VimeoCoverPlayer
        vimeoId={vimeoId}
        title={`${name} Testimonial`}
        posterSrc={videoPosterSrc}
      />
    </Box>
  );

  const bodyBlock = (
    <VStack
      align="flex-start"
      w="full"
      minW="0"
      gridArea="body"
      gap={{ base: "5", lg: testimonialSpacing.blockGap }}
    >
      <VStack align="flex-start" w="full" gap={testimonialSpacing.labelToParagraph}>
        <Text
          fontSize={testimonialTypography.sectionLabel}
          fontWeight="700"
          color="gray.900"
          lineHeight="1.35"
        >
          {beforeText}
        </Text>
        <Text
          fontSize={testimonialTypography.body}
          color="gray.600"
          lineHeight={testimonialTypography.bodyLineHeight}
          fontWeight="400"
        >
          {beforeValue}
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
          {results.map((result, index) => (
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
                {result.text}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );

  const socialBlock =
    hasSocial && socialLinks ? (
      <Box
   
        gridArea="videoSocial"
        w="full"
        maxW={{ lg: testimonialLayout.videoColumnMaxW }}
        justifySelf={{ lg: "end" }}
        pt={{ base: "4", lg: "5" }}
      >
        <HStack gap="6" flexWrap="wrap" justify={{ base: "flex-start", lg: "flex-end" }}>
          {socialLinks.linkedin && (
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <HStack gap="2" color="gray.600" fontSize="14px" _hover={{ color: "#0077B5" }}>
                <SiLinkedin size={16} />
                
              </HStack>
            </Link>
          )}
          {socialLinks.instagram && (
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <HStack gap="2" color="gray.600" fontSize="14px" _hover={{ color: "#E4405F" }}>
                <SiInstagram size={16} />
              
              </HStack>
            </Link>
          )}
          {socialLinks.website && (
            <Link href={socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label="Webseite">
              <HStack gap="2" color="gray.600" fontSize="14px" _hover={{ color: "#01ADD5" }}>
                <FiGlobe size={16} />
               
              </HStack>
            </Link>
          )}
        </HStack>
      </Box>
    ) : null;

  return (
    <Box py={{ base: "12", md: "16" }} bg={testimonialSectionBackground} w="full" minW="0">
      <Container maxW={testimonialLayout.containerMaxW} px={{ base: "5", md: "8", lg: "10" }}>
        <Box
          display={{ base: "grid", lg: "grid" }}
          w="full"
          columnGap={testimonialLayout.columnGap}
          rowGap={{ base: "5", lg: "4" }}
          alignItems={{ lg: "start" }}
          gridTemplateColumns={{
            base: "1fr",
            lg: `minmax(0, 1fr) minmax(0, ${testimonialLayout.videoColumnMaxW})`,
          }}
          gridTemplateAreas={{
            base: hasSocial
              ? (`"content" "video" "videoSocial"` as const)
              : (`"content" "video"` as const),
            lg: hasSocial
              ? (`"content video" ". videoSocial"` as const)
              : (`"content video"` as const),
          }}
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
          {videoBlock}
          {socialBlock}
        </Box>
      </Container>
    </Box>
  );
}
