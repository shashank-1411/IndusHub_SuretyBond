"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CalendlyCta } from "@/components/calendly-cta";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsColumn } from "@/components/testimonials-column";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";
import { FlippingCard } from "@/components/flipping-card";
import { ParallaxTiltCard } from "@/components/ui/parallax-tilt-card";

const keyPlayers = [
  {
    title: "Principal",
    description:
      "The party who requests the bond and undertakes the primary obligation.",
    image: "/p-removebg-preview.svg",
  },
  {
    title: "Surety Company",
    description:
      "The insurance company that guarantees the principal’s obligation.",
    image: "/s-removebg-preview.svg",
  },
  {
    title: "Obligee",
    description:
      "The beneficiary that receives financial protection from the bond.",
    image: "/o-removebg-preview.svg",
  },
];

const benefits = [
  {
    title: "Free Up Capital",
    description:
      "Surety bonds replace costly bank guarantees so you can deploy capital where it generates higher returns.",
    icon: (
      <Image
        src="/11.png"
        alt="Free Up Capital"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
    ),
  },
  {
    title: "Optimize Bank Limits",
    description:
      "Move guarantees off your banking lines and unlock additional headroom for working capital or expansion.",
    icon: (
      <Image
        src="/22.png"
        alt="Optimize Bank Limits"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
    ),
  },
  {
    title: "Reduce Financial Burden",
    description:
      "Lower collateral requirements and leaner balance sheets help improve leverage and financial ratios.",
    icon: (
      <Image
        src="/33.png"
        alt="Reduce Financial Burden"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
    ),
  },
  {
    title: "Alternative Financing",
    description:
      "Diversify your sources of non-fund based limits while protecting key counterparties.",
    icon: (
      <Image
        src="/44.png"
        alt="Alternative Financing"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
    ),
  },
];

