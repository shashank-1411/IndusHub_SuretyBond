'use client';

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";

const services = [
  {
    number: "1",
    title: "Procurement Services",
    description:
      "Comprehensive procurement solutions focused on cost efficiency, quality assurance, and supply chain optimization for on-time delivery.",
    image: "/service1.png",
  },
  {
    number: "2",
    title: "Advisory & Structuring",
    description:
      "We evaluate your working capital mix, understand contractual obligations, and craft the optimal surety solution for each project.",
    image: "/service2.png",
  },
  {
    number: "3",
    title: "Insurer Partnerships",
    description:
      "Indushub works with top-rated insurance carriers to negotiate competitive terms, limits, and collateral requirements on your behalf.",
    image: "/service3.png",
  },
  {
    number: "4",
    title: "Program Management",
    description:
      "From documentation to issuance, renewals, and claims assistance, our specialists manage the end-to-end lifecycle of your bonds.",
    image: "/service4.png",
  },
  {
    number: "5",
    title: "Risk Analytics",
    description:
      "We provide dashboards and analytics so CXOs can track exposure, expiries, and project-level performance in real time.",
    image: "/service5.png",
  },
];

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
            alt="Infrastructure and construction projects supported by Indus Hub surety bonds"
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
        <TestimonialsSection />

        {/* Image Banner */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/jose-noguera-AnA3uH_6zLk-unsplash.jpg"
            alt="Indus Hub team of surety bond experts and financial advisors"
            fill
            className="object-cover"
          />
        </section>

        {/* Footer */}
        <FooterSection 
          newsletterFormId="newsletter-about"
          newsletterStatusId="newsletter-about-status"
        />
      </main>
    </div>
  );
}

