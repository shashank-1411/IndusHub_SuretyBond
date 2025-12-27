'use client';

import { CtaButton } from "@/components/cta-button";

const CALENDLY_URL = "https://calendly.com/shashankkharode/30min";

export function CalendlyCta({ label = "Book A Discovery Call" }: { label?: string }) {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <CtaButton
      label={label}
      type="button"
      onClick={openCalendly}
    />
  );
}

