'use client';

import { useState } from 'react';

function IndianFlagSvg({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <svg className={`rounded-[2px] shadow-sm border border-slate-300/80 ${className}`} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="200" fill="#FF6700" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <g transform="translate(450, 300)">
        <circle r="90" fill="none" stroke="#000080" strokeWidth="14" />
        <circle r="18" fill="#000080" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-90"
            stroke="#000080"
            strokeWidth="7"
            transform={`rotate(${i * 15})`}
          />
        ))}
      </g>
    </svg>
  );
}

function AshokaChakraSvg({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`animate-spin-slow ${className}`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" fill="none" stroke="#000080" strokeWidth="14" />
      <circle cx="100" cy="100" r="18" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="100"
          x2="100"
          y2="10"
          stroke="#000080"
          strokeWidth="7"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
    </svg>
  );
}

export function IndependenceBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full overflow-hidden bg-gradient-to-r from-[#FF6700] via-white to-[#138808] p-[3px] shadow-md">
      <div className="relative flex h-10 items-center justify-between bg-white px-4 text-slate-900 shadow-inner">
        
        {/* Top Solid Tricolor Line */}
        <div className="absolute inset-x-0 top-0 flex h-[3px] w-full">
          <div className="h-full w-1/3 bg-[#FF6700]" />
          <div className="h-full w-1/3 bg-white" />
          <div className="h-full w-1/3 bg-[#138808]" />
        </div>

        {/* Left National Flag */}
        <div className="z-10 flex shrink-0 items-center gap-2">
          <IndianFlagSvg className="h-4 w-6" />
        </div>

        {/* Center Marquee - STRICTLY "HAPPY INDEPENDENCE DAY" */}
        <div className="relative flex flex-1 overflow-hidden px-4 text-sm font-black tracking-widest uppercase">
          <div className="independence-marquee flex shrink-0 items-center gap-12 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="text-[#FF6700]">HAPPY INDEPENDENCE DAY</span>
              <AshokaChakraSvg className="h-4 w-4 text-[#000080]" />
              <span className="text-[#138808]">HAPPY INDEPENDENCE DAY</span>
              <IndianFlagSvg className="h-4 w-6" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#FF6700]">HAPPY INDEPENDENCE DAY</span>
              <AshokaChakraSvg className="h-4 w-4 text-[#000080]" />
              <span className="text-[#138808]">HAPPY INDEPENDENCE DAY</span>
              <IndianFlagSvg className="h-4 w-6" />
            </div>
          </div>

          {/* Duplicate loop for continuous seamless marquee */}
          <div className="independence-marquee flex shrink-0 items-center gap-12 whitespace-nowrap" aria-hidden="true">
            <div className="flex items-center gap-3">
              <span className="text-[#FF6700]">HAPPY INDEPENDENCE DAY</span>
              <AshokaChakraSvg className="h-4 w-4 text-[#000080]" />
              <span className="text-[#138808]">HAPPY INDEPENDENCE DAY</span>
              <IndianFlagSvg className="h-4 w-6" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#FF6700]">HAPPY INDEPENDENCE DAY</span>
              <AshokaChakraSvg className="h-4 w-4 text-[#000080]" />
              <span className="text-[#138808]">HAPPY INDEPENDENCE DAY</span>
              <IndianFlagSvg className="h-4 w-6" />
            </div>
          </div>
        </div>

        {/* Right National Flag & Close Button */}
        <div className="z-10 flex shrink-0 items-center gap-3">
          <IndianFlagSvg className="h-4 w-6" />
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="flex h-6 w-6 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900"
            aria-label="Close Banner"
          >
            &times;
          </button>
        </div>

        {/* Bottom Solid Tricolor Line */}
        <div className="absolute inset-x-0 bottom-0 flex h-[3px] w-full">
          <div className="h-full w-1/3 bg-[#FF6700]" />
          <div className="h-full w-1/3 bg-slate-100" />
          <div className="h-full w-1/3 bg-[#138808]" />
        </div>

      </div>
    </div>
  );
}
