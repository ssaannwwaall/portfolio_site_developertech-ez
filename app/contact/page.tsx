"use client"
import { useState } from "react"
import { MaskHeading, Rise } from "@/components/mask-heading"

const WA = "https://wa.me/923074494175?text="

const METHODS = [
  ["WhatsApp", "+92 307 449 4175", "Fastest, usually under 2 hours", "https://wa.me/923074494175"],
  ["Email", "khansanwal922@gmail.com", "For detailed project briefs", "mailto:khansanwal922@gmail.com"],
  ["Studio", "Remote first team", "Working with clients across four continents", ""],
]

export default function ContactPage() {
  const [f, setF] = useState({ n: "", e: "", b: "", m: "" })
  const send = (ev: React.FormEvent) => {
    ev.preventDefault()
    const t = `Hi Sanwal!\n\nName: ${f.n}\nEmail: ${f.e}\nBudget: ${f.b || "not specified"}\n\n${f.m}`
    window.open(`${WA}${encodeURIComponent(t)}`, "_blank")
  }

  return (
    <main style={{ paddingTop: 74 }}>
      <section style={{ padding: "80px 0 40px" }}>
        <div className="wrap">
          <Rise><div className="eyebrow">Get in touch</div></Rise>
          <MaskHeading text="Let us talk about your project." italic={2} tag="h1" className="h1" />
        </div>
      </section>

      <section style={{ padding: "20px 0 110px" }}>
        <div className="wrap contact-grid">
          <Rise>
            <div>
              <p className="lede" style={{ marginBottom: 40 }}>
                Send a brief and we will come back with an honest assessment, a realistic
                timeline and a clear number.
              </p>
              {METHODS.map(([l, v, n, href]) => (
                <a key={l} href={href || undefined} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ padding: "24px 0", borderTop: "1px solid var(--line)", textDecoration: "none", display: "block" }}>
                  <div style={{ fontSize: 11.5, color: "var(--light)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8 }}>{l}</div>
                  <div style={{ fontSize: 19, color: "var(--ink)", fontWeight: 500, marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 13.5, color: "var(--body)" }}>{n}</div>
                </a>
              ))}
            </div>
          </Rise>

          <Rise delay={0.12}>
            <form onSubmit={send} style={{ background: "var(--paper2)", padding: "42px 38px", border: "1px solid var(--line)" }}>
              <div style={{ fontSize: 19, fontWeight: 500, color: "var(--ink)", marginBottom: 30 }}>Project brief</div>
              {([["n", "Your name", "Jane Smith"], ["e", "Email", "jane@company.com"]] as const).map(([k, l, p]) => (
                <div key={k} style={{ marginBottom: 22 }}>
                  <label style={{ fontSize: 12, color: "var(--body)", display: "block", marginBottom: 9 }}>{l}</label>
                  <input required className="field" value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} placeholder={p} />
                </div>
              ))}
              <div style={{ marginBottom: 22 }}>
                <label style={{ fontSize: 12, color: "var(--body)", display: "block", marginBottom: 9 }}>Budget range</label>
                <select className="field" value={f.b} onChange={e => setF({ ...f, b: e.target.value })}>
                  <option value="">Select a range</option>
                  <option>Under 2,000 USD</option>
                  <option>2,000 to 5,000 USD</option>
                  <option>5,000 to 15,000 USD</option>
                  <option>15,000 USD and above</option>
                  <option>Still deciding</option>
                </select>
              </div>
              <div style={{ marginBottom: 32 }}>
                <label style={{ fontSize: 12, color: "var(--body)", display: "block", marginBottom: 9 }}>What are you building?</label>
                <textarea required rows={4} className="field" style={{ resize: "vertical" }}
                  value={f.m} onChange={e => setF({ ...f, m: e.target.value })}
                  placeholder="Platform, rough timeline, anything we should know" />
              </div>
              <button type="submit" className="btn btn-solid mag" style={{ width: "100%", justifyContent: "center" }}>
                Send via WhatsApp <span className="arrow">→</span>
              </button>
            </form>
          </Rise>
        </div>
      </section>
    </main>
  )
}
