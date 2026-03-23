import type { ButtonProps } from "@chakra-ui/react";

/** Identisch zum primären CTA im Home-Hero (nur Copy/Children variieren). */
export const heroPrimaryCtaButtonProps = {
  size: { base: "md", md: "md" },
  px: { base: "8", md: "10" },
  py: { base: "5", md: "6" },
  h: "auto",
  fontSize: { base: "sm", md: "md" },
  fontWeight: "700",
  borderRadius: "full",
  gap: "2",
  color: "white",
  borderWidth: "1px",
  borderColor: "rgba(255,255,255,0.12)",
  bg: "linear-gradient(135deg, #8484ff 0%, #6366f1 45%, #4f46e5 100%)",
  boxShadow:
    "0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px -8px rgba(132, 132, 255, 0.5), 0 0 64px rgba(132, 132, 255, 0.22)",
  _hover: {
    filter: "brightness(1.08)",
    transform: "translateY(-2px) scale(1.02)",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.15), 0 18px 48px -8px rgba(132, 132, 255, 0.6), 0 0 88px rgba(132, 132, 255, 0.32)",
  },
  transition: "all 0.22s ease",
} satisfies ButtonProps;
