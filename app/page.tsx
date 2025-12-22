"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CalendlyCta } from "@/components/calendly-cta";
import { CtaButton } from "@/components/cta-button";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";
import { FlippingCard } from "@/components/flipping-card";
import { ParallaxTiltCard } from "@/components/ui/parallax-tilt-card";
import { StickyCtaBar } from "@/components/sticky-cta-bar";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";

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

const beneficiaryCategories = [
  {
    title: "Government Departments & PSUs",
    description:
      "Central and state departments, ministries, and public sector undertakings that need assurance on contractor performance and compliance.",
    image: "/saara-sanamo-SgQJoLH1PU8-unsplash 1.png",
  },
  {
    title: "Public Sector Undertakings",
    description:
      "Large government-linked enterprises executing strategic, capital-intensive projects across sectors.",
    image: "/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png",
  },
  {
    title: "Infrastructure Authorities",
    description:
      "Authorities overseeing roads, ports, metros, airports, and utilities where surety bonds protect long-duration projects.",
    image: "/bridge.PNG",
  },
  {
    title: "Project Owners & Developers",
    description:
      "Entities sponsoring projects who require performance, payment, and maintenance protection from their contractors.",
    image: "/Mask group.png",
  },
  {
    title: "EPC & Main Contractors",
    description:
      "Engineering, procurement, and construction players who use surety to unlock capacity and meet contract requirements.",
    image: "/Rectangle 23085.png",
  },
  {
    title: "Private Corporates",
    description:
      "Corporates seeking non-fund based support for complex contracts, vendor programs, and large capital spends.",
    image: "/Group 1707479657.png",
  },
  {
    title: "Financial Institutions & Lenders",
    description:
      "Banks and lenders who rely on surety structures to de-risk project financing and working capital lines.",
    image: "/Frame 80.png",
  },
];


