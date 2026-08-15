'use client';

import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "@/components/cta-button";

export default function IndushubPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white antialiased flex flex-col md:flex-row overflow-hidden font-sans">
      {/* LEFT SIDEBAR (~22% width on desktop) */}
      <aside className="w-full md:w-[22%] lg:w-[22%] xl:w-[22%] bg-[#09090b] flex flex-col justify-between p-6 sm:p-8 lg:p-10 z-20 border-b md:border-b-0 md:border-r border-white/10 shrink-0 min-h-[160px] md:min-h-screen">
        {/* Top-left Brand Logo (Text Only) */}
        <div>
          <Link href="/" className="inline-flex items-center group">
            <span className="text-xl lg:text-2xl font-normal text-white tracking-tight font-sans">
              Indus Hub
            </span>
          </Link>
        </div>

        {/* Bottom-left Contact Information */}
        <div className="mt-8 md:mt-0 space-y-1.5 text-slate-300 font-light text-sm sm:text-base">
          <p>
            <a
              href="mailto:pravin@indushub.in"
              className="hover:text-white transition-colors duration-200 block"
            >
              pravin@indushub.in
            </a>
          </p>
          <p>
            <a
              href="tel:+919925624974"
              className="hover:text-white transition-colors duration-200 block"
            >
              +91 9925624974
            </a>
          </p>
        </div>
      </aside>

      {/* RIGHT MAIN HERO CONTENT (~78% width) */}
      <main className="relative flex-1 w-full md:w-[78%] min-h-[75vh] md:min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Canyon & Suspension Bridge Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bridge.PNG"
            alt="Canyon and River Suspension Bridge Landscape"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 78vw"
            className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          />
          {/* Subtle Darkening Overlay for Optimal Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Headline, Supporting Text & Primary CTA */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.04] drop-shadow-md">
            Ready to<br />
            connect?
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-sans pt-2">
            We believe in empowering business to drive economic growth and propel the nation forward.
          </p>
          
          {/* Primary CTA: Connect with us (Matching site standard button style) */}
          <div className="pt-4 sm:pt-6">
            <CtaButton label="Connect with us" href="/contact" />
          </div>
        </div>
      </main>
    </div>
  );
}


