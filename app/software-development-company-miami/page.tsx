import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Freight and Logistics Software Development in Miami",
  description:
    "Software development for Miami logistics, trade and hospitality businesses. Dispatch systems, fleet tracking, bilingual apps and booking platforms built for cross border operations.",
  keywords: [
    "freight software development Miami",
    "logistics software development Miami",
    "trucking dispatch software Florida",
    "load management software development",
    "proof of delivery app development",
    "TMS software development company",
  ],
  alternates: { canonical: "/software-development-company-miami" },
  openGraph: {
    title: "Software Development for Miami Logistics and Trade | DevelopersTech",
    description: "Dispatch, fleet and bilingual platforms for Miami logistics and hospitality businesses.",
    url: "/software-development-company-miami",
  },
}

const config: LocationConfig = {
  region: "Miami",
  short: "Miami",
  eyebrow: "Serving Miami freight and logistics",
  h1: "Freight software for Miami brokers and carriers.",
  h1Italic: 2,
  lede: "Load management, driver apps and proof of delivery that survives a container yard with no signal. Built by a team whose dispatch platform runs commercially every day.",
  intro: [
    "Miami is a freight town before it is a tech town. The port, the airport cargo operations and the brokerage businesses moving goods between North and South America generate a specific kind of software demand, and it has almost nothing to do with consumer apps.",
    "Freight software lives or dies on document chains. A load has a rate confirmation, a bill of lading, customs paperwork, a proof of delivery and an invoice, and every one of them has to connect back to the same shipment across parties who do not share a system. When that chain breaks, someone does not get paid.",
    "Our dispatch work translates because the underlying problems are identical. TBMS assigns jobs, tracks vehicles and reconciles earnings for a transport operator every working day. Whether the thing being moved is a passenger or a pallet, the allocation logic, the location tracking and the proof of completion behave the same way.",
  ],
  points: [
    ["Documents that stay attached to the load", "Rate confirmation, bill of lading, customs paperwork and proof of delivery linked to one shipment record. Broken document chains are how freight companies lose money quietly."],
    ["Dispatch logic already running commercially", "Our TBMS platform assigns work, tracks vehicles and reconciles earnings daily. Freight and passenger dispatch share the same hard parts."],
    ["Capture that survives the yard", "Container terminals and warehouses have no usable signal. Proof of delivery is written to the device and reconciled later, with the original timestamp preserved."],
    ["Spanish handled structurally", "Language, currency and date formatting decided in the data model rather than at the interface, because half your counterparties are south of the border."],
  ],
  services: [
    ["Load management and dispatch", "Load boards, carrier assignment, rate confirmation and status tracking through to delivery, built around how brokers actually work a day."],
    ["Driver and owner operator apps", "Load acceptance, navigation handoff, document scanning and settlement visibility, designed for use in a cab rather than at a desk."],
    ["Proof of delivery capture", "Signature, photograph and timestamp captured offline in the yard, uploaded when signal returns, permanently attached to the shipment."],
    ["Customs and compliance documentation", "Structured document handling for cross border movements, with expiry tracking and the audit trail an inspection requires."],
    ["Carrier and settlement systems", "Carrier onboarding, insurance expiry monitoring, rate agreements and the settlement reconciliation that decides whether margins are real."],
    ["Warehouse and yard applications", "Check in, dock assignment, container tracking and inventory movement for operations where connectivity is unreliable by default."],
  ],
  workIds: ["tbms", "softpatrol", "chauffeur"],
  working: [
    ["Timezone overlap", "Our working afternoon covers the Miami morning, so calls sit comfortably in your day and answers arrive the same day."],
    ["Contracts and invoicing", "Written agreements invoiced in USD. We work under your paperwork where your company requires it."],
    ["Built for the cab, not the demo", "Drivers route around software they dislike, and then your data is fiction. We design for one free hand, direct sunlight and a hurry."],
    ["Full ownership", "Source code, documentation and deployment access transfer at completion, with no ongoing dependency on us."],
  ],
  faqs: [
    ["Have you built freight or dispatch software before?", "Yes. TBMS assigns work, tracks vehicles and reconciles earnings for a transport operator in daily commercial use. The allocation, tracking and completion logic transfers directly to freight."],
    ["How do you handle proof of delivery without signal?", "Signature, photograph and location are captured to the device and uploaded when connectivity returns, with the original capture time preserved rather than the upload time. A driver in a container yard cannot lose a POD."],
    ["Can you integrate with our existing TMS?", "Yes. API integration and scheduled data exchange are routine. Tell us what you run and what it exposes, and we will tell you honestly whether integrating or replacing makes more sense."],
    ["Do you handle customs and cross border documentation?", "We build structured document handling with expiry tracking and audit trails. We are engineers rather than customs brokers, so you define what the paperwork must contain and we make the system hold it correctly."],
    ["How do you handle multiple currencies?", "Stored and calculated as integer minor units, never floating point, with reconciliation and reporting per currency. This sounds obvious and is the most common defect we find in inherited freight software."],
    ["What size operations do you work with?", "From an owner operator running a dozen trucks to established brokerage businesses. The approach scales differently but the engineering standard does not."],
    ["How quickly can a project start?", "We are currently taking on new work. After a discovery call we typically return a scoped brief within forty eight hours and can begin shortly after approval."],
  ],
  close: "Freight software is judged on whether the load gets paid for, so here is the practical detail upfront.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development Miami", path: "/software-development-company-miami" }]} /><LocationPage c={config} /></>
}
