import type { Metadata, Viewport } from "next";
// eslint-disable-next-line camelcase
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@components/Header/Header";
import React from "react";
import Footer from "@components/Footer/Footer";
import NoiseOverlay from "@components/NoiseOverlay/NoiseOverlay";
import MobileBottomNav from "@components/MobileBottomNav/MobileBottomNav";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["300", "400"] });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["800"],
  display: "swap",
  variable: "--font-jakarta",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono-tech",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dron4k.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dron4k — Школа FPV-пілотів, курси операторів БПЛА та продаж дронів",
    template: "%s | Dron4k",
  },
  description:
    "Dron4k — навчання операторів та інженерів БПЛА, курси керування FPV-дронами DJI, продаж дронів для аерозйомки та військових потреб в Україні.",
  keywords: [
    "дрони",
    "БПЛА",
    "FPV",
    "курси операторів дронів",
    "навчання пілотів дронів",
    "продаж дронів",
    "DJI",
    "Dron4k",
  ],
  openGraph: {
    title: "Dron4k — Школа FPV-пілотів та продаж дронів",
    description:
      "Навчання операторів та інженерів БПЛА, курси керування FPV-дронами, продаж дронів DJI в Україні.",
    url: siteUrl,
    siteName: "Dron4k",
    locale: "uk_UA",
    type: "website",
    images: ["/assets/images/home.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dron4k — Школа FPV-пілотів та продаж дронів",
    description:
      "Навчання операторів та інженерів БПЛА, курси керування FPV-дронами, продаж дронів DJI в Україні.",
    images: ["/assets/images/home.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${inter.className} ${jakarta.variable} ${jetbrainsMono.variable} relative flex flex-col justify-between overflow-x-hidden min-h-screen bg-background text-foreground`}
      >
        <NoiseOverlay />
        <Header />
        {children}
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
