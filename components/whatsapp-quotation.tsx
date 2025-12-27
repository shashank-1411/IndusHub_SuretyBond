'use client';

import { CtaButton } from "@/components/cta-button";

interface WhatsAppQuotationProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function WhatsAppQuotation({
  phoneNumber = "919925624974", // Default phone number from footer
  defaultMessage = "Hello! I would like to submit documents for a Surety Bond quotation. Please guide me on the process.",
}: WhatsAppQuotationProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const requiredDocuments = [
    "Company Profile",
    "GST Certificate",
    "Surety Bond Proposal Form",
    "Tender Document (.pdf)",
    "Request For Proposal (RFP)",
    "Credit Rating Certificate (if available)",
    "Last 2 Year Audited Financial & Provisional Balance Sheet",
  ];

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="quotation-form" className="border-b border-slate-100 bg-white px-6 py-16 md:px-20">
      <div className="rounded-sm border border-slate-200 bg-white px-5 pb-10 pt-7 shadow-sm md:px-10">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cf6734]">
              Quotation For Surety Bond
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
              Submit Documents via WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Send us your documents directly through WhatsApp for a faster and more convenient submission process.
            </p>
          </div>
        </div>

        <div className="mt-8">
          {/* WhatsApp Instructions */}
          <div className="mb-8 rounded-lg border border-slate-200 bg-[#f8f9fb] p-6">
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  How it works
                </h3>
                <ol className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#cf6734]">1.</span>
                    <span>Click the button below to open WhatsApp</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#cf6734]">2.</span>
                    <span>Send us a message with your company details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#cf6734]">3.</span>
                    <span>Upload all required documents as files</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#cf6734]">4.</span>
                    <span>Our team will review and get back to you</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Required Documents List */}
          <div className="mb-8">
            <h3 className="mb-4 text-base font-semibold text-slate-900">
              Required Documents
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {requiredDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 rounded-md border border-slate-200 bg-white p-3"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#cf6734]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 2h8v12H4V2zM4 6h8M4 9h6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-600">
              <span className="font-semibold text-red-500">*</span> All documents marked with * are mandatory
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-slate-900">
                Ready to submit your documents?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Click below to start a conversation on WhatsApp
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="group flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20BA5A]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Open WhatsApp</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 3h8v8M5 11l8-8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            By proceeding, you agree to our{" "}
            <span className="underline">Terms & Conditions</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </section>
  );
}

