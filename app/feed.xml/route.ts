import { POSTS } from "@/content/posts"

const BASE = "https://developerstech.space"

/**
 * RSS feed. Aggregators, newsreaders and several developer content
 * directories discover posts this way, and a number of them link back.
 */
export async function GET() {
  const items = POSTS
    .slice()
    .sort((a, b) => +new Date(b.published) - +new Date(a.published))
    .map(p => {
      const text = p.body
        .filter(b => b.t === "p")
        .slice(0, 2)
        .map(b => (b as { v: string }).v)
        .join(" ")
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.published).toUTCString()}</pubDate>
      <category><![CDATA[${p.category}]]></category>
      <dc:creator><![CDATA[Sanwal Khan]]></dc:creator>
      <description><![CDATA[${p.description}]]></description>
      <content:encoded><![CDATA[<p>${text}</p><p><a href="${BASE}/blog/${p.slug}">Read the full piece on DevelopersTech</a></p>]]></content:encoded>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DevelopersTech</title>
    <link>${BASE}</link>
    <description>Notes on Flutter, dispatch systems, guard monitoring software and AI integration, from a team that maintains these products in production.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
