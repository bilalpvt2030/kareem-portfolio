import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kareem | Business Analyst & Data Enthusiast',
  description: 'Portfolio of Kareem — Business Analyst, Data Enthusiast, and Problem Solver. Turning data into decisions.',
  keywords: ['Business Analyst', 'Data Analyst', 'Portfolio', 'Kareem'],
  authors: [{ name: 'Kareem' }],
  openGraph: {
    title: 'Kareem | Business Analyst & Data Enthusiast',
    description: 'Portfolio of Kareem — Business Analyst, Data Enthusiast, and Problem Solver.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
