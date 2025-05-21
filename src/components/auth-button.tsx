"use client"

import { useSession } from "next-auth/react"
import SignIn from "./sign-in"
import SignOut from "./sign-out"

export default function AuthButton() {
  const { data: session, status } = useSession()
  
  if (status === "loading") {
    return (
      <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse"></div>
    )
  }
  
  return session ? <SignOut /> : <SignIn />
}