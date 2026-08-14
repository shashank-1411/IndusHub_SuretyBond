'use client';

import Link from "next/link";

export function Chatbot() {
  return (
    <Link
      href="/"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#cf6734] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cf6734]/60 md:bottom-6 md:right-6"
      aria-label="Go to Home page"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
