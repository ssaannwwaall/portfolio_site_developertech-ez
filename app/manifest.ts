import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevelopersTech",
    short_name: "DevelopersTech",
    description:
      "An engineering studio building Flutter applications, AI platforms and enterprise systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF8",
    theme_color: "#0E1B26",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
