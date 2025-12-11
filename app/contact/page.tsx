'use client';

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";

export default function ContactPage() {
  const [messageLength, setMessageLength] = useState(0);
  const [emailError, setEmailError] = useState(false);

  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="bg-white shadow-sm">
        {/* Reach Out To Us Section */}
        <section className="border-b border-[#f1e6de] bg-white px-6 py-16 md:px-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
            {/* Left: Title and Description */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#cf6734]">
                GET IN TOUCH
              </p>
              <h1 className="mt-4 text-[32px] font-semibold leading-[1.25] text-slate-900 md:text-[36px]">
                Reach Out To Us
              </h1>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-slate-700 md:ml-auto">
              <p>
                We welcome all types of inquiries, whether you&apos;re looking
                to collaborate, discuss a specific project, or explore
                opportunities with Indushub.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mnnebzgb"
            method="POST"
            className="mt-10 grid gap-x-8 gap-y-5 text-[11px] md:grid-cols-2"
          >
            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-700">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
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
                className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-700">
                Company<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
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
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                defaultValue="+91"
                name="phone"
                className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-700">
                City<span className="text-red-500">*</span>
              </label>
              <select
                name="city"
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
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="font-medium text-slate-700">
                Write a message
              </label>
              <textarea
                className="mt-1 h-32 w-full rounded-sm border border-slate-300 bg-white p-2 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
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

            <div className="mt-2 md:col-span-2">
              <p className="text-[10px] text-red-500">*Mandatory</p>
            </div>

            <div className="mt-4 md:col-span-2">
              <p className="text-[10px] leading-relaxed text-slate-600">
                We would like to keep in touch with you. We may send you news,
                reports, marketing updates, sales communications and invitations
                to exclusive events. You can always change your preferences or
                stop at any time.
              </p>
              <div className="mt-3 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="consent"
                  value="yes"
                  defaultChecked
                  className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#cf6734] focus:ring-[#cf6734]"
                />
                <label
                  htmlFor="terms"
                  className="text-[10px] leading-relaxed text-slate-700"
                >
                  I agree with this website&apos;s{" "}
                  <span className="underline">Terms & Conditions</span> and{" "}
                  <span className="underline">Privacy Policy</span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end md:col-span-2">
              <CtaButton label="Submit" type="submit" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
