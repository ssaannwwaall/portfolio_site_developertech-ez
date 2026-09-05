import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Enterprise Software Development for Chicago Companies",
  description:
    "Enterprise software and logistics systems for Chicago businesses. Legacy modernisation, dispatch platforms, operations dashboards and workforce software built for daily commercial use.",
  keywords: [
    "enterprise software development Chicago",
    "legacy system modernization Chicago",
    "logistics software development Chicago",
    "custom software development company Chicago",
    "dispatch software Chicago",
    "operations software development",
  ],
  alternates: { canonical: "/software-development-company-chicago" },
  openGraph: {
    title: "Enterprise Software Development for Chicago | DevelopersTech",
    description: "Legacy modernisation, dispatch and operations software for Chicago companies.",
    url: "/software-development-company-chicago",
  },
}

const config: LocationConfig = {
  region: "Chicago",
  short: "Chicago",
  eyebrow: "Serving Chicago enterprise and logistics",
  h1: "Enterprise software for Chicago operations.",
  h1Italic: 2,
  lede: "Dispatch, logistics and workforce systems that run a business every day. We maintain platforms doing exactly this in commercial use, which is a different discipline from building them once.",
  intro: [
    "Chicago made the largest jump of any American city in engineering rankings this year, climbing from 33rd globally to 12th. Notably, that growth is not being driven by consumer startups. It is coming from large established companies pushing into AI, financial services and enterprise modernisation.",
    "That is operational software, and it has different rules. Nobody is delighted by a dispatch system. They notice it when it fails at 4pm on a Friday with drivers waiting. The measure of success is that the day runs and nobody thinks about the software at all.",
    "This is the work we know best. TBMS allocates jobs and tracks drivers for a transport operator every working day. Softpatrol manages patrols for security firms across live sites. Both have been through peak load, lost signal and disputed records, and the design decisions that matter came from those situations rather than a specification.",
  ],
  points: [
    ["Systems we still maintain", "Our dispatch and workforce platforms are in daily commercial operation. When we discuss allocation logic or offline handling, we are describing something we support, not something we researched."],
    ["Modernisation without a shutdown", "Operations cannot go dark during a migration. We move in phases so the business keeps running while the new system progressively takes over."],
    ["We audit before recommending", "If you already have a system, we look at it first. Sometimes extending what exists is the better commercial decision and we will tell you that."],
    ["Support that understands shifts", "Operational software fails at inconvenient hours. Retainer clients have escalation paths that reflect that reality."],
  ],
  services: [
    ["Dispatch and routing platforms", "Real time job allocation, driver state management, automatic reallocation and live tracking. Built from a system already running commercially."],
    ["Fleet and logistics systems", "Vehicle tracking, maintenance scheduling, compliance document expiry and driver performance reporting for operators at scale."],
    ["Workforce and field service software", "Job assignment, mobile apps for staff away from a desk, proof of attendance and client reporting."],
    ["Legacy modernisation", "Migrating ageing applications to maintainable architectures. We have cut ongoing maintenance cost by roughly forty percent through a native to Flutter migration."],
    ["Operations dashboards", "Control room views with role based access, exportable reporting and the audit trail enterprise clients require."],
    ["ERP and internal tooling", "Replacing spreadsheet driven processes with software. Approvals, inventory, scheduling and the workflows that quietly consume staff hours."],
  ],
  workIds: ["tbms", "softpatrol", "restaurant"],
  working: [
    ["Phased migration", "New systems run alongside old ones before replacing them. Nobody flips a switch on a working operation and hopes."],
    ["Adoption is the real risk", "Software that field staff resent gets worked around, and then the data is worthless. We design for someone mid shift with one free hand."],
    ["Contracts and procurement", "Written agreements, invoiced in USD. We work under your MSA and sign NDAs before project discussion where procurement requires it."],
    ["Documentation for your team", "Handover includes technical documentation written for engineers who were not on the project, so your internal team can take over."],
  ],
  faqs: [
    ["Do you have real operational software experience?", "Yes. TBMS handles dispatch for a transport operator in daily commercial use, and Softpatrol manages guard patrols for security firms with over a thousand installs. Both are maintained, not delivered and abandoned."],
    ["Can you modernise a system we already have?", "Often yes. We audit the existing codebase first and give an honest recommendation on whether extending or rebuilding is better commercially. Sometimes the honest answer is to keep what you have."],
    ["How do you migrate without disrupting operations?", "In phases. The new system runs alongside the existing one, takes over progressively, and there is a rollback path at each stage. Operations do not stop while it happens."],
    ["What happens if the system fails outside business hours?", "Operational failures are emergencies, not tickets. Retainer clients have direct escalation, because a dispatch system that stops on a Friday evening cannot wait for Monday."],
    ["Can you integrate with our existing ERP or accounting system?", "Yes. API integrations, scheduled data exchange and reconciliation are routine. Tell us what you run and we will look at what it exposes."],
    ["How do you handle staff who resist new software?", "By designing for them rather than for the demo. Field staff adopt tools that make their shift easier and route around tools that do not, regardless of what management decides."],
    ["What does an enterprise project cost?", "It depends entirely on scope. After a discovery call you receive a written breakdown with line items and a phased plan, not a range."],
  ],
  close: "Operational software is judged on whether the day runs, so here is how engagements are structured.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Chicago", path: "/software-development-company-chicago" }]} /><LocationPage c={config} /></>
}
