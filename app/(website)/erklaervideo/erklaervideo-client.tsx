"use client";

import { Box, VStack } from "@chakra-ui/react";
import { BrandedVideoPlayer } from "@/components/landing/branded-video-player";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "@phosphor-icons/react";
import type { LandingVideoSlot } from "@/utils/supabase/videos";

const MEHR_ERFAHREN_URL = "/";

export function ErklaervideoClient({
  video,
}: {
  video: LandingVideoSlot | null;
}) {
  return (
    <VStack gap={{ base: "8", md: "10" }} w="full" maxW="4xl">
      <Box
        w="full"
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        bg="blackAlpha.400"
        aspectRatio={16 / 9}
        maxH={{ base: "auto", md: "70vh" }}
      >
        {video?.vimeoId ? (
          <BrandedVideoPlayer
            vimeoId={video.vimeoId}
            title="Erklärvideo"
            variant="proofRoi"
            thumbnailSrc="/thumbnail-proof-roi.webp"
          />
        ) : (
          <Box
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
            fontSize="sm"
          >
            Kein Video hinterlegt.
          </Box>
        )}
      </Box>

      <Link
        href={MEHR_ERFAHREN_URL}
        w="full"
        maxW="xs"
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
          Mehr erfahren
          <ArrowRight size={16} />
        </Button>
      </Link>
    </VStack>
  );
}
