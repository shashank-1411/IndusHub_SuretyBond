'use client';

import { useRef, useState } from "react";
import { TestimonialsColumn } from "@/components/testimonials-column";

const testimonials = [
  {
    initials: "SJ",
    badgeClass: "bg-[#e5f1ff] text-slate-700",
    name: "Shri S. M. Autade Pvt Ltd",
    sector: "Infrastructure",
    quote:
      "Indushub is the clear choice for surety bonds. For our infrastructure projects, speed is paramount, and Indushub has delivered to meet our expectations. They make a complex process smooth, incredibly fast, and result-oriented. Highly recommend Indushub.",
  },
  {
    initials: "SP",
    badgeClass: "bg-[#ffe9d6] text-slate-700",
    name: "Sopan D & M Pvt Limited",
    sector: "Oil and Gas",
    quote:
      "Indushub is a game-changer for surety bonds. Their smooth, fast, and result-oriented approach consistently delivers the fastest possible time. They truly understand the underwriting and product surety bond to the core.",
  },
  {
    initials: "AC",
    badgeClass: "bg-[#f0f4ff] text-slate-700",
    name: "Arvind Constructions",
    sector: "EPC",
    quote:
      "They handled documentation and insurer coordination end-to-end, freeing our team to focus on execution. The responsiveness and clarity from Indushub saved us critical time on bids.",
  },
];

const makeAvatar = (initials: string) => {
  const label = initials?.trim().slice(0, 3).toUpperCase() || "INH";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
    <rect width='120' height='120' rx='24' fill='#cf6734'/>
    <text x='50%' y='55%' text-anchor='middle' font-family='Manrope, Arial, sans-serif' font-size='36' fill='white' font-weight='700' dominant-baseline='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const scrollingTestimonials = testimonials.map((item) => ({
  text: item.quote,
  image: makeAvatar(item.initials),
  name: item.name,
  role: item.sector,
}));

function CoFounderVideoCard() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    videoRef.current.controls = true;
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <article className="flex h-[420px] flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
      {/* Status pill */}
      <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span>Co-founder</span>
      </div>

      {/* Square video */}
      <div
        className="relative mt-4 w-full overflow-hidden rounded-3xl bg-slate-900"
        style={{ aspectRatio: "1 / 1" }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="https://www.pexels.com/download/video/8814086/"
          poster="/Group 1707479657.png"
          loop
          playsInline
          onPause={handlePause}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="ml-0.5 h-5 w-5 text-slate-900"
              >
                <path d="M9 7.5v9l7-4.5-7-4.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Name */}
      <p className="mt-4 text-[13px] font-semibold text-slate-900">
        Peter Lucious
      </p>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
      <div className="max-w-5xl">
        <span className="block h-[31px] w-[585px] text-[128px] font-medium leading-none text-[#cf6734]">
          "
        </span>
        <h2 className="mt-6 text-3xl font-semibold text-slate-900">
          Why Clients Rely On Us
        </h2>
      </div>
      <div className="mt-10 mr-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1fr] md:justify-items-start">
        {/* Left moving column */}
        <TestimonialsColumn
          testimonials={scrollingTestimonials}
          duration={18}
          direction="up"
          hoverSlowdown={1.8}
          className="h-[420px]"
        />

        {/* Center co-founder video card (portrait style) */}
        <CoFounderVideoCard />

        {/* Right moving column */}
        <TestimonialsColumn
          testimonials={[...scrollingTestimonials].reverse()}
          duration={20}
          direction="down"
          hoverSlowdown={1.8}
          className="h-[420px] md:ml-auto md:mr-0"
        />
      </div>
    </section>
  );
}

