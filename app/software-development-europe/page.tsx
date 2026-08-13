import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company for Europe",
  description:
    "Software development for European businesses. Flutter apps, SaaS platforms and AI integration with GDPR compliant architecture. Trusted by clients in Germany and across the EU.",
  keywords: ["Software Development Company Europe", "Flutter App Development Europe", "Offshore Software Development Europe", "GDPR Compliant Software Development", "Mobile App Development Germany", "SaaS Development Europe"],
  alternates: { canonical: "/software-development-europe" },
  openGraph: {
    title: "Software Development Company for Europe | DevelopersTech",
    description: "Flutter apps, SaaS and AI platforms with GDPR compliant architecture for European clients.",
    url: "/software-development-europe",
  },
}

const config: LocationConfig = {
  region: "Europe",
  short: "Europe",
  eyebrow: "Serving Europe",
  h1: "Software development for European businesses.",
  h1Italic: 2,
  lede: "GDPR compliant architecture, clean maintainable code and delivery on schedule. Our German client came back three times, which we consider the only review that really counts.",
  intro: [
    "European clients tend to care about the same things we do: code quality, data handling, and whether the system will still make sense to a new engineer in two years.",
    "We build with GDPR in mind from the architecture stage rather than bolting compliance on at the end, and we hand over documentation your own team can work from.",
  ],
  points: [
    ["Returning European clients", "Our German client hired us for a Flutter project, then came back three more times. Their reason: code quality they could actually maintain."],
    ["GDPR from the start", "Data residency, consent handling and retention policies are architecture decisions, made at the beginning rather than patched in later."],
    ["Overlapping working hours", "Our day overlaps the European working day substantially. Calls and replies happen within your business hours."],
    ["Documentation you can use", "Every handover includes technical documentation written for engineers who were not on the project."],
  ],
  workIds: ["jamgo", "ai", "softpatrol"],
  faqs: [
    ["Do you handle GDPR requirements?", "Yes. We treat data residency, consent flows and retention policies as architecture decisions made at the start of a project, not compliance paperwork added at the end."],
    ["Have you worked with European clients?", "Yes. Our German client engaged us for four separate projects. We have also delivered web platform work for other European clients."],
    ["Can you host data within the EU?", "Yes. We deploy to EU regions on AWS, Google Cloud or Vercel depending on what suits the project and your compliance requirements."],
    ["How do you handle contracts and invoicing?", "We work with standard written agreements and can invoice in EUR, GBP or USD. NDAs signed before project discussion if you prefer."],
    ["What languages do you support in applications?", "We build multi language support into the architecture from the start, including German, French, Spanish and other European languages within one application."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Europe", path: "/software-development-europe" }]} /><LocationPage c={config} /></>
}
