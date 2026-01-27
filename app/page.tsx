"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { CalendlyCta } from "@/components/calendly-cta";
import { CtaButton } from "@/components/cta-button";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";
import { FlippingCard } from "@/components/flipping-card";
import { StickyCtaBar } from "@/components/sticky-cta-bar";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FooterSection } from "@/components/footer-section";
import { WhatsAppQuotation } from "@/components/whatsapp-quotation";
import { WordFadeIn } from "@/components/ui/word-fade-in";

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
  "/WhatsApp Image 2026-01-27 at 11.51.56 PM.jpeg",
  "/WhatsApp Image 2026-01-27 at 11.52.47 PM.jpeg",
  "/WhatsApp Image 2026-01-27 at 11.55.23 PM.jpeg",
  "/Sunrise Constructions 02.png",
];

const beneficiaryCategories = [
  {
    title: "Government Departments & PSUs",
    description:
      "Central and state departments, ministries, and public sector undertakings that need assurance on contractor performance and compliance.",
    image: "/government.jpg",
  },
  {
    title: "Public Sector Undertakings",
    description:
      "Large government-linked enterprises executing strategic, capital-intensive projects across sectors.",
    image: "/public.jpg",
  },
  {
    title: "Infrastructure Authorities",
    description:
      "Authorities overseeing roads, ports, metros, airports, and utilities where surety bonds protect long-duration projects.",
    image: "/psu.jpg",
  },
  {
    title: "Project Owners & Developers",
    description:
      "Entities sponsoring projects who require performance, payment, and maintenance protection from their contractors.",
    image: "/pp44.jpg",
  },
  {
    title: "EPC & Main Contractors",
    description:
      "Engineering, procurement, and construction players who use surety to unlock capacity and meet contract requirements.",
    image: "/two-corporate-businessmen-talking_23-2147707163.avif",
  },
  {
    title: "Private Corporates",
    description:
      "Corporates seeking non-fund based support for complex contracts, vendor programs, and large capital spends.",
    image: "/private coorporates.jpg",
  },
  {
    title: "Oil and Natural Gas",
    description:
      "Upstream, midstream, and downstream energy entities using surety to support exploration, production, logistics, and project execution.",
    image: "/oilandnaturalgas.jpg",
  },
];

const heroHeadings: string[][] = [
  [
    "Issued India's first Defense bond",
  ],
  [
    "Issued India’s First",
    "PSU Bond",
  ],
  [
    "Issued India’s First",
    "Municipal Corporation Bond",
  ],
];


