"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 z-50 backdrop-blur-sm justify-between items-center w-full">
      <div className="flex items-center justify-between px-6 mt-4">
        <nav className="flex items-center space-x-6 sm:space-x-4">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-lg font-medium hover:text-primary">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div>
        <Button 
          variant="ghost" 
          className="h-12 w-12 relative"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="!h-6 !w-6" />
          ) : (
            <Moon className="!h-6 !w-6" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        </div>
      </div>
    </header>
  )
}