const steps = [
  {
    title: "Proposal & Documents",
    description:
      "Client initiates the process by submitting their surety bond proposal, including all necessary documents.",
    icon: (
      <Image
        src="/11.png"
        alt="Proposal & Documents"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    title: "Internal Due Diligence",
    description:
      "Internal team conducts an initial review and due diligence on the submitted proposal and documents.",
    icon: (
      <Image
        src="/22.png"
        alt="Internal Due Diligence"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    title: "Submission to Insurer",
    description:
      "Following internal approval, the comprehensive proposal package is formally submitted to the selected insurer(s) for their evaluation.",
    icon: (
      <Image
        src="/33.png"
        alt="Submission to Insurer"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    title: "Insurer Due Diligence",
    description:
      "The insurer conducts due diligence, assesses risk, and issues their decision/terms on the proposal.",
    icon: (
      <Image
        src="/44.png"
        alt="Insurer Due Diligence"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    title: "Quotation Issuance",
    description:
      "Upon approval, the insurer issues a quotation detailing premium, terms, and conditions for the surety bond.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-[#cf6734]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3h14v18H5z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Premium Payment",
    description:
      "The client accepts the quotation, then proceeds to make the required premium payment to the insurer.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-[#cf6734]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h18v10H3z" />
        <path d="M7 7V5m10 2V5" />
        <path d="M7 12h10" />
        <path d="M9.5 10.5v3" />
        <path d="M14.5 10.5v3" />
      </svg>
    ),
  },
  {
    title: "Surety Bond Issuance",
    description:
      "After payment is processed, the insurer officially issues the surety bond to the beneficiary.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 text-[#cf6734]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 3 6v6c0 5 3.5 9 9 10 5.5-1 9-5 9-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    initials: "SJ",
    badgeClass: "bg-[#e5f1ff] text-slate-700",
    name: "Shri S. M. Autade Pvt Ltd",
    sector: "Infrastructure",
    quote:
      "Indushub is the clear choice for surety bonds. For our infrastructure projects, speed is paramount, and Indushub has delivered to meet our expectations. They make a complex process smooth, incredibly fast, and result-oriented. Highly recommend Indushub.",
  },
  {
    initials: "SP",
    badgeClass: "bg-[#ffe9d6] text-slate-700",
    name: "Sopan D & M Pvt Limited",
    sector: "Oil and Gas",
    quote:
      "Indushub is a game-changer for surety bonds. Their smooth, fast, and result-oriented approach consistently delivers the fastest possible time. They truly understand the underwriting and product surety bond to the core.",
  },
  {
    initials: "AC",
    badgeClass: "bg-[#f0f4ff] text-slate-700",
    name: "Arvind Constructions",
    sector: "EPC",
    quote:
      "They handled documentation and insurer coordination end-to-end, freeing our team to focus on execution. The responsiveness and clarity from Indushub saved us critical time on bids.",
  },
];

const makeAvatar = (initials: string) => {
  const label = initials?.trim().slice(0, 3).toUpperCase() || "INH";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
    <rect width='120' height='120' rx='24' fill='#cf6734'/>
    <text x='50%' y='55%' text-anchor='middle' font-family='Manrope, Arial, sans-serif' font-size='36' fill='white' font-weight='700' dominant-baseline='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const scrollingTestimonials = testimonials.map((item) => ({
  text: item.quote,
  image: makeAvatar(item.initials),
  name: item.name,
  role: item.sector,
}));

function AutoScrollSteps() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="group mt-10">
      <div
        ref={containerRef}
        className="process-scroll flex gap-6 overflow-x-auto pb-2"
        role="list"
        aria-label="Steps to obtain a surety bond"
      >
        {steps.map((step) => (
          <article
            key={step.title}
            className="min-w-[260px] max-w-[300px] flex-shrink-0 rounded-md border border-slate-200 bg-white p-5 text-slate-800 shadow-sm"
            role="listitem"
          >
            <div className="mb-4 flex items-center">
              {step.icon}
            </div>
            <h3 className="text-sm font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

const clientLogos = [
  "/Frame 31.png",
  "/Frame 34.png",
  "/Frame 35.png",
  "/Frame 37.png",
];

export default function Home() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white shadow-sm">
        {/* Hero (text band) */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#cf6734]">
                About Us
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-[32px] md:text-[36px]">
                Financial Solutions
                <br />
                For Betterment Of
                <br />
                Your Company
              </h1>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-slate-700 md:ml-auto">
              <p>
                Build trust, meet commitments, and unlock new growth
                opportunities with our expert surety bond solutions tailored to
                your business needs.
              </p>
              <div className="mt-6 max-w-xs sm:max-w-none">
                <CalendlyCta label="Book A Discovery Call" />
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative h-64 w-full border-b border-slate-100 bg-[#f4f4f4] md:h-[360px] lg:h-[420px]">
          <Image
            src="/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png"
            alt="Ancient city landscape"
            fill
            className="object-cover"
          />
        </section>

        {/* Key Players */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] md:items-start">
            {/* Left copy column */}
            <div className="max-w-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#cf6734]">
                Key Players
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-800">
                The transactions always involves three parties: The Principal,
                The contractor, and the surety provider (Insurance Company).
              </p>
            </div>

            {/* Cards row */}
            <div className="grid gap-6 md:grid-cols-3 place-items-center">
              {keyPlayers.map((item) => (
                <ParallaxTiltCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image}
                  className="w-full max-w-[240px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="border-b border-[#e5edf3] bg-white px-6 py-16 md:px-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Mission */}
            <div className="group">
              <div className="mb-6 flex h-8 w-8 items-center justify-center">
                <Image
                  src="/flag_2.png"
                  alt="Mission icon"
                  width={32}
                  height={32}
                  className="hover-spin-scale h-8 w-8 object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700">
                To provide comprehensive, expert-driven business support
                services—starting with surety bonds—that streamline operations
                and build trust for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="group">
              <div className="mb-6 flex h-8 w-8 items-center justify-center">
                <Image
                  src="/visibility.png"
                  alt="Vision icon"
                  width={32}
                  height={32}
                  className="hover-spin-scale h-8 w-8 object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700">
                Empowering businesses across India to thrive through innovative,
                reliable, and tailored solutions that drive sustainable growth
                and economic progress.
              </p>
            </div>
          </div>
        </section>

        {/* Image Break */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
        <Image
            src="/bridge.PNG"
            alt="Bridge landscape"
            fill
            className="object-cover"
          />
        </section>

        {/* Why Choose Surety Bonds */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
            Benefits
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Why Choose Surety Bonds?
          </h2>

          {/* Benefits grid */}
          <div className="mt-10 pb-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="hover-tilt-scale rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#cf6734]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-[#cf6734]">
                    <span className="spin-on-hover">{benefit.icon}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-10 border-t border-slate-200 pt-7">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Trusted By The Best
            </p>
            <div className="mt-6 overflow-hidden">
              <div className="logos-marquee flex items-center gap-16">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <Image
                    key={`${logo}-${index}`}
                    src={logo}
                    alt="Client logo"
                    width={320}
                    height={140}
                    className="h-28 w-auto shrink-0 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quotation Form (front-end only) */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="rounded-sm border border-slate-200 bg-white px-5 pb-10 pt-7 shadow-sm md:px-10">
            <div className="md:flex md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
                  Quotation For Surety Bond
                </p>
              </div>
            </div>

            <form
              id="quotation-form"
              action="https://formspree.io/f/mnnebzgb"
              method="POST"
              className="mt-8 grid gap-x-8 gap-y-5 text-[11px] md:grid-cols-2"
            >
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  Company Profile<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyProfile"
                  placeholder="Sonai Infra"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  GST Certificate<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="gstCertificate"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  Surety Bond Proposal Form<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="suretyProposalForm"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <label className="font-medium text-slate-700">
                    Tender Document<span className="text-red-500">*</span>
                  </label>
                  <span className="text-[10px] text-red-500">
                    Please upload document in valid format (.pdf).
                  </span>
                </div>
                <input
                  type="text"
                  name="tenderDocument"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  Request For Proposal (RFP)<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="rfp"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  Credit Rating Certificate (if available)
                </label>
                <select
                  name="creditRating"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
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

              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-700">
                  Last 2 Year Audited Financial &amp; Provisional Balance Sheet
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="financialsYear1"
                  placeholder="Upload Year 1"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>
              <div className="flex flex-col gap-1 md:pt-5">
                <input
                  type="text"
                  name="financialsYear2"
                  placeholder="Upload Year 2"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>

              <p className="mt-1 max-w-3xl text-[10px] leading-relaxed text-slate-600 md:col-span-2">
                *Mandatory
              </p>

              <p className="max-w-3xl text-[11px] leading-relaxed text-slate-700 md:col-span-2">
                We would like to keep in touch with you. We may send you news,
                reports, marketing updates, sales communications and invitations
                to exclusive events. You can always change your preferences or
                stop at any time.
              </p>

              <label className="mt-2 flex items-start gap-2 text-[11px] text-slate-700 md:col-span-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#cf6734] focus:ring-[#cf6734]"
                />
                <span>
                  I agree with this website&apos;s{" "}
                  <span className="underline">Terms &amp; Conditions</span> and{" "}
                  <span className="underline">Privacy Policy</span>
                </span>
              </label>

              <div className="mt-4 flex justify-end md:col-span-2">
                <CtaButton label="Submit" type="submit" />
              </div>
            </form>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Steps To Obtain A Surety Bond
          </h2>
          <AutoScrollSteps />
        </section>

        {/* About Indushub */}
        <section className="border-b border-slate-100 bg-[#f5f3f0] px-6 py-16 md:px-20">
          <div className="grid gap-0 overflow-hidden rounded-sm border border-[#d7dde5] bg-white md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            {/* Left text column */}
            <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Indushub
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                At Indus Business Hub, we understand the complexities and
                challenges that companies face in today&apos;s competitive
                market. With our comprehensive suite of services designed to
                streamline your business operations and drive growth, we enable
                you to focus on your core business activities and achieve your
                strategic objectives.
              </p>
              <div className="mt-6">
                <CtaButton label="About Indushub" href="/about" />
              </div>
        </div>

            {/* Right image column */}
            <div className="relative h-60 w-full bg-slate-900 md:h-full">
            <Image
                src="/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png"
                alt="Indushub team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="max-w-5xl">
            <span className="block h-[31px] w-[585px] text-[128px] font-medium leading-none text-[#cf6734]">
              “
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">
              Why Clients Rely On Us
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
            <TestimonialsColumn
              testimonials={scrollingTestimonials}
              duration={18}
              direction="up"
              hoverSlowdown={1.8}
              className="h-[420px]"
            />
            <TestimonialsColumn
              testimonials={[...scrollingTestimonials].reverse()}
              duration={20}
              direction="down"
              hoverSlowdown={1.8}
              className="h-[420px]"
            />
            <TestimonialsColumn
              testimonials={scrollingTestimonials}
              duration={22}
              direction="up"
              hoverSlowdown={1.8}
              className="hidden h-[420px] md:block"
            />
        </div>
        </section>

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
        <footer className="bg-white px-6 py-12 text-slate-800 md:px-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
            {/* Left */}
            <div className="space-y-4">
              <Image
                src="/logo updated.png"
                alt="Indus Hub logo"
                width={110}
                height={24}
                className="h-6 w-auto"
              />
              <p className="text-sm font-semibold text-slate-700">Your Growth Partner</p>
              <hr className="w-72 border-slate-200" />
              <div className="flex flex-wrap gap-6 text-xs text-slate-700">
                <Link href="/about" className="font-semibold hover:text-[#cf6734]">About</Link>
                <Link href="/indushub-services" className="font-semibold hover:text-[#cf6734]">Services</Link>
                <Link href="/privacy" className="font-semibold hover:text-[#cf6734]">Privacy Policy</Link>
                <Link href="/terms" className="font-semibold hover:text-[#cf6734]">Terms and Conditions</Link>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-3 text-[13px] font-semibold text-slate-800">
              <div>
                <p className="font-semibold">Call:</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">+91 99256 24974</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">pravin@indushub.in</p>
              </div>
              <form
                id="newsletter-home"
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
                id="newsletter-home-status"
                className="hidden text-xs font-semibold text-green-600"
              >
                Submitted. Thank you!!
              </p>
            </div>
          </div>
        </footer>
        <ConfettiTrigger formIds={["quotation-form", "newsletter-home"]} />
        <FormFeedback
          mappings={[
            { formId: "newsletter-home", messageId: "newsletter-home-status" },
          ]}
        />
      </main>
    </div>
  );
}
