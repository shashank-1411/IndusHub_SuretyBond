"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsColumn } from "@/components/testimonials-column";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";

const steps = [
  {
    title: "Proposal & Documents",
    description:
      "Client initiates the process by submitting their surety bond proposal, including all necessary documents.",
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
        <path d="M6 2h9l3 3v17H6z" />
        <path d="M15 2v5h5" />
        <path d="M8 13h8M8 17h5M8 9h3" />
      </svg>
    ),
  },
  {
    title: "Internal Due Diligence",
    description:
      "Internal team conducts an initial review and due diligence on the submitted proposal and documents.",
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
        <circle cx="11" cy="11" r="6" />
        <path d="m15.5 15.5 3 3" />
      </svg>
    ),
  },
  {
    title: "Submission to Insurer",
    description:
      "Following internal approval, the comprehensive proposal package is formally submitted to the selected insurer(s) for their evaluation.",
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
        <path d="m4 17 6-6 4 4 6-6" />
        <path d="M14 5h6v6" />
        <path d="M4 19h6v-6" />
      </svg>
    ),
  },
  {
    title: "Insurer Due Diligence",
    description:
      "The insurer conducts due diligence, assesses risk, and issues their decision/terms on the proposal.",
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
        <path d="M12 21c6-3 8-7 8-11a8 8 0 1 0-16 0c0 4 2 8 8 11Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
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
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' rx='24' fill='#cf6734'/><text x='50%' y='55%' text-anchor='middle' font-family='Manrope, Arial, sans-serif' font-size='36' fill='white' font-weight='700' dominant-baseline='middle'>${label}</text></svg>`;
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const firstCard = container.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 24; // gap-6
      const scrollAmount = cardWidth + gap;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const nextScrollLeft = container.scrollLeft + scrollAmount;

      if (nextScrollLeft >= maxScrollLeft - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="group mt-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-6 overflow-hidden"
        role="list"
        aria-label="Steps to obtain a surety bond"
      >
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="min-w-[260px] max-w-[300px] flex-shrink-0 rounded-md border border-slate-200 bg-white p-5 text-slate-800 shadow-sm"
            role="listitem"
          >
            <div className="mb-4 flex items-center">
              <div className="rounded-md border border-[#cf6734]/30 bg-white p-2">
                {step.icon}
              </div>
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Steps To Obtain A Surety Bond
          </h2>
          <AutoScrollSteps />
        </section>

        {/* Types of Surety Bonds */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cf6734]">
            Our Offerings
          </p>
          <div className="mt-3 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                Types Of Surety Bonds
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Surety bonds broadly fall into two main categories: contract bonds and
                commercial bonds. We structure each bond to match the specific risk
                profile and requirements of your project.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
              <Image
                src="/pyramid-removebg-preview 1.png"
                alt="Bond types pyramid"
                width={340}
                height={340}
                className="h-auto w-[260px] md:w-[320px] lg:w-[360px] object-contain"
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
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
            Our one-stop marketplace and comprehensive ecosystem are built
            around reliability, transparency, and ease-of-use. With
            customer-centric approach and partnerships with leading insurers, we
            help you access quality services and verified suppliers.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CtaButton label="Download Brochure" />
            <CtaButton label="Download Principle List" />
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

        {/* Image Banner */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/Mask group.png"
            alt="Team meeting"
            fill
            className="object-cover"
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
                id="newsletter-surety"
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
                id="newsletter-surety-status"
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
        <ConfettiTrigger formIds={["newsletter-surety"]} />
        <FormFeedback
          mappings={[
            { formId: "newsletter-surety", messageId: "newsletter-surety-status" },
          ]}
        />
      </main>
    </div>
  );
}

