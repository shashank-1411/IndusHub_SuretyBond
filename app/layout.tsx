import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";
import { StructuredData } from "@/components/structured-data";
import { IndependencePopup } from "@/components/independence-popup";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://suretybondhub.in'),
  title: {
    default: "Indus Hub Surety Bond | India's Trusted Surety Bond Partner",
    template: "%s | Indus Hub Surety Bond"
  },
  description: "Indus Hub Surety Bond - India's trusted partner for surety bonds. Issued India's first Defense bond and Municipal Corporation bond. Fast issuance within 3 hours. Replace bank guarantees with efficient surety bonds for infrastructure, EPC, and government projects.",
  keywords: [
    "indus hub surety bond",
    "indus hub",
    "surety bonds",
    "surety bond india",
    "financial guarantees",
    "construction bonds",
    "bid bonds",
    "performance bonds",
    "payment bonds",
    "bank guarantees",
    "India",
    "contract bonds",
    "customs bonds",
    "license bonds",
    "infrastructure bonds",
    "EPC bonds",
    "government bonds",
    "PSU bonds"
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
    siteName: "Indus Hub Surety Bond",
    title: "Indus Hub Surety Bond | India's Trusted Surety Bond Partner",
    description: "Indus Hub Surety Bond - Issued India's first Defense bond and Municipal Corporation bond. Fast issuance within 3 hours. Replace bank guarantees with efficient surety bonds.",
    images: [
      {
        url: "/indus_business_hub_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Indus Hub Surety Bond - India's Trusted Surety Bond Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indus Hub Surety Bond | India's Trusted Surety Bond Partner",
    description: "Indus Hub Surety Bond - Issued India's first Defense bond and Municipal Corporation bond. Fast issuance within 3 hours.",
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
    google: 's_ZsW6QJ0CIXiSMs0K2v5FrXDgLPbK8pPKII3w9CXf8',
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
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8BLZS027DV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8BLZS027DV');
          `}
        </Script>
        <StructuredData />
        {children}
        <Chatbot />
        <IndependencePopup />
      </body>
    </html>
  );
}
