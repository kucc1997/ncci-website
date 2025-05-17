"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignIn() {
	return <Button className="bg-[var(--bg-accent)] text-white hover:bg-[var(--bg-accent2)] cursor-pointer" onClick={() => signIn("github")}>Continue With GitHub</Button>
}
