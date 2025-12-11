'use client';

import Script from "next/script";
import { SiteHeader } from "@/components/site-header";

const CALENDLY_URL = "https://calendly.com/indushub/30min";

export default function BookCallPage() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="px-6 py-10 md:px-16">
        <h1 className="text-3xl font-semibold text-slate-900">
          Book a Call with Indus Hub
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Pick a time that works best for you. Once booked, a calendar invite will
          be sent automatically.
        </p>

        <div className="mt-8 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <div
            className="calendly-inline-widget w-full"
            data-url={CALENDLY_URL}
            style={{ minHeight: "720px" }}
          />
        </div>
      </main>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <noscript>
        <a href={CALENDLY_URL}>Book a call on Calendly</a>
      </noscript>
    </div>
  );
}

