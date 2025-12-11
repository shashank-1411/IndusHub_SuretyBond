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
    text: "Hi! I can help with surety bonds, eligibility and our services. What would you like to know?",
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input.trim() };
    const botMessage: Message = {
      from: "bot",
      text:
        "Thanks for your question. Our team will be happy to assist you. " +
        "You can also fill the quotation form or use the contact page for a detailed response.",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#cf6734] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cf6734]/60 md:bottom-6 md:right-6"
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
        <div className="fixed bottom-20 right-4 z-40 flex h-[360px] w-[90vw] max-w-[320px] flex-col rounded-md border border-slate-300 bg-white shadow-xl md:bottom-20 md:right-6 md:h-[420px] md:w-[320px]">
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

          <form
            onSubmit={handleSend}
            className="border-t border-slate-200 bg-slate-50 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                className="h-9 flex-1 rounded-sm border border-slate-300 bg-white px-2 text-xs text-slate-800 outline-none focus:border-[#cf6734]"
                placeholder="Ask a question about surety bonds..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <CtaButton label="Send" />
            </div>
          </form>
        </div>
      )}
    </>
  );
}


