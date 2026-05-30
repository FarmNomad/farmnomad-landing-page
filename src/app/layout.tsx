import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import localFont from "next/font/local";

const clashGrotesk = localFont({
  src: [
    { path: "../../public/fonts/ClashGrotesk-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/ClashGrotesk-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/ClashGrotesk-Semibold.woff2", weight: "600" },
    { path: "../../public/fonts/ClashGrotesk-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash-grotesk",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farmnomad.com"),
  title: {
    default: "FarmNomad | Powering Direct Farm-to-Market Logistics",
    template: "%s | FarmNomad",
  },
  description:
    "FarmNomad is a digital platform connecting farmers, buyers, and logistics providers to reduce food waste and improve agricultural market access.",
  keywords: [
    "FarmNomad",
    "agritech",
    "farm logistics",
    "farm marketplace",
    "food waste reduction",
    "agricultural supply chain",
    "farm-to-market platform",
  ],
  authors: [{ name: "FarmNomad Team" }],
  creator: "FarmNomad",
  publisher: "FarmNomad",
  openGraph: {
    title: "FarmNomad | Powering Direct Farm-to-Market Logistics",
    description:
      "A digital platform connecting farmers, buyers, and logistics providers to reduce waste and improve market access.",
    url: "https://farmnomad.com",
    siteName: "FarmNomad",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FarmNomad",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmNomad | Powering Direct Farm-to-Market Logistics",
    description:
      "A digital platform connecting farmers, buyers, and logistics providers to reduce waste and improve market access.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://farmnomad.com",
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        //  ${geistSans.variable} ${geistMono.variable}
        className={`${clashGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
