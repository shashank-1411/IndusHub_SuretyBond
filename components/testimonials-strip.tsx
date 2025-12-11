'use client';

import { useRef } from "react";

type Testimonial = {
  initials: string;
  badgeClass: string;
  name: string;
  sector: string;
  quote: string;
};

type TestimonialsStripProps = {
  items: Testimonial[];
};

export function TestimonialsStrip({ items }: TestimonialsStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = stripRef.current;
    if (!el) return;
    const delta = direction === "left" ? -340 : 340;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="mt-10 space-y-6">
      <div
        ref={stripRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="flex min-w-[280px] max-w-[380px] flex-col gap-4 rounded-sm bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${item.badgeClass}`}
              >
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.sector}</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 md:text-sm">
              {item.quote}
            </p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-slate-300 bg-white text-xs text-slate-600 hover:border-[#cf6734] hover:text-[#cf6734]"
          aria-label="Previous testimonial"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3">
            <path
              d="M11 3 5 9l6 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#cf6734] text-xs text-white hover:bg-[#b45828]"
          aria-label="Next testimonial"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3">
            <path
              d="M5 3 11 9 5 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

