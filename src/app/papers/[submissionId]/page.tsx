"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useSession } from "next-auth/react"
import SignIn from "@/components/sign-in"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	ArrowLeft,
	Download,
	FileText,
	Mail,
	User,
	Calendar,
	Clock,
	AlertCircle,
} from "lucide-react"
import { getPaperById } from "@/lib/api/papers"
import { Paper } from "@/app"

export default function PaperDetails() {
	const { status } = useSession()
	const params = useParams()
	const { submissionId } = params

	const [paper, setPaper] = useState<Paper | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPaperDetails = async () => {
			if (status !== "authenticated" || !submissionId) return

			setLoading(true)
			setError(null)

			try {
				const response = await getPaperById(submissionId as string)
				if (response.success) {
					setPaper(response.data)
				} else {
					setError(response.data || "Failed to fetch paper details")
				}
			} catch (error) {
				console.error("Error fetching paper details:", error)
				setError("Failed to fetch paper details")
			} finally {
				setLoading(false)
			}
		}

		fetchPaperDetails()
	}, [status, submissionId])

	if (status === "loading" || loading) {
		return (
			<div className="container py-12">
				<div className="flex justify-center items-center min-h-[50vh]">
					<div className="animate-pulse text-xl">Loading...</div>
				</div>
			</div>
		)
	}

	if (status === "unauthenticated") {
		return (
			<div className="container py-12">
				<div className="grid place-items-center my-12 gap-4">
					<h1 className="text-2xl font-bold">Not signed in yet? Sign in to continue.</h1>
					<p className="text-gray-600 max-w-md text-center mb-4">
						You need to sign in to view paper submission details.
					</p>
					<div className="mx-auto">
						<SignIn />
					</div>
				</div>
			</div>
		)
	}

	if (error || !paper) {
		return (
			<div className="container py-12">
				<div className="mb-6">
					<Button variant="outline" asChild>
						<Link href="/papers">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to My Submissions
						</Link>
					</Button>
				</div>
				<div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
					<AlertCircle className="h-12 w-12 text-yellow-500" />
					<h1 className="text-2xl font-bold">Paper Not Found</h1>
					<p className="text-gray-600 max-w-md text-center mb-4">
						{error || `We couldn't find a paper with the submission ID: ${submissionId}`}
					</p>
					<Button asChild>
						<Link href="/papers">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to My Submissions
						</Link>
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className="container py-12">
			<div className="mb-6">
				<Button variant="outline" asChild>
					<Link href="/papers">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to My Submissions
					</Link>
				</Button>
			</div>

			<div className="flex justify-between items-start mb-6">
				<div>
					<h1 className="text-3xl font-bold mb-2">{paper.title}</h1>
					<div className="flex items-center gap-2 text-gray-600">
						<FileText className="h-4 w-4" />
						<span>Submission ID: {paper.submissionId}</span>
					</div>
				</div>
				<Badge
					className={
						paper.status === "Accepted"
							? "bg-green-100 text-green-800 hover:bg-green-200"
							: paper.status === "Rejected"
								? "bg-red-100 text-red-800 hover:bg-red-200"
								: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
					}
				>
					{paper.status || "Under Review"}
				</Badge>
			</div>

			<Tabs defaultValue="details" className="max-w-5xl">
				<TabsList className="grid w-full grid-cols-2 mb-8">
					<TabsTrigger value="details">Paper Details</TabsTrigger>
					<TabsTrigger value="authors">Authors</TabsTrigger>
				</TabsList>

				<TabsContent value="details">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Abstract</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700">{paper.abstract}</p>
							</CardContent>
						</Card>

						{paper.keywords && paper.keywords.length > 0 && (
							<Card>
								<CardHeader>
									<CardTitle>Keywords</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{paper.keywords.map((keyword: string, index: number) => (
											<Badge key={index} variant="outline">
												{keyword}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						)}

						<Card>
							<CardHeader>
								<CardTitle>Submission Details</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="flex items-start gap-3">
										<Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h3 className="font-medium">Submission Date</h3>
											<p className="text-gray-700">
												{new Date(paper.createdAt || Date.now()).toLocaleDateString()}
											</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h3 className="font-medium">Track Type</h3>
											<p className="text-gray-700 capitalize">{paper.trackType} Paper</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<User className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h3 className="font-medium">Theme</h3>
											<p className="text-gray-700">{paper.theme.name}</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<Clock className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h3 className="font-medium">Current Status</h3>
											<p
												className={
													paper.status === "Accepted"
														? "text-green-600 font-medium"
														: paper.status === "Rejected"
															? "text-red-600 font-medium"
															: "text-yellow-600 font-medium"
												}
											>
												{paper.status || "Under Review"}
											</p>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter className="border-t pt-4">
								<Button asChild>
									<a href={paper.fileUrl} download>
										<Download className="mr-2 h-4 w-4" />
										Download Paper PDF
									</a>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="authors">
					<Card>
						<CardHeader>
							<CardTitle>Authors</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{/* Main Author */}
								<div className="p-4 border rounded-lg bg-blue-50">
									<div className="flex items-start gap-3">
										<User className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h3 className="font-medium">{paper.author.name} (Main Author)</h3>
											<div className="flex items-center gap-2 text-gray-600 mt-1">
												<Mail className="h-4 w-4" />
												<span>{paper.author.email}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Co-Authors */}
								{paper.coAuthors && paper.coAuthors.length > 0 && (
									<>
										<h4 className="font-medium text-lg">Co-Authors</h4>
										{paper.coAuthors.map((author: any, index: number) => (
											<div key={index} className="p-4 border rounded-lg">
												<div className="flex items-start gap-3">
													<User className="h-5 w-5 text-blue-600 mt-0.5" />
													<div>
														<h3 className="font-medium">{author.name}</h3>
														<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
															<div className="flex items-center gap-2 text-gray-600">
																<Mail className="h-4 w-4" />
																<span>{author.email}</span>
															</div>
															{author.orcid && (
																<div className="text-gray-600">
																	<span className="font-medium">ORCID:</span> {author.orcid}
																</div>
															)}
															{author.affiliation && (
																<div className="text-gray-600 md:col-span-2">
																	<span className="font-medium">Affiliation:</span> {author.affiliation}
																</div>
															)}
														</div>
													</div>
												</div>
											</div>
										))}
									</>
								)}
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

