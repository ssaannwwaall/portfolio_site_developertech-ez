import type { Metadata } from "next"
import { LocationPage, type LocationConfig } from "@/components/location-page"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Taxi Dispatch Software Development",
  description:
    "Custom taxi dispatch software with real time job allocation, GPS driver tracking, automated earnings reporting and passenger booking apps. Live with UK and UAE operators.",
  keywords: ["Taxi Dispatch Software", "Taxi Booking App Development", "Ride Hailing App Development", "Fleet Management Software", "Chauffeur Booking Software", "Dispatch System Development"],
  alternates: { canonical: "/taxi-dispatch-software" },
  openGraph: {
    title: "Taxi Dispatch Software Development | DevelopersTech",
    description: "Real time dispatch, GPS tracking and driver management. Live with UK and UAE operators.",
    url: "/taxi-dispatch-software",
  },
}

const config: LocationConfig = {
  region: "transport operators",
  short: "dispatch",
  eyebrow: "Taxi dispatch software",
  h1: "Dispatch software built for real operators.",
  h1Italic: 2,
  lede: "Real time job allocation, live driver tracking, automated earnings reporting and passenger booking. Our dispatch platforms run daily commercial operations in the UK and UAE.",
  intro: [
    "Dispatch software is deceptively hard. Job allocation logic, driver state management, GPS accuracy under poor signal, and earnings calculations that drivers will actually trust. Most systems get one of these right and fail on the rest.",
    "We have built and maintained dispatch platforms that operate commercially every day. That experience shows up in the details: how the system behaves when a driver loses signal, how jobs reallocate when someone declines, how the day's earnings reconcile.",
  ],
  points: [
    ["Real time allocation", "Jobs reach the right driver based on proximity, availability and your own business rules. Automatic reallocation when a job is declined or times out."],
    ["Driver and passenger apps", "Paired Flutter applications for drivers and passengers, plus a full admin portal, sharing one codebase across Android and iOS."],
    ["GPS that holds up", "Live tracking that degrades gracefully on poor signal rather than showing drivers frozen in the wrong place."],
    ["Earnings and reporting", "Automated shift reporting, commission calculation and payout reconciliation that drivers and operators both trust."],
  ],
  workIds: ["tbms", "chauffeur"],
  faqs: [
    ["Do you have experience with dispatch systems specifically?", "Yes. Our TBMS platform runs daily commercial operations for a UK transport operator, and we delivered a dispatch system for a Dubai based logistics company."],
    ["Can you build both driver and passenger apps?", "Yes. We build the driver app, passenger booking app and admin portal as one connected system, with the mobile apps sharing a single Flutter codebase across Android and iOS."],
    ["How do you handle GPS accuracy?", "We design for degraded signal from the start. Location updates are batched and reconciled rather than dropped, so the map does not show drivers stuck in the wrong place."],
    ["Can you integrate payment processing?", "Yes. Card payments, in app wallets, corporate accounts and cash reconciliation, integrated and tested before launch."],
    ["Can you add dispatch features to our existing system?", "Often yes. We audit what you have first and tell you honestly whether extending it or rebuilding is the better commercial decision."],
  ],
}

export default function Page() {
  return <><Breadcrumbs items={[{ name: "Taxi Dispatch Software", path: "/taxi-dispatch-software" }]} /><LocationPage c={config} /></>
}
