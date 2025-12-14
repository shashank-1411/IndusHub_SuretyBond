'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";

export default function ContactPage() {
  const [messageLength, setMessageLength] = useState(0);
  const [emailError, setEmailError] = useState(false);

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
              <h1 className="mt-4 text-[32px] font-semibold leading-[1.25] text-slate-900 md:text-[36px]">
                Reach Out To Us
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                We welcome all inquiries—collaborations, project discussions, or
                exploring opportunities with Indushub. Share your details and
                we&apos;ll get back quickly.
              </p>
            </div>

            {/* Contact Form - compact platform style, centered */}
            <div className="mt-10 w-full max-w-4xl">
              <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900 text-left">
                  Contact Form
                </h2>
                <p className="mt-1 text-left text-[12px] text-slate-600">
                  Fill in the essentials. We&apos;ll respond promptly.
                </p>

                <form
                  action="https://formspree.io/f/mnnebzgb"
                  method="POST"
                  className="mt-6 space-y-4 text-[11px]"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={`h-9 w-full rounded-sm border px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734] ${
                          emailError
                            ? "border-red-500"
                            : "border-slate-300 bg-white"
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
                      <label className="font-medium text-slate-700">
                        Phone<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        defaultValue="+91"
                        name="phone"
                        required
                        minLength={10}
                        className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        Company<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        City<span className="text-red-500">*</span>
                      </label>
                      <select
                        name="city"
                        required
                        className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
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
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      className="mt-1 h-28 w-full rounded-sm border border-slate-300 bg-white p-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
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

                  <div className="text-[10px] text-red-500">*Mandatory</div>

                  <div className="space-y-3 text-[10px] leading-relaxed text-slate-600">
                    <p>
                      We may send you news, reports, marketing updates, sales
                      communications and invitations to exclusive events. You
                      can change preferences anytime.
                    </p>
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        name="consent"
                        value="yes"
                        defaultChecked
                        className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#cf6734] focus:ring-[#cf6734]"
                      />
                      <span className="text-left">
                        I agree with this website&apos;s{" "}
                        <span className="underline">Terms & Conditions</span>{" "}
                        and <span className="underline">Privacy Policy</span>
                      </span>
                    </label>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <CtaButton label="Submit" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer image */}
        <section className="relative h-56 w-full border-b border-slate-100 md:h-64">
          <Image
            src="/Mask group.png"
            alt="Team meeting"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Footer */}
        <footer className="bg-white px-6 py-12 text-slate-800 md:px-12">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            {/* Left logo block */}
            <div>
              <Image
                src="/1111 1.png"
                alt="Indus Hub logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
              <p className="mt-2 text-sm text-slate-700">Your Growth Partner</p>
            </div>

            {/* Right contact block */}
            <div className="text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Call:</p>
              <p className="mt-1 text-sm text-slate-800">+91 99256 24974</p>
              <p className="mt-4 font-semibold text-slate-900">Email:</p>
              <p className="mt-1 text-sm text-slate-800">pravin@indushub.in</p>
              <form
                id="newsletter-contact"
                action="https://formspree.io/f/mnnebzgb"
                method="POST"
                className="mt-4 flex max-w-xs items-stretch gap-0"
              >
                <input
                  type="email"
                  placeholder="Write Email"
                  required
                  name="email"
                  className="h-9 w-full flex-1 rounded-l-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
                <button
                  type="submit"
                  className="h-9 rounded-r-sm bg-[#cf6734] px-4 text-[12px] font-semibold text-white hover:bg-[#b45828]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                  >
                    <path
                      d="M5 3h8v8M5 11l8-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
              <p
                id="newsletter-contact-status"
                className="mt-2 hidden text-xs font-semibold text-green-600"
              >
                Submitted. Thank you!!
              </p>
            </div>
          </div>

          {/* Bottom links */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-300 pt-5 text-xs text-slate-700">
            <Link href="/about" className="hover:text-[#cf6734]">
              About
            </Link>
            <Link href="/indushub-services" className="hover:text-[#cf6734]">
              Services
            </Link>
            <Link href="/privacy" className="hover:text-[#cf6734]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#cf6734]">
              Terms and Conditions
            </Link>
          </div>
        </footer>
        <ConfettiTrigger formIds={["newsletter-contact"]} />
        <FormFeedback
          mappings={[
            { formId: "newsletter-contact", messageId: "newsletter-contact-status" },
          ]}
        />
      </main>
    </div>
  );
}
