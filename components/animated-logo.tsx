"use client"

import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative flex items-center justify-center mb-8">
      <div
        className={`relative transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Outer cosmic glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse scale-150"></div>

        {/* Rotating rings */}
        <div className="absolute inset-0 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
        <div
          className="absolute inset-2 w-20 h-20 border border-pink-400/20 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "4s" }}
        ></div>

        {/* Main logo container */}
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 p-[3px] rounded-full shadow-2xl shadow-purple-500/50">
          <div className="bg-gray-900 rounded-full p-6 shadow-inner">
            {/* Central holographic element */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Holographic grid */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="url(#holoGradient)"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>

              {/* Central icon */}
              <div className="relative z-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-lg p-2 shadow-lg shadow-purple-500/50">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Floating particles */}
              <div className="absolute -top-3 -right-3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-300 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute inset-0 w-24 h-24 animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-400 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-1 h-1 bg-purple-300 rounded-full transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  )
}
