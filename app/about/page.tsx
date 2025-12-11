'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";
import { TestimonialsColumn } from "@/components/testimonials-column";

const services = [
  {
    number: "1",
    title: "Procurement Services",
    description:
      "Comprehensive procurement solutions focused on cost efficiency, quality assurance, and supply chain optimization for on-time delivery.",
    image: "/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png",
  },
  {
    number: "2",
    title: "Advisory & Structuring",
    description:
      "We evaluate your working capital mix, understand contractual obligations, and craft the optimal surety solution for each project.",
    image: "/bridge.PNG",
  },
  {
    number: "3",
    title: "Insurer Partnerships",
    description:
      "Indushub works with top-rated insurance carriers to negotiate competitive terms, limits, and collateral requirements on your behalf.",
    image: "/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png",
  },
  {
    number: "4",
    title: "Program Management",
    description:
      "From documentation to issuance, renewals, and claims assistance, our specialists manage the end-to-end lifecycle of your bonds.",
    image: "/Mask group.png",
  },
  {
    number: "5",
    title: "Risk Analytics",
    description:
      "We provide dashboards and analytics so CXOs can track exposure, expiries, and project-level performance in real time.",
    image: "/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png",
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
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect width='120' height='120' rx='24' fill='#cf6734'/><text x='50%' y='55%' text-anchor='middle' font-family='Manrope, Arial, sans-serif' font-size='36' fill='white' font-weight='700' dominant-baseline='middle'>${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const scrollingTestimonials = testimonials.map((item) => ({
  text: item.quote,
  image: makeAvatar(item.initials),
  name: item.name,
  role: item.sector,
}));

export default function AboutPage() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const currentService = services[currentServiceIndex];

  const handlePrevious = () => {
    setCurrentServiceIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentServiceIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white shadow-sm">
        {/* Image Section */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80 lg:h-[420px]">
          <Image
            src="/saara-sanamo-SgQJoLH1PU8-unsplash 1.png"
            alt="Ancient ruins landscape"
            fill
            className="object-cover"
          />
        </section>

        {/* About Indushub Section */}
        <section className="border-b border-slate-100 bg-[#f5f3f0] px-6 py-16 md:px-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
            <div>
              <h2 className="text-[32px] font-semibold text-slate-900 md:text-[36px]">
                About Indushub
              </h2>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-slate-700 md:ml-auto">
              <p>
                At Indus Business Hub, we understand the complexities and
                challenges that companies face in today&apos;s competitive
                market. With our comprehensive suite of services designed to
                streamline your business operations and drive growth, we enable
                you to focus on your core business activities and achieve your
                strategic objectives.
              </p>
              <div className="mt-6">
                <CtaButton label="More About Indushub" href="/about" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered By Indushub Section */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <h2 className="text-[32px] font-semibold text-slate-900 md:text-[36px]">
            Services Offered By Indushub
          </h2>

          <div className="mt-10 grid gap-8 overflow-hidden rounded-sm border border-slate-200 bg-[#f7f5f2] md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            {/* Left: Service Info */}
            <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
              <div className="mb-6 text-[120px] font-light leading-none text-slate-200">
                {currentService.number}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {currentService.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {currentService.description}
              </p>
            </div>

            {/* Right: Service Image */}
            <div className="relative h-64 w-full bg-slate-900 md:h-full">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={handlePrevious}
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#cf6734] text-white hover:bg-[#b45828] transition-colors"
              aria-label="Previous service"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4"
              >
                <path
                  d="M11 3 5 9l6 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#cf6734] text-white hover:bg-[#b45828] transition-colors"
              aria-label="Next service"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4"
              >
                <path
                  d="M5 3 11 9 5 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
              duration={24}
              className="h-[420px]"
            />
            <TestimonialsColumn
              testimonials={[...scrollingTestimonials].reverse()}
              duration={26}
              className="h-[420px]"
            />
            <TestimonialsColumn
              testimonials={scrollingTestimonials}
              duration={28}
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
                id="newsletter-about"
                action="https://formspree.io/f/mnnebzgb"
                method="POST"
                className="mt-4 flex max-w-xs items-stretch gap-0"
              >
                <input
                  type="email"
                  placeholder="Write Email"
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
                id="newsletter-about-status"
                className="mt-2 hidden text-xs font-semibold text-green-600"
              >
                Submitted. Thank you!!
              </p>
            </div>
          </div>

          {/* Bottom links */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-300 pt-5 text-xs text-slate-700">
            <Link href="/about" className="hover:text-[#cf6734]">About</Link>
            <Link href="/indushub-services" className="hover:text-[#cf6734]">Services</Link>
            <Link href="/privacy" className="hover:text-[#cf6734]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#cf6734]">
              Terms and Conditions
            </Link>
          </div>
        </footer>
        <ConfettiTrigger formIds={["newsletter-about"]} />
        <FormFeedback
          mappings={[
            { formId: "newsletter-about", messageId: "newsletter-about-status" },
          ]}
        />
      </main>
    </div>
  );
}

