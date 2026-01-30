"use client";

import Player from "@vimeo/player";
import { useCallback, useEffect, useRef } from "react";

export interface UseVimeoPlayerOptions {
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  vimeoId: string;
  /** Erst wenn true, wird der Player erstellt (z.B. nach iframe onLoad). */
  iframeLoaded: boolean;
  onTimeUpdate?: (seconds: number) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onLoaded?: (duration: number) => void;
}

export function useVimeoPlayer({
  iframeRef,
  vimeoId,
  iframeLoaded,
  onTimeUpdate,
  onPlay,
  onPause,
  onLoaded,
}: UseVimeoPlayerOptions) {
  const playerRef = useRef<Player | null>(null);
  const callbacksRef = useRef({ onTimeUpdate, onPlay, onPause, onLoaded });
  callbacksRef.current = { onTimeUpdate, onPlay, onPause, onLoaded };

  const play = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    // Unmute + Volume vor play (Browser erlaubt Ton nur in User-Geste)
    player.setMuted(false).catch(() => {});
    player.setVolume(1).catch(() => {});
    player.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    playerRef.current?.pause().catch(() => {});
  }, []);

  const setCurrentTime = useCallback((seconds: number) => {
    playerRef.current?.setCurrentTime(seconds).catch(() => {});
  }, []);

  const setVolume = useCallback((volume: number) => {
    playerRef.current?.setVolume(volume).catch(() => {});
  }, []);

  const setMuted = useCallback((muted: boolean) => {
    playerRef.current?.setMuted(muted).catch(() => {});
  }, []);

  const getVolume = useCallback(async () => {
    return (await playerRef.current?.getVolume()) ?? 1;
  }, []);

  useEffect(() => {
    if (!iframeLoaded || !vimeoId) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    const player = new Player(iframe);
    playerRef.current = player;

    const cb = callbacksRef.current;
    player.ready().then(() => {
      player.setVolume(1).catch(() => {});
      player.setMuted(false).catch(() => {});
      player.getDuration().then((d) => cb.onLoaded?.(d)).catch(() => {});
    });

    const handleTimeUpdate = (data: { seconds: number }) => {
      callbacksRef.current.onTimeUpdate?.(data.seconds);
    };
    player.on("timeupdate", handleTimeUpdate);
    player.on("play", () => {
      player.setVolume(1).catch(() => {});
      player.setMuted(false).catch(() => {});
      callbacksRef.current.onPlay?.();
    });
    player.on("pause", () => callbacksRef.current.onPause?.());
    player.on("loadedmetadata", (data: { duration: number }) => {
      callbacksRef.current.onLoaded?.(data.duration);
    });

    return () => {
      player.off("timeupdate", handleTimeUpdate);
      player.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, [iframeRef, vimeoId, iframeLoaded]);

  return {
    playerRef,
    play,
    pause,
    setCurrentTime: setCurrentTime,
    setVolume,
    setMuted,
    getVolume,
  };
}
