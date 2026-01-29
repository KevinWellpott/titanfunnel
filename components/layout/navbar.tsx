"use client";

import {
  Center,
  CollapsibleContent,
  CollapsibleRoot,
  Container,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger } from "@/components/ui/collapsible-trigger";
import { UserMenu } from "../ui/user-menu";
import { Link } from "@/components/ui/link";
import { SignedIn, SignedOut } from "../auth/protect-content";
import { Login, SignUp } from "../auth/embed";

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
}

export const MenuLink = (props: MenuLinkProps) => {
  return (
    <Link href={props.href} w="full">
      <Button
        colorPalette="gray"
        variant={{ base: "ghost", md: "plain" }}
        width={{ base: "full", md: "auto" }}
        justifyContent={{ base: "flex-start", md: "center" }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export const NavbarLinkMenu = () => {
  return (
    <>
      <MenuLink href="/pricing">Preise</MenuLink>
      <MenuLink href="/contact">Kontakt</MenuLink>
      <MenuLink href="/support">Support</MenuLink>
      <Link href="#clear-path">
        <Button size="sm">Starte deine Skalierung</Button>
      </Link>
    </>
  );
};

export const NavbarActionMenu = ({ type }: { type: "website" | "app" }) => {
  return (
    <>
      <SignedOut>
        <Login popup>
          <Button size="sm" variant="outline" colorPalette="gray">
            Login
          </Button>
        </Login>
        <SignUp popup>
          <Button size="sm">Registrieren</Button>
        </SignUp>
      </SignedOut>
      <SignedIn>
        {type == "app" ? (
          <UserMenu />
        ) : (
          <>
            <Button size="sm">Zur Plattform</Button>
          </>
        )}
      </SignedIn>
    </>
  );
};

export const Navbar = ({ type }: { type: "website" | "app" }) => {
  return (
    <Center
      as="header"
      position="fixed"
      zIndex="docked"
      top={{ base: "4", md: "6" }}
      w="full"
    >
      <Container maxW={{ base: "full", md: "3xl" }}>
        <Box
          w="full"
          px="4"
          py="3"
          boxShadow="xs"
          background="bg.panel"
          borderRadius="l3"
        >
          <CollapsibleRoot>
            <HStack gap={{ base: "3", md: "8" }} justify="space-between">
              <CollapsibleTrigger />
              <Link href="/">
                <Logo />
              </Link>
              <HStack justify="flex-end" w="full" hideFrom="md">
                <NavbarActionMenu type={type} />
              </HStack>
              <HStack gap="2" hideBelow="md">
                <NavbarLinkMenu />
                <NavbarActionMenu type={type} />
              </HStack>
            </HStack>
            <CollapsibleContent hideFrom="md" mt={4}>
              <NavbarLinkMenu />
            </CollapsibleContent>
          </CollapsibleRoot>
        </Box>
      </Container>
    </Center>
  );
};
