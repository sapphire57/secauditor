// app/page.tsx
// This is the main landing page that combines all components
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Framework from '@/components/Framework'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Framework />
      <Contact />
    </>
  )
}