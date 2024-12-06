// components/Framework.tsx
// Framework comparison section
import Image from 'next/image'

interface FrameworkItem {
  title: string
  items: Array<{
    text: string
    icon: string
  }>
  icon: string
}

const frameworks: FrameworkItem[] = [
  {
    title: "NCA Framework",
    items: [
      {
        text: "Essential Cybersecurity Controls",
        icon: "/shield.svg"
      },
      {
        text: "Critical Systems Controls",
        icon: "/server.svg"
      },
      {
        text: "Cloud Security Controls",
        icon: "/cloud.svg"
      },
      {
        text: "Information Security Governance",
        icon: "/file-lock.svg"
      },
      {
        text: "Asset Management & Security",
        icon: "/database.svg"
      }
    ],
    icon: "/window.svg"
  },
  {
    title: "SAMA Framework",
    items: [
      {
        text: "Cyber Security Framework",
        icon: "/lock.svg"
      },
      {
        text: "Business Continuity Management",
        icon: "/refresh.svg"
      },
      {
        text: "Digital Banking Security",
        icon: "/bank.svg"
      },
      {
        text: "Risk Assessment & Management",
        icon: "/chart.svg"
      },
      {
        text: "Security Operations Center",
        icon: "/monitor.svg"
      }
    ],
    icon: "/globe.svg"
  }
]

export default function Framework() {
  return (
    <section id="framework" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Regulatory Frameworks
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive compliance solutions aligned with Saudi Arabia's leading regulatory frameworks
          </p>
        </div>

        {/* Framework Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
            >
              {/* Framework Icon */}
              <div className="absolute -top-6 left-8">
                <div className="bg-neutral-900 p-3 rounded-xl shadow-lg">
                  <Image
                    src={framework.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>

              {/* Framework Content */}
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                  {framework.title}
                </h3>
                <ul className="space-y-5">
                  {framework.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center space-x-4 text-neutral-700"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                        <Image
                          src={item.icon}
                          alt=""
                          width={16}
                          height={16}
                          className="w-4 h-4 text-neutral-700"
                        />
                      </div>
                      <span className="group-hover:text-neutral-900 transition-colors">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Decoration */}
              <div className="absolute inset-0 border-2 border-neutral-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}