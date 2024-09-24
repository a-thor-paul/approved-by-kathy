'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Inventory', href: 'https://www.carnance.com/', external: true },
  ]

  return (
    <nav className="bg-[#1b2c50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0">
            <Link 
              href="/about" 
              className="text-2xl font-bold text-white"
            >
              Approved By Kathy
            </Link>
          </div>
          
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                    ${pathname === item.href 
                      ? 'text-white pointer-events-none' 
                      : 'text-[#c4e1f9] hover:text-white active:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link 
              href="/apply" 
              className="inline-block bg-[#3f8ee7] text-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:brightness-110"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-[#c4e1f9] hover:text-white transition-colors duration-300 ease-in-out p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                  ${pathname === item.href 
                    ? 'text-white bg-[#2b63ca] pointer-events-none' 
                    : 'text-[#c4e1f9] hover:text-white active:text-white hover:bg-[#2b63ca]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/apply"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#3f8ee7] text-white transition-all duration-300 ease-in-out hover:brightness-110"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}