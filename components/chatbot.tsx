'use client';

import { useState } from "react";
import { CtaButton } from "@/components/cta-button";

type Message = {
  from: "user" | "bot";
  text: string;
};

const initialMessages: Message[] = [
  {
    from: "bot",
    text: "Hi! To help you better, please share your mobile number. We’ll then show quick questions you can pick.",
  },
];

const quickQueries = [
  {
    q: "What documents do I need for a surety bond?",
    a: "Typically: Company profile, GST certificate, proposal form, tender docs, RFP, audited financials, and any credit rating. Requirements may vary by project.",
  },
  {
    q: "How fast can I get a surety bond?",
    a: "If documents are ready, we can usually turn around quickly after underwriting. Speed depends on completeness and insurer review.",
  },
  {
    q: "Do you work Pan-India?",
    a: "Yes, we support clients across India and with multiple insurers.",
  },
  {
    q: "Who are the key players in a surety bond?",
    a: "Principal (you), Surety Company (insurer), and Obligee (beneficiary/project owner).",
  },
  {
    q: "How do I start a quote?",
    a: "Share your documents via the quotation form or contact page, and we’ll proceed with underwriting.",
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [hasNumber, setHasNumber] = useState(false);

  function handleSendPhone(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = phone.trim();
    const digits = trimmed.replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("Please enter a valid mobile number (10+ digits).");
      return;
    }
    setPhoneError("");
    setHasNumber(true);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      {
        from: "bot",
        text: "Thanks! Pick a question below to continue, or reopen the quotation/contact forms for detailed submissions.",
      },
    ]);
  }

  function handleSelectQuery(q: string, a: string) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: a },
    ]);
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#cf6734] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cf6734]/60 md:bottom-6 md:right-6"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        ) : (
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
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 flex h-[360px] w-[90vw] max-w-[320px] flex-col rounded-[5px] border border-slate-300 bg-white shadow-xl md:bottom-20 md:right-6 md:h-[420px] md:w-[320px]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#003749] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50">
            <span>Indus Hub Assistant</span>
            <span className="text-[10px] text-slate-200">Online</span>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-xs leading-relaxed text-slate-800">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-md px-3 py-2 ${
                    m.from === "user"
                      ? "bg-[#cf6734] text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-3 py-2">
            {!hasNumber ? (
              <form onSubmit={handleSendPhone} className="space-y-2">
                <input
                  className="h-9 w-full rounded-sm border border-slate-300 bg-white px-2 text-xs text-slate-800 outline-none focus:border-[#cf6734]"
                  placeholder="Enter your mobile number to continue"
                  // Always provide a string value to avoid uncontrolled -> controlled warnings
                  value={phone ?? ""}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {phoneError && (
                  <p className="text-[10px] text-red-500">{phoneError}</p>
                )}
                <div className="flex justify-end">
                  <CtaButton label="Submit" type="submit" />
                </div>
              </form>
            ) : (
              <div className="space-y-2">
                <p className="text-[11px] font-semibold text-slate-800">
                  Pick a quick question:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQueries.map((item) => (
                    <button
                      key={item.q}
                      type="button"
                      onClick={() => handleSelectQuery(item.q, item.a)}
                      className="rounded-sm border border-slate-300 bg-white px-2 py-1 text-[11px] text-slate-800 transition hover:border-[#cf6734]"
                    >
                      {item.q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


