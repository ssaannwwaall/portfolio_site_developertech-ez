import { ImageResponse } from "next/og"
import { POSTS, getPost } from "@/content/posts"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "DevelopersTech article"

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

/**
 * Per article share card carrying the headline, so a link posted to LinkedIn
 * or WhatsApp shows what the piece is about rather than a generic logo.
 */
export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const title = post?.title ?? "DevelopersTech"
  const category = post?.category ?? "Writing"
  const read = post?.readingTime ?? ""

  // Long headlines need to step down or they overflow the card
  const fontSize = title.length > 84 ? 50 : title.length > 60 ? 58 : 66

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFAF8",
          padding: "68px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 40, height: 2, background: "#4A7A96", marginRight: 18 }} />
          <div
            style={{
              fontSize: 21,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4A7A96",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {category}
          </div>
          {read ? (
            <div style={{ fontSize: 21, color: "#8E98A3", marginLeft: 18, display: "flex" }}>
              · {read}
            </div>
          ) : null}
        </div>

        <div
          style={{
            fontSize,
            lineHeight: 1.18,
            letterSpacing: "-0.032em",
            color: "#0E1B26",
            fontWeight: 500,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E4E1DB",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "#0E1B26",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FBFAF8",
                fontSize: 20,
                fontWeight: 700,
                marginRight: 15,
              }}
            >
              D
            </div>
            <div style={{ fontSize: 25, color: "#0E1B26", fontWeight: 500, display: "flex" }}>
              DevelopersTech
            </div>
          </div>
          <div style={{ fontSize: 21, color: "#8E98A3", display: "flex" }}>
            developerstech.space
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
