import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: { default: "DevelopersTech | Flutter, AI and Enterprise Software Studio", template: "%s | DevelopersTech" },
  description: "DevelopersTech is an engineering studio led by Sanwal Khan. Our team builds Flutter apps, AI platforms and enterprise systems for clients across the UK, UAE, Europe and the US.",
  keywords: ["DevelopersTech", "Sanwal Khan Software Engineer", "Flutter Development Company", "Mobile App Development", "AI Development", "Taxi Dispatch Software", "Guard Monitoring Software", "Custom Software Development"],
  authors: [{ name: "Sanwal Khan" }],
  openGraph: {
    type: "website", siteName: "DevelopersTech",
    title: "DevelopersTech | Flutter, AI and Enterprise Software Studio",
    description: "An engineering studio shipping Flutter apps, AI platforms and enterprise systems worldwide.",
    images: [{ url: "/images/company-logo.png", width: 1200, height: 630, alt: "DevelopersTech" }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
