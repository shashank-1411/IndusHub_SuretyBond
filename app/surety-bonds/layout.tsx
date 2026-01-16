import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surety Bonds",
  description: "Comprehensive guide to surety bonds in India. Learn about bid bonds, performance bonds, payment bonds, and how they can benefit your construction and business projects.",
  keywords: [
    "surety bonds India",
    "bid bonds",
    "performance bonds",
    "payment bonds",
    "construction bonds",
    "contract bonds",
    "how surety bonds work"
  ],
  openGraph: {
    title: "Surety Bonds | Indus Hub",
    description: "Comprehensive guide to surety bonds in India. Learn about bid bonds, performance bonds, payment bonds, and more.",
    url: "/surety-bonds",
  },
  twitter: {
    title: "Surety Bonds | Indus Hub",
    description: "Comprehensive guide to surety bonds in India. Learn about bid bonds, performance bonds, payment bonds, and more.",
  },
};

export default function SuretyBondsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
