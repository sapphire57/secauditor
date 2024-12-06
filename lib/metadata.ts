import { Metadata } from 'next'

const siteConfig = {
  name: 'SecureIT Saudi',
  description: 'Leading IT Security and Compliance Solutions for Saudi Financial Institutions. SAMA, NCA, & CMA Certified Consultancy.',
  url: 'https://secureit-saudi.com',
  ogImage: '/og-image.jpg',
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - IT Security & Compliance Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'SAMA Compliance',
    'NCA Framework',
    'CMA Regulations',
    'Saudi IT Security',
    'Cyber Security Saudi Arabia',
    'Financial Compliance KSA',
    'IT Audit Saudi',
    'Information Security SAMA',
    'Saudi Banking Security',
    'Risk Management KSA',
  ],
  authors: [{ name: 'SecureIT Saudi' }],
  creator: 'SecureIT Saudi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'SecureIT Saudi - IT Security & Compliance Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@SecureITSaudi',
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
  verification: {
    google: 'your-google-verification-code',
  },
} 