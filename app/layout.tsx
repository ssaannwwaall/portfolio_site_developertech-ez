import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header }       from "@/components/header"
import { Footer }       from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CustomCursor }  from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: { default: "DevelopersTech | Flutter & AI Software Development Company", template: "%s | DevelopersTech" },
  description: "DevelopersTech is a premium software development company founded by Sanwal Khan. Flutter mobile apps, AI-powered platforms, enterprise SaaS, and web applications for startups and businesses worldwide.",
  keywords: ["DevelopersTech","Sanwal Khan Software Engineer","Flutter Development Company","Mobile App Development","AI Development Company","Enterprise Software","Taxi Dispatch Software","Guard Monitoring Software","Custom Software Development"],
  authors: [{ name: "Sanwal Khan" }],
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="antialiased font-sans bg-background text-foreground">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
