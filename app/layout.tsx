import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";
import { StructuredData } from "@/components/structured-data";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://indushub.com'),
  title: {
    default: "Indus Hub | Surety Bonds & Financial Guarantees",
    template: "%s | Indus Hub"
  },
  description: "Indus Hub provides comprehensive surety bond solutions and financial guarantees for construction, infrastructure, and business projects across India. Fast issuance, transparent process, reliable backing.",
  keywords: [
    "surety bonds",
    "financial guarantees",
    "construction bonds",
    "bid bonds",
    "performance bonds",
    "payment bonds",
    "bank guarantees",
    "India",
    "Indus Hub",
    "contract bonds",
    "customs bonds",
    "license bonds"
  ],
  authors: [{ name: "Indus Hub" }],
  creator: "Indus Hub",
  publisher: "Indus Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/indus_business_hub_logo.jpg",
    shortcut: "/indus_business_hub_logo.jpg",
    apple: "/indus_business_hub_logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Indus Hub",
    title: "Indus Hub | Surety Bonds & Financial Guarantees",
    description: "Comprehensive surety bond solutions and financial guarantees for construction, infrastructure, and business projects across India.",
    images: [
      {
        url: "/indus_business_hub_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Indus Hub - Surety Bonds & Financial Guarantees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indus Hub | Surety Bonds & Financial Guarantees",
    description: "Comprehensive surety bond solutions and financial guarantees for construction, infrastructure, and business projects across India.",
    images: ["/indus_business_hub_logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <StructuredData />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
