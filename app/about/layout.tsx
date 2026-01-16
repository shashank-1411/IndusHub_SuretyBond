import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Indus Hub - your trusted partner for surety bonds and financial guarantees. Discover our mission, vision, and comprehensive services for construction and business projects across India.",
  openGraph: {
    title: "About Us | Indus Hub",
    description: "Learn about Indus Hub - your trusted partner for surety bonds and financial guarantees.",
    url: "/about",
  },
  twitter: {
    title: "About Us | Indus Hub",
    description: "Learn about Indus Hub - your trusted partner for surety bonds and financial guarantees.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
