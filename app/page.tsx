// app/page.tsx
// This is the main landing page that combines all components
import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Framework from '@/components/Framework'
import Contact from '@/components/Contact'
import { generateStructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'IT Security & Compliance Solutions for Saudi Financial Institutions',
  description: 'Expert IT security consulting and compliance solutions for SAMA, NCA, and CMA regulations in Saudi Arabia. Comprehensive security audits and risk management.',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <Hero />
      <Services />
      <Framework />
      <Contact />
    </>
  )
}