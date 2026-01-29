import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Stack,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { ArrowRight, Plus } from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    id: "development",
    title: "Purpose-built for product development",
    description: "Streamlined workflows designed specifically for modern development teams",
    visual: (
      <Box position="relative" w="full" h="200px" bg="gray.800" borderRadius="lg" overflow="hidden">
        {/* Geometric illustration */}
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Box
            w="120px"
            h="80px"
            bg="gray.700"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.600"
            position="relative"
            transform="perspective(400px) rotateX(15deg) rotateY(-15deg)"
          >
            {/* Code-like lines */}
            <VStack gap="2" p="3" align="start">
              <Box w="60%" h="2px" bg="blue.400" borderRadius="full" />
              <Box w="40%" h="2px" bg="green.400" borderRadius="full" />
              <Box w="70%" h="2px" bg="purple.400" borderRadius="full" />
              <Box w="50%" h="2px" bg="yellow.400" borderRadius="full" />
            </VStack>
            {/* Floating elements */}
            <Box
              position="absolute"
              top="-10px"
              right="-10px"
              w="20px"
              h="20px"
              bg="blue.500"
              borderRadius="full"
              opacity="0.8"
            />
            <Box
              position="absolute"
              bottom="-5px"
              left="-5px"
              w="15px"
              h="15px"
              bg="green.500"
              borderRadius="sm"
              opacity="0.6"
            />
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    id: "speed",
    title: "Designed to move fast",
    description: "50ms response times and lightning-fast interactions",
    badge: "50ms",
    visual: (
      <Box position="relative" w="full" h="200px" bg="gray.800" borderRadius="lg" overflow="hidden">
        {/* Speed lines animation */}
        <Box position="absolute" inset="0" display="flex" alignItems="center" justifyContent="center">
          {[...Array(12)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              w="60px"
              h="1px"
              bg="blue.400"
              left="20%"
              top={`${30 + i * 3}%`}
              opacity={0.3 + (i * 0.05)}
              transform={`translateX(${i * 8}px)`}
            />
          ))}
          {/* Central badge */}
          <Box
            bg="gray.900"
            border="1px solid"
            borderColor="gray.600"
            borderRadius="md"
            px="3"
            py="1"
            fontSize="sm"
            color="blue.400"
            fontWeight="mono"
          >
            50ms
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    id: "perfection",
    title: "Crafted to perfection",
    description: "Every detail designed with care and precision",
    visual: (
      <Box position="relative" w="full" h="200px" bg="gray.800" borderRadius="lg" overflow="hidden">
        {/* Geometric perfection visual */}
        <Box position="absolute" inset="0" display="flex" alignItems="center" justifyContent="center">
          {/* Central diamond */}
          <Box
            w="60px"
            h="60px"
            bg="purple.500"
            transform="rotate(45deg)"
            position="relative"
            opacity="0.8"
          />
          {/* Orbiting dots */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const radius = 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <Box
                key={i}
                position="absolute"
                w="8px"
                h="8px"
                bg="white"
                borderRadius="full"
                transform={`translate(${x}px, ${y}px)`}
                opacity="0.6"
              />
            );
          })}
          {/* Corner elements */}
          <Box position="absolute" top="20px" right="20px" w="3px" h="3px" bg="blue.400" borderRadius="full" />
          <Box position="absolute" bottom="20px" left="20px" w="3px" h="3px" bg="green.400" borderRadius="full" />
        </Box>
      </Box>
    ),
  },
];

export function ScalingGap() {
  return (
    <Section size="lg" bg="gray.900" color="white">
      <VStack gap="16" w="full">
        {/* Header */}
        <Stack gap="6" textAlign="center" maxW="4xl" mx="auto">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="700"
            lineHeight="1.1"
            letterSpacing="-0.02em"
          >
            Made for modern{" "}
            <Text as="span" display="block">
              product teams
            </Text>
          </Heading>
          
          <HStack gap="4" justify="center" flexWrap="wrap">
            <Text color="gray.400" fontSize="lg" maxW="lg">
              Linear is shaped by the practices and principles that distinguish 
              world-class product teams from the rest: relentless focus, fast execution, 
              and a commitment to the quality of craft.
            </Text>
            <Button
              variant="ghost"
             
              color="white"
              _hover={{ bg: "gray.800" }}
              size="sm"
            >
              Make the switch
            </Button>
          </HStack>
        </Stack>

        {/* Feature Cards */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" w="full" maxW="7xl">
          {features.map((feature) => (
            <Box
              key={feature.id}
              bg="gray.800"
              border="1px solid"
              borderColor="gray.700"
              borderRadius="xl"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                borderColor: "gray.600",
                transform: "translateY(-4px)",
                shadow: "2xl",
              }}
              position="relative"
            >
              {/* Visual/Image Area */}
              {feature.visual}
              
              {/* Content */}
              <Box p="6">
                <VStack gap="4" align="start">
                  <HStack justify="space-between" w="full">
                    <Heading size="md" fontWeight="600" color="white">
                      {feature.title}
                    </Heading>
                    <Box
                      w="8"
                      h="8"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="gray.700"
                      borderRadius="full"
                      border="1px solid"
                      borderColor="gray.600"
                      cursor="pointer"
                      transition="all 0.2s"
                      _hover={{
                        bg: "gray.600",
                        transform: "scale(1.1)",
                      }}
                    >
                      <Plus size="16" />
                    </Box>
                  </HStack>
                  
                  <Text color="gray.400" fontSize="sm" lineHeight="1.6">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Section>
  );
}