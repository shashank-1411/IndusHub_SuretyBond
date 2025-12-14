'use client';

import { useState } from "react";
import { CtaButton } from "@/components/cta-button";

const CALENDLY_URL = "https://calendly.com/indushub/30min";

let calendlyLoader: Promise<void> | null = null;

const loadCalendly = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).Calendly) return Promise.resolve();
  if (calendlyLoader) return calendlyLoader;

  calendlyLoader = new Promise((resolve) => {
    const existing = document.getElementById("calendly-inline-script") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      if ((window as any).Calendly) resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-inline-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return calendlyLoader;
};

export function CalendlyCta({ label = "Book A Discovery Call" }: { label?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const openCalendly = async () => {
    if (typeof window === "undefined") return;
    if (isLoading) return;
    setIsLoading(true);
    await loadCalendly();
    (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
    setIsLoading(false);
  };

  return (
    <CtaButton
      label={isLoading ? "Loading..." : label}
      type="button"
      onClick={openCalendly}
    />
  );
}

