import { Box, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export interface SocialProofImageItem {
  src: string;
  alt: string;
}

interface SocialProofGalleryProps {
  title: string;
  subtitle?: string;
  images: SocialProofImageItem[];
}

/**
 * Immer 3 Spalten: links & rechts oben bündig, Mitte startet tiefer (I · I /  I).
 * Bilder round-robin auf Spalte 0 → 1 → 2 verteilen.
 */
export function SocialProofGallery({ title, subtitle, images }: SocialProofGalleryProps) {
  if (!images.length) return null;

  const desktopImages = images.slice(0, 30);
  const mobileImages = images.slice(0, 10);

  const columns: SocialProofImageItem[][] = [[], [], []];
  desktopImages.forEach((item, i) => {
    columns[i % 3].push(item);
  });

  return (
    <Box as="section" py={{ base: "12", md: "16" }}  w="full" minW="0" bg="#FBFBFF">
      <Container maxW="7xl" px={{ base: "4", md: "6" }}>
        <VStack gap={{ base: "6", md: "8" }} align="center" textAlign="center" mb={{ base: "8", md: "10" }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="gray.900"
            letterSpacing="-0.02em"
          >
            {title}
          </Heading>
          {subtitle ? (
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
              {subtitle}
            </Text>
          ) : null}
        </VStack>

        {/* Mobile: genau eine Spalte, große Screenshots */}
        <VStack
          display={{ base: "flex", md: "none" }}
          gap="5"
          w="full"
          align="center"
        >
          {mobileImages.map((item, index) => (
            <Box
              key={`${item.src}-mobile-${index}`}
              w="full"
              maxW="430px"
              borderRadius="2xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="transparent"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1179}
                height={2556}
                sizes="92vw"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                quality={90}
              />
            </Box>
          ))}
        </VStack>

        {/* Desktop/Tablet: 3 Spalten */}
        <HStack
          display={{ base: "none", md: "flex" }}
          align="flex-start"
          flexWrap="nowrap"
          gap={{ base: "2", md: "3", lg: "6" }}
          w="full"
          minW="0"
        >
          {columns.map((colItems, colIndex) => (
            <VStack
              key={colIndex}
              flex="1"
              minW="0"
              gap={{ base: "4", md: "6", lg: "8" }}
              align="stretch"
              pt={
                colIndex === 1
                  ? { base: "10", sm: "14", md: "18", lg: "22" }
                  : "0"
              }
            >
              {colItems.map((item, rowIndex) => (
                <Box
                  key={`${item.src}-${colIndex}-${rowIndex}`}
                  w="full"
                  borderRadius="2xl"
                  overflow="hidden"
                  borderWidth="1px"
                  borderColor="transparent"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1179}
                    height={2556}
                    sizes="(max-width: 640px) 31vw, (max-width: 1024px) 28vw, 22vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                    quality={90}
                  />
                </Box>
              ))}
            </VStack>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
