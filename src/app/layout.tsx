import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
