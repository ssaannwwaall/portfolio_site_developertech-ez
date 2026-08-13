import type { MetadataRoute } from "next"

const BASE = "https://developerstech.space"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: Array<[string, number, "weekly" | "monthly"]> = [
    ["",                                    1.0, "weekly"],
    ["/services",                           0.9, "monthly"],
    ["/portfolio",                          0.9, "monthly"],
    ["/about",                              0.7, "monthly"],
    ["/contact",                            0.8, "monthly"],
    ["/flutter-app-development-uk",         0.9, "monthly"],
    ["/software-development-company-usa",   0.9, "monthly"],
    ["/mobile-app-development-dubai",       0.9, "monthly"],
    ["/software-development-malaysia",      0.9, "monthly"],
    ["/software-development-europe",        0.9, "monthly"],
    ["/taxi-dispatch-software",             0.8, "monthly"],
    ["/guard-monitoring-software",          0.8, "monthly"],
  ]
  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
