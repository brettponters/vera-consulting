"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/brett-verasolutions/brett-one-on-one?hide_gdpr_banner=1";

const CalendlyContext = createContext<() => void>(() => {});

export function useCalendly() {
  return useContext(CalendlyContext);
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const open = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab if script hasn't loaded
      window.open(CALENDLY_URL, "_blank");
    }
  }, []);

  return (
    <CalendlyContext.Provider value={open}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {children}
    </CalendlyContext.Provider>
  );
}
