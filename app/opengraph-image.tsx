import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "DevelopersTech — enterprise software and AI, built for production"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Default share card. Previously every page shared a 640x640 logo declared as
 * 1200x630, which renders letterboxed on every platform that respects the
 * declared dimensions.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E1B26",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent rule */}
        <div style={{ display: "flex", width: 64, height: 3, background: "#6FA0BC" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#FBFAF8",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Enterprise software</span>
            <span>
              and AI,{" "}
              <span style={{ color: "#6FA0BC", fontStyle: "italic" }}>built for production.</span>
            </span>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 27,
              color: "rgba(251,250,248,0.62)",
              display: "flex",
            }}
          >
            Flutter · AI integration · Dispatch systems · Enterprise SaaS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(111,160,188,0.28)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "#6FA0BC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0E1B26",
                fontSize: 22,
                fontWeight: 700,
                marginRight: 16,
              }}
            >
              D
            </div>
            <div style={{ fontSize: 27, color: "#FBFAF8", fontWeight: 500, display: "flex" }}>
              DevelopersTech
            </div>
          </div>
          <div style={{ fontSize: 22, color: "rgba(251,250,248,0.5)", display: "flex" }}>
            developerstech.space
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
