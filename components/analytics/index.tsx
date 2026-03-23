"use client";

import { GoogleAnalytics } from "./google-analytics";
import { MetaPixel } from "./meta-pixel";

export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel />
    </>
  );
}

