"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const BRAND = "#020459";
const RING_SIZE_PX = 44;
const DOT_SIZE_PX = 11;

/** Je kleiner, desto träger / „schwerer“ (0.06–0.14 wirkt angenehm). */
const LERP = 0.11;
const SETTLE_EPS_SQ = 0.15;

function useDesktopFinePointer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48em) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return enabled;
}

/**
 * Ring + Punkt folgt der Maus mit Verzögerung (Lerp), nur Desktop mit feinem Zeiger.
 */
export function CursorFollower() {
  const enabled = useDesktopFinePointer();
  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const applyTransform = (x: number, y: number) => {
      const el = rootRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      rafRef.current = null;
      const target = targetRef.current;
      const cur = currentRef.current;

      cur.x += (target.x - cur.x) * LERP;
      cur.y += (target.y - cur.y) * LERP;

      applyTransform(cur.x, cur.y);

      const dx = target.x - cur.x;
      const dy = target.y - cur.y;
      const distSq = dx * dx + dy * dy;

      if (distSq > SETTLE_EPS_SQ) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const ensureLoop = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY };
      targetRef.current = next;

      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        currentRef.current = { ...next };
        applyTransform(next.x, next.y);
        const el = rootRef.current;
        if (el) el.style.opacity = "1";
        return;
      }

      ensureLoop();
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      hasStartedRef.current = false;
      const el = rootRef.current;
      if (el) el.style.opacity = "0";
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Box
      ref={rootRef}
      position="fixed"
      left={0}
      top={0}
      w={`${RING_SIZE_PX}px`}
      h={`${RING_SIZE_PX}px`}
      margin={0}
      padding={0}
      borderRadius="full"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="rgba(2, 4, 89, 0.28)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pointerEvents="none"
      zIndex={9999}
      willChange="transform"
      opacity={0}
      transition="opacity 0.2s ease"
      aria-hidden
    >
      <Box
        w={`${DOT_SIZE_PX}px`}
        h={`${DOT_SIZE_PX}px`}
        borderRadius="full"
        bg={BRAND}
        flexShrink={0}
      />
    </Box>
  );
}
