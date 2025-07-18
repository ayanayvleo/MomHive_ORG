import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id")

  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Redirect back to the app with success
  const redirectUrl = new URL("/", req.nextUrl.origin)
  redirectUrl.searchParams.set("payment", "success")
  redirectUrl.searchParams.set("session_id", sessionId || "")

  return NextResponse.redirect(redirectUrl)
}
