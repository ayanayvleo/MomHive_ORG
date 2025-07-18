"use client"

import { Button } from "@/components/ui/button"
import { Zap, Crown, Rocket, Shield } from "lucide-react"

interface SubscriptionPaywallProps {
  chatCount: number
  maxFreeChats: number
  onSubscribe: () => void
}

export function SubscriptionPaywall({ chatCount, maxFreeChats, onSubscribe }: SubscriptionPaywallProps) {
  return (
    <div className="m-auto flex max-w-lg flex-col gap-8 text-center px-4">
      {/* Animated premium logo */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-2xl opacity-40 animate-pulse scale-150"></div>
          <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-[3px] rounded-full shadow-2xl shadow-orange-500/50">
            <div className="bg-gray-900 rounded-full p-6 shadow-inner">
              <Crown className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Upgrade to MomHive Pro
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1"></div>
            <p className="text-lg text-orange-200 font-medium px-4">Neural Network Access Limit Reached</p>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1"></div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/40 backdrop-blur-sm">
          <p className="text-orange-100 text-sm">
            You've used <span className="font-bold text-orange-300">{chatCount}</span> of{" "}
            <span className="font-bold text-orange-300">{maxFreeChats}</span> free neural consultations
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl text-gray-200 font-semibold">Unlock Premium Features</h3>

          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span className="text-purple-200 text-sm">Unlimited AI conversations</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border border-pink-500/30">
              <Rocket className="w-5 h-5 text-pink-400 flex-shrink-0" />
              <span className="text-pink-200 text-sm">Advanced parenting protocols</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30">
              <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-200 text-sm">Priority neural processing</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-orange-500/50 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-orange-300">$20</p>
              <p className="text-orange-200 text-sm">per month</p>
              <p className="text-gray-400 text-xs">Cancel anytime</p>
            </div>
          </div>

          <Button
            onClick={onSubscribe}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 shadow-2xl shadow-orange-500/50 hover:shadow-orange-400/60 transition-all duration-300 rounded-xl"
          >
            <Crown className="w-5 h-5 mr-2" />
            Activate Premium Access
          </Button>

          <p className="text-xs text-gray-400 leading-relaxed">
            Secure payment processing powered by Stripe. Your subscription activates instantly and includes a 7-day
            money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  )
}
