import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a consultation call with Indus Hub's surety bond experts. Get personalized advice and quotes for your project's financial guarantee needs.",
  openGraph: {
    title: "Book a Call | Indus Hub",
    description: "Schedule a consultation call with Indus Hub's surety bond experts.",
    url: "/book-call",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
