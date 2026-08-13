import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Mobile App Development Company Dubai UAE",
  description:
    "Mobile app and enterprise software development for Dubai and UAE businesses. Flutter apps, taxi dispatch systems, booking platforms and AI solutions. Free consultation.",
  keywords: ["Mobile App Development Dubai", "App Development Company UAE", "Software Development Company Dubai", "Flutter Developers Dubai", "Taxi Dispatch Software UAE", "Booking App Development Dubai"],
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
  eyebrow: "Serving Dubai and the UAE",
  h1: "Mobile app development for Dubai businesses.",
  h1Italic: 2,
  lede: "We have delivered dispatch and booking platforms for UAE operators. Real time tracking, Arabic ready interfaces, payment integration and the operational reliability transport and hospitality businesses require.",
  intro: [
    "The UAE market moves quickly and expects polish. Our work for a Dubai logistics client involved a dispatch system built to enterprise standards, delivered with clean code and zero post launch issues.",
    "We understand the requirements that matter here: multi language support including right to left layouts, local payment gateway integration, and real time systems that stay reliable under load.",
  ],
  points: [
    ["Delivered in the UAE", "We built a complete taxi dispatch platform for a Dubai based logistics operator. Their words: we understood their requirements better than they did."],
    ["Arabic and RTL ready", "We build interfaces that handle right to left layouts properly from the start, not as a retrofit that breaks half the screens."],
    ["Payment integration", "Stripe, local gateways and card processing integrated and tested, with the compliance handling that goes with them."],
    ["Aligned working hours", "The UAE business day overlaps ours almost entirely. Calls happen at reasonable hours for both sides."],
  ],
  workIds: ["tbms", "chauffeur", "restaurant"],
  faqs: [
    ["Have you delivered projects in the UAE before?", "Yes. We built a taxi dispatch system for a Dubai based logistics company, delivered to enterprise standards with a clean handoff and no post launch issues."],
    ["Can you build apps with Arabic language support?", "Yes. We build right to left layout support into the architecture from the beginning, so Arabic interfaces work properly rather than looking like an afterthought."],
    ["Do you integrate UAE payment gateways?", "We integrate Stripe, regional gateways and standard card processing, including the testing and compliance work that comes with handling payments."],
    ["What types of businesses do you work with in Dubai?", "Transport and dispatch operators, hospitality and restaurant groups, logistics companies, and technology startups building their first product."],
    ["How quickly can you start?", "We are currently taking on new work. After a discovery call we typically deliver a scoped brief within forty eight hours and can begin shortly after approval."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Mobile App Development Dubai", path: "/mobile-app-development-dubai" }]} /><LocationPage c={config} /></>
}
