'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export function IndushubBanner() {
  const pathname = usePathname();
  
  // Don't show banner on the indushub page itself
  if (pathname === '/indushub') {
    return null;
  }

  return (
    <div className="border-t border-slate-200 bg-[#cf6734] px-6 py-4 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-semibold text-white sm:text-base">
            Visit our main website
          </p>
          <p className="mt-0.5 text-xs text-white/90 sm:text-sm">
            Explore more services at Indushub
          </p>
        </div>
        <Link
          href="/indushub"
          className="shrink-0 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#cf6734] transition-colors hover:bg-slate-50"
        >
          Visit Indushub
        </Link>
      </div>
    </div>
  );
}

