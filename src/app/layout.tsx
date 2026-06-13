import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/constants";

const kalam = Kalam({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-kalam",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Creative Developer Portfolio`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
