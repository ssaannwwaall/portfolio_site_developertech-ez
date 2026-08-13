import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with DevelopersTech. Send a brief and our team will reply with an honest assessment, a realistic timeline and a clear number. Usually within two hours.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <><Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />{children}</>
}
