import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://kareem-portfolio-psi.vercel.app/sitemap.xml',
    host: 'https://kareem-portfolio-psi.vercel.app',
  };
}
