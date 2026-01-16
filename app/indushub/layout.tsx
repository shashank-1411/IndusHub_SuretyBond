import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IndusHub - Coming Soon",
  description: "IndusHub is working on something amazing. Stay tuned for new surety bond solutions and services.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "IndusHub - Coming Soon | Indus Hub",
    description: "IndusHub is working on something amazing. Stay tuned for new surety bond solutions.",
    url: "/indushub",
  },
};

export default function IndushubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
