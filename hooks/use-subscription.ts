"use client"

import { useState, useEffect } from "react"

interface SubscriptionState {
  isSubscribed: boolean
  chatCount: number
  maxFreeChats: number
  canChat: boolean
}

export function useSubscription() {
  const [state, setState] = useState<SubscriptionState>({
    isSubscribed: false,
    chatCount: 0,
    maxFreeChats: 3,
    canChat: true,
  })

  useEffect(() => {
    // Check localStorage for existing data
    const savedChatCount = localStorage.getItem("momhive_chat_count")
    const savedSubscription = localStorage.getItem("momhive_subscription")

    const chatCount = savedChatCount ? Number.parseInt(savedChatCount) : 0
    const isSubscribed = savedSubscription === "active"

    setState({
      isSubscribed,
      chatCount,
      maxFreeChats: 3,
      canChat: isSubscribed || chatCount < 3,
    })
  }, [])

  const incrementChatCount = () => {
    const newCount = state.chatCount + 1
    localStorage.setItem("momhive_chat_count", newCount.toString())

    setState((prev) => ({
      ...prev,
      chatCount: newCount,
      canChat: prev.isSubscribed || newCount < 3,
    }))
  }

  const activateSubscription = () => {
    localStorage.setItem("momhive_subscription", "active")
    setState((prev) => ({
      ...prev,
      isSubscribed: true,
      canChat: true,
    }))
  }

  const resetForDemo = () => {
    localStorage.removeItem("momhive_chat_count")
    localStorage.removeItem("momhive_subscription")
    setState({
      isSubscribed: false,
      chatCount: 0,
      maxFreeChats: 3,
      canChat: true,
    })
  }

  return {
    ...state,
    incrementChatCount,
    activateSubscription,
    resetForDemo,
  }
}
