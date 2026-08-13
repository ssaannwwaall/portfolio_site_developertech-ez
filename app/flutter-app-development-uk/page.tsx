import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Flutter App Development Company UK",
  description:
    "Flutter app development for UK businesses. We build cross platform mobile apps, taxi dispatch systems and guard monitoring software already running for UK operators. Free consultation.",
  keywords: ["Flutter App Development UK", "Mobile App Development Company UK", "Software Development Company UK", "Taxi Dispatch Software UK", "Guard Monitoring Software UK", "App Developers UK"],
  alternates: { canonical: "/flutter-app-development-uk" },
  openGraph: {
    title: "Flutter App Development Company UK | DevelopersTech",
    description: "Cross platform Flutter apps and enterprise systems for UK businesses. Live products with UK operators.",
    url: "/flutter-app-development-uk",
  },
}

const config: LocationConfig = {
  region: "the United Kingdom",
  short: "the UK",
  eyebrow: "Serving the United Kingdom",
  h1: "Flutter app development for UK businesses.",
  h1Italic: 2,
  lede: "Our team has spent five years building commercial software for UK operators. Taxi dispatch, guard monitoring, enterprise platforms. Software that runs every day, not software that demos well.",
  intro: [
    "Most of our enterprise experience comes from the United Kingdom. We built and maintained dispatch systems used by transport operators and patrol management platforms used by security firms, both running in daily commercial operation.",
    "That means we already understand the constraints UK businesses work under: GDPR handling, real time reliability requirements, and the operational realities of a workforce in the field.",
  ],
  points: [
    ["Existing UK track record", "Our TBMS dispatch platform and Softpatrol guard monitoring system are both live with UK operators. This is not speculative experience."],
    ["Timezone that works", "Our working day overlaps the UK morning and afternoon. You get replies during your business hours, not overnight."],
    ["Fixed scope, fixed price", "You receive a detailed brief with line items before anything begins. No open ended hourly billing, no surprise invoices."],
    ["Full code ownership", "Source code, documentation and deployment access are handed over at completion. There is no vendor lock in."],
  ],
  workIds: ["softpatrol", "tbms"],
  faqs: [
    ["Do you work with UK companies regularly?", "Yes. The majority of our enterprise work has been delivered for UK based clients, including a transport operator running our dispatch platform and security firms using our patrol management system."],
    ["How do we handle communication across timezones?", "Our working hours overlap the UK business day. We use whichever tools your team already runs on, with weekly builds on a shared staging environment so you can see progress rather than take our word for it."],
    ["Can you sign an NDA before we share details?", "Yes. We are happy to sign an NDA before any project discussion. Just mention it on the first call."],
    ["What does a typical UK project cost?", "It depends entirely on scope. A focused MVP usually runs lower than a full enterprise platform. We give you a written breakdown with line items after the discovery call, not a vague range."],
    ["Do you provide support after launch?", "Every project includes thirty days of post launch support. Many UK clients continue on a monthly retainer for feature work and maintenance after that."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Flutter App Development UK", path: "/flutter-app-development-uk" }]} /><LocationPage c={config} /></>
}
