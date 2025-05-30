"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignIn() {
	return (
		<div className="flex flex-col gap-3">
			<Button
				className="bg-[var(--bg-accent)] text-white hover:bg-[var(--bg-accent2)] cursor-pointer"
				onClick={() => signIn("github")}
			>
				Continue With GitHub
			</Button>
			<Button
				className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
				onClick={() => signIn("google")}
			>
				Continue With Google
			</Button>
		</div>
	)
}
