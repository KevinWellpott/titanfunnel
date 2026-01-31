"use client";

import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useVimeoPlayer } from "./use-vimeo-player";

// controls=0 = keine Vimeo-UI, nur Video. Steuerung ausschließlich über unsere Leiste + Player-API.
const VIMEO_PARAMS =
  "title=0&byline=0&portrait=0&transparent=1&controls=0&playsinline=1&preload=1&muted=0";

const BRAND_COLOR = "#01ADD5";

export interface BrandedVideoPlayerProps {
  vimeoId: string;
  title?: string;
  /** "hero" = xl radius, "proofRoi" = 2xl radius */
  variant?: "hero" | "proofRoi";
  /** Thumbnail-URL (z. B. /thumbnail-hero.webp). Vor dem ersten Abspielen sichtbar. */
  thumbnailSrc?: string;
}

export function BrandedVideoPlayer({
  vimeoId,
  title = "Video",
  variant = "hero",
  thumbnailSrc,
}: BrandedVideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const volumeBeforeMute = useRef(1);

  const onTimeUpdate = useCallback((t: number) => setCurrentTime(t), []);
  const onPlay = useCallback(() => setIsPlaying(true), []);
  const onPause = useCallback(() => setIsPlaying(false), []);
  const onLoaded = useCallback((d: number) => setDuration(d), []);

  const {
    playerRef,
    play,
    pause,
    setCurrentTime: seekTo,
    setVolume: setPlayerVolume,
    setMuted: setPlayerMuted,
    getVolume,
  } = useVimeoPlayer({
    iframeRef,
    vimeoId,
    iframeLoaded,
    onTimeUpdate,
    onPlay,
    onPause,
    onLoaded,
  });

  // Native click: Unmute + Volume + Play in EINER User-Geste (Browser erlaubt Ton nur so)
  useEffect(() => {
    const btn = playButtonRef.current;
    if (!btn) return;
    const handler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setPlayerMuted(false);
      setPlayerVolume(1);
      play();
      setHasStartedOnce(true);
    };
    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, [play, setPlayerMuted, setPlayerVolume]);

  const handlePlay = useCallback(() => {
    setPlayerMuted(false);
    setPlayerVolume(1);
    play();
    setHasStartedOnce(true);
  }, [play, setPlayerMuted, setPlayerVolume]);

  const handlePause = useCallback(() => {
    pause();
  }, [pause]);

  const handleTogglePlay = useCallback(() => {
    if (isPlaying) handlePause();
    else handlePlay();
  }, [isPlaying, handlePlay, handlePause]);

  const handleSeek = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setCurrentTime(value);
      seekTo(value);
    },
    [seekTo]
  );

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Number(e.target.value);
      setVolume(v);
      setPlayerVolume(v);
      setPlayerMuted(v === 0);
      setIsMuted(v === 0);
    },
    [setPlayerVolume, setPlayerMuted]
  );

  const toggleMute = useCallback(() => {
    if (isMuted) {
      const v = volumeBeforeMute.current || 1;
      setVolume(v);
      setPlayerVolume(v);
      setPlayerMuted(false);
      setIsMuted(false);
    } else {
      volumeBeforeMute.current = volume;
      setVolume(0);
      setPlayerVolume(0);
      setPlayerMuted(true);
      setIsMuted(true);
    }
  }, [isMuted, volume, setPlayerVolume, setPlayerMuted]);

  const radius = variant === "hero" ? "xl" : "2xl";

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      borderRadius={radius}
      overflow="hidden"
      bg="gray.800"
    >
      {/* Vimeo iframe – allow nötig damit Browser Audio im iframe erlaubt */}
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?${VIMEO_PARAMS}`}
        title={title}
        loading="eager"
        onLoad={() => setIframeLoaded(true)}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "var(--chakra-radii-" + radius + ")",
        }}
      />

      {/* Overlay – fängt alle Klicks ab, kein Vimeo-Branding sichtbar */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="auto"
        borderRadius={radius}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-video-controls]")) return;
          handleTogglePlay();
        }}
        onPointerDown={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-video-controls]")) e.stopPropagation();
        }}
        onMouseDown={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("[data-video-controls]")) e.stopPropagation();
        }}
      >
        {/* Vor dem ersten Start: Thumbnail + Play-Button */}
        {!hasStartedOnce && (
          <Box
            position="absolute"
            inset="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.900"
          >
            <Box
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
              overflow="hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailSrc ?? "/thumbnail.webp"}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.9,
                }}
              />
            </Box>
            <button
              ref={playButtonRef}
              type="button"
              aria-label="Video abspielen"
              style={{
                position: "relative",
                zIndex: 1,
                width: "var(--chakra-sizes-20, 5rem)",
                height: "var(--chakra-sizes-20, 5rem)",
                borderRadius: "9999px",
                backgroundColor: "transparent",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255, 255, 255, 0.9)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <svg
                width="40%"
                height="40%"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginLeft: "4px" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </Box>
        )}

        {/* Control-Bar (einzige Steuerung, Vimeo-UI ist mit controls=0 aus) */}
        {hasStartedOnce && (
          <Box
            data-video-controls
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            p="2"
            bg="linear-gradient(transparent, rgba(0,0,0,0.85))"
            borderRadius={`0 0 var(--chakra-radii-${radius}) var(--chakra-radii-${radius})`}
            display="flex"
            alignItems="center"
            gap="3"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Play/Pause */}
            <button
              type="button"
              aria-label={isPlaying ? "Pause" : "Abspielen"}
              onClick={handleTogglePlay}
              style={{
                width: "var(--chakra-sizes-9, 2.25rem)",
                height: "var(--chakra-sizes-9, 2.25rem)",
                minWidth: "var(--chakra-sizes-9, 2.25rem)",
                borderRadius: "9999px",
                backgroundColor: "white",
                color: "var(--chakra-colors-gray-800, #27272a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginLeft: "2px" }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Progress (skippbar) */}
            <Box flex="1" minW="0" position="relative">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                style={{
                  width: "100%",
                  height: "6px",
                  accentColor: BRAND_COLOR,
                  cursor: "pointer",
                  borderRadius: 3,
                }}
              />
            </Box>

            {/* Lautstärke */}
            <Box
              display="flex"
              alignItems="center"
              gap="1"
              flexShrink={0}
              minW="80px"
            >
              <button
                type="button"
                aria-label={isMuted ? "Stummschaltung aufheben" : "Stummschalten"}
                onClick={toggleMute}
                style={{
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "var(--chakra-radii-md, 0.375rem)",
                }}
              >
                {isMuted || volume === 0 ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{
                  width: "60px",
                  height: "4px",
                  accentColor: "white",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
