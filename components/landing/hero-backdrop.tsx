"use client";

import { Box } from "@chakra-ui/react";

const BRAND = "#8484ff";

/** Ohne rohes `/>` im String – sonst bricht TSX-Parser */
const NOISE_DATA_URL = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>'
)}")`;

/** Sterne + Mesh – identisch zum Home-Hero */
export function HeroBackdrop() {
  return (
    <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none" aria-hidden zIndex={0}>
      <style>{`
        @keyframes heroOrbA {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.85; }
          50% { transform: translate(4%, -3%) scale(1.08); opacity: 1; }
        }
        @keyframes heroOrbB {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.7; }
          50% { transform: translate(-5%, 4%) scale(1.06); opacity: 0.9; }
        }
        @keyframes heroShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <Box position="absolute" inset="0" bg="#030308" />

      <Box
        position="absolute"
        top="-25%"
        left="-15%"
        w="85%"
        h="110%"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.55}
        bg="radial-gradient(ellipse 70% 60% at 40% 35%, rgba(132, 132, 255, 0.75) 0%, rgba(99, 102, 241, 0.25) 40%, transparent 72%)"
        animation="heroOrbA 18s ease-in-out infinite"
      />
      <Box
        position="absolute"
        top="0%"
        right="-20%"
        w="70%"
        h="95%"
        borderRadius="full"
        filter="blur(70px)"
        opacity={0.4}
        bg="radial-gradient(ellipse 65% 55% at 65% 40%, rgba(1, 173, 213, 0.45) 0%, rgba(132, 132, 255, 0.15) 50%, transparent 70%)"
        animation="heroOrbB 22s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="10%"
        w="80%"
        h="60%"
        filter="blur(90px)"
        opacity={0.35}
        bg="radial-gradient(ellipse 80% 50% at 50% 100%, rgba(132, 132, 255, 0.35) 0%, transparent 65%)"
      />

      <Box
        position="absolute"
        inset="-20%"
        opacity={0.15}
        style={{
          background:
            "linear-gradient(125deg, transparent 35%, rgba(132, 132, 255, 0.5) 48%, rgba(255, 255, 255, 0.15) 50%, transparent 62%)",
          backgroundSize: "200% 200%",
          animation: "heroShimmer 14s ease-in-out infinite alternate",
        }}
      />

      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(ellipse 85% 75% at 50% 45%, transparent 0%, rgba(3, 3, 8, 0.55) 100%)"
      />

      <Box
        position="absolute"
        inset="0"
        opacity={0.45}
        bgImage="radial-gradient(1.5px 1.5px at 20px 30px, rgba(255,255,255,0.5) 50%, transparent 52%), radial-gradient(1px 1px at 60px 80px, rgba(255,255,255,0.35) 50%, transparent 52%), radial-gradient(1px 1px at 120px 40px, rgba(255,255,255,0.4) 50%, transparent 52%)"
        bgSize="180px 220px, 220px 180px, 200px 200px"
      />

      <Box
        position="absolute"
        inset="0"
        opacity={0.06}
        bgImage="linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)"
        bgSize="64px 64px"
      />

      <Box position="absolute" inset="0" opacity={0.035} bgImage={NOISE_DATA_URL} />

      <Box
        position="absolute"
        top={{ base: "14%", md: "20%" }}
        left={{ base: "3%", md: "8%" }}
        w={{ base: "72px", md: "100px" }}
        h={{ base: "48px", md: "56px" }}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.14)"
        bg="rgba(255,255,255,0.06)"
        backdropFilter="blur(12px)"
        transform="rotate(-10deg)"
        boxShadow="0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)"
      />
      <Box
        position="absolute"
        top={{ base: "18%", md: "26%" }}
        right={{ base: "4%", md: "10%" }}
        w={{ base: "56px", md: "72px" }}
        h={{ base: "56px", md: "72px" }}
        borderRadius="full"
        borderWidth="1px"
        borderColor="rgba(132, 132, 255, 0.35)"
        bg="rgba(132, 132, 255, 0.08)"
        backdropFilter="blur(10px)"
        transform="rotate(15deg)"
        boxShadow="0 0 40px rgba(132, 132, 255, 0.2)"
      />
      <Box
        position="absolute"
        bottom={{ base: "22%", md: "28%" }}
        left={{ base: "6%", md: "14%" }}
        w="12px"
        h="12px"
        borderRadius="full"
        bg={BRAND}
        boxShadow="0 0 24px rgba(132, 132, 255, 0.9), 0 0 48px rgba(132, 132, 255, 0.4)"
      />
    </Box>
  );
}
