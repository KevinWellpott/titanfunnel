/**
 * Glasmorphismus wie in der Navbar – für kleine Cards/Boxen im Landing.
 * Nicht für Section-Hintergründe verwenden.
 */
export const glassCardStyles = {
  background: "white/10",
  backdropFilter: "blur(12px)",
  borderWidth: "1px",
  borderColor: "white/20",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  _dark: {
    background: "black/20",
    borderColor: "white/10",
    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
  },
} as const;
