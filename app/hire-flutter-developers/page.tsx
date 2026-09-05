import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Hire Flutter Developers",
  description:
    "Hire Flutter developers with five years of production experience. Apps in daily commercial use across the UK and UAE. 5.0 from 59 verified reviews, repeat clients, full code ownership.",
  keywords: [
    "hire flutter developers",
    "hire flutter app developers",
    "flutter development team",
    "dedicated flutter developers",
    "flutter developers for hire",
    "outsource flutter development",
  ],
  alternates: { canonical: "/hire-flutter-developers" },
  openGraph: {
    title: "Hire Flutter Developers | DevelopersTech",
    description: "Five years of production Flutter. Apps running commercially in the UK and UAE.",
    url: "/hire-flutter-developers",
  },
}

const config: LocationConfig = {
  region: "your team",
  short: "hiring us",
  eyebrow: "Hire Flutter developers",
  h1: "Hire Flutter developers who ship to production.",
  h1Italic: 2,
  lede: "Five years of Flutter, with apps running commercially in the UK and UAE right now. Not a portfolio of prototypes, systems that operators depend on daily.",
  intro: [
    "Most Flutter portfolios show applications that were built and handed over. Very few show applications the team still maintains under real load, which is where the difference between competent and experienced actually appears.",
    "Ours are still running. TBMS allocates jobs and tracks drivers for a UK transport operator every working day. Softpatrol manages guard patrols for security firms and has passed a thousand installs on Google Play. Both have been through peak load, lost connectivity and disputed records.",
    "That experience shows up in unglamorous places. How the app behaves on a two year old Android device on a weak connection. What happens to queued data when the process is killed. Whether the state survives a backgrounded app. These are the things that decide whether users trust an application, and they are rarely visible in a demo.",
  ],
  points: [
    ["Production experience, not portfolio pieces", "Our Flutter apps are in daily commercial operation and we maintain them. Every hard problem we describe is one we have already solved under real conditions."],
    ["One codebase, four platforms", "Android, iOS, web and desktop from a single codebase. For most clients this is the difference between one build cycle and two."],
    ["Verified track record", "Fifty nine reviews at a 5.0 average, with clients in the United States and Germany who returned for multiple projects."],
    ["Your code stays yours", "Source, documentation and deployment access transfer at completion. No licensing arrangement and no dependency on us for future changes."],
  ],
  services: [
    ["Full application builds", "From scoping through to store submission. Android and iOS from one Flutter codebase, with the platform specific work handled where it matters."],
    ["Joining an existing codebase", "Taking over or extending a Flutter project someone else started. We audit first and give an honest view on its condition."],
    ["Native to Flutter migration", "Moving an existing native estate onto Flutter. One migration cut ongoing maintenance cost by roughly forty percent."],
    ["Offline first architecture", "Applications that keep working without connectivity and reconcile correctly when it returns. Essential for any app used away from a desk."],
    ["Real time features", "GPS tracking, live dispatch, WebSocket data and push notification flows that behave correctly when the network does not."],
    ["Ongoing development retainers", "Monthly capacity for feature work, platform updates and store compliance as requirements change."],
  ],
  workIds: ["softpatrol", "tbms", "chauffeur"],
  working: [
    ["Fixed scope or monthly retainer", "Fixed price for defined projects, monthly retainer for ongoing capacity. Both come with a written breakdown before work starts."],
    ["Weekly builds on staging", "A build lands every week that you can open and use. Progress is verified rather than reported."],
    ["Works alongside your team", "We integrate with internal engineers where you have them, and we are comfortable with your tooling and review process."],
    ["Documentation for successors", "Handover is written for engineers who were not on the project, because that is what makes the code genuinely yours."],
  ],
  faqs: [
    ["How much Flutter experience does your team have?", "Five years, with applications in continuous commercial operation. TBMS and Softpatrol are both live and maintained by us rather than delivered and abandoned."],
    ["Can you take over an existing Flutter project?", "Yes. We audit the codebase first and give you an honest assessment of its condition, including whether continuing or rebuilding is the better commercial decision."],
    ["Do you work fixed price or hourly?", "Both. Fixed price suits a defined scope, monthly retainer suits ongoing work. Either way you get a written breakdown with line items before anything starts."],
    ["Can you handle iOS App Store submission?", "Yes, including the review process, provisioning, privacy declarations and the resubmissions that occasionally follow. It is part of the project rather than an extra."],
    ["What happens to the code when the project ends?", "It transfers to you completely. Source, documentation and deployment access. There is no licensing arrangement and you are not dependent on us to make changes."],
    ["Can you work with our existing backend?", "Yes. We integrate with whatever you already run rather than insisting on rebuilding it. Tell us what the API looks like."],
    ["How do you handle apps that need to work offline?", "Local first storage with a background sync queue, capture timestamps preserved, and idempotent uploads so retries do not create duplicates. We have shipped this pattern in production."],
  ],
  close: "Hiring a development team is mostly a question of what happens when things go wrong, so here is how we work.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Hire Flutter Developers", path: "/hire-flutter-developers" }]} /><LocationPage c={config} /></>
}
