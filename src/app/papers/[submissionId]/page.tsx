"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import SignIn from "@/components/sign-in"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
	CheckCircle,
	XCircle,
	AlertCircle,
} from "lucide-react"

// Mock data for submitted papers (same as in papers/page.tsx)
const MOCK_PAPERS = [
	{
		id: "NCCI-123456",
		title: "Deep Learning Approaches for Natural Language Processing",
		abstract:
			"This paper presents a comprehensive survey of deep learning techniques applied to natural language processing tasks. We review recent advancements in transformer-based models, attention mechanisms, and their applications in various NLP tasks such as machine translation, sentiment analysis, and question answering. We also discuss challenges and future directions in this rapidly evolving field.",
		keywords: ["Deep Learning", "NLP", "Transformers", "Attention Mechanisms"],
		authors: [
			{
				name: "John Smith",
				email: "john.smith@example.com",
				orcid: "0000-0001-2345-6789",
				affiliation: "Stanford University",
			},
			{ name: "Jane Doe", email: "jane.doe@example.com", orcid: "0000-0002-3456-7890", affiliation: "MIT" },
			{
				name: "Robert Johnson",
				email: "robert.johnson@example.com",
				orcid: "0000-0003-4567-8901",
				affiliation: "Google Research",
			},
		],
		status: "Under Review",
		submissionDate: "2025-05-10T14:30:00Z",
		trackType: "regular",
		theme: "nlp",
		reviews: [
			{
				reviewer: "Reviewer 1",
				comments:
					"The paper provides a comprehensive overview of the field. However, the experimental section could be strengthened.",
				score: 7,
			},
			{
				reviewer: "Reviewer 2",
				comments: "Well-written paper with good analysis. Some recent works are missing from the literature review.",
				score: 8,
			},
		],
		timeline: [
			{ date: "2025-05-10T14:30:00Z", event: "Paper Submitted" },
			{ date: "2025-05-12T09:15:00Z", event: "Paper Assigned to Reviewers" },
			{ date: "2025-05-20T00:00:00Z", event: "Review 1 Received" },
			{ date: "2025-05-22T00:00:00Z", event: "Review 2 Received" },
		],
	},
	{
		id: "NCCI-234567",
		title: "Blockchain-Based Security Solutions for IoT",
		abstract:
			"Internet of Things (IoT) devices are increasingly becoming targets for cyber attacks due to their limited computational resources and security vulnerabilities. This paper proposes a novel blockchain-based security framework for IoT networks that addresses authentication, data integrity, and privacy concerns. We implement and evaluate our solution on a testbed of IoT devices and demonstrate significant improvements in security metrics compared to traditional approaches.",
		keywords: ["Blockchain", "IoT", "Security", "Authentication", "Privacy"],
		authors: [
			{
				name: "Rahul Sharma",
				email: "rahul.sharma@example.com",
				orcid: "0000-0001-5678-9012",
				affiliation: "Kathmandu University",
			},
			{
				name: "Priya Patel",
				email: "priya.patel@example.com",
				orcid: "0000-0002-6789-0123",
				affiliation: "IBM Research",
			},
			{
				name: "Michael Chen",
				email: "michael.chen@example.com",
				orcid: "0000-0003-7890-1234",
				affiliation: "University of Tokyo",
			},
		],
		status: "Accepted",
		submissionDate: "2025-04-28T09:15:00Z",
		trackType: "regular",
		theme: "bc",
		reviews: [
			{
				reviewer: "Reviewer 1",
				comments: "Excellent paper with novel contributions. The evaluation is thorough and convincing.",
				score: 9,
			},
			{
				reviewer: "Reviewer 2",
				comments: "Strong technical contribution with clear practical implications. Well-written and organized.",
				score: 9,
			},
			{
				reviewer: "Reviewer 3",
				comments:
					"The paper addresses an important problem and provides a solid solution. Minor concerns about scalability.",
				score: 8,
			},
		],
		timeline: [
			{ date: "2025-04-28T09:15:00Z", event: "Paper Submitted" },
			{ date: "2025-04-30T10:20:00Z", event: "Paper Assigned to Reviewers" },
			{ date: "2025-05-10T00:00:00Z", event: "Review 1 Received" },
			{ date: "2025-05-12T00:00:00Z", event: "Review 2 Received" },
			{ date: "2025-05-15T00:00:00Z", event: "Review 3 Received" },
			{ date: "2025-05-20T14:30:00Z", event: "Paper Accepted" },
		],
	},
	{
		id: "NCCI-345678",
		title: "Energy-Efficient Protocols for IoT Networks",
		abstract:
			"Energy efficiency is a critical concern for battery-powered IoT devices. This paper introduces a novel energy-efficient communication protocol that significantly reduces power consumption while maintaining network performance. We present theoretical analysis and experimental results from real-world deployments, showing up to 40% reduction in energy usage compared to state-of-the-art protocols.",
		keywords: ["IoT", "Energy Efficiency", "Wireless Networks", "Protocol Design"],
		authors: [
			{
				name: "Priya Sharma",
				email: "priya.sharma@example.com",
				orcid: "0000-0001-8901-2345",
				affiliation: "IIT Bombay",
			},
			{
				name: "David Wilson",
				email: "david.wilson@example.com",
				orcid: "0000-0002-9012-3456",
				affiliation: "University of Cambridge",
			},
			{
				name: "Sarah Garcia",
				email: "sarah.garcia@example.com",
				orcid: "0000-0003-0123-4567",
				affiliation: "ETH Zurich",
			},
		],
		status: "Under Review",
		submissionDate: "2025-05-05T11:45:00Z",
		trackType: "short",
		theme: "iot",
		reviews: [
			{
				reviewer: "Reviewer 1",
				comments: "Interesting approach with promising results. The evaluation methodology could be improved.",
				score: 7,
			},
		],
		timeline: [
			{ date: "2025-05-05T11:45:00Z", event: "Paper Submitted" },
			{ date: "2025-05-07T13:20:00Z", event: "Paper Assigned to Reviewers" },
			{ date: "2025-05-18T00:00:00Z", event: "Review 1 Received" },
		],
	},
]

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