export default function Home() {
  const [activeBeneficiary, setActiveBeneficiary] = useState(
    beneficiaryCategories[0].title
  );
  const [heroIndex, setHeroIndex] = useState(0);
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

  // Rotate hero heading every 2 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroHeadings.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white shadow-sm">
        {/* Hero (text band) */}
        <section className="border-b border-slate-100 bg-gradient-to-br from-[#05081f] via-[#071a4a] to-[#06356f] px-6 py-10 text-white md:px-20 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <WordFadeIn
                words="India's Trusted Surety Bond Partner"
                className="text-[32px] font-semibold leading-snug text-white md:text-[36px]"
                delay={0.1}
              />
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-100/85">
                Specialised Surety Bond solutions for Infrastructure, EPC, PSU and Government
                projects. Replace bank guarantees with efficient surety bonds.
              </p>
              <div className="mt-6">
                <CtaButton label="Get Quote" href="#quotation-form" />
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-100">
                <div>Fast Issuance within 3 hours*</div>
                <div>Total bond value issued ₹560 crores</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image with animated achievements */}
        <section
          id="hero-image"
          className="relative h-64 w-full border-b border-slate-100 bg-[#f4f4f4] md:h-[360px] lg:h-[420px]"
        >
          <Image
            src="/constantinos-kollias-yqBvJJ8jGBQ-unsplash 1.png"
            alt="Construction and infrastructure projects supported by Indus Hub surety bonds"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Rotating achievements overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent">
            <div className="mx-auto mb-6 w-full max-w-6xl px-6 md:px-20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f6c19a]">
                Our track record
              </p>
              <WordFadeIn
                key={heroIndex}
                words={heroHeadings[heroIndex].join(" ")}
                className="mt-2 max-w-2xl text-lg font-semibold leading-snug text-white md:text-2xl"
                delay={0.08}
              />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-left text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              About Us
            </p>
            <p className="mt-4 text-left text-sm leading-relaxed text-slate-700">
              We are pioneers in the surety bond market, having issued India’s first Defence Surety Bond,
              first PSU Surety Bond, and first Municipal Corporation Surety Bond. We enable contractors to
              participate in large-scale infrastructure and government projects without blocking valuable
              working capital. Surety bonds are a cost-effective alternative to traditional bank guarantees,
              unlocking liquidity and enabling contractors to bid for multiple projects simultaneously.
            </p>
          </div>
        </section>

        {/* Surety Bond Products */}
        <section className="border-b border-slate-100 bg-[#f4f4f4] px-6 py-16 md:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              Products
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Surety Bond Products
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Bid Bond",
                  desc: "Enables contractors to participate in tenders without blocking bank limits.",
                },
                {
                  title: "Performance Bond",
                  desc: "Guarantees contractual performance for awarded projects.",
                },
                {
                  title: "DLP Bond",
                  desc: "Covers defect liability obligations post project completion.",
                },
                {
                  title: "Advance Payment Bond",
                  desc: "Secures advance payments released by project authorities.",
                },
              ].map((product) => (
                <article
                  key={product.title}
                  className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#cf6734]"
                >
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {product.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-700">
                      {product.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Surety Bonds (compact highlights) */}
        <section className="border-b border-slate-100 bg-white px-6 py-14 md:px-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Why Choose Surety Bonds?
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "No collateral or margin money required",
                "Preserves bank limits & cash flow",
                "Lower cost compared to BGs",
                "Ideal for all government contractors",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-xl bg-[#f7f5f2] px-5 py-4 text-sm font-medium text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#fff7f2] hover:border hover:border-[#cf6734]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="border-b border-slate-100 bg-[#f7f5f2] px-6 py-16 md:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              Industries
            </p>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-semibold text-slate-900">
                Industries We Serve
              </h2>
              <div className="flex justify-start md:justify-end">
                <CtaButton 
                  label="Download Principle List"
                  onClick={() => {
                    const url = "https://docs.google.com/spreadsheets/d/1KmxIpFl04FNuJ8G8f5VFCpLJ-MeBEWC5/export?format=xlsx";
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "Principle List.xlsx";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Roads, Highways & Transport Infrastructure",
                  items: [
                    "NHAI",
                    "MoRTH",
                    "NHIDCL",
                    "National Highways Logistics Management Limited",
                    "Border Roads Organization",
                    "Rajasthan State Road Development & Construction Corporation Ltd",
                    "Bihar State Road Development Corporation Limited",
                    "Visvesvaraya Jala Nigama Limited",
                    "Kota Bus Services Limited",
                    "Jodhpur Bus Service Limited",
                    "Pune Housing and Area Development Board",
                    "Capital Region Urban Transport (SPV, Govt. of Odisha)",
                    "Jaipur City Transport Services Limited",
                    "Udaipur City Transport Services Limited",
                    "Ahmedabad Municipal Corporation",
                  ],
                },
                {
                  title: "Railways & Metro Infrastructure",
                  items: [
                    "South Central Railway",
                    "Western Railway",
                    "Central Railway",
                    "Eastern Railway",
                    "Northern Railway",
                    "North Western Railway",
                    "North Central Railway",
                    "East Coast Railway",
                    "East Central Railway",
                    "South Eastern Railway",
                    "South East Central Railway",
                    "Southern Railway",
                    "Northeast Frontier Railway",
                    "Konkan Railway Corporation Limited",
                    "IRCON International Limited",
                    "RailTel Corporation of India Ltd",
                    "Railway Energy Management Company Limited",
                    "Dedicated Freight Corridor Corporation of India Limited",
                    "Mumbai Railway Vikas Corporation Limited",
                  ],
                },
                {
                  title: "Power & Energy (Thermal, Renewable, T&D)",
                  items: [
                    "NTPC Limited",
                    "NTPC Renewable Energy Limited",
                    "NTPC Green Energy Limited",
                    "NTPC Rajasthan Green Energy Limited",
                    "NTPC Vidyut Vyapar Nigam Limited",
                    "NTPC-SAIL Power Company Limited",
                    "NHPC Limited",
                    "SJVN Limited / SJVN Green Energy Limited",
                    "Power Grid Corporation of India Limited",
                    "Solar Energy Corporation of India Limited",
                    "REC Power Development & Consultancy Limited",
                    "PFC Consulting Limited",
                    "Rajasthan Rajya Vidyut Prasaran Nigam Limited",
                    "Rajasthan Rajya Vidyut Utpadan Nigam Limited",
                    "Odisha Power Transmission Corporation Limited",
                    "Odisha Power Generation Corporation Limited",
                    "AP Genco / Discoms",
                    "Karnataka Power Corporation Limited",
                    "Karnataka Power Transmission Corporation Limited",
                    "Uttarakhand Power Corporation Limited",
                    "Assam Power Distribution Company Limited",
                    "Gujarat State Electricity Corporation Limited",
                  ],
                },
                {
                  title: "Oil, Gas & Refineries",
                  items: [
                    "ONGC Limited",
                    "Indian Oil Corporation Limited",
                    "Bharat Petroleum Corporation Limited",
                    "Hindustan Petroleum Corporation Limited",
                    "Oil India Limited",
                    "GAIL (India) Limited",
                    "Gail Gas Limited",
                    "Numaligarh Refinery Limited",
                    "Mangalore Refinery & Petrochemicals Limited",
                    "HPCL Rajasthan Refinery Limited",
                    "HPCL Renewable & Green Energy Limited",
                  ],
                },
                {
                  title: "Ports, Shipping & Inland Waterways",
                  items: [
                    "Jawaharlal Nehru Port Authority",
                    "Paradip Port Authority",
                    "Deendayal Port Authority",
                    "New Mangalore Port Authority",
                    "Cochin Port Authority",
                    "Syama Prasad Mookerjee Port",
                    "Mormugao Port Authority",
                    "V.O. Chidambaranar Port Authority",
                    "Inland Waterways Authority of India",
                    "Directorate General of Shipping",
                  ],
                },
                {
                  title: "Defence & Strategic Institutions",
                  items: [
                    "Ministry of Defence",
                    "Directorate General of Infantry (INF-8)",
                    "Military Engineering Services",
                    "DRDO",
                    "Border Roads Organization",
                    "Bhabha Atomic Research Centre",
                    "DCSEM",
                  ],
                },
                {
                  title: "Water Resources, PHED & Irrigation",
                  items: [
                    "Water Resources Dept – Govt. of Rajasthan",
                    "Water Resources Dept – Govt. of Andhra Pradesh",
                    "PHED Rajasthan / Ajmer / Udaipur / Bharatpur / Bikaner",
                    "Indira Gandhi Nahar Project",
                    "Cauvery Neeravari Nigam Limited",
                    "Uttar Pradesh Jal Nigam",
                    "Rural Water Supply & Sanitation Dept – Govt. of Andhra Pradesh",
                  ],
                },
                {
                  title: "Urban Development, Housing & Smart Cities",
                  items: [
                    "Amaravati Development Corporation Limited",
                    "APCRDA",
                    "Ahmedabad Urban Development Authority",
                    "Bangalore Development Authority",
                    "Kavaratti Smart City Limited",
                    "Department of Urban Affairs – Govt. of Meghalaya",
                    "Capital Region Urban Transport (Odisha)",
                  ],
                },
                {
                  title: "PSUs, EPC & Engineering Consultants",
                  items: [
                    "NBCC (India) Limited",
                    "RITES Ltd",
                    "WAPCOS Limited",
                    "MECON Ltd",
                    "Engineering Projects (India) Limited",
                    "National Projects Construction Corporation Limited",
                    "HLL Infratech Services Limited",
                    "Bridge & Roof Co. (India) Ltd",
                  ],
                },
                {
                  title: "Airports & Aviation",
                  items: [
                    "Airports Authority of India",
                    "Dholera International Airport Company Limited",
                  ],
                },
                {
                  title: "Telecom, IT & Digital Infrastructure",
                  items: [
                    "BSNL",
                    "Telecommunications Consultants India Limited",
                    "National Informatics Centre Services Inc.",
                    "UIDAI",
                    "Telecom Regulatory Authority of India",
                    "Andhra Pradesh State FiberNet Limited",
                  ],
                },
                {
                  title: "Industrial Corridors & SPVs",
                  items: [
                    "Karnataka Industrial Areas Development Board",
                    "Andhra Pradesh Industrial Infrastructure Corporation",
                    "NICDIT Krishnapatnam Industrial City",
                    "Amritsar–Kolkata Industrial Corridor",
                    "Kerala Industrial Corridor Development Corporation",
                    "PM MITRA Textile Park – Tamil Nadu",
                    "Bihar Integrated Manufacturing City, Gaya",
                  ],
                },
                {
                  title: "Education, Research & Institutions",
                  items: [
                    "IIT Mumbai",
                    "IIT Delhi",
                    "IIT Kanpur",
                    "Tata Institute of Fundamental Research",
                    "Indian Institute of Creative Technologies",
                    "Central Board of Secondary Education",
                  ],
                },
                {
                  title: "State & Central Government Departments",
                  items: [
                    "PWD (Rajasthan, Maharashtra, Punjab, Delhi, Tawang, Mizoram, Lakshadweep, Andhra Pradesh)",
                    "Ministry of Finance",
                    "Ministry of Environment, Forest & Climate Change",
                    "Department of Tourism (Karnataka, Meghalaya)",
                    "Food Corporation of India",
                    "Sports Authority of India",
                    "State Sports Council Meghalaya",
                  ],
                },
                {
                  title: "Municipal Corporations & Local Bodies",
                  items: [
                    "Ahmedabad Municipal Corporation",
                    "Bikaner Municipal Corporation",
                    "Alwar Municipal Corporation",
                    "Bhilwara Municipal Corporation",
                  ],
                },
              ].map((category) => (
                <div key={category.title} className="relative group">
                  <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#cf6734] group-hover:shadow-md">
                    {category.title}
                  </div>
                  <div className="pointer-events-none absolute left-0 right-0 top-full z-20 mt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="max-h-72 overflow-y-auto rounded-xl border border-[#cf6734] bg-[#fff7f2] p-4 text-xs leading-relaxed text-slate-700 shadow-lg">
                      <ul className="space-y-1">
                        {category.items.map((name) => (
                          <li key={name}>• {name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm italic text-slate-600">
              Adding new industries and sectors everyday.
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const chatbotButton = document.querySelector('[aria-label="Open chat"], [aria-label="Close chat"]') as HTMLButtonElement;
                  if (chatbotButton) {
                    chatbotButton.click();
                  }
                }}
                className="text-sm font-semibold text-[#cf6734] underline hover:text-[#b45828] transition-colors"
              >
                check your industry and beneficiaries.
              </button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="how-it-works"
          className="border-b border-slate-100 bg-white px-4 py-16 md:px-12 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-left text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              Process
            </p>
            <h2 className="mt-3 text-left text-3xl font-semibold text-slate-900">
              Steps To Obtain A Surety Bond
            </h2>
            <div className="mt-8">
              <AutoScrollSteps />
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
                {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map(
                  (logo, index) => (
                    <div
                      key={`${logo}-${index}`}
                      className="relative flex h-28 w-44 shrink-0 items-center justify-center"
                    >
                      <div className="relative flex h-full w-full items-center justify-center rounded-md bg-white shadow-sm">
                        <Image
                          src={logo}
                          alt="Client logo"
                          width={320}
                          height={140}
                          className="max-h-16 w-auto object-contain"
                        />
                        <div
                          className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 bg-[#f4f4f4]"
                          style={{
                            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                          }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
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
              Beneficiaries accepting Surety Bonds
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

        {/* Quotation via WhatsApp */}
        <WhatsAppQuotation />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Final Image Strip */}
        <section className="relative h-64 w-full border-b border-slate-100 md:h-80">
          <Image
            src="/jose-noguera-AnA3uH_6zLk-unsplash.jpg"
            alt="Indus Hub team collaborating on surety bond solutions for clients"
            fill
            className="object-cover"
          />
        </section>

        {/* Footer */}
        <FooterSection 
          newsletterFormId="newsletter-home"
          newsletterStatusId="newsletter-home-status"
        />
      </main>
      <StickyCtaBar />
    </div>
  );
}
