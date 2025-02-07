"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="#experience" className="text-gray-600 hover:text-gray-900">
            Experience
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            <Link href="#projects" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link
              href="#experience"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link href="#contact" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

