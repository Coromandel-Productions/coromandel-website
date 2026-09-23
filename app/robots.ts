import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // Sanity Studio
    },
    sitemap: 'https://coromandel.sg/sitemap.xml',
  };
}
