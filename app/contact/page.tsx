'use client';

import { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";

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
                We welcome all types of inquiries, whether you&apos;re looking
                to collaborate, discuss a specific project, or explore
                opportunities with Indushub.
              </p>
            </div>

            {/* Contact Form - styled to match reference */}
            <div className="mt-10 w-full max-w-5xl">
              <form
                className="grid gap-4 text-[11px] md:grid-cols-2"
              >
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">Company*</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">Email*</label>
                  <input
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
                  <label className="font-medium text-slate-700">Phone Number*</label>
                  <input
                    type="tel"
                    defaultValue="+91"
                    name="phone"
                    required
                    minLength={10}
                    className="h-8 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">City*</label>
                  <select
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
                  <label className="font-medium text-slate-700">Write a message</label>
                  <textarea
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
                    defaultChecked
                    className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#cf6734] focus:ring-[#cf6734]"
                  />
                  <span>
                    I agree with this website&apos;s{" "}
                    <span className="underline">Terms & Conditions</span> and{" "}
                    <span className="underline">Privacy Policy</span>
                  </span>
                </label>

                <div className="mt-2 flex justify-end md:col-span-2">
                  <CtaButton label="Submit" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Final Image Strip */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/Mask group.png"
            alt="Team meeting"
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
