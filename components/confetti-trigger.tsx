'use client';

import { useEffect } from "react";
import confetti from "canvas-confetti";

type ConfettiTriggerProps = {
  formIds: string[];
};

export function ConfettiTrigger({ formIds }: ConfettiTriggerProps) {
  useEffect(() => {
    const handlers: Array<() => void> = [];

    const fire = () => {
      confetti({
        particleCount: 140,
        spread: 75,
        origin: { y: 0.65 },
        colors: ["#cf6734", "#003749", "#ffffff"],
        ticks: 240,
      });
      confetti({
        particleCount: 90,
        spread: 55,
        origin: { y: 0.75 },
        colors: ["#cf6734", "#003749"],
        scalar: 0.8,
        ticks: 200,
      });
    };

    formIds.forEach((id) => {
      const form = document.getElementById(id) as HTMLFormElement | null;
      if (!form) return;
      const onSubmit = (e: Event) => {
        e.preventDefault();
        fire();
      };
      form.addEventListener("submit", onSubmit);
      handlers.push(() => form.removeEventListener("submit", onSubmit));
    });

    return () => {
      handlers.forEach((dispose) => dispose());
    };
  }, [formIds]);

  return null;
}

