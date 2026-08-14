export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suretybondhub.in'
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indus Hub Surety Bond",
    "alternateName": "Indus Hub",
    "url": baseUrl,
    "logo": `${baseUrl}/indus_business_hub_logo.jpg`,
    "description": "Indus Hub Surety Bond - India's trusted partner for surety bonds. Issued India's first Defense bond and Municipal Corporation bond. Fast issuance within 3 hours.",
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
    "name": "Indus Hub Surety Bond",
    "alternateName": "Indus Hub",
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
    "name": "Indus Hub Surety Bonds",
    "description": "Comprehensive surety bond solutions including bid bonds, performance bonds, payment bonds, and custom bonds for construction, infrastructure, EPC, PSU, and government projects across India.",
    "provider": {
      "@type": "Organization",
      "name": "Indus Hub Surety Bond",
      "alternateName": "Indus Hub"
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
