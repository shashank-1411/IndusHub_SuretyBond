import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Site URL: https://suretybondhub.in
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suretybondhub.in'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
