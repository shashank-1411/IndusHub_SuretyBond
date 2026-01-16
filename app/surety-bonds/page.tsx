"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";

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

const clientLogos = [
  "/Frame 31.png",
  "/Frame 34.png",
  "/Frame 35.png",
  "/Frame 37.png",
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
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="min-w-[260px] max-w-[300px] flex-shrink-0 rounded-md border border-slate-200 bg-white p-5 text-slate-800 shadow-sm"
            role="listitem"
          >
            <div className="mb-4 flex items-center">{step.icon}</div>
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

export default function SuretyBondsPage() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white">
        {/* Hero */}
        <div className="relative">
          {/* Text section */}
          <section className="relative bg-[#f4f4f4] px-6 py-16 md:px-20">
            <div className="relative max-w-xl z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#cf6734]">
                OUR JOURNEY
              </p>
              <h1 className="mt-4 text-[32px] font-semibold leading-snug text-slate-900 md:text-[36px]">
                Issued India&apos;s First
                <br />
                Defence Performance
                <br />
                Surety Bond
              </h1>
            </div>
          </section>

          {/* Hero image */}
          <section className="relative h-72 w-full md:h-[360px]">
            <Image
              src="/Rectangle 23088.png"
              alt="Defence performance surety bond"
              fill
              className="object-cover"
            />
          </section>
        </div>

        {/* Steps To Obtain A Surety Bond */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Steps To Obtain A Surety Bond
          </h2>
          <AutoScrollSteps />
        </section>

        {/* Types of Surety Bonds */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
                Our Offerings
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Types Of Surety Bonds
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
                Surety bonds broadly fall into two main categories: contract bonds and
                commercial bonds. We structure each bond to match the specific risk
                profile and requirements of your project.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center">
              <Image
                src="/Group 1707479657.png"
                alt="Bond types pyramid"
                width={560}
                height={560}
                className="h-auto w-[340px] md:w-[460px] lg:w-[540px] object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Bond Types Detail */}
          <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="grid gap-12 md:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Bid Bond</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Ensures serious and committed participation in tenders. Demonstrates
                financial credibility to project owners. Protects the tendering authority
                against bid withdrawal. Supports competitive bidding without cash margin blocking.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Retention Bond</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Replaces retention money and improves contractor cash flow. Protects the principal
                against defects, delays, or shortfall. Maintains project security without withholding
                payments. Strengthens liquidity while ensuring performance assurance.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Performance Bond</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Guarantees completion of the contract as per agreed terms. Protects the project owner
                from contractor non-performance. Enhances trust and reliability during project execution.
                Helps contractors retain working capital instead of bank limits.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Warranty Bond</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Guarantees fulfillment of post-construction warranty obligations. Covers defects during the
                warranty/defect liability period. Provides assurance of quality and compliance after handover.
                Protects the principal without tying up contractor capital.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Advance Payment Bond</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Safeguards the upfront funds released to the contractor. Ensures the advance is used strictly
                for project execution. Guarantees repayment of the advance if obligations aren&apos;t met. Reduces
                financial risk for the project owner while aiding cash flow.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-slate-900">
                SRG Bond (Shipbuilding Refund Guarantee)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Secures the advance paid to shipbuilders for vessel construction. Ensures refund obligations
                are honored in case of default. Provides financial comfort to buyers during long-cycle projects.
                Supports smooth shipbuilding contract execution.
              </p>
            </article>
          </div>
        </section>

        {/* Eligibility */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 pb-16 pt-12 md:px-20 md:pt-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] md:items-start">
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-slate-200 md:h-72">
              <Image
                src="/Rectangle 23085.png"
                alt="Eligibility documents"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-5 text-sm leading-relaxed text-slate-700">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
                Eligibility
              </p>
              {[
                'Rating of Contractor/Principal must be "BBB" and above at all times.',
                "Proposal form and list of requirements provided by NIA to be filled in.",
                "Details of the contract to be submitted, General Indemnity to be signed by contractor, collateral requirements if any will be specified.",
                "Treaty acceptance is there only for NHAI, MoRTH projects.",
              ].map((item, idx) => (
                <div
                  key={item}
                  className="translate-y-6 rounded-md border border-slate-200 bg-white px-5 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.05)] opacity-0 animate-rise"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-b border-slate-100 bg-[#f7f5f2] px-6 py-16 md:px-20">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center">
            <h2 className="text-3xl font-semibold text-slate-900">
              Why Choose Us?
            </h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700">
                Our platform is the One-Stop Marketplace and Comprehensive
                Ecosystem you need, built on a foundation of Reliability &
                Transparency. We take a Customer-Centric Approach to provide you
                with Tailored Solutions, ensuring you always access Quality
                Services & Verified Suppliers.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaButton label="Download Brochure" />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-sm border border-[#cf6734] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#cf6734] hover:bg-[#cf6734]/10 transition-colors"
                >
                  Download Principle List
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By The Best */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trusted By The Best
          </p>
          <div className="mt-6 overflow-hidden">
            <div className="logos-marquee flex items-center justify-center gap-16">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <Image
                  key={`${logo}-${index}`}
                  src={logo}
                  alt="Client logo"
                  width={320}
                  height={140}
                  className="h-28 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Image Banner */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/jose-noguera-AnA3uH_6zLk-unsplash.jpg"
            alt="Indus Hub surety bond specialists providing expert guidance"
            fill
            className="object-cover"
          />
        </section>

        {/* Footer */}
        <FooterSection 
          newsletterFormId="newsletter-surety"
          newsletterStatusId="newsletter-surety-status"
        />
      </main>
    </div>
  );
}

