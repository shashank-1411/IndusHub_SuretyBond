import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Indus Hub | Surety Bonds",
  description: "Indus Hub surety bond solutions and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
