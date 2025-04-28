"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Plans", href: "#plans" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Privacy Policy", href: "#privacy" },
  ]

  return (
    <header className="absolute w-full bg-transparent z-50 py-6">
      <div className="flex items-center justify-between w-full">
        {/* Logo - Left */}
        <div className="flex items-center pl-[85px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LrYEyhCxEmNBFbwZB7imLt266ZzZIi.png"
            width={250.77593994140625}
            height={49.92445755004883}
            alt="MobiusEngine Logo"
            priority
          />
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center justify-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200 transition text-base whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            <div className="relative group">
              <button className="text-white text-base hover:text-blue-200 transition flex items-center whitespace-nowrap">
                More
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#coaching" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Resume Coaching
                </Link>
                <Link href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Get Started Button - Right */}
        <div className="pr-[85px]">
          <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-full px-6 py-2 font-medium">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <button className="md:hidden mr-8 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Only visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-8 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200 transition text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#coaching"
              className="text-white hover:text-blue-200 transition text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume Coaching
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-blue-200 transition text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
