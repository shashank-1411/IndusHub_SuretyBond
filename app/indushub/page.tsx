'use client';

import Link from "next/link";
import Image from "next/image";

export default function IndushubPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white antialiased flex flex-col md:flex-row overflow-hidden font-sans">
      {/* LEFT SIDEBAR (~22% width on desktop) */}
      <aside className="w-full md:w-[22%] lg:w-[22%] xl:w-[22%] bg-[#09090b] flex flex-col justify-between p-6 sm:p-8 lg:p-10 z-20 border-b md:border-b-0 md:border-r border-white/10 shrink-0 min-h-[160px] md:min-h-screen">
        {/* Top-left Brand Logo */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3 group">
            {/* Geometric Logo Mark: Two offset overlapping white/grey boxes */}
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-4 h-4 bg-white/70 rounded-[1px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute bottom-0 left-0 w-4.5 h-4.5 bg-white rounded-[1px] shadow-sm" />
            </div>
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

        {/* Upper-Right Geometric Arrow Shapes SVG Graphic */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 md:top-14 md:right-14 z-10 w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none drop-shadow-xl">
          <svg
            viewBox="0 0 320 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-95 transition-opacity hover:opacity-100"
          >
            {/* Orange Top-Left Arrow Shape */}
            <path
              d="M 60 130 H 135 V 60 L 115 60 L 155 10 L 195 60 L 175 60 V 170 H 60 Z"
              fill="#D86532"
            />
            {/* Orange Top-Right Arrow Shape */}
            <path
              d="M 215 10 V 85 H 285 L 285 65 L 335 105 L 285 145 L 285 125 H 175 V 10 Z"
              fill="#D86532"
            />

            {/* Blue/Teal Bottom-Left Arrow Shape */}
            <path
              d="M 175 140 H 250 V 210 L 230 210 L 270 260 L 310 210 L 290 210 V 100 H 175 Z"
              fill="#0E4A60"
            />
            {/* Blue/Teal Bottom-Right Arrow Shape */}
            <path
              d="M 330 140 V 215 H 400 L 400 195 L 450 235 L 400 275 L 400 255 H 290 V 140 Z"
              fill="#0E4A60"
            />
          </svg>
        </div>

        {/* Top Floating Navigation / Back to Home CTA */}
        <div className="absolute top-6 left-6 z-20 md:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/20 hover:bg-black/80 transition"
          >
            <span>&larr; Back to Home</span>
          </Link>
        </div>

        <div className="absolute top-8 right-8 z-20 hidden md:block">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-white border border-white/25 hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
          >
            <span>Back to Home</span>
            <span className="text-sm">&rarr;</span>
          </Link>
        </div>

        {/* Headline & Supporting Text (Lower-Left Overlay) */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.04] drop-shadow-md">
            Ready to<br />
            connect?
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-sans pt-2">
            We believe in empowering business to drive economic growth and propel the nation forward.
          </p>
        </div>
      </main>
    </div>
  );
}

