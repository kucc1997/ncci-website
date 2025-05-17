"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignOut() {
	return <Button className="bg-[var(--bg-accent)] text-white hover:bg-[var(--bg-accent2)] cursor-pointer" onClick={() => signOut()}>Sign Out</Button>
}
