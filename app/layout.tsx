import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcus Vance | High-Growth Executive & Business Coaching",
  description:
    "Systematic 1:1 business architecture, operational cadence, and scale frameworks for founders & CEOs scaling from 7 to 8 figures. Eliminate founder bottleneck.",
  keywords: [
    "Business Coach",
    "Executive Coaching",
    "Scale to 8 Figures",
    "CEO Advisory",
    "Strategic Growth",
    "Operational Scalability",
  ],
  authors: [{ name: "Marcus Vance" }],
  openGraph: {
    title: "Marcus Vance | Executive & Business Coaching",
    description:
      "Proven frameworks for founders and CEOs to scale revenue, eliminate bottlenecks, and build self-governing executive teams.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans bg-[var(--coach-bg)] text-[var(--coach-text-primary)] selection:bg-[var(--coach-accent)] selection:text-[var(--coach-accent-contrast)]">
        {children}
      </body>
    </html>
  );
}
