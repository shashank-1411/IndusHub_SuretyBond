import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Indus Hub for surety bond solutions. Contact our team for quotes, consultations, and expert advice on financial guarantees for your projects.",
  openGraph: {
    title: "Contact Us | Indus Hub",
    description: "Get in touch with Indus Hub for surety bond solutions and expert consultations.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Indus Hub",
    description: "Get in touch with Indus Hub for surety bond solutions and expert consultations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
