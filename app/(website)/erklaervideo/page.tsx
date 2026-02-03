
import { Box, Container, VStack } from "@chakra-ui/react";
import { getLandingVideos } from "@/utils/supabase";
import { generateMetadata } from "@/utils/metadata";
import { ErklaervideoClient } from "@/app/(website)/erklaervideo/erklaervideo-client";

export const metadata = generateMetadata({
  title: "Erklärvideo",
  description: "So können unsere Systeme aussehen – ein kurzer Einblick.",
});

export const revalidate = 60;

export default async function ErklaervideoPage() {
  const videos = await getLandingVideos();

  return (
    <Box
      as="main"
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="calc(100vh - 80px)"
      py={{ base: "10", md: "16" }}
      px={{ base: "4", md: "6" }}
    >
      <Container maxW="4xl" w="full" centerContent>
        <VStack gap={{ base: "8", md: "10" }} w="full">
          <ErklaervideoClient video={videos.proof_roi} />
        </VStack>
      </Container>
    </Box>
  );
}
