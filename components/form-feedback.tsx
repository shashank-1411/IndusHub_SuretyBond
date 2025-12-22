'use client';

import { useEffect } from "react";
import confetti from "canvas-confetti";

type Mapping = {
  formId: string;
  messageId: string;
};

type FormFeedbackProps = {
  mappings: Mapping[];
  message?: string;
};

export function FormFeedback({
  mappings,
  message = "Submitted. Thank you!!",
}: FormFeedbackProps) {
  const DISPLAY_MS = 2600;

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    mappings.forEach(({ formId, messageId }) => {
      const form = document.getElementById(formId) as HTMLFormElement | null;
      const messageEl = document.getElementById(messageId);
      if (!form || !messageEl) return;

      const onSubmit = (e: Event) => {
        e.preventDefault();

        // Clear inputs
        form.querySelectorAll("input").forEach((input) => {
          if (input.type !== "hidden") input.value = "";
        });
        form.querySelectorAll("textarea").forEach((ta) => (ta.value = ""));

        // Show success
        messageEl.textContent = message;
        messageEl.classList.remove("hidden");

        // Fire confetti in sync with the visible success text
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.65 },
          colors: ["#cf6734", "#003749", "#ffffff"],
        });

        window.setTimeout(() => {
          messageEl.classList.add("hidden");
        }, DISPLAY_MS);
      };

      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [mappings, message]);

  return null;
}

