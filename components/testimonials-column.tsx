'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  direction?: "up" | "down";
  hoverSlowdown?: number;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 20,
  direction = "up",
  hoverSlowdown = 2,
}: TestimonialsColumnProps) => {
  const controls = useAnimation();
  const target = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  const startLoop = (multiplier = 1) => {
    controls.start({
      y: target,
      transition: {
        duration: duration * multiplier,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, direction]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => startLoop(hoverSlowdown)}
      onMouseLeave={() => startLoop()}
    >
      <motion.div animate={controls} className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="w-full max-w-xs rounded-[10px] border border-slate-200 bg-white p-8 shadow-md shadow-[rgba(207,103,52,0.08)]"
                key={i}
              >
                <div className="text-sm leading-relaxed text-slate-700">
                  {text}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold leading-5 tracking-tight text-slate-900">
                      {name}
                    </div>
                    <div className="text-xs leading-5 tracking-tight text-slate-500">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

