"use client"

import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1b2c50] text-white w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/about" className="text-lg font-bold text-white">
              Approved By Kathy
            </Link>
            <p className="text-xs text-[#9bcdf5] mt-1">
              Flexible Auto Loans for All Situations
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 w-full md:w-auto">
            <div className="space-y-1 text-sm">
              <Link href="/about" className="block text-[#c4e1f9] hover:text-white transition duration-300">About</Link>
              <Link href="/contact" className="block text-[#c4e1f9] hover:text-white transition duration-300">Contact</Link>
            </div>
            <div className="space-y-1 text-sm">
              <Link href="/apply" className="block text-[#c4e1f9] hover:text-white transition duration-300">Apply Now</Link>
              <a href="https://www.carnance.com/" target="_blank" rel="noopener noreferrer" className="block text-[#c4e1f9] hover:text-white transition duration-300">Inventory</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#c4e1f9] hover:text-white transition duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#c4e1f9] hover:text-white transition duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#264682] text-center text-xs text-[#9bcdf5]">
          © {new Date().getFullYear()} Approved By Kathy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}