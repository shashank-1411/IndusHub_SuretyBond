'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { FooterSection } from "@/components/footer-section";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function ContactPage() {
  const [messageLength, setMessageLength] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });

  // Google Apps Script WebApp URL for contact form
  const CONTACT_FORM_URL = "https://script.google.com/macros/s/AKfycbwVgfEGeCPqSgBe-3zGtA7l532JyhgvW106zWoMUjiO5Fue4en20Y1h1-XRSHakNwz4pQ/exec";

  useEffect(() => {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form || !CONTACT_FORM_URL) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data: Record<string, string> = {};
      
      // Collect all form data, including checkbox
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      
      // Handle checkbox separately if not in FormData
      const checkbox = form.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        data.agreedToTerms = "true";
      }

      // Add form type and timestamp
      data.formType = "contact";
      data.timestamp = new Date().toISOString();

      // Log data being sent (for debugging)
      console.log("Submitting form data:", data);

      try {
        // Submit to Google Apps Script WebApp
        const response = await fetch(CONTACT_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(),
        });

        // Note: With no-cors mode, we can't read the response
        // But the data should still be submitted
        
        // Wait a bit to ensure submission completes
        await new Promise(resolve => setTimeout(resolve, 500));

        // Clear inputs
        form.querySelectorAll("input").forEach((input) => {
          if (input.type !== "checkbox") {
            input.value = "";
          } else {
            (input as HTMLInputElement).checked = false;
          }
        });
        form.querySelectorAll("textarea").forEach((ta) => (ta.value = ""));
        form.querySelectorAll("select").forEach((select) => {
          (select as HTMLSelectElement).selectedIndex = 0;
        });

        // Reset state
        setMessageLength(0);
        setAgreedToTerms(false);

        // Show success
        setSubmitStatus({
          message: "Submitted. Thank you!!",
          type: "success",
        });

        // Fire confetti with slower, more visible animation
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#cf6734", "#003749", "#ffffff"],
          gravity: 0.8,
          ticks: 200,
          decay: 0.94,
        });

        // Fire additional confetti bursts for more effect
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#cf6734", "#003749", "#ffffff"],
            gravity: 0.8,
            ticks: 200,
            decay: 0.94,
          });
        }, 250);
        
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#cf6734", "#003749", "#ffffff"],
            gravity: 0.8,
            ticks: 200,
            decay: 0.94,
          });
        }, 400);

        // Hide message after 4 seconds
        setTimeout(() => {
          setSubmitStatus({ message: "", type: null });
        }, 4000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus({
          message: "Error submitting. Please try again.",
          type: "error",
        });
        setTimeout(() => {
          setSubmitStatus({ message: "", type: null });
        }, 3000);
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [CONTACT_FORM_URL]);

  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="bg-white shadow-sm">
        {/* Reach Out To Us Section */}
        <section className="border-b border-[#f1e6de] bg-white px-6 py-16 md:px-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-left">
            <div className="w-full max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#cf6734]">
                GET IN TOUCH
              </p>
              <WordFadeIn
                words="Reach Out To Us"
                className="mt-4 text-[32px] font-semibold leading-[1.25] text-slate-900 md:text-[36px]"
                delay={0.1}
              />
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                We welcome all types of inquiries, whether you&apos;re looking
                to collaborate, discuss a specific project, or explore
                opportunities with Indushub.
              </p>
            </div>

            {/* Contact Form - styled to match reference */}
            <div className="mt-10 w-full max-w-5xl">
              <form
                id="contact-form"
                className="grid gap-4 text-[11px] md:grid-cols-2"
              >
                <input type="hidden" name="formType" value="contact" />
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="font-medium text-slate-700">First Name*</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="font-medium text-slate-700">Last Name*</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="company" className="font-medium text-slate-700">Company*</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium text-slate-700">Email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className={`h-8 w-full rounded-sm border px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734] ${
                      emailError ? "border-red-500" : "border-slate-300 bg-white"
                    }`}
                    onBlur={(e) => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      setEmailError(!emailRegex.test(e.target.value));
                    }}
                  />
                  {emailError && (
                    <p className="mt-1 text-[10px] text-red-500">
                      Please enter a valid email.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="font-medium text-slate-700">Phone Number*</label>
                  <input
                    id="phone"
                    type="tel"
                    defaultValue="+91"
                    name="phone"
                    required
                    minLength={10}
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="city" className="font-medium text-slate-700">City*</label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  >
                    <option value="">Select your city</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex flex-col gap-1">
                  <label htmlFor="message" className="font-medium text-slate-700">Write a message</label>
                  <textarea
                    id="message"
                    className="h-24 w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                    maxLength={150}
                    name="message"
                    onChange={(e) => setMessageLength(e.target.value.length)}
                  />
                  <div className="mt-1 flex justify-end">
                    <p className="text-[10px] text-slate-400">
                      {messageLength}/150 words
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-red-500 md:col-span-2">*Mandatory</p>

                <p className="text-[10px] leading-relaxed text-slate-700 md:col-span-2">
                  We would like to keep in touch with you. We may send you news,
                  reports, marketing updates, sales communications and invitations to
                  exclusive events. You can always change your preferences or stop at
                  any time.
                </p>

                <label className="flex items-start gap-2 text-[10px] text-slate-700 md:col-span-2">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#cf6734] focus:ring-[#cf6734]"
                  />
                  <span>
                    I agree with this website&apos;s{" "}
                    <span className="underline">Terms & Conditions</span> and{" "}
                    <span className="underline">Privacy Policy</span>
                  </span>
                </label>

                <div className="mt-2 flex flex-col items-end gap-2 md:col-span-2">
                  {submitStatus.type && (
                    <p
                      className={`text-xs font-semibold ${
                        submitStatus.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}
                  <CtaButton 
                    label="Submit" 
                    type="submit" 
                    disabled={!agreedToTerms}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Final Image Strip */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/jose-noguera-AnA3uH_6zLk-unsplash.jpg"
            alt="Contact Indus Hub team for surety bond consultations and expert advice"
            fill
            className="object-cover"
          />
        </section>

        {/* Footer */}
        <FooterSection 
          newsletterFormId="newsletter-contact"
          newsletterStatusId="newsletter-contact-status"
        />
      </main>
    </div>
  );
}
