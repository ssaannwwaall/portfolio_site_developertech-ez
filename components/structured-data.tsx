const BASE = "https://developerstech.space"

/** Organisation + service + reviews. Rendered once in the root layout. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${BASE}/#organization`,
        name: "DevelopersTech",
        url: BASE,
        logo: `${BASE}/images/company-logo.png`,
        image: `${BASE}/images/company-logo.png`,
        description:
          "DevelopersTech is an engineering studio building Flutter applications, AI platforms and enterprise systems for clients across the UK, USA, UAE, Malaysia and Europe.",
        email: "khansanwal922@gmail.com",
        telephone: "+92-307-449-4175",
        priceRange: "$$",
        founder: {
          "@type": "Person",
          name: "Sanwal Khan",
          jobTitle: "Managing Director and Co-Founder",
          sameAs: [
            "https://www.linkedin.com/in/sanwal-khan-3b4019213",
            "https://www.fiverr.com/sanwalkhan842",
          ],
        },
        sameAs: [
          "https://www.linkedin.com/in/sanwal-khan-3b4019213",
          "https://www.fiverr.com/sanwalkhan842",
        ],
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Malaysia" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "India" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "59",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: [
            "Flutter App Development",
            "Android App Development",
            "iOS App Development",
            "Web Application Development",
            "SaaS Development",
            "AI Integration and Chatbots",
            "Taxi Dispatch Software",
            "Guard Monitoring Software",
            "API Development",
            "Enterprise Software Development",
          ].map(name => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "DevelopersTech",
        publisher: { "@id": `${BASE}/#organization` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Breadcrumb schema for inner pages. */
export function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
