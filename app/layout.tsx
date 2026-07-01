import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "DevelopersTech | Software Development Company — Flutter, AI & Enterprise Solutions",
  description:
    "DevelopersTech is a premium software development company founded by Sanwal Khan. We specialize in Flutter mobile apps, AI-powered applications, enterprise SaaS, web platforms, and digital growth services for startups and businesses worldwide.",
  keywords: [
    "DevelopersTech",
    "Software Development Company",
    "Flutter Development Company",
    "Mobile App Development",
    "Sanwal Khan Software Engineer",
    "Sanwal Khan Flutter Developer",
    "AI Development Company",
    "Enterprise Software Development",
    "Custom Software Development",
    "SaaS Development",
    "Web Application Development",
    "Cross Platform App Development",
    "Flutter App Developer Pakistan",
    "Taxi Dispatch Software",
    "Guard Monitoring Software",
    "B2B Lead Generation",
    "SEO Services",
    "Business Automation",
    "API Development",
    "Backend Development Services",
  ],
  authors: [{ name: "Sanwal Khan", url: "https://developerstechs.com" }],
  creator: "Sanwal Khan — DevelopersTech",
  publisher: "DevelopersTech",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developerstechs.com",
    title: "DevelopersTech | Software Development Company",
    description:
      "Premium software development — Flutter, AI, Enterprise SaaS, Web Apps. Founded by Sanwal Khan with 5+ years of engineering experience.",
    siteName: "DevelopersTech",
    images: [
      {
        url: "/images/company-logo.png",
        width: 1200,
        height: 630,
        alt: "DevelopersTech — Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevelopersTech | Software Development Company",
    description:
      "Premium software development — Flutter, AI, Enterprise SaaS, and Web Apps for startups and enterprises.",
    images: ["/images/company-logo.png"],
  },
  alternates: {
    canonical: "https://developerstechs.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
