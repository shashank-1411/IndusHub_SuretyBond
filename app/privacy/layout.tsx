import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Indus Hub protects your privacy and handles your personal information. Read our comprehensive privacy policy for surety bond services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Indus Hub",
    description: "Learn how Indus Hub protects your privacy and handles your personal information.",
    url: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
