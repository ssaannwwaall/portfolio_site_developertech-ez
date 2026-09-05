import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Software Development Company for New York FinTech",
  description:
    "Software development for New York fintech and financial services firms. Trading interfaces, portfolio dashboards, real time market data and compliance ready architecture.",
  keywords: [
    "fintech software development New York",
    "financial software development company NYC",
    "trading platform development",
    "portfolio tracker app development",
    "fintech app developers New York",
    "financial dashboard development",
  ],
  alternates: { canonical: "/software-development-company-new-york" },
  openGraph: {
    title: "Software Development Company for New York FinTech | DevelopersTech",
    description: "Trading interfaces, portfolio dashboards and real time financial data for NYC firms.",
    url: "/software-development-company-new-york",
  },
}

const config: LocationConfig = {
  region: "New York",
  short: "New York",
  eyebrow: "Serving New York financial technology",
  h1: "Financial software for New York firms.",
  h1Italic: 2,
  lede: "Real time market data, portfolio dashboards and trading interfaces. We build the kind of software where a rendering delay is not a cosmetic problem, it is a trading problem.",
  intro: [
    "New York runs on financial technology in a way no other American city does. Fintech, media tech and marketing technology dominate the local market, and the software those firms need has a different tolerance for error than most consumer products.",
    "Our CryptoVault work sits in this territory: live market data over WebSockets, portfolio positions that reconcile correctly, price alerts that fire when they should, and a secure storage layer for credentials. The technical demands of a crypto portfolio tracker and a trading dashboard overlap almost entirely.",
    "What financial software punishes is sloppiness in three specific places. Numbers that disagree between two screens. Data that arrives late without saying so. And state that survives a network drop incorrectly. Every one of those is an architecture decision made early, not a bug found later.",
  ],
  points: [
    ["Real time data done properly", "WebSocket connections with reconnection handling, sequence gap detection and stale data indicators. A dashboard that silently shows old prices is worse than one that admits it is disconnected."],
    ["Numbers that reconcile", "Financial calculations are done in one place and consumed everywhere, so two screens cannot disagree. Currency handled as integers, never floats."],
    ["Built for audit", "Every state change logged with a timestamp and actor. When compliance asks who changed what and when, the answer exists without an engineer writing a query."],
    ["Working hours that reach the market", "Our afternoon covers the New York morning. Questions raised at market open are answered the same day rather than overnight."],
  ],
  services: [
    ["Trading and market data interfaces", "Live price feeds, order entry, position views and charting, built for the latency and correctness demands of a working trading screen."],
    ["Portfolio and wealth dashboards", "Holdings, performance attribution, allocation views and reporting for wealth managers and their clients."],
    ["Crypto and digital asset platforms", "Wallet management, exchange API integration, price alerting and secure key storage. We have shipped this exact stack."],
    ["Payment and transaction systems", "Stripe and card processing, ledger design, reconciliation and the transaction reporting finance teams need at month end."],
    ["Compliance and reporting tooling", "Audit trails, exportable regulatory reports and role based access for teams operating under supervision."],
    ["Mobile fintech applications", "Flutter apps for iOS and Android where the same numbers and rules run on both platforms from one codebase."],
  ],
  workIds: ["crypto", "ai", "jamgo"],
  working: [
    ["Market hours overlap", "Our working afternoon covers the New York morning. Calls sit comfortably in your day and nothing waits until tomorrow."],
    ["NDAs and contracts first", "Financial firms rarely discuss a project before paperwork. We sign NDAs before any project detail and work under your MSA if you have one."],
    ["Security review welcome", "We expect code review, dependency audit and architecture questions from your security team. Send them across."],
    ["Full handover", "Source code, documentation and deployment access transfer at completion. No licensing arrangement on your own systems."],
  ],
  faqs: [
    ["Have you built financial software before?", "Yes. CryptoVault is a cryptocurrency portfolio platform with live market data over WebSockets, price alerting and secure wallet storage. The architecture for a trading dashboard shares most of that ground."],
    ["How do you handle real time market data?", "WebSocket connections with reconnection logic, sequence gap detection and an explicit stale indicator. A screen showing prices from four minutes ago without saying so is the failure mode we design against."],
    ["Can you work with our compliance requirements?", "Yes. Audit logging, role based access and exportable reporting are architecture decisions we make at the start. Tell us the regime you operate under and we will design to it."],
    ["Will you sign an NDA before we discuss details?", "Yes, and we expect to. Financial firms should not be sharing project detail before paperwork is in place."],
    ["Do you handle currency and decimal precision correctly?", "Money is stored and calculated as integer minor units, never floating point. This sounds obvious and is one of the most common defects we find in inherited financial code."],
    ["Can your team pass our security review?", "We welcome it. Code review, dependency audits and architecture questions are reasonable for financial software and we would rather answer them upfront."],
    ["What does a fintech project typically cost?", "It depends on scope, and anyone quoting before understanding the data sources and compliance requirements is guessing. You receive a written breakdown after the discovery call."],
  ],
  close: "Financial software has a lower tolerance for ambiguity than most projects, so here is the practical detail in advance.",
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Software Development New York", path: "/software-development-company-new-york" }]} /><LocationPage c={config} /></>
}
