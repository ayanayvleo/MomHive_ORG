import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripeSecret = process.env.STRIPE_SECRET_KEY!
const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" })

export async function POST(req: NextRequest) {
  try {
    const { origin } = req.nextUrl

    // ── pick the right price ID for the key we are using ─────────────
    const isTest = stripeSecret.startsWith("sk_test_")
    const priceId =
      (isTest ? process.env.STRIPE_PRICE_ID_TEST : process.env.STRIPE_PRICE_ID_LIVE) ??
      (() => {
        throw new Error("Missing STRIPE_PRICE_ID_TEST / STRIPE_PRICE_ID_LIVE env variables")
      })()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?payment=cancelled`,
      metadata: { product: "momhive_pro", mode: isTest ? "test" : "live" },
    })

    return NextResponse.json({ checkoutUrl: session.url })
  } catch (err) {
    console.error("Stripe checkout error:", err)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