export default function Home() {
  const [activeBeneficiary, setActiveBeneficiary] = useState(
    beneficiaryCategories[0].title
  );
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageZoomKey, setImageZoomKey] = useState(0);
  const autoSwitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const zoomTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle manual card click
  const handleBeneficiaryClick = (title: string) => {
    if (title === activeBeneficiary) return;
    
    // Pause auto-switching
    setIsAutoSwitching(false);
    
    // Clear any existing timeouts
    if (autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    if (zoomTimeoutRef.current) {
      clearTimeout(zoomTimeoutRef.current);
      zoomTimeoutRef.current = null;
    }
    
    // Switch to clicked card with fade transition
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveBeneficiary(title);
      setImageZoomKey((prev) => prev + 1); // Trigger zoom animation
      setIsTransitioning(false);
      
      // Resume auto-switching after 3 seconds (zoom duration)
      zoomTimeoutRef.current = setTimeout(() => {
        setIsAutoSwitching(true);
      }, 3000);
    }, 300);
  };

  // Auto-switch logic
  useEffect(() => {
    if (!isAutoSwitching) {
      // Clear timeout if auto-switching is paused
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
        autoSwitchTimeoutRef.current = null;
      }
      return;
    }

    // Start zoom animation when card becomes active
    setImageZoomKey((prev) => prev + 1);
    
    // Switch to next card after 3 seconds (zoom duration)
    autoSwitchTimeoutRef.current = setTimeout(() => {
      const currentIndex = beneficiaryCategories.findIndex(
        (cat) => cat.title === activeBeneficiary
      );
      const nextIndex = (currentIndex + 1) % beneficiaryCategories.length;
      const nextBeneficiary = beneficiaryCategories[nextIndex].title;
      
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveBeneficiary(nextBeneficiary);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => {
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
        autoSwitchTimeoutRef.current = null;
      }
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
        zoomTimeoutRef.current = null;
      }
    };
  }, [activeBeneficiary, isAutoSwitching]);

  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white shadow-sm">
        {/* Hero (text band) */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-[32px] md:text-[36px]">
                Trusted Surety Bonds for Secure Project Execution
              </h1>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-slate-700 md:ml-auto">
              <p>
                Fast issuance, transparent process, reliable backing
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-3">
                <CtaButton label="Get a Quote" href="#quotation-form" />
                <CtaButton label="How It Works" href="#how-it-works" />
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section id="hero-image" className="relative h-64 w-full border-b border-slate-100 bg-[#f4f4f4] md:h-[360px] lg:h-[420px]">
          <Image
            src="/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png"
            alt="Ancient city landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-b border-slate-100 bg-white px-6 py-16 md:px-20"
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-left text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              How It Works
            </p>
            <h2 className="mt-3 text-left text-3xl font-semibold text-slate-900">
              Four simple steps to your surety bond
            </h2>
            <p className="mt-4 text-left text-sm leading-relaxed text-slate-700">
              A clear, staged process from requirement to issuance, with support at every step.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  step: "1",
                  title: "Bond Requirement Identified",
                  desc: "Client shares contract & bond requirement so we can understand the obligation and stakeholders.",
                },
                {
                  step: "2",
                  title: "Risk Evaluation",
                  desc: "Financials, project scope, and compliance are reviewed with insurers to structure the right cover.",
                },
                {
                  step: "3",
                  title: "Bond Issuance",
                  desc: "Once approved, the bond is issued within defined timelines so your project can move ahead.",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  desc: "We assist with renewals, amendments, or claims, staying aligned with your project lifecycle.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f9fb] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cf6734]/70 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-7 sm:py-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-500 shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#cf6734] group-hover:text-white group-hover:ring-[#cf6734]">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-start">
              <CtaButton label="Start the Process" href="#quotation-form" />
            </div>
          </div>
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

        {/* Types of Surety Bonds */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
              Types of Surety Bonds
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Surety solutions for every stage of your contract
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700">
              From bidding to project completion, we structure surety bonds that protect
              all parties and keep work moving without locking up excess capital.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Bid Bonds",
                  desc: "Protects the tendering authority if the winning bidder fails to honor the bid terms or sign the contract.",
                },
                {
                  title: "Performance Bonds",
                  desc: "Guarantees project completion as per contract specifications, timelines, and quality standards.",
                },
                {
                  title: "Payment Bonds",
                  desc: "Ensures subcontractors, suppliers, and workers are paid for work completed on the project.",
                },
                {
                  title: "Maintenance / Defect Liability Bonds",
                  desc: "Covers post-completion defects or performance issues during the maintenance or defect liability period.",
                },
                {
                  title: "Advance Payment Bonds",
                  desc: "Secures advances paid to the contractor, ensuring funds are used as per contract terms.",
                },
                {
                  title: "Custom / Contract-Specific Bonds",
                  desc: "Tailored surety structures for specialised projects, unique risk profiles, or bespoke contract clauses.",
                },
              ].map((bond) => (
                <article
                  key={bond.title}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f9fafb] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#cf6734]/70 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {bond.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {bond.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <CtaButton label="Learn More" href="/surety-bonds" />
            </div>
          </div>
        </section>

        {/* Beneficiaries */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
              Beneficiaries
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Who benefits from surety bonds?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700">
              Ensuring protection and compliance for all stakeholders involved in a contract.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="flex flex-row gap-3 overflow-x-auto pb-2 md:flex-col md:pb-0">
                {beneficiaryCategories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleBeneficiaryClick(item.title)}
                    className={`relative flex min-w-[160px] items-end justify-start overflow-hidden rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      activeBeneficiary === item.title
                        ? "border-[#cf6734] shadow-md"
                        : "border-slate-200 shadow-sm hover:border-[#cf6734]/60"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-cover transition duration-300 ${
                          activeBeneficiary === item.title
                            ? "opacity-100"
                            : "opacity-60"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition ${
                          activeBeneficiary === item.title
                            ? "opacity-90"
                            : "opacity-70"
                        }`}
                      />
                    </div>
                    <span className="relative z-10 whitespace-normal text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative mt-2 flex-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:mt-0 md:flex">
                <div className="relative h-full w-full min-h-[18rem] md:min-h-[20rem] lg:min-h-[22rem]">
                  {beneficiaryCategories.map((item) => {
                    const isActive = item.title === activeBeneficiary;
                    return (
                      <div
                        key={item.title}
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isActive && !isTransitioning
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <Image
                            key={`${item.title}-${imageZoomKey}`}
                            src={item.image}
                            alt={item.title}
                            fill
                            className="beneficiary-image-zoom object-cover"
                            priority={isActive}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className="absolute inset-x-5 bottom-5 space-y-2 text-white md:inset-x-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f6c19a]">
                              Beneficiary Category
                            </p>
                            <h3 className="text-lg font-semibold md:text-xl">
                              {item.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-100 md:text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
              className="mt-8 grid gap-x-8 gap-y-5 text-[11px] md:grid-cols-2"
            >
              <input type="hidden" name="formType" value="quotation" />
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
                  name="suretyBondProposalForm"
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
                  name="creditRatingCertificate"
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
                  name="auditFinancials"
                  placeholder="Upload Year 1"
                  className="h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
              </div>
              <div className="flex flex-col gap-1 md:pt-5">
                <input
                  type="text"
                  name="auditFinancials2"
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
        <section id="process" className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
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
          newsletterFormId="newsletter-home"
          newsletterStatusId="newsletter-home-status"
          confettiFormIds={["quotation-form"]}
        />
      </main>
      <StickyCtaBar />
    </div>
  );
}
