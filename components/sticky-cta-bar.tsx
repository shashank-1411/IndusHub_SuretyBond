'use client';

import { useEffect, useRef, useState } from "react";
import { CalendlyCta } from "@/components/calendly-cta";

interface StickyCtaBarProps {
  heroSelector?: string;
  footerSelector?: string;
}

export function StickyCtaBar({ 
  heroSelector = '#hero-image',
  footerSelector = 'footer'
}: StickyCtaBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroObserverRef = useRef<IntersectionObserver | null>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);
  const [heroPassed, setHeroPassed] = useState(false);
  const [footerNear, setFooterNear] = useState(false);

  useEffect(() => {
    // Find hero and footer elements
    const heroSection = document.querySelector(heroSelector);
    const footerElement = document.querySelector(footerSelector);

    if (!heroSection || !footerElement) {
      return;
    }

    // Hero observer - detect when hero section exits viewport
    heroObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero is not intersecting (scrolled past), mark as passed
          setHeroPassed(!entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    // Footer observer - detect when footer is approaching
    footerObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When footer is intersecting (visible or near), mark as near
          setFooterNear(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '150px 0px 0px 0px', // Start detecting 150px before footer enters viewport
        threshold: 0,
      }
    );

    // Start observing
    heroObserverRef.current.observe(heroSection);
    footerObserverRef.current.observe(footerElement);

    // Cleanup
    return () => {
      if (heroObserverRef.current) {
        heroObserverRef.current.disconnect();
      }
      if (footerObserverRef.current) {
        footerObserverRef.current.disconnect();
      }
    };
  }, [heroSelector, footerSelector]);

  // Update visibility based on hero and footer states
  useEffect(() => {
    setIsVisible(heroPassed && !footerNear);
  }, [heroPassed, footerNear]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className="sticky-cta-bar fixed bottom-0 left-0 right-0 z-[9998] bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 sm:text-base">
              Ready to get started?
            </p>
            <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
              Book a call with our team
            </p>
          </div>
          <div className="flex-shrink-0">
            <CalendlyCta label="Book a Call" />
          </div>
        </div>
      </div>
    </div>
  );
}

