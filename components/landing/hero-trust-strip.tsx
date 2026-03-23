"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import type { HeroTrustConfig } from "@/app/(website)/hero-trust-data";

const AVATAR_PX = 40;
const STAR_COLOR = "#f59e0b";

function TrustAvatar({
  src,
  alt,
  index,
  total,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <Box
      as="li"
      position="relative"
      flexShrink={0}
      ml={index === 0 ? "0" : "-2.5"}
      zIndex={total - index}
      w={`${AVATAR_PX}px`}
      h={`${AVATAR_PX}px`}
      borderRadius="full"
      borderWidth="2px"
      borderColor="white"
      overflow="hidden"
      bg="gray.600"
      boxShadow="0 2px 8px rgba(0,0,0,0.35)"
    >
      {failed ? (
        <Box w="full" h="full" bg="gray.500" display="flex" alignItems="center" justifyContent="center" fontSize="xs" color="gray.300">
          ?
        </Box>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={AVATAR_PX}
          height={AVATAR_PX}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setFailed(true)}
        />
      )}
    </Box>
  );
}

export function HeroTrustStrip({ config }: { config: HeroTrustConfig }) {
  const { avatars, line1, line2Bold, line2Suffix } = config;
  if (!avatars.length) return null;

  return (
    <HStack
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: "3", sm: "5", md: "6" }}
      align="center"
      justify="center"
      w="full"
      maxW="2xl"
      pt={{ base: "1", md: "2" }}
      pb="1"
    >
      <Box as="ul" display="flex" flexDirection="row" alignItems="center" listStyleType="none" pl="0" m="0" pr={{ base: "0", sm: "1" }}>
        {avatars.map((a, i) => (
          <TrustAvatar key={i} src={a.src} alt={a.alt} index={i} total={avatars.length} />
        ))}
      </Box>

      <VStack align={{ base: "center", sm: "flex-start" }} gap="0.5" minW="0" flex="1">
        <HStack gap="0.5" role="img" aria-label="5 von 5 Sternen">
          {[0, 1, 2, 3, 4].map((i) => (
            <Text key={i} as="span" fontSize="14px" lineHeight="1" color={STAR_COLOR}>
              ★
            </Text>
          ))}
        </HStack>
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="600"
          color="gray.200"
          lineHeight="1.35"
          textAlign={{ base: "center", sm: "left" }}
        >
          {line1}
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300" lineHeight="1.35" textAlign={{ base: "center", sm: "left" }}>
          <Text as="span" fontWeight="800" color="white">
            {line2Bold}
          </Text>{" "}
          {line2Suffix}
        </Text>
      </VStack>
    </HStack>
  );
}
