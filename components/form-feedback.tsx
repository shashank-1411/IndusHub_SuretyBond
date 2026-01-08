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

      const onSubmit = async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
          data[key] = value.toString();
        });

        // Add timestamp
        data.timestamp = new Date().toISOString();

        try {
          // Submit to Google Apps Script WebApp
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwJaHgYwiwPssuPEV99Py66q5EwwUWgapp1gcrJWvWAqgq0WgJS5yycZ-_9M7IMucRH/exec",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams(data).toString(),
            }
          );

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
        } catch (error) {
          console.error("Error submitting form:", error);
          messageEl.textContent = "Error submitting. Please try again.";
          messageEl.classList.remove("hidden");
          messageEl.classList.add("text-red-600");
          window.setTimeout(() => {
            messageEl.classList.add("hidden");
            messageEl.classList.remove("text-red-600");
          }, DISPLAY_MS);
        }
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

