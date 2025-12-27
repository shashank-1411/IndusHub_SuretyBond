import { SiteHeader } from "@/components/site-header";
import { FooterSection } from "@/components/footer-section";

export default function IndushubPage() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-76px)] items-center justify-center bg-white px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-slate-700 md:text-xl">
            We&apos;re working on something amazing. Stay tuned!
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-block rounded-sm bg-[#cf6734] px-6 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:bg-[#b45828]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <FooterSection 
        newsletterFormId="newsletter-indushub"
        newsletterStatusId="newsletter-indushub-status"
      />
    </div>
  );
}

