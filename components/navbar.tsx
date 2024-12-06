'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface SubItem {
  href: string
  label: string
}

interface NavItem {
  href: string
  label: string
  subItems?: SubItem[]
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '#services',
    label: 'Services',
    subItems: [
      { href: '/services/it-security-audit', label: 'IT Security Audit' },
      { href: '/services/compliance-assessment', label: 'Compliance Assessment' },
      { href: '/services/cyber-security', label: 'Cyber Security Solutions' },
      { href: '/services/risk-management', label: 'Risk Management' },
    ]
  },
  {
    href: '#framework',
    label: 'Frameworks',
    subItems: [
      { href: '/frameworks/sama', label: 'SAMA Compliance' },
      { href: '/frameworks/nca', label: 'NCA Framework' },
      { href: '/frameworks/cma', label: 'CMA Regulations' },
      { href: '/frameworks/iso27001', label: 'ISO 27001' },
    ]
  },
  { 
    href: '/blog',
    label: 'Blog',
    subItems: [
      { href: '/blog/compliance', label: 'Compliance Updates' },
      { href: '/blog/security', label: 'Security Best Practices' },
      { href: '/blog/frameworks', label: 'Framework Guidelines' },
      { href: '/blog/case-studies', label: 'Case Studies' },
    ]
  }
]

export function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMenuEnter = useCallback((href: string) => {
    if (closeTimeout) clearTimeout(closeTimeout)
    setOpenSubmenu(href)
  }, [closeTimeout])

  const handleMenuLeave = useCallback((href: string) => {
    const timeout = setTimeout(() => {
      if (openSubmenu === href) {
        setOpenSubmenu(null)
      }
    }, 150) // Delay before closing
    setCloseTimeout(timeout)
  }, [openSubmenu])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout)
    }
  }, [closeTimeout])

  // Handle scroll and update active section with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const sections = ['services', 'framework', 'contact']
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section)
              return
            }
          }
        }
        
        // Reset active section when at the top
        if (window.scrollY < 100) {
          setActiveSection('')
        }
      }, 100) // Debounce time
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' && activeSection === ''
    if (path.startsWith('#')) return path.slice(1) === activeSection
    return pathname.startsWith(path)
  }

  const isSubItemActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link 
        href="/" 
        className="flex items-center space-x-2 text-xl font-bold text-neutral-900 hover:text-neutral-800 transition-colors"
      >
        <Image
          src="/logo.jpg"
          alt="Saudi IT Security & Compliance Consultancy"
          width={32}
          height={32}
          className="w-8 h-8"
          priority
        />
        <span>The Security Auditor</span>
      </Link>

      <div className="hidden lg:flex items-center space-x-6">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => handleMenuEnter(item.href)}
            onMouseLeave={() => handleMenuLeave(item.href)}
          >
            <Link 
              href={item.href}
              className={`relative py-2 px-1 transition-colors duration-200 flex items-center gap-1
                ${isActive(item.href) 
                  ? 'text-blue-700 font-medium'
                  : 'text-neutral-600 hover:text-neutral-900'
                }
                group
              `}
            >
              {item.label}
              {item.subItems && (
                <ChevronDownIcon 
                  className={`w-4 h-4 transition-transform duration-200
                    ${openSubmenu === item.href ? 'rotate-180 text-blue-700' : ''}
                  `}
                />
              )}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform origin-left transition-transform duration-200 ease-out
                  ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>

            {/* Enhanced Submenu with better hover area */}
            {item.subItems && openSubmenu === item.href && (
              <div 
                className="absolute top-full left-0 pt-2 z-50"
                onMouseEnter={() => handleMenuEnter(item.href)}
                onMouseLeave={() => handleMenuLeave(item.href)}
              >
                <div className="w-64 bg-white rounded-lg shadow-lg py-2 border border-neutral-100">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm transition-all duration-200
                        ${isSubItemActive(subItem.href)
                          ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-700'
                          : 'text-neutral-600 hover:bg-blue-50 hover:text-blue-700 hover:pl-6 border-l-4 border-transparent'
                        }
                      `}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        <Link 
          href="#contact" 
          className="relative overflow-hidden bg-blue-700 text-white px-6 py-2 rounded-md group"
        >
          <span className="relative z-10 transition-colors duration-200">Get Consultation</span>
          <div 
            className="absolute inset-0 bg-blue-800 transform -translate-x-full transition-transform duration-200 ease-out
              group-hover:translate-x-0"
          />
        </Link>
      </div>
    </nav>
  )
} 