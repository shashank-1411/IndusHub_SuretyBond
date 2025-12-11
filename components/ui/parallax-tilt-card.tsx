'use client';

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface ParallaxTiltCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ParallaxTiltCard = React.forwardRef<HTMLDivElement, ParallaxTiltCardProps>(
  ({ title, description, imageUrl, className }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, bounce: 0 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, bounce: 0 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
    const translateZImage = useTransform(mouseYSpring, [-0.5, 0.5], [-25, 25]);
    const translateZContent = useTransform(mouseYSpring, [-0.5, 0.5], [25, -25]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative h-80 w-64 rounded-2xl bg-[#003749]", className)}
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid grid-rows-[3fr_2fr] place-content-center rounded-xl bg-white shadow-lg"
        >
          <motion.div
            style={{
              transform: "translateZ(40px)",
              translateY: translateZImage,
            }}
            className="relative flex items-center justify-center"
          >
            <img
              src={imageUrl}
              alt={title}
              className="pointer-events-none h-32 w-32 object-contain"
            />
          </motion.div>

          <motion.div
            style={{
              transform: "translateZ(30px)",
              translateY: translateZContent,
            }}
            className="px-4 pb-4 text-center"
          >
            <h2 className="text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ParallaxTiltCard.displayName = "ParallaxTiltCard";

export { ParallaxTiltCard };

