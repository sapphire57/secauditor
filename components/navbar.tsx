import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link 
        href="/" 
        className="flex items-center space-x-2 text-xl font-bold text-neutral-900 hover:text-neutral-800 transition-colors"
      >
        <Image
          src="/vercel.svg"
          alt="Company Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span>YourLogo</span>
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link 
          href="/" 
          className="text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Home
        </Link>
        <Link 
          href="#services" 
          className="text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Services
        </Link>
        <Link 
          href="#framework" 
          className="text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Frameworks
        </Link>
        <Link 
          href="/blog" 
          className="text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Blog
        </Link>
        <Link 
          href="#contact" 
          className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 rounded-md transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
} 