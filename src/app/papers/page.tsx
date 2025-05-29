"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import SignIn from "@/components/sign-in"
import SignOut from "@/components/sign-out"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FileText, ChevronRight, Download } from "lucide-react"
import { getPapers } from "@/lib/api/papers"

// Map theme codes to full names
const themeMap: Record<string, string> = {
	ai: "Artificial Intelligence",
	ml: "Machine Learning",
	ds: "Data Science",
	cs: "Cybersecurity",
	cc: "Cloud Computing",
	iot: "Internet of Things",
	bc: "Blockchain Technology",
	cv: "Computer Vision",
	nlp: "Natural Language Processing",
	hci: "Human-Computer Interaction",
	se: "Software Engineering",
	cn: "Computer Networks",
}

interface Paper {
	id: string
	title: string
	abstract: string
	keywords: string[]
	submissionId: string
	status: string
	submissionDate: string
	trackType: string
	themeId: string
	fileUrl: string
}

export default function Papers() {
	const { status } = useSession()
	const [papers, setPapers] = useState<Paper[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPapers = async () => {
			if (status !== "authenticated") return

			setLoading(true)
			setError(null)

			try {
				const response = await getPapers()
				if (response.success) {
					setPapers(response.data)
				} else {
					setError(response.data || "Failed to fetch papers")
				}
			} catch (error) {
				console.error("Error fetching papers:", error)
				setError("Failed to fetch papers")
			} finally {
				setLoading(false)
			}
		}

		fetchPapers()
	}, [status])

	if (status === "loading") {
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
						You need to sign in to view your submitted papers and track their status.
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
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold text-[var(--bg-accent)]">My Submissions</h1>
				<div className="flex gap-4">
					<Button asChild>
						<Link href="/register">
							<FileText className="mr-2 h-4 w-4" />
							Submit New Paper
						</Link>
					</Button>
					<SignOut />
				</div>
			</div>

			{loading ? (
				<div className="flex justify-center items-center min-h-[30vh]">
					<div className="animate-pulse text-xl">Loading your submissions...</div>
				</div>
			) : error ? (
				<Card className="text-center py-12">
					<CardContent>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-red-600">Error Loading Papers</h2>
							<p className="text-gray-600">{error}</p>
							<Button onClick={() => window.location.reload()}>
								Try Again
							</Button>
						</div>
					</CardContent>
				</Card>
			) : papers.length === 0 ? (
				<Card className="text-center py-12">
					<CardContent>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold">No Papers Submitted Yet</h2>
							<p className="text-gray-600">
								You haven&apos;t submitted any papers for the conference yet. Click the button below to submit your first paper.
							</p>
							<Button asChild className="mt-4">
								<Link href="/register">
									<FileText className="mr-2 h-4 w-4" />
									Submit New Paper
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			) : (
				<div className="space-y-6">
					{papers.map((paper) => (
						<Card key={paper.submissionId}>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle className="text-xl">{paper.title}</CardTitle>
										<CardDescription>
											Submission ID: {paper.submissionId} | Submitted on: {new Date(paper.submissionDate || Date.now()).toLocaleDateString()}
										</CardDescription>
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
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="abstract">
											<AccordionTrigger>Abstract</AccordionTrigger>
											<AccordionContent>
												<p className="text-gray-700">{paper.abstract}</p>
											</AccordionContent>
										</AccordionItem>
									</Accordion>

									{paper.keywords && paper.keywords.length > 0 && (
										<div>
											<h3 className="text-sm font-medium mb-1">Keywords</h3>
											<div className="flex flex-wrap gap-2">
												{paper.keywords.map((keyword: string, index: number) => (
													<Badge key={index} variant="outline">
														{keyword}
													</Badge>
												))}
											</div>
										</div>
									)}

									<div className="grid grid-cols-2 gap-4">
										<div>
											<h3 className="text-sm font-medium mb-1">Track Type</h3>
											<p className="text-gray-700 capitalize">{paper.trackType} Paper</p>
										</div>
										<div>
											<h3 className="text-sm font-medium mb-1">Theme</h3>
											<p className="text-gray-700">{themeMap[paper.themeId] || paper.themeId}</p>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between border-t pt-4">
								<Button variant="outline" size="sm" asChild>
									<a href={paper.fileUrl} download>
										<Download className="mr-2 h-4 w-4" />
										Download PDF
									</a>
								</Button>
								<Button asChild size="sm">
									<Link href={`/papers/${paper.submissionId}`}>
										View Details
										<ChevronRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			)}
		</div>
	)
}

