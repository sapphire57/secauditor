export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SecureIT Saudi',
    description: 'Leading IT Security and Compliance Solutions for Saudi Financial Institutions',
    url: 'https://secureit-saudi.com',
    logo: 'https://secureit-saudi.com/logo.png',
    sameAs: [
      'https://twitter.com/SecureITSaudi',
      'https://linkedin.com/company/secureit-saudi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressLocality: 'Riyadh',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    serviceType: [
      'IT Security Audit',
      'SAMA Compliance',
      'NCA Framework Implementation',
      'Cyber Security Solutions',
      'Risk Management',
    ],
  }
} 