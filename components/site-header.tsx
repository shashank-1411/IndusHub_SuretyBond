'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white">
      <div className="flex items-center justify-between px-5 py-4 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo updated.png"
            alt="Indus Hub logo"
            width={80}
            height={20}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-600 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-0.5 transition-colors ${
                  isActive
                    ? "border-[#cf6734] text-[#cf6734]"
                    : "border-transparent hover:border-[#cf6734]/60 hover:text-[#cf6734]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-sm bg-white px-0 py-0 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-900 hover:text-[#cf6734] md:flex"
          >
            <span>Contact</span>
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-sm bg-[#cf6734] text-white">
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
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-slate-300 text-slate-700 md:hidden"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#f1e6de] bg-white px-5 py-4 shadow-md md:hidden">
          <nav className="flex flex-col gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-800">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b pb-2 ${
                    isActive ? "border-[#cf6734] text-[#cf6734]" : "border-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center gap-2 text-[#cf6734]"
            >
              Contact
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#cf6734] text-white">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3">
                  <path
                    d="M5 3h8v8M5 11l8-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


