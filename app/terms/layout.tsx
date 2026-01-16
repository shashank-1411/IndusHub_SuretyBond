import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using Indus Hub's surety bond services and platform. Understand your rights and obligations when using our services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | Indus Hub",
    description: "Read the terms and conditions for using Indus Hub's surety bond services and platform.",
    url: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
