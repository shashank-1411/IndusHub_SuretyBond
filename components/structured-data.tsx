export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://indushub.com'
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indus Hub",
    "url": baseUrl,
    "logo": `${baseUrl}/indus_business_hub_logo.jpg`,
    "description": "Indus Hub provides comprehensive surety bond solutions and financial guarantees for construction, infrastructure, and business projects across India.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      // Add your social media profiles here when available
      // "https://www.linkedin.com/company/indushub",
      // "https://twitter.com/indushub",
      // "https://www.facebook.com/indushub"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Indus Hub",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Surety Bonds",
    "description": "Comprehensive surety bond solutions including bid bonds, performance bonds, payment bonds, and custom bonds for construction and business projects.",
    "provider": {
      "@type": "Organization",
      "name": "Indus Hub"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Surety Bond Services"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
    </>
  )
}
