import { SiteHeader } from "@/components/site-header";
import { FooterSection } from "@/components/footer-section";
import { WarpBackground } from "@/components/warp-background";
import Link from "next/link";

export default function IndushubPage() {
  return (
    <div className="page-offset min-h-screen bg-slate-900 text-slate-900">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-76px)] items-center justify-center bg-slate-900 px-6 py-16">
        <WarpBackground
          className="border-slate-700 bg-slate-900 p-12 md:p-20"
          perspective={1000}
          beamsPerSide={4}
          beamSize={4}
          beamDelayMax={4}
          beamDelayMin={0}
          beamDuration={4}
          gridColor="hsl(217 33% 17%)"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cf6734]/50 bg-[#cf6734]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f97316] backdrop-blur-md">
              <span>⚡ 17 Categories & 180+ Services</span>
            </div>
            <h1 className="text-6xl font-extrabold text-white md:text-7xl lg:text-8xl tracking-tight">
              Coming Soon
            </h1>
            <p className="mt-6 text-xl font-semibold text-amber-200 md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed">
              We believe in empowering businesses to drive economic growth
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-block rounded-md bg-[#cf6734] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.26em] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#b45828]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </WarpBackground>
      </main>
      <FooterSection 
        newsletterFormId="newsletter-indushub"
        newsletterStatusId="newsletter-indushub-status"
      />
    </div>
  );
}

