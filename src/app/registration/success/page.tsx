"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrationSuccessPage() {
	const searchParams = useSearchParams()
	const registrationId = searchParams.get("id")

	if (!registrationId) {
		return (
			<div className="container px-4 md:px-6 py-12">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<div className="flex items-center gap-2 text-red-600">
							<AlertCircle className="h-6 w-6" />
							<CardTitle>Registration Not Found</CardTitle>
						</div>
						<CardDescription>
							We couldn&apos;t find your registration details. Please try registering again.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild className="w-full">
							<Link href="/registration">Back to Registration</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		)
	}

	return (
		<div className="container px-4 md:px-6 py-12">
			<Card className="max-w-2xl mx-auto">
				<CardHeader>
					<div className="flex items-center gap-2 text-green-600">
						<CheckCircle2 className="h-6 w-6" />
						<CardTitle>Registration Successful!</CardTitle>
					</div>
					<CardDescription>
						Thank you for registering for NCCI 2025. Your registration has been received and is being processed.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-gray-50 p-4 rounded-lg">
						<h3 className="font-semibold mb-2">Your Registration ID</h3>
						<p className="text-2xl font-mono bg-white p-2 rounded border text-center">
							{registrationId}
						</p>
						<p className="text-sm text-gray-600 mt-2">
							Please save this ID for future reference. You will need it to check your registration status.
						</p>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Next Steps</h3>
						<ol className="list-decimal list-inside space-y-2 text-gray-700">
							<li>Check your email for a confirmation message</li>
							<li>Keep your payment voucher/statement for reference</li>
							<li>Wait for our team to verify your payment</li>
							<li>You will receive an email once your registration is confirmed</li>
						</ol>
					</div>

					<div className="bg-blue-50 p-4 rounded-lg">
						<h3 className="font-semibold text-blue-800 mb-2">Important Notes</h3>
						<ul className="space-y-2 text-blue-700">
							<li>• Registration confirmation may take 1-2 business days</li>
							<li>• If you don&apos;t receive a confirmation email, please check your spam folder</li>
							<li>• For any issues, contact us at <a href="mailto:kucc@ku.edu.np" className="underline">kucc@ku.edu.np</a></li>
						</ul>
					</div>

					<div className="flex gap-4">
						<Button asChild variant="outline" className="flex-1">
							<Link href="/">Return to Home</Link>
						</Button>
						<Button asChild className="flex-1">
							<Link href="/registration">New Registration</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
} 
