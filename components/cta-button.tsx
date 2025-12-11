import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export function CtaButton({ label, href, type = "button" }: CtaButtonProps) {
  const content = (
    <Button
      size="lg"
      className="group relative inline-flex overflow-hidden rounded-sm bg-[#cf6734] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white hover:bg-[#b45828]"
      type={href ? "button" : type}
    >
      <span className="relative z-20 pr-6 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-0">
        {label}
      </span>
      <span className="absolute inset-y-1 right-1 z-10 grid w-10 place-items-center rounded-sm bg-white/10 text-white transition-all duration-500 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        {/* Diagonal arrow icon */}
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
    </Button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}


