"use client"

import type React from "react"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"

import { useChat } from "ai"
import { useSubscription } from "@/hooks/use-subscription"

import { ArrowUpIcon, SparklesIcon, Zap, Brain, Rocket, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AutoResizeTextarea } from "@/components/autoresize-textarea"
import { AnimatedLogo } from "@/components/animated-logo"
import { SubscriptionPaywall } from "@/components/subscription-paywall"

export function ChatForm({ className, ...props }: React.ComponentProps<"form">) {
  const searchParams = useSearchParams()
  const subscription = useSubscription()

  const { messages, input, setInput, append, error, isLoading } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  // Handle payment success
  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      subscription.activateSubscription()
      // Clean up URL
      window.history.replaceState({}, "", "/")
    }
  }, [searchParams, subscription])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || !subscription.canChat) return

    // Increment chat count for non-subscribers
    if (!subscription.isSubscribed) {
      subscription.incrementChatCount()
    }

    void append({ content: input, role: "user" })
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const handleSubscribe = async () => {
    try {
      console.log("🚀 Starting subscription process...")

      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      })

      console.log("📡 Response status:", res.status)
      console.log("📡 Response headers:", Object.fromEntries(res.headers.entries()))

      // ── ensure we only parse JSON when it actually is JSON ──
      const isJson = res.headers.get("content-type")?.includes("application/json")

      if (!res.ok) {
        const message = isJson ? (await res.json()).error : await res.text()
        console.error("❌ API Error:", message)
        throw new Error(message || "Failed to create checkout session")
      }

      const data = isJson ? await res.json() : { checkoutUrl: null }
      console.log("✅ API Response:", data)

      if (!data.checkoutUrl) {
        throw new Error("Checkout URL missing from Stripe response")
      }

      console.log("🔗 Redirecting to:", data.checkoutUrl)

      // Add a small delay to see the log
      setTimeout(() => {
        window.location.href = data.checkoutUrl
      }, 100)
    } catch (err) {
      console.error("💥 Subscription error:", err)
      alert(`Subscription error: ${err.message}`)
    }
  }

  const handleHomeClick = () => {
    window.location.reload()
  }

  // Show paywall if user has exceeded free chats and isn't subscribed
  if (!subscription.canChat && !subscription.isSubscribed) {
    return (
      <TooltipProvider>
        <main
          className={cn(
            "mx-auto flex h-svh max-h-svh w-full max-w-4xl flex-col items-stretch relative overflow-hidden",
            className,
          )}
          {...props}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000"></div>
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-4000"></div>
          </div>

          <div className="relative z-10 flex-1 content-center overflow-y-auto">
            <SubscriptionPaywall
              chatCount={subscription.chatCount}
              maxFreeChats={subscription.maxFreeChats}
              onSubscribe={handleSubscribe}
            />
          </div>

          {/* Demo reset button (remove in production) */}
          <div className="relative z-10 p-4 text-center">
            <Button
              onClick={subscription.resetForDemo}
              variant="outline"
              size="sm"
              className="text-xs text-gray-400 border-gray-600 hover:bg-gray-800 bg-transparent"
            >
              Reset Demo (Dev Only)
            </Button>
          </div>
        </main>
      </TooltipProvider>
    )
  }

  const header = (
    <div className="m-auto flex max-w-lg flex-col gap-8 text-center px-4">
      <AnimatedLogo />

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            BeeMomHive
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
            <p className="text-xl text-purple-200 font-medium px-4">Neural Parenting Assistant</p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
          </div>
        </div>

        <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
          Advanced AI technology designed to support modern mothers through the cosmos of parenting challenges.
        </p>

        {/* Chat counter for free users */}
        {!subscription.isSubscribed && (
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/40 backdrop-blur-sm">
            <p className="text-blue-200 text-sm">
              Free Neural Consultations:{" "}
              <span className="font-bold text-blue-300">{subscription.maxFreeChats - subscription.chatCount}</span>{" "}
              remaining
            </p>
          </div>
        )}

        {/* Premium badge for subscribers */}
        {subscription.isSubscribed && (
          <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/40 backdrop-blur-sm">
            <p className="text-yellow-200 text-sm font-medium">⭐ Premium Neural Access Active</p>
          </div>
        )}

        {/* Futuristic feature highlights */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-xs font-medium text-purple-200">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-900/50 to-cyan-900/30 border border-pink-500/30 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-pink-400" />
            <span className="text-xs font-medium text-pink-200">Instant</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-900/50 to-purple-900/30 border border-cyan-500/30 backdrop-blur-sm">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-200">Advanced</span>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/40 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0 mt-2 animate-pulse"></div>
            <div className="text-left">
              <p className="text-amber-200 text-xs font-medium mb-1">Medical Advisory Protocol</p>
              <p className="text-amber-100/90 text-xs leading-relaxed">
                For medical concerns, mental health support, or urgent child health issues, please consult qualified
                healthcare professionals. MomHive provides general guidance only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const messageList = (
    <div className="my-6 flex h-fit min-h-full flex-col gap-4 px-4">
      {/* Home button - only show when there are messages */}
      <div className="flex justify-start mb-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleHomeClick}
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-purple-500/30 text-purple-200 hover:bg-purple-900/50 hover:border-purple-400/50 backdrop-blur-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12} className="bg-gray-800 text-purple-200 border-purple-500/50">
            Return to Home
          </TooltipContent>
        </Tooltip>
      </div>

      {messages.map((message, index) => (
        <div
          key={index}
          data-role={message.role}
          className={cn(
            "max-w-[85%] rounded-2xl px-5 py-4 text-sm shadow-lg transition-all duration-300 hover:shadow-xl",
            message.role === "assistant"
              ? "self-start bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/30 text-gray-100 shadow-purple-500/20 backdrop-blur-sm"
              : "self-end bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 text-white font-medium shadow-purple-500/50",
          )}
        >
          <div className="prose prose-sm max-w-none prose-invert">{message.content}</div>
        </div>
      ))}
      {isLoading && (
        <div className="self-start max-w-[85%] rounded-2xl px-5 py-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-purple-300">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-sm">MomHive neural network processing...</span>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <TooltipProvider>
      <main
        className={cn(
          "mx-auto flex h-svh max-h-svh w-full max-w-4xl flex-col items-stretch relative overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Simple floating logo in top left */}
        <div className="absolute top-4 left-2 z-30">
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="/images/momhive-logo.png"
                alt="MomHive"
                width={32}
                height={32}
                className="relative z-10 drop-shadow-lg"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-medium text-purple-200 leading-tight">MomHive</span>
              <span className="text-xs text-purple-300/70 leading-tight">Home</span>
            </div>
          </button>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-4000"></div>
        </div>

        <div className="relative z-10 flex-1 content-center overflow-y-auto">
          {messages.length ? messageList : header}
        </div>

        {error && (
          <div className="relative z-10 mx-4 mb-4 rounded-2xl bg-red-900/50 border border-red-500/50 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 animate-pulse"></div>
              <div>
                <p className="text-red-200 text-sm font-medium">System Error Detected</p>
                <p className="text-red-300 text-xs mt-1">{error.message}</p>
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 p-4 border-t border-purple-500/30 bg-gray-900/80 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="relative mx-auto max-w-3xl flex items-end gap-3 rounded-2xl border border-purple-500/50 bg-gray-800/50 px-4 py-3 shadow-2xl shadow-purple-500/20 transition-all duration-300 focus-within:border-purple-400 focus-within:shadow-purple-400/30 backdrop-blur-sm"
          >
            <AutoResizeTextarea
              onKeyDown={handleKeyDown}
              onChange={(v) => setInput(v)}
              value={input}
              placeholder={
                subscription.canChat
                  ? "Initialize neural query about parenting, nutrition, activities..."
                  : "Upgrade to Premium to continue..."
              }
              className="placeholder:text-purple-300/70 flex-1 bg-transparent text-gray-100 focus:outline-none resize-none"
              disabled={isLoading || !subscription.canChat}
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading || !subscription.canChat}
                  className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <ArrowUpIcon size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={12} className="bg-gray-800 text-purple-200 border-purple-500/50">
                {subscription.canChat ? "Transmit Query" : "Premium Required"}
              </TooltipContent>
            </Tooltip>
          </form>

          {/* Futuristic powered by indicator */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-purple-400/70">
            <SparklesIcon className="w-3 h-3 animate-pulse" />
            <span>Powered by OpenAI Neural Networks</span>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </main>
    </TooltipProvider>
  )
}
