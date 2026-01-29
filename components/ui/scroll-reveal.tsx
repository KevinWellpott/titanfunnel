"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export interface ScrollRevealProps extends BoxProps {
  children: React.ReactNode;
  /** Root margin for Intersection Observer (e.g. "0px 0px -80px 0px") */
  rootMargin?: string;
  /** Threshold 0–1 */
  threshold?: number;
}

export function ScrollReveal({
  children,
  rootMargin = "0px 0px -60px 0px",
  threshold = 0.1,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(12px)"}
      transition="opacity 0.5s ease-out, transform 0.5s ease-out"
      {...props}
    >
      {children}
    </Box>
  );
}
