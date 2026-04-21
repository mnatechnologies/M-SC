import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-var",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

// Keep the brand display font as an optional accent (used on the wordmark).
const hourglass = localFont({
  src: "./fonts/HourglassOfShine.otf",
  variable: "--font-display-var",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manhalsweets.com.au"),
  title: {
    default: "Manhal's Sweets & Cafe — Opening 26 April",
    template: "%s · Manhal's Sweets & Cafe",
  },
  description:
    "A neighbourhood sweets house and cafe. Cakes and milkshakes, crêpes, açaí, juice, mocktails and iced coffee. Opening 26 April.",
  openGraph: {
    title: "Manhal's Sweets & Cafe",
    description:
      "Cakes and milkshakes, crêpes, açaí, juice, mocktails and iced coffee. Opening 26 April.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${hourglass.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-burgundy focus:text-cream focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-light"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
