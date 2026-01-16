import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/cta-button";
import { FooterSection } from "@/components/footer-section";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-76px)] flex-col items-center justify-center bg-white px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold text-slate-900 md:text-8xl">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 md:text-3xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton label="Go to Homepage" href="/" />
            <Link
              href="/contact"
              className="text-sm font-medium text-[#cf6734] hover:underline"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Popular Pages
            </p>
            <nav className="mt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/surety-bonds"
                className="text-sm text-slate-700 hover:text-[#cf6734] hover:underline"
              >
                Surety Bonds
              </Link>
              <Link
                href="/indushub-services"
                className="text-sm text-slate-700 hover:text-[#cf6734] hover:underline"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-700 hover:text-[#cf6734] hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-700 hover:text-[#cf6734] hover:underline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <FooterSection
        newsletterFormId="newsletter-404"
        newsletterStatusId="newsletter-404-status"
      />
    </div>
  );
}
