import type { CSSProperties } from "react";
import NextImage from "next/image";
import { Box, type BoxProps } from "@chakra-ui/react";

export type ImageProps = Omit<BoxProps, "children" | "as"> & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  sizes?: string;
  /** Wird an `next/image` (`style.objectFit`) durchgereicht */
  objectFit?: CSSProperties["objectFit"];
};

function toPixelSize(value: number | string | undefined, fallback = 100): number {
  if (value == null) return fallback;
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (typeof value === "string") {
    const px = value.endsWith("px") ? parseInt(value, 10) : parseInt(value, 10);
    if (!Number.isNaN(px)) return px;
  }
  return fallback;
}

export const Image = ({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  objectFit = "cover",
  ...boxProps
}: ImageProps) => {
  if (fill) {
    return (
      <Box position="relative" overflow="hidden" {...boxProps}>
        <NextImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit }}
        />
      </Box>
    );
  }

  const w = toPixelSize(width);
  const h = toPixelSize(height);

  return (
    <Box display="inline-block" lineHeight={0} overflow="hidden" {...boxProps}>
      <NextImage src={src} alt={alt} width={w} height={h} style={{ objectFit }} />
    </Box>
  );
};
