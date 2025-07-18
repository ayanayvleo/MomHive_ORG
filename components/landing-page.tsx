"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Shield } from "lucide-react"
import Image from "next/image"

interface LandingPageProps {
  onEnter: () => void
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image src="/images/momhive-logo.png" alt="MomHive" width={60} height={60} className="drop-shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MomHive
            </h1>
            <p className="text-purple-200 text-sm">Neural Parenting Assistant</p>
          </div>
        </div>

        {/* Simple message */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-green-200 text-sm">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Privacy-First</span>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            At MomHive, we protect both the environment and your privacy. No accounts, no data collection, no judgment -
            just anonymous AI support for modern mothers.
          </p>

          <Button
            onClick={onEnter}
            className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/60 transition-all duration-300 rounded-xl"
          >
            Go to Chat
          </Button>

          <p className="text-xs text-gray-400">3 free consultations • Complete anonymity</p>
        </div>
      </div>
    </div>
  )
}
