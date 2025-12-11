'use client';

import Image from "next/image";
import { motion } from "motion/react";

type ThreeDPhotoCarouselProps = {
  images: string[];
  durationSeconds?: number;
  cardWidth?: number;
  cardHeight?: number;
  perspective?: number;
};

/**
 * Lightweight auto-rotating 3D carousel. No hover/drag interactions.
 */
export function ThreeDPhotoCarousel({
  images,
  durationSeconds = 32,
  cardWidth = 220,
  cardHeight = 160,
  perspective = 1400,
}: ThreeDPhotoCarouselProps) {
  const faceCount = images.length;
  const radius =
    faceCount > 2
      ? (cardWidth / 2) / Math.tan(Math.PI / faceCount) + 40
      : cardWidth * 1.6;

  return (
    <div className="relative h-[360px] w-full max-w-5xl overflow-visible" style={{ perspective }}>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: durationSeconds, ease: "linear" }}
      >
        {images.map((src, index) => {
          const angle = (360 / faceCount) * index;
          return (
            <div
              key={src + index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-lg shadow-[rgba(0,0,0,0.10)] [transform-style:preserve-3d] [backface-visibility:hidden]"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={src}
                alt="Story highlight"
                fill
                className="object-cover"
                sizes={`${cardWidth}px`}
                priority={index === 0}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

