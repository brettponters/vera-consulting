"use client";

import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/brett-veraconsulting/30min?hide_gdpr_banner=1";

/**
 * Loads the Calendly widget script once and exposes openCalendly().
 * Any button can call window.__openCalendly() or use the hook.
 */
export function useCalendly() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const open = useCallback(() => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  }, []);

  return open;
}
