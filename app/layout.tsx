import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kareem-portfolio-psi.vercel.app'),
  title: 'Kareem Meenazi | Business Analyst',
  description: 'Portfolio of Kareem Meenazi — aspiring Business Analyst with expertise in data analysis, Power BI, Excel, and strategic problem-solving. Based in Hyderabad.',
  keywords: ['Business Analyst', 'Kareem Meenazi', 'Power BI', 'Data Analysis', 'Portfolio', 'Hyderabad'],
  authors: [{ name: 'Kareem Meenazi' }],
  creator: 'Kareem Meenazi',
  alternates: {
    canonical: 'https://kareem-portfolio-psi.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kareem-portfolio-psi.vercel.app',
    title: 'Kareem Meenazi | Business Analyst',
    description: 'From insights to action — building smarter business solutions.',
    siteName: 'Kareem Meenazi Portfolio',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Kareem Meenazi - Business Analyst',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kareem Meenazi | Business Analyst',
    description: 'From insights to action — building smarter business solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="animated-gradient antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
