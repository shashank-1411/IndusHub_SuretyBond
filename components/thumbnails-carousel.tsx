'use client';

import { useState } from "react";

const localImages = [
  "/WhatsApp Image 2025-12-27 at 1.41.44 PM (1).jpeg",
  "/WhatsApp Image 2025-12-27 at 1.41.44 PM.jpeg",
  "/WhatsApp Image 2025-12-27 at 1.41.45 PM (1).jpeg",
  "/WhatsApp Image 2025-12-27 at 1.41.45 PM (2).jpeg",
  "/WhatsApp Image 2025-12-27 at 1.41.45 PM.jpeg",
  "/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png",
];

export function ThumbnailsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? localImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === localImages.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Main Image */}
      <div className="mb-4 overflow-hidden rounded-lg shadow-lg bg-slate-100">
        <div className="relative w-full">
          {localImages.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                index === currentIndex 
                  ? 'opacity-100 z-10 relative block' 
                  : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-auto w-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={goToPrevious}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200"
          aria-label="Previous slide"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4"
          >
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

        <div className="flex flex-1 gap-2 overflow-x-auto px-2 pb-1 scrollbar-hide">
          {localImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all hover:border-slate-300 ${
                index === currentIndex
                  ? 'border-[#cf6734]'
                  : 'border-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-14 w-20 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200"
          aria-label="Next slide"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4"
          >
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