export default function PaperDetails() {
	const session = useSession()
	const params = useParams()
	const router = useRouter()
	const { submissionId } = params

	const [paper, setPaper] = useState<any | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// In a real application, this would be an API call to fetch the paper details
		// For demo purposes, we'll use the mock data with a timeout to simulate loading
		const fetchPaperDetails = async () => {
			setLoading(true)
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000))
				const foundPaper = MOCK_PAPERS.find((p) => p.id === submissionId)
				setPaper(foundPaper || null)
			} catch (error) {
				console.error("Error fetching paper details:", error)
			} finally {
				setLoading(false)
			}
		}

		if (session.status === "authenticated" && submissionId) {
			fetchPaperDetails()
		}
	}, [session.status, submissionId])

	if (session.status === "loading" || loading) {
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
						You need to sign in to view paper submission details.
					</p>
					<div className="mx-auto">
						<SignIn />
					</div>
				</div>
			</div>
		)
	}

	if (!paper) {
		return (
			<div className="container py-12">
				<div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
					<AlertCircle className="h-12 w-12 text-yellow-500" />
					<h1 className="text-2xl font-bold">Paper Not Found</h1>
					<p className="text-gray-600 max-w-md text-center mb-4">
						We couldn't find a paper with the submission ID: {submissionId}
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
						<span>Submission ID: {paper.id}</span>
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
					size="lg"
				>
					{paper.status}
				</Badge>
			</div>

			<Tabs defaultValue="details" className="max-w-5xl">
				<TabsList className="grid w-full grid-cols-3 mb-8">
					<TabsTrigger value="details">Paper Details</TabsTrigger>
					<TabsTrigger value="reviews">Reviews</TabsTrigger>
					<TabsTrigger value="timeline">Timeline</TabsTrigger>
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
								<CardTitle>Authors</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{paper.authors.map((author: any, index: number) => (
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
								</div>
							</CardContent>
						</Card>

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
												{new Date(paper.submissionDate).toLocaleDateString()} at{" "}
												{new Date(paper.submissionDate).toLocaleTimeString()}
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
											<p className="text-gray-700">{themeMap[paper.theme] || paper.theme}</p>
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
												{paper.status}
											</p>
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter className="border-t pt-4">
								<Button>
									<Download className="mr-2 h-4 w-4" />
									Download Paper PDF
								</Button>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="reviews">
					{paper.reviews && paper.reviews.length > 0 ? (
						<div className="space-y-6">
							{paper.reviews.map((review: any, index: number) => (
								<Card key={index}>
									<CardHeader>
										<div className="flex justify-between items-start">
											<CardTitle>{review.reviewer}</CardTitle>
											<Badge
												className={
													review.score >= 8
														? "bg-green-100 text-green-800"
														: review.score >= 6
															? "bg-yellow-100 text-yellow-800"
															: "bg-red-100 text-red-800"
												}
											>
												Score: {review.score}/10
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div>
												<h3 className="font-medium mb-2">Comments</h3>
												<p className="text-gray-700">{review.comments}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					) : (
						<Card className="text-center py-8">
							<CardContent>
								<div className="flex flex-col items-center gap-4">
									<Clock className="h-12 w-12 text-gray-400" />
									<h2 className="text-xl font-semibold">Reviews Pending</h2>
									<p className="text-gray-600 max-w-md">
										Your paper is currently being reviewed. Reviews will appear here once they are completed.
									</p>
								</div>
							</CardContent>
						</Card>
					)}
				</TabsContent>

				<TabsContent value="timeline">
					<Card>
						<CardHeader>
							<CardTitle>Submission Timeline</CardTitle>
							<CardDescription>Track the progress of your paper submission</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="relative border-l-2 border-blue-200 pl-6 ml-4 space-y-6">
								{paper.timeline.map((event: any, index: number) => (
									<div key={index} className="relative">
										<div
											className={`absolute -left-[29px] top-0 h-6 w-6 rounded-full flex items-center justify-center ${event.event.includes("Accepted")
													? "bg-green-600"
													: event.event.includes("Rejected")
														? "bg-red-600"
														: "bg-blue-600"
												}`}
										>
											{event.event.includes("Accepted") ? (
												<CheckCircle className="h-3 w-3 text-white" />
											) : event.event.includes("Rejected") ? (
												<XCircle className="h-3 w-3 text-white" />
											) : (
												<Clock className="h-3 w-3 text-white" />
											)}
										</div>
										<h4 className="font-medium">{event.event}</h4>
										<p className="text-sm text-blue-600">
											{new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString()}
										</p>
									</div>
								))}

								{paper.status === "Under Review" && (
									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium text-gray-500">Decision Pending</h4>
										<p className="text-sm text-gray-500">Expected by July 15, 2025</p>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
