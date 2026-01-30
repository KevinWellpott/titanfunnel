"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const BRAND_COLOR = "1, 173, 213"; // #01ADD5 rgb

const shapes = [
  { size: "clamp(200px, 40vw, 480px)", left: "5%", top: "10%", opacity: 0.04, duration: 18 },
  { size: "clamp(180px, 35vw, 400px)", right: "10%", top: "25%", opacity: 0.05, duration: 22 },
  { size: "clamp(220px, 42vw, 520px)", left: "50%", bottom: "15%", opacity: 0.03, duration: 20 },
  { size: "clamp(160px, 28vw, 320px)", right: "25%", bottom: "30%", opacity: 0.06, duration: 25 },
  { size: "clamp(140px, 24vw, 280px)", left: "15%", bottom: "40%", opacity: 0.04, duration: 16 },
  { size: "clamp(260px, 48vw, 600px)", right: "-5%", top: "50%", opacity: 0.03, duration: 120 },
];

function BlobShape({
  size,
  opacity,
  duration,
  ...position
}: {
  size: string;
  opacity: number;
  duration: number;
  [key: string]: string | number;
}) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle, rgba(${BRAND_COLOR}, ${opacity}) 0%, transparent 70%)`,
    pointerEvents: "none",
    willChange: "transform",
    animation: `premium-bg-float ${duration}s ease-in-out infinite`,
    ...position,
  };
  return <div className="premium-3d-animate" style={style} aria-hidden />;
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (!mounted || reduceMotion || isMobile) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes premium-bg-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(2%, -1.5%) scale(1.02); }
          66% { transform: translate(-1.5%, 2%) scale(0.98); }
        }
      `}</style>
      <Box
        position="fixed"
        inset="0"
        zIndex={-1}
        overflow="hidden"
        aria-hidden
      >
        {shapes.map((s, i) => (
          <BlobShape
            key={i}
            size={s.size}
            left={s.left}
            right={s.right}
            top={s.top}
            bottom={s.bottom}
            opacity={s.opacity}
            duration={s.duration}
          />
        ))}
      </Box>
    </>
  );
}
