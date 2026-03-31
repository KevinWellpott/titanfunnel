"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "./google-analytics";
import { MetaPixel } from "./meta-pixel";

export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel />
      <VercelAnalytics />
    </>
  );
}

