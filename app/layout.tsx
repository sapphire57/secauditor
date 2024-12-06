// app/layout.tsx
// This is the root layout that wraps all pages
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { defaultMetadata } from '@/lib/metadata'
import './globals.css'

// Load Inter font for clean, modern typography
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} bg-neutral-50`}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-neutral-900 text-white py-12">
          {/* Add Footer Component */}
        </footer>
      </body>
    </html>
  )
}