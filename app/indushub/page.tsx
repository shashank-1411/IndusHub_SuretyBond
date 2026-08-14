'use client';

import Link from "next/link";
import Image from "next/image";

export default function IndushubPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-950">
      {/* Top Floating Bar with Connect with Us CTA */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/95 px-6 py-3 shadow-xl backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo updated.png"
            alt="Indus Hub logo"
            width={120}
            height={30}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#cf6734] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-transform hover:scale-105 hover:bg-[#b45828]"
          >
            <span>Connect with Us</span>
            <span className="text-sm">&rarr;</span>
          </Link>
        </div>
      </header>

      {/* Fullscreen Embedded Website https://indushub.in/ */}
      <iframe
        src="https://indushub.in/"
        title="Indus Hub Main Website"
        className="h-full w-full border-none pt-14"
        allow="fullscreen"
      />
    </div>
  );
}
