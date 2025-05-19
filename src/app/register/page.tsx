"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import SignIn from "@/components/sign-in"
import PaperSubmissionForm from "@/components/paper-submission-form"
import { SubmissionData } from "@/app"
import axios from "axios"

export default function RegisterNew() {
	const session = useSession()
	const router = useRouter()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submissionId, setSubmissionId] = useState<string | null>(null)

	const handleSubmit = async (submission: SubmissionData) => {
		console.log(submission)

		const formData = new FormData();

		formData.append("title", submission.title);
		formData.append("abstract", submission.abstract);
		submission.keywords.forEach((keyword, index) =>
			formData.append(`keywords[${index}]`, keyword)
		);
		submission.coAuthors.forEach((author, index) => {
			formData.append(`coAuthors[${index}][name]`, author.name);
			formData.append(`coAuthors[${index}][email]`, author.email);
			if (author.orcid)
				formData.append(`coAuthors[${index}][orcid]`, author.orcid);
			if (author.affiliation)
				formData.append(`coAuthors[${index}][affiliation]`, author.affiliation);
		});
		formData.append("file", submission.file);
		formData.append("trackType", submission.trackType);
		formData.append("theme", submission.theme);

		setIsSubmitting(true)
		try {
			const response = await axios.post("/api/papers", formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

			console.log("Success:", response.data);
			return response.data;
		} catch (error) {
			console.error("Error submitting paper:", error);
			throw error;
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
