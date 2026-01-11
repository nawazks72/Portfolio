import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

import { personalInfo } from "./data/info";

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.jobTitles[0]}`,
  description: personalInfo.bio,
  keywords: [
    personalInfo.name,
    "Software Engineer",
    "Frontend Developer",
    "Data Analytics",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: `${personalInfo.name} - ${personalInfo.jobTitles[0]}`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.jobTitles[0]}`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
