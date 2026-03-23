"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/**
 * Vimeo-Embed: volle Player-UI (Scrubber, Play/Pause, Lautstärke).
 * Wichtig: kein `background=1` – das ist der „Background Mode“ und blendet diese Controls aus.
 */
const VIMEO_EMBED_QUERY =
  "title=0&byline=0&portrait=0&badge=0&controls=1&dnt=1&playsinline=1&transparent=0";

/** Hochformat 9:16 – Poster: object-fit contain = ganzes Thumbnail sichtbar (kein starker Zoom). Abstände = bg. */
const PORTRAIT_ASPECT_STYLE = { aspectRatio: "9 / 16" } as const;

/**
 * Vimeo liefert ohne width oft nur kleine Thumbnails (~295–640px) → skaliert pixelig.
 * `width=1920` in oEmbed liefert ein deutlich größeres `thumbnail_url`.
 */
async function fetchVimeoThumbnailUrl(videoId: string): Promise<string | null> {
  const id = videoId.trim();
  if (!id) return null;
  try {
    const pageUrl = `https://vimeo.com/${id}`;
    const oembed = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(pageUrl)}&width=1920`;
    const res = await fetch(oembed);
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    const raw = data.thumbnail_url;
    return raw && typeof raw === "string" ? raw : null;
  } catch {
    return null;
  }
}

interface VimeoCoverPlayerProps {
  vimeoId: string;
  title?: string;
  /** z.B. `/case-studies/video-posters/kunde.webp` — wenn gesetzt: kein Vimeo-Thumbnail. */
  posterSrc?: string;
}

export function VimeoCoverPlayer({ vimeoId, title = "Video", posterSrc }: VimeoCoverPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPosterFailed(false);
    const localPoster = posterSrc?.trim();
    if (localPoster) {
      setPosterUrl(localPoster);
      return () => {
        cancelled = true;
      };
    }
    setPosterUrl(null);
    void (async () => {
      const url = await fetchVimeoThumbnailUrl(vimeoId);
      if (!cancelled && url) setPosterUrl(url);
    })();
    return () => {
      cancelled = true;
    };
  }, [vimeoId, posterSrc]);

  const shellProps = {
    w: "full",
    maxW: "full",
    borderRadius: "2xl",
    overflow: "hidden",
    position: "relative" as const,
    border: "1px solid",
    borderColor: "gray.700",
    style: PORTRAIT_ASPECT_STYLE,
  };

  if (playing) {
    const src = `https://player.vimeo.com/video/${vimeoId}?${VIMEO_EMBED_QUERY}&autoplay=1`;
    return (
      <Box
        {...shellProps}
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.4)"
        _before={{
          content: '""',
          position: "absolute",
          inset: "-1px",
          bg: "linear-gradient(135deg, transparent, rgba(1, 173, 213, 0.08), transparent)",
          borderRadius: "inherit",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          title={title}
        />
      </Box>
    );
  }

  return (
    <Box
      {...shellProps}
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.4)"
      bg="gray.800"
      cursor="pointer"
      onClick={() => setPlaying(true)}
      role="button"
      aria-label="Video abspielen"
      _hover={{
        borderColor: "gray.600",
        "& .play-circle": {
          transform: "scale(1.06)",
          bg: "rgba(255, 255, 255, 0.24)",
          borderColor: "rgba(255, 255, 255, 0.65)",
          boxShadow:
            "0 14px 48px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.65), inset 0 -1px 0 rgba(0, 0, 0, 0.06), 0 0 40px rgba(1, 173, 213, 0.22)",
        },
      }}
      transition="border-color 0.2s"
    >
      {/* Poster: hohe Auflösung (oEmbed width + CDN-Pfad), Next Image + contain = scharf statt pixelig */}
      {posterUrl && !posterFailed ? (
        <Box position="absolute" inset="0" zIndex={0}>
          <Box position="relative" w="100%" h="100%">
            <Image
              src={posterUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 92vw, 400px"
              quality={95}
              priority={false}
              unoptimized={posterUrl.startsWith("http")}
              onError={() => setPosterFailed(true)}
              style={{
                objectFit: "contain",
                objectPosition: "center center",
              }}
            />
          </Box>
        </Box>
      ) : null}

      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.25) 100%)"
        zIndex={1}
        pointerEvents="none"
        borderRadius="inherit"
      />

      <Box
        position="absolute"
        inset="-1px"
        bg="linear-gradient(135deg, transparent, rgba(1, 173, 213, 0.06), transparent)"
        borderRadius="inherit"
        zIndex={1}
        pointerEvents="none"
      />

      <Box position="absolute" inset="0" display="flex" alignItems="center" justifyContent="center" zIndex={2}>
        <Box
          className="play-circle"
          w={{ base: "14", md: "20" }}
          h={{ base: "14", md: "20" }}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="rgba(255, 255, 255, 0.14)"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="rgba(255, 255, 255, 0.07)"
          backdropFilter="blur(14px) saturate(180%)"
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55), inset 0 -1px 0 rgba(0, 0, 0, 0.12)"
          transition="transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease, border-color 0.25s ease"
          style={{
            WebkitBackdropFilter: "blur(14px) saturate(180%)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden
            style={{
              width: "clamp(18px, 5vw, 24px)",
              height: "clamp(18px, 5vw, 24px)",
              marginLeft: "2px",
            }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
