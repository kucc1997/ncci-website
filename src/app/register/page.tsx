"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import SignIn from "@/components/sign-in"
import PaperSubmissionForm from "@/components/paper-submission-form"

export default function RegisterNew() {
	const session = useSession()
	const router = useRouter()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submissionId, setSubmissionId] = useState<string | null>(null)

	const handleSubmit = async (formData: any) => {
		setIsSubmitting(true)
		try {
			// In a real application, this would be an API call to submit the paper
			// For demo purposes, we'll simulate a submission with a timeout
			await new Promise((resolve) => setTimeout(resolve, 1500))

			// Generate a random submission ID (in a real app, this would come from the backend)
			const newSubmissionId = `NCCI-${Math.floor(100000 + Math.random() * 900000)}`
			setSubmissionId(newSubmissionId)

			// Redirect to the paper details page after submission
			setTimeout(() => {
				router.push(`/papers/${newSubmissionId}`)
			}, 1000)
		} catch (error) {
			console.error("Error submitting paper:", error)
			alert("There was an error submitting your paper. Please try again.")
		} finally {
			setIsSubmitting(false)
		}
	}

	if (session.status === "loading") {
		return (
			<div className="container py-12">
				<div className="flex justify-center items-center min-h-[50vh]">
					<div className="animate-pulse text-xl">Loading...</div>
				</div>
			</div>
		)
	}

	if (session.status === "unauthenticated") {
		return (
			<div className="container py-12">
				<div className="grid place-items-center my-12 gap-4">
					<h1 className="text-2xl font-bold">Sign in to Submit a Paper</h1>
					<p className="text-gray-600 max-w-md text-center mb-4">
						You need to sign in to your account before submitting a paper for the National Conference on Computer
						Innovations.
					</p>
					<div className="mx-auto">
						<SignIn />
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="container py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-6">Submit a Paper</h1>

				{submissionId ? (
					<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
						<h2 className="text-xl font-semibold text-green-800 mb-2">Paper Submitted Successfully!</h2>
						<p className="text-green-700 mb-4">
							Your paper has been submitted with submission ID: <span className="font-bold">{submissionId}</span>
						</p>
						<p className="text-green-700">Redirecting to your submission details...</p>
					</div>
				) : (
					<PaperSubmissionForm onSubmitAction={handleSubmit} isSubmitting={isSubmitting} />
				)}
			</div>
		</div>
	)
}
