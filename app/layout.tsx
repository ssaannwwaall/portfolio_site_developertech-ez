import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  metadataBase: new URL("https://developerstech.space"),
  title: {
    default: "DevelopersTech | Flutter, AI and Enterprise Software Development Company",
    template: "%s | DevelopersTech",
  },
  description:
    "DevelopersTech is an engineering studio led by Sanwal Khan. Our team builds Flutter apps, AI platforms and enterprise systems for clients across the UK, USA, UAE, Malaysia and Europe.",
  keywords: [
    "DevelopersTech",
    "Sanwal Khan Software Engineer",
    "Flutter Development Company",
    "Mobile App Development Company",
    "Software Development Company UK",
    "Software Development Company USA",
    "Mobile App Development Dubai",
    "Software House Malaysia",
    "AI Development Company",
    "Custom Software Development",
    "Enterprise Software Development",
    "Taxi Dispatch Software",
    "Guard Monitoring Software",
    "SaaS Development Company",
  ],
  authors: [{ name: "Sanwal Khan", url: "https://www.linkedin.com/in/sanwal-khan-3b4019213" }],
  creator: "DevelopersTech",
  publisher: "DevelopersTech",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://developerstech.space",
    siteName: "DevelopersTech",
    title: "DevelopersTech | Flutter, AI and Enterprise Software Development Company",
    description:
      "An engineering studio shipping Flutter apps, AI platforms and enterprise systems for clients worldwide.",
    images: [{ url: "/images/company-logo.png", width: 1200, height: 630, alt: "DevelopersTech software development company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevelopersTech | Flutter, AI and Enterprise Software Development",
    description: "An engineering studio shipping Flutter apps, AI platforms and enterprise systems worldwide.",
    images: ["/images/company-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0E1B26",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-PTGS9070NF" />
    </html>
  )
}
