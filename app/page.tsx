"use client"

import { Suspense, useState } from "react"
import { ChatForm } from "@/components/chat-form"
import { LandingPage } from "@/components/landing-page"
import { InstallPrompt } from "@/components/install-prompt"

/**
 * Wrapped in <Suspense> so router hooks like useSearchParams()
 * are never executed during the server prerender phase.
 */
export default function Page() {
  const [showChat, setShowChat] = useState(false)

  if (!showChat) {
    return (
      <>
        <LandingPage onEnter={() => setShowChat(true)} />
        <InstallPrompt />
      </>
    )
  }

  return (
    <Suspense>
      <ChatForm />
      <InstallPrompt />
    </Suspense>
  )
}
