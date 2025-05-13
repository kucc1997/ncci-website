import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	CalendarDays,
	FileText,
	Clock,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

export default function AuthorsPage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Information for Authors
				</h1>
				<div className="w-20 h-1 bg-blue-600 mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Guidelines for paper submission, formatting requirements, and
					important deadlines for authors.
				</p>
			</div>

			<Tabs defaultValue="guidelines" className="max-w-4xl mx-auto">
				<TabsList className="grid w-full grid-cols-3 mb-8">
					<TabsTrigger value="guidelines">Submission Guidelines</TabsTrigger>
					<TabsTrigger value="format">Formatting Requirements</TabsTrigger>
					<TabsTrigger value="process">Review Process</TabsTrigger>
				</TabsList>

				<TabsContent value="guidelines">
					<Card>
						<CardHeader>
							<CardTitle>Paper Submission Guidelines</CardTitle>
							<CardDescription>
								Important information for authors submitting papers to NCCI
								2025.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Important Dates</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CalendarDays className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Paper Submission Deadline</h4>
											<p className="text-gray-600">June 15, 2025</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CalendarDays className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">
												Notification of Acceptance
											</h4>
											<p className="text-gray-600">July 15, 2025</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CalendarDays className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Camera-Ready Submission</h4>
											<p className="text-gray-600">August 1, 2025</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CalendarDays className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Conference Date</h4>
											<p className="text-gray-600">August 24, 2025</p>
										</div>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Submission Categories</h3>
								<div className="space-y-3">
									<div className="p-4 border rounded-lg">
										<h4 className="font-medium">Full Papers</h4>
										<p className="text-gray-600">
											Original research contributions (8-10 pages)
										</p>
									</div>
									<div className="p-4 border rounded-lg">
										<h4 className="font-medium">Short Papers</h4>
										<p className="text-gray-600">
											Work in progress or preliminary results (4-6 pages)
										</p>
									</div>
									<div className="p-4 border rounded-lg">
										<h4 className="font-medium">Posters</h4>
										<p className="text-gray-600">
											Visual presentation of research (2 pages abstract)
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Submission Process</h3>
								<ol className="space-y-3 list-decimal list-inside">
									<li className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Prepare your paper</span>{" "}
										according to the formatting guidelines.
									</li>
									<li className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Create an account</span> on
										the conference submission system.
									</li>
									<li className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Submit your paper</span>{" "}
										through the online submission system.
									</li>
									<li className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Track your submission</span>{" "}
										status through your account.
									</li>
								</ol>
							</div>

							<div className="flex justify-center">
								<Button size="lg" className="mt-4">
									Submit Your Paper
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="format">
					<Card>
						<CardHeader>
							<CardTitle>Formatting Requirements</CardTitle>
							<CardDescription>
								Detailed instructions for formatting your paper according to the
								conference standards.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Paper Format</h3>
								<p>
									All papers must be submitted in IEEE conference format. Papers
									should be written in English and formatted according to the
									following guidelines:
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Paper Size</h4>
											<p className="text-gray-600">
												US Letter (8.5&quot; x 11&quot;)
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Margins</h4>
											<p className="text-gray-600">1&quot; on all sides</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Font</h4>
											<p className="text-gray-600">Times New Roman, 10pt</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Line Spacing</h4>
											<p className="text-gray-600">Single-spaced</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Column Format</h4>
											<p className="text-gray-600">Two columns</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">File Format</h4>
											<p className="text-gray-600">PDF</p>
										</div>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Paper Structure</h3>
								<p>Your paper should include the following sections:</p>

								<div className="space-y-3 mt-4">
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">
											Title and Author Information:
										</span>{" "}
										Title, authors&apos; names, affiliations, and contact
										information.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Abstract:</span> A concise
										summary of the paper (150-250 words).
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Keywords:</span> 4-6 keywords
										or phrases.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Introduction:</span>{" "}
										Background, motivation, and objectives.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Related Work:</span>{" "}
										Literature review and related research.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Methodology:</span> Research
										methods, experimental setup, or theoretical framework.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Results and Discussion:</span>{" "}
										Findings, analysis, and interpretation.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">Conclusion:</span> Summary of
										contributions and future work.
									</div>
									<div className="p-3 bg-gray-50 rounded-lg">
										<span className="font-medium">References:</span> Citations
										in IEEE format.
									</div>
								</div>
							</div>

							<div className="flex flex-col items-center gap-4 mt-6">
								<Button asChild>
									<Link href="#">Download IEEE Template</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href="#">View Sample Paper</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="process">
					<Card>
						<CardHeader>
							<CardTitle>Review Process</CardTitle>
							<CardDescription>
								Information about how papers are reviewed and evaluated for the
								conference.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Review Criteria</h3>
								<p>
									All submitted papers will be evaluated based on the following
									criteria:
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Originality and Novelty</h4>
											<p className="text-gray-600">
												Contribution to the field and innovation
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Technical Quality</h4>
											<p className="text-gray-600">
												Soundness of methodology and analysis
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Relevance</h4>
											<p className="text-gray-600">
												Alignment with conference themes
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Clarity and Presentation</h4>
											<p className="text-gray-600">
												Organization, writing, and visual elements
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">Significance</h4>
											<p className="text-gray-600">
												Potential impact on research or practice
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
										<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
										<div>
											<h4 className="font-medium">References</h4>
											<p className="text-gray-600">
												Appropriate citation of related work
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">
									Review Process Timeline
								</h3>

								<div className="relative border-l-2 border-blue-200 pl-6 ml-4 space-y-6">
									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Initial Screening</h4>
										<p className="text-gray-600">
											Papers are checked for formatting, plagiarism, and
											relevance.
										</p>
										<p className="text-sm text-blue-600">
											1-2 weeks after submission
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Peer Review</h4>
										<p className="text-gray-600">
											Each paper is reviewed by at least two independent
											reviewers from the technical committee.
										</p>
										<p className="text-sm text-blue-600">
											2-3 weeks after initial screening
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Decision Making</h4>
										<p className="text-gray-600">
											Based on reviewer feedback, papers are accepted, rejected,
											or recommended for revision.
										</p>
										<p className="text-sm text-blue-600">
											1 week after peer review
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Notification</h4>
										<p className="text-gray-600">
											Authors are notified of the decision along with reviewer
											comments.
										</p>
										<p className="text-sm text-blue-600">July 15, 2025</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Camera-Ready Submission</h4>
										<p className="text-gray-600">
											Authors of accepted papers submit the final version
											addressing reviewer comments.
										</p>
										<p className="text-sm text-blue-600">August 1, 2025</p>
									</div>
								</div>
							</div>

							<div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
									<div>
										<h4 className="font-medium text-yellow-800">
											Important Note
										</h4>
										<p className="text-yellow-700">
											All accepted papers must be presented at the conference by
											at least one of the authors. Failure to present may result
											in the paper being excluded from the conference
											proceedings.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4">Publication Opportunities</h2>
				<p className="mb-4">
					Selected high-quality papers from NCCI 2025 will be recommended for
					publication in the following journals:
				</p>
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>Journal of Computer Science and Engineering (JCSE)</li>
					<li>International Journal of Computer Applications (IJCA)</li>
					<li>Journal of Computing and Information Technology (CIT)</li>
					<li>
						NCCI 2025 Conference Proceedings (indexed in major academic
						databases)
					</li>
				</ul>
				<p className="mt-4 text-blue-700">
					Note: Additional publication fees may apply for journal publications.
				</p>
			</div>
		</div>
	);
}
