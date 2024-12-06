// app/layout.tsx
// This is the root layout that wraps all pages
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import './globals.css'

// Load Inter font for clean, modern typography
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Security Consulting - SAMA & NCA Compliance',
  description: 'Expert IT Security and Compliance Solutions for Saudi Financial Institutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} bg-neutral-50`}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}