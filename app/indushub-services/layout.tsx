import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IndusHub Services",
  description: "Discover IndusHub's comprehensive surety bond services including procurement, advisory & structuring, insurer partnerships, program management, and risk analytics.",
  keywords: [
    "surety bond services",
    "bond procurement",
    "bond advisory",
    "bond management",
    "risk analytics",
    "surety bond consulting"
  ],
  openGraph: {
    title: "IndusHub Services | Indus Hub",
    description: "Comprehensive surety bond services including procurement, advisory, partnerships, and program management.",
    url: "/indushub-services",
  },
  twitter: {
    title: "IndusHub Services | Indus Hub",
    description: "Comprehensive surety bond services including procurement, advisory, partnerships, and program management.",
  },
};

export default function IndushubServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
