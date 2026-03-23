import {
  Container,
  HStack,
  Icon,
  Stack,
  Text,
  type TextProps,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Logo } from "./logo";
import { projectConfig } from "@/config";
import { Link } from "../ui/link";

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Datenschutz" },
  { href: "/legal/terms-and-conditions", label: "AGB" },
  { href: "/legal/cookie-policy", label: "Cookie-Richtlinie" },
];

const socialLinks = [
  { href: projectConfig.links.linkedin, icon: <SiLinkedin /> },
  { href: projectConfig.links.github, icon: <SiGithub /> },
];

const Copyright = (props: TextProps) => (
  <Text fontSize="sm" color="gray.500" {...props}>
    &copy; {new Date().getFullYear()} {projectConfig.general.name}. All rights
    reserved.
  </Text>
);

export const Footer = () => (
  <Container as="footer" py={{ base: "10", md: "12" }} maxW={{ base: "full", md: "6xl", lg: "7xl" }} px={{ base: "4", md: "6" }} bg="white" color="gray.900">
    <Stack gap="6">
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        gap="6"
      >
        <Link href="/" _hover={{ opacity: 0.9 }}>
          <Text
            fontFamily="heading"
            fontWeight="500"
            fontSize="xl"
            letterSpacing="-0.02em"
            color="gray.900"
          >
            titan.
          </Text>
        </Link>
        <HStack gap="6" flexWrap="wrap">
          {legalLinks.map(({ href, label }) => (
            <Link key={href} href={href} fontSize="sm" color="gray.600" _hover={{ color: "gray.900" }}>
              {label}
            </Link>
          ))}
          <HStack gap="4">
            {socialLinks.map(({ href, icon }, index) => (
              <Link 
                key={index} 
                href={href} 
                color="gray.600" 
                _hover={{ color: "#01ADD5" }}
                aria-label={index === 0 ? "LinkedIn" : "GitHub"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="md">{icon}</Icon>
              </Link>
            ))}
          </HStack>
        </HStack>
      </Stack>
      <Copyright />
    </Stack>
  </Container>
);
