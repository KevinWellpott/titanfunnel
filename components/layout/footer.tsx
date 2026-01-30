import {
  Container,
  HStack,
  Icon,
  Stack,
  Text,
  type TextProps,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
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
  <Text fontSize="sm" color="fg.muted" {...props}>
    &copy; {new Date().getFullYear()} {projectConfig.general.name}. All rights
    reserved.
  </Text>
);

export const Footer = () => (
  <Container as="footer" py={{ base: "10", md: "12" }} maxW={{ base: "full", md: "6xl", lg: "7xl" }} px={{ base: "4", md: "6" }}>
    <Stack gap="6">
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        gap="6"
      >
        <Link href="/" display="flex" alignItems="center" flexShrink={0} _hover={{ opacity: 0.9 }}>
          <Text
            fontFamily="heading"
            fontWeight="500"
            fontSize={{ base: "lg", md: "xl" }}
            letterSpacing="-0.02em"
            color="fg"
          >
            titan.
          </Text>
        </Link>
        <HStack gap="6" flexWrap="wrap">
          {legalLinks.map(({ href, label }) => (
            <Link key={href} href={href} fontSize="sm" color="fg.muted" _hover={{ color: "fg" }}>
              {label}
            </Link>
          ))}
          <HStack gap="4">
            {socialLinks.map(({ href, icon }, index) => (
              <Link key={index} href={href} colorPalette="gray" aria-label={index === 0 ? "LinkedIn" : "GitHub"}>
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
