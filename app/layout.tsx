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
  title: "Sanwal Khan - Flutter Developer Pakistan | Mobile App Developer Android iOS | DeveloperTech",
  description:
    "Hire Flutter developer in Pakistan - Sanwal Khan, Director at DeveloperTech. Expert Flutter Firebase developer with 5+ years experience in mobile app development for Android & iOS. 100+ apps delivered.",
  keywords: [
    "Flutter developer Pakistan",
    "Mobile app developer Android iOS",
    "Hire Flutter developer",
    "Flutter Firebase developer",
    "Pakistan mobile app development",
    "Android app developer Pakistan",
    "iOS app developer Pakistan",
    "Flutter expert Pakistan",
    "Mobile app development services",
    "Cross-platform app developer",
    "React Native developer Pakistan",
    "App development company Pakistan",
    "DeveloperTech Pakistan",
    "Sanwal Khan Flutter developer",
  ],
  authors: [{ name: "Sanwal Khan", url: "https://developertech.pk" }],
  creator: "Sanwal Khan - DeveloperTech",
  publisher: "DeveloperTech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developertech.pk",
    title: "Sanwal Khan - Flutter Developer Pakistan | Mobile App Developer",
    description:
      "Expert Flutter developer in Pakistan with 5+ years experience. Hire top mobile app developer for Android & iOS development.",
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
    title: "Sanwal Khan - Flutter Developer Pakistan",
    description: "Expert Flutter developer in Pakistan. Mobile app development for Android & iOS.",
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
