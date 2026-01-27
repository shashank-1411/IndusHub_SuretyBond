'use client';

import { useRef, useState } from "react";
import { TestimonialsColumn } from "@/components/testimonials-column";

const testimonials = [
  {
    initials: "SI",
    badgeClass: "bg-[#e5f1ff] text-slate-700",
    name: "Sonai Infra",
    sector: "Infrastructure",
    quote:
      "Indushub is a professional organisation who delivers results with complete ownership. They are definitely best in the business where Surety Bonds are concerned. They have delivered surety bonds in a smooth and fast way. They are our go to person where Surety Bonds are concerned. We are happy with their services and highly recommend them",
  },
  {
    initials: "SMA",
    badgeClass: "bg-[#ffe9d6] text-slate-700",
    name: "Shri S. M. Autade",
    sector: "Pvt. Ltd.",
    quote:
      "Indushub is the clear choice for surety bonds. For our infrastructure projects, speed is paramount, and Indushub has delievered to meet our expectations. They make a complex process smooth, incredibly fast, and result-oriented. Highly recommend Indushub",
  },
  {
    initials: "SO",
    badgeClass: "bg-[#f0f4ff] text-slate-700",
    name: "Sopan",
    sector: "O&M pvt. ltd.",
    quote:
      "Indushub is the game-changer for infrastructure company surety bonds. Their process is incredibly smooth, fast, and results-oriented, consistently delivering bonds in the fastest possible time. They truly understand the urgency of the sector and the product Surety Bond to the core.",
  },
  {
    initials: "GNI",
    badgeClass: "bg-[#e6f7ec] text-slate-700",
    name: "GNI Infrastructure",
    sector: "Infrastructure",
    quote:
      "Indushub is the clear choice for surety bonds. Their focus on speed and results, especially for infrastructure companies, is unmatched. The entire process was smooth, fast, and we got our bond issued in record time. They truly deliver on their promise of being the fastest in the business.",
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
  return (
    <article className="flex h-[420px] flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
      {/* Status pill */}
      <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span>Principal Growth Partner</span>
      </div>

      {/* Square video */}
      <div
        className="relative mt-4 w-full overflow-hidden rounded-3xl bg-slate-900 video-container"
        style={{ aspectRatio: "1 / 1" }}
      >
        <iframe
          src="https://drive.google.com/file/d/1hQRpfS7QW8-rJ73E96h7dto4jyhg1NdE/preview?rm=minimal"
          className="h-full w-full"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title="Vaishali Jog video"
          style={{ border: 'none' }}
        />
        {/* Overlay to block Google Drive redirect icon and header controls */}
        <div 
          className="absolute top-0 right-0 h-24 w-24 z-20"
          style={{ 
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.8) 40%, transparent 60%)',
            pointerEvents: 'auto',
            cursor: 'default'
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        />
      </div>

      {/* Name */}
      <p className="mt-4 text-[13px] font-semibold text-slate-900">
        CA Vaishali Jog
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

