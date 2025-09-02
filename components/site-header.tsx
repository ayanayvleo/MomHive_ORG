"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

interface SiteHeaderProps {
  showHomeButton?: boolean
  onHomeClick?: () => void
}

export function SiteHeader({ showHomeButton = false, onHomeClick }: SiteHeaderProps) {
  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <header className="relative z-20 flex items-center justify-between p-4 border-b border-purple-500/30 bg-gray-900/80 backdrop-blur-sm">
      {/* Logo */}
      <button
        onClick={handleLogoClick}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <Image
            src="/images/momhive-logo.png"
            alt="BeeMomHive Logo"
            width={40}
            height={40}
            className="relative z-10 drop-shadow-lg"
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            BeeMomHive
          </h1>
          <p className="text-xs text-purple-300/70">Neural Assistant</p>
        </div>
      </button>

      {/* Home button (when in chat) */}
      {showHomeButton && (
        <Button
          onClick={onHomeClick}
          variant="outline"
          size="sm"
          className="bg-gray-800/50 border-purple-500/30 text-purple-200 hover:bg-purple-900/50 hover:border-purple-400/50 backdrop-blur-sm"
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
      )}
    </header>
  )
}
