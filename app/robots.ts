import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://developerstech.space/sitemap.xml",
    host: "https://developerstech.space",
  }
}
