"use client";

import { Box, VStack } from "@chakra-ui/react";

// Calendly: Entweder in .env.local setzen: NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/dein-name/dein-event
// Oder hier direkt eintragen (ohne .env):
const CALENDLY_LINK_FALLBACK = ""; // z.B. "https://calendly.com/mein-name/15min"

function getCalendlyUrl(): string {
  return (process.env.NEXT_PUBLIC_CALENDLY_LINK ?? CALENDLY_LINK_FALLBACK).trim();
}

/** Embed-URL für Calendly (calendly.com/... → calendly.com/embed/event/...) */
function toEmbedUrl(url: string): string {
  if (!url) return "";
  const u = url.replace(/\/$/, "");
  return u.replace(/^https:\/\/calendly\.com\//, "https://calendly.com/embed/event/") || u;
}

export function ContactCalendly() {
  const baseUrl = getCalendlyUrl();
  const embedUrl = toEmbedUrl(baseUrl);

  if (!embedUrl) {
    return (
      <Box p="4" bg="bg.muted" borderRadius="lg" textAlign="center" color="fg.muted" fontSize="sm">
        Calendly-Link fehlt. In <code>.env.local</code>: <code>NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/dein-name/dein-event</code> oder in <code>ContactCalendly.tsx</code> bei <code>CALENDLY_LINK_FALLBACK</code> eintragen.
      </Box>
    );
  }

  return (
    <VStack w="full" maxW="4xl" mx="auto" align="stretch" gap="6">
      <Box w="full" borderRadius="lg" overflow="hidden" minH="700px">
        <iframe
          src={embedUrl}
          width="100%"
          height="700"
          style={{ minHeight: "700px", border: "none" }}
          title="Termin buchen"
        />
      </Box>
    </VStack>
  );
}
