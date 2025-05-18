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

// Mock data for submitted papers
const MOCK_PAPERS = [
	{
		id: "NCCI-123456",
		title: "Deep Learning Approaches for Natural Language Processing",
		abstract:
			"This paper presents a comprehensive survey of deep learning techniques applied to natural language processing tasks. We review recent advancements in transformer-based models, attention mechanisms, and their applications in various NLP tasks such as machine translation, sentiment analysis, and question answering. We also discuss challenges and future directions in this rapidly evolving field.",
		keywords: ["Deep Learning", "NLP", "Transformers", "Attention Mechanisms"],
		authors: ["John Smith", "Jane Doe", "Robert Johnson"],
		status: "Under Review",
		submissionDate: "2025-05-10T14:30:00Z",
		trackType: "regular",
		presentationType: "oral",
	},
	{
		id: "NCCI-234567",
		title: "Blockchain-Based Security Solutions for IoT",
		abstract:
			"Internet of Things (IoT) devices are increasingly becoming targets for cyber attacks due to their limited computational resources and security vulnerabilities. This paper proposes a novel blockchain-based security framework for IoT networks that addresses authentication, data integrity, and privacy concerns. We implement and evaluate our solution on a testbed of IoT devices and demonstrate significant improvements in security metrics compared to traditional approaches.",
		keywords: ["Blockchain", "IoT", "Security", "Authentication", "Privacy"],
		authors: ["Rahul Sharma", "Priya Patel", "Michael Chen"],
		status: "Accepted",
		submissionDate: "2025-04-28T09:15:00Z",
		trackType: "regular",
		presentationType: "oral",
	},
	{
		id: "NCCI-345678",
		title: "Energy-Efficient Protocols for IoT Networks",
		abstract:
			"Energy efficiency is a critical concern for battery-powered IoT devices. This paper introduces a novel energy-efficient communication protocol that significantly reduces power consumption while maintaining network performance. We present theoretical analysis and experimental results from real-world deployments, showing up to 40% reduction in energy usage compared to state-of-the-art protocols.",
		keywords: ["IoT", "Energy Efficiency", "Wireless Networks", "Protocol Design"],
		authors: ["Priya Sharma", "David Wilson", "Sarah Garcia"],
		status: "Under Review",
		submissionDate: "2025-05-05T11:45:00Z",
		trackType: "short",
		presentationType: "poster",
	},
]

export default function Papers() {
	const session = useSession()
	const [papers, setPapers] = useState<any[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// In a real application, this would be an API call to fetch the user's papers
		// For demo purposes, we'll use the mock data with a timeout to simulate loading
		const fetchPapers = async () => {
			setLoading(true)
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000))
				setPapers(MOCK_PAPERS)
			} catch (error) {
				console.error("Error fetching papers:", error)
			} finally {
				setLoading(false)
			}
		}

		if (session.status === "authenticated") {
			fetchPapers()
		}
	}, [session.status])

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
				<h1 className="text-3xl font-bold">My Submissions</h1>
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
			) : papers.length === 0 ? (
				<Card className="text-center py-12">
					<CardContent>
						<div className="space-y-4">
							<h2 className="text-xl font-semibold">No Papers Submitted Yet</h2>
							<p className="text-gray-600">
								You haven&apos;t submitted any papers for the conference yet. Click the button below to submit your first
								paper.
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
						<Card key={paper.id}>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle className="text-xl">{paper.title}</CardTitle>
										<CardDescription>
											Submission ID: {paper.id} | Submitted on: {new Date(paper.submissionDate).toLocaleDateString()}
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
										{paper.status}
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="abstract">
											<AccordionTrigger className="cursor-pointer">Abstract</AccordionTrigger>
											<AccordionContent>
												<p className="text-gray-700">{paper.abstract}</p>
											</AccordionContent>
										</AccordionItem>
									</Accordion>

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

									<div>
										<h3 className="text-sm font-medium mb-1">Authors</h3>
										<p className="text-gray-700">{paper.authors.join(", ")}</p>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div>
											<h3 className="text-sm font-medium mb-1">Track Type</h3>
											<p className="text-gray-700 capitalize">{paper.trackType} Paper</p>
										</div>
										<div>
											<h3 className="text-sm font-medium mb-1">Presentation Type</h3>
											<p className="text-gray-700 capitalize">{paper.presentationType} Presentation</p>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between border-t pt-4">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Download PDF
								</Button>
								<Button asChild size="sm">
									<Link href={`/papers/${paper.id}`}>
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
