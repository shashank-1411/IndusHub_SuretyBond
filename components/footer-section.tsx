'use client';

import Image from "next/image";
import Link from "next/link";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";

interface FooterSectionProps {
  newsletterFormId?: string;
  newsletterStatusId?: string;
  confettiFormIds?: string[];
}

export function FooterSection({
  newsletterFormId = "newsletter-home",
  newsletterStatusId = "newsletter-home-status",
  confettiFormIds = [],
}: FooterSectionProps = {}) {
  return (
    <>
      <footer className="bg-white px-6 py-12 text-slate-800 md:px-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
          {/* Left */}
          <div className="space-y-4">
            <Image
              src="/logo updated.png"
              alt="Indus Hub logo"
              width={110}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-sm font-semibold text-slate-700">Your Growth Partner</p>
            <hr className="w-72 border-slate-200" />
            <div className="flex flex-wrap gap-6 text-xs text-slate-700">
              <Link href="/about" className="font-semibold hover:text-[#cf6734]">About</Link>
              <Link href="/indushub-services" className="font-semibold hover:text-[#cf6734]">Services</Link>
              <Link href="/privacy" className="font-semibold hover:text-[#cf6734]">Privacy Policy</Link>
              <Link href="/terms" className="font-semibold hover:text-[#cf6734]">Terms and Conditions</Link>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3 text-[13px] font-semibold text-slate-800">
            <div>
              <p className="font-semibold">Call:</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">+91 99256 24974</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">pravin@indushub.in</p>
            </div>
            <form
              id={newsletterFormId}
              className="mt-4 flex max-w-xs items-stretch gap-0"
            >
              <input type="hidden" name="formType" value="newsletter" />
              <input
                type="email"
                placeholder="Write Email"
                required
                name="email"
                className="h-9 w-full flex-1 rounded-l-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
              />
              <button
                type="submit"
                className="h-9 rounded-r-sm bg-[#cf6734] px-4 text-[12px] font-semibold text-white hover:bg-[#b45828]"
              >
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
              </button>
            </form>
            <p
              id={newsletterStatusId}
              className="hidden text-xs font-semibold text-green-600"
            >
              Submitted. Thank you!!
            </p>
          </div>
        </div>
      </footer>
      {confettiFormIds.length > 0 && <ConfettiTrigger formIds={confettiFormIds} />}
      <FormFeedback
        mappings={[
          { formId: newsletterFormId, messageId: newsletterStatusId },
        ]}
      />
    </>
  );
}

