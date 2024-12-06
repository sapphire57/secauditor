// components/Services.tsx
// Services grid showing main offerings
import { 
  ShieldCheck, // More security-focused than basic Shield
  ServerCog, // Better represents IT infrastructure/solutions
  Scan, // Better represents assessment/scanning
  ScrollText, // Better for compliance documentation
  Headset, // Better represents consulting/support
  Network // Better represents business continuity/network
} from 'lucide-react'

const services = [
  {
    title: "IT AUDIT",
    description: "Comprehensive system evaluation aligned with SAMA & NCA frameworks",
    icon: ShieldCheck
  },
  {
    title: "Security Solutions",
    description: "Advanced protection systems for financial institutions",
    icon: ServerCog
  },
  {
    title: "Risk Assessment",
    description: "Thorough evaluation of security vulnerabilities",
    icon: Scan
  },
  {
    title: "Compliance Review",
    description: "Complete SAMA & NCA regulatory compliance assessment",
    icon: ScrollText
  },
  {
    title: "IT Consulting",
    description: "Expert guidance for your security infrastructure",
    icon: Headset
  },
  {
    title: "Business Continuity",
    description: "Ensuring uninterrupted operations and disaster recovery",
    icon: Network
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-16">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-blue"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-blue text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-accent-blue opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
