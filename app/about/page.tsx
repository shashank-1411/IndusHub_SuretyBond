'use client';

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";
import { ThumbnailsCarousel } from "@/components/thumbnails-carousel";

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


const storiesImages = [
  "/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png",
  "/bridge.PNG",
  "/8140d9ae-0fe7-4ed4-b0b6-d16c14747555 1.png",
  "/Mask group.png",
  "/Rectangle 23088.png",
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

        {/* Our Stories - Thumbnails Carousel */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cf6734]">
            Our Stories
          </p>
          <h2 className="mt-2 text-[32px] font-semibold text-slate-900 md:text-[36px]">
            Moments from the field
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
            A quick look at highlights and on-ground moments that shape our work.
          </p>
          <div className="mt-8">
            <ThumbnailsCarousel />
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
            src="/Mask group.png"
            alt="Team meeting"
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

