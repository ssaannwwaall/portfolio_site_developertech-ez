import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Mobile App Development Company Dubai UAE",
  description:
    "Mobile app and enterprise software development for Dubai and UAE businesses. Flutter apps, dispatch systems, booking platforms with Arabic RTL support and local payment integration.",
  keywords: ["Mobile App Development Dubai", "App Development Company UAE", "Software Development Company Dubai", "Flutter Developers Dubai", "Taxi Dispatch Software UAE", "Booking App Development Dubai", "Arabic App Development"],
  alternates: { canonical: "/mobile-app-development-dubai" },
  openGraph: {
    title: "Mobile App Development Company Dubai UAE | DevelopersTech",
    description: "Flutter apps, dispatch systems and booking platforms for Dubai and UAE businesses.",
    url: "/mobile-app-development-dubai",
  },
}

const config: LocationConfig = {
  region: "the UAE",
  short: "the UAE",
  eyebrow: "Serving Dubai and the Emirates",
  h1: "Mobile app development for Dubai businesses.",
  h1Italic: 2,
  lede: "We built a complete dispatch platform for a Dubai logistics operator. Their feedback was that we understood the requirements better than they did, which is the review we are proudest of.",
  intro: [
    "The Emirates market expects polish and moves fast. A product that looks unfinished loses credibility here more quickly than almost anywhere else, and buyers notice the details.",
    "Our UAE work centres on operations software. We delivered a taxi dispatch system for a Dubai based logistics company, built to enterprise standards with a clean handover and no post launch firefighting. That project taught us the specific demands of this region: bilingual interfaces from day one, local payment rails, and reliability during peak hours when the roads are full.",
    "Arabic support is where most agencies underestimate the work. Right to left is not a translation task, it is a layout architecture decision. Retrofit it and half your screens break. We build it into the structure from the first screen, so the Arabic experience is equal rather than an afterthought bolted on before launch.",
  ],
  points: [
    ["Delivered in the Emirates already", "We built a taxi dispatch platform for a Dubai logistics operator, to enterprise standards, with a clean handover and no post launch issues."],
    ["Arabic and RTL built into the architecture", "Right to left layout is designed in from the beginning, not retrofitted. Both language experiences are equal, because in this market both matter."],
    ["Payment rails that work locally", "Stripe, regional gateways and card processing integrated and tested, including the compliance work that comes with handling payments here."],
    ["Almost identical working hours", "Our day and the UAE business day overlap almost completely. Calls happen at civilised hours for both sides and nothing waits overnight."],
  ],
  services: [
    ["Taxi and chauffeur dispatch", "Real time job allocation, live driver tracking, dynamic pricing and corporate account management. Built from a system we already delivered in Dubai."],
    ["Bilingual Flutter applications", "Arabic and English within one app, with right to left layout handled structurally. Both experiences hold up because both were designed, not translated."],
    ["Booking and reservation platforms", "Restaurant reservations, service scheduling and appointment systems, with the payment and confirmation flows Gulf customers expect."],
    ["Fleet and logistics software", "Vehicle tracking, route management, driver performance reporting and maintenance scheduling for operators running at scale."],
    ["Hospitality and F&B systems", "QR ordering, kitchen display, POS integration and multi branch reporting for restaurant groups across the Emirates."],
    ["Enterprise dashboards", "Operations portals with role based access, Arabic interface support and the reporting depth management teams here expect."],
  ],
  workIds: ["tbms", "chauffeur", "restaurant"],
  working: [
    ["Aligned business hours", "The overlap between our day and yours is nearly complete. Questions get answered the same working day, and calls do not require anyone to be awake at an unreasonable hour."],
    ["Contracts and invoicing", "Written agreements invoiced in AED, USD or GBP. We are comfortable working under your legal paperwork if your company requires it."],
    ["Fast scoping", "After a discovery call we typically return a scoped brief within forty eight hours. The Emirates market does not enjoy waiting, and neither do we."],
    ["Handover and ownership", "Source code, documentation and deployment access transfer at completion. Your product remains yours with no ongoing dependency on us."],
  ],
  faqs: [
    ["Have you delivered projects in the UAE before?", "Yes. We built a taxi dispatch system for a Dubai based logistics company, delivered to enterprise standards with a clean handover and no post launch issues. Their review is featured on our homepage."],
    ["Can you build apps with proper Arabic support?", "Yes, and properly is the operative word. Right to left layout is built into the architecture from the first screen rather than retrofitted, so Arabic screens are not the ones that break."],
    ["Which payment gateways can you integrate?", "Stripe, regional Gulf gateways and standard card processing, including testing and the compliance work that comes with handling payments in this market."],
    ["What kinds of businesses do you work with in Dubai?", "Transport and dispatch operators, logistics companies, hospitality and restaurant groups, and technology startups building a first product."],
    ["How quickly can a project start?", "We are currently taking on new work. After a discovery call we usually deliver a scoped brief within forty eight hours and can begin shortly after approval."],
    ["Do you work with companies in Abu Dhabi and Sharjah?", "Yes. Our work is remote, so the emirate makes no practical difference. Everything runs the same way regardless of where in the UAE you are based."],
    ["Can you maintain the app after launch?", "Yes. Thirty days of support is included, and most UAE clients continue on a monthly retainer for feature work and platform updates."],
  ],
  close: "Gulf projects tend to have tight timelines, so here is exactly how an engagement runs before you ask.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Mobile App Development Dubai", path: "/mobile-app-development-dubai" }]} /><LocationPage c={config} /></>
}
