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
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-white md:text-7xl lg:text-8xl xl:text-9xl">
              Coming Soon
            </h1>
            <p className="mt-6 text-xl text-slate-300 md:text-2xl lg:text-3xl">
              We&apos;re working on something amazing. Stay tuned!
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-block rounded-sm bg-[#cf6734] px-6 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:bg-[#b45828]"
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

