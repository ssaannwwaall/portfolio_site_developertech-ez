import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company Malaysia",
  description:
    "Software house services for Malaysian businesses. Flutter mobile apps, web platforms, SaaS and AI integration. Cost effective engineering with production standards.",
  keywords: ["Software Development Company Malaysia", "Mobile App Development Malaysia", "Software House Malaysia", "Flutter Developers Malaysia", "Web Development Company Malaysia", "SaaS Development Malaysia"],
  alternates: { canonical: "/software-development-malaysia" },
  openGraph: {
    title: "Software Development Company Malaysia | DevelopersTech",
    description: "Flutter apps, web platforms and SaaS for Malaysian businesses and startups.",
    url: "/software-development-malaysia",
  },
}

const config: LocationConfig = {
  region: "Malaysia",
  short: "Malaysia",
  eyebrow: "Serving Malaysia and Southeast Asia",
  h1: "Software development for Malaysian businesses.",
  h1Italic: 2,
  lede: "Enterprise grade engineering at a cost that makes sense for growing Malaysian companies. Flutter apps, web platforms, SaaS products and AI integration, delivered to the same standard we apply for UK enterprise clients.",
  intro: [
    "Malaysian businesses scaling into regional markets need software that will not need rebuilding in eighteen months. That is the standard we work to, whether the client is in London or Kuala Lumpur.",
    "Southeast Asia sits in a working window that overlaps ours closely, which makes collaboration straightforward. Same day replies, calls at sensible hours, no waiting overnight for answers.",
  ],
  points: [
    ["Enterprise standards, sensible cost", "The same architecture discipline we apply to UK enterprise work, at rates that suit a growing regional business."],
    ["Close timezone alignment", "Only a few hours between us. You get replies within your working day, not the next morning."],
    ["Regional and multi language", "Multi language interfaces, regional payment gateways and localisation built in from the start."],
    ["Built to scale", "We architect for the load you expect in two years, not just the load you have today."],
  ],
  workIds: ["restaurant", "ai", "crypto"],
  faqs: [
    ["Do you work with Malaysian companies?", "Yes. We work with clients across Southeast Asia. The close timezone overlap makes collaboration considerably easier than working with a European or US vendor."],
    ["How do your rates compare to local agencies?", "Our rates are typically competitive with regional agencies while bringing enterprise delivery experience from UK and UAE commercial projects."],
    ["Can you build multi language applications?", "Yes. We build localisation into the architecture from the start, including Bahasa Malaysia, Chinese and English within the same application."],
    ["Do you handle regional payment gateways?", "We integrate the gateways your market requires, alongside Stripe and standard card processing, with full testing before launch."],
    ["What is the typical project timeline?", "A focused MVP usually takes six to twelve weeks. Larger enterprise platforms run longer. You get a realistic timeline in writing after the discovery call."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Malaysia", path: "/software-development-malaysia" }]} /><LocationPage c={config} /></>
}
