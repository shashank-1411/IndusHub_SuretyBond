'use client';

import { useEffect } from "react";

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
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    mappings.forEach(({ formId, messageId }) => {
      const form = document.getElementById(formId) as HTMLFormElement | null;
      const messageEl = document.getElementById(messageId);
      if (!form || !messageEl) return;

      const onSubmit = (e: Event) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]') as
          | HTMLInputElement
          | null;
        if (emailInput) emailInput.value = "";

        messageEl.textContent = message;
        messageEl.classList.remove("hidden");

        window.setTimeout(() => {
          messageEl.classList.add("hidden");
        }, 3000);
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

