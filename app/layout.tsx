import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Hire Flutter Developer | Cross-Platform Mobile App Development | Android iOS Expert - Sanwal Khan",
  description:
    "Professional Flutter App Developer & Cross-Platform Mobile App Development expert. Hire Flutter developer for Android & iOS apps with Firebase integration. 5+ years experience, 100+ apps delivered by Sanwal Khan at DeveloperTech.",
  keywords: [
    // Global SEO Keywords
    "Flutter App Developer",
    "Hire Flutter Developer",
    "Cross-Platform Mobile App Development",
    "Android and iOS App Development",
    "Firebase Flutter Developer",
    "Hybrid Mobile App Developer",
    "AI + Mobile App Development",
    "Custom Mobile App Development Services",
    // Local SEO Keywords
    "Flutter App Developer in Lahore",
    "Mobile App Development Company in Lahore",
    "Hire Flutter Developer in Pakistan",
    "Flutter Developer UK",
    "Android iOS App Developer in Pakistan",
    "Best Mobile App Development Services Lahore",
    // Long-tail Keywords
    "Affordable Flutter App Developer for Startups",
    "Best Freelancer Flutter Developer 2025",
    "Flutter App with Firebase Integration",
    "Flutter App Developer for AI and Chatbot Apps",
    "Flutter App Developer for Taxi Booking Apps",
    "Sanwal Khan Flutter developer",
    "DeveloperTech Pakistan",
  ],
  authors: [{ name: "Sanwal Khan", url: "https://developertech.pk" }],
  creator: "Sanwal Khan - DeveloperTech",
  publisher: "DeveloperTech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developertech.pk",
    title: "Hire Flutter Developer | Cross-Platform Mobile App Development Expert",
    description:
      "Professional Flutter App Developer with 5+ years experience. Cross-platform mobile app development for Android & iOS with Firebase integration. Hire top Flutter developer.",
    siteName: "DeveloperTech - Sanwal Khan Portfolio",
    images: [
      {
        url: "/images/company-logo.png",
        width: 1200,
        height: 630,
        alt: "DeveloperTech - Flutter Developer Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Flutter Developer | Cross-Platform Mobile App Development",
    description:
      "Professional Flutter App Developer. Cross-platform mobile app development for Android & iOS with Firebase integration.",
    images: ["/images/company-logo.png"],
  },
  alternates: {
    canonical: "https://developertech.pk",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
