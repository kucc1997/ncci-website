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
	Clock,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

export default function AuthorsPage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">
					Information for Authors
				</h1>
				<div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Guidelines for paper submission, formatting requirements, and
					important deadlines for authors.
				</p>
			</div>

			<Tabs defaultValue="guidelines" className="max-w-4xl mx-auto text-[var(--bg-secondary-dark)]">
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
									<div className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] rounded-lg">
										<CalendarDays className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Paper Submission Deadline</h4>
											<p className="text-gray-600">30<sup>th</sup> June 2025 11:59 PM NPT</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] rounded-lg">
										<CalendarDays className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">
												Notification of Acceptance
											</h4>
											<p className="text-gray-600">21<sup>st</sup> July, 2025 11:59 PM NPT</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] rounded-lg">
										<CalendarDays className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Camera-Ready Submission</h4>
											<p className="text-gray-600">1<sup>st</sup> August, 2025 11:59 PM NPT</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] rounded-lg">
										<CalendarDays className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Conference Date</h4>
											<p className="text-gray-600">24<sup>th</sup> August, 2025</p>
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
											Original research contributions (5-10 pages)
										</p>
									</div>
									<div className="p-4 border rounded-lg">
										<h4 className="font-medium">Short Papers</h4>
										<p className="text-gray-600">
											Work in progress or preliminary results (3-5 pages)
										</p>
									</div>
									<div className="p-4 border rounded-lg">
										<h4 className="font-medium">Posters</h4>
										<p className="text-gray-600">
											Visual presentation of research
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
									following templates.
								</p>

								<div className="flex justify-center gap-4">
									<Button variant="outline" asChild>
										<Link href="ConferenceTemplate.zip" download>
											Download LaTeX Format
										</Link>
									</Button>

									<Button variant="outline" asChild>
										<Link href="ConferenceTemplate.docx" download>
											Download .docx Format
										</Link>
									</Button>
								</div>

								{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Paper Size</h4>
											<p className="text-gray-600">
												US Letter (8.5&quot; x 11&quot;)
											</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Margins</h4>
											<p className="text-gray-600">1&quot; on all sides</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Font</h4>
											<p className="text-gray-600">Times New Roman, 10pt</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Line Spacing</h4>
											<p className="text-gray-600">Single-spaced</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">Column Format</h4>
											<p className="text-gray-600">Two columns</p>
										</div>
									</div>
									<div className="flex items-start gap-3 p-4 border rounded-lg">
										<FileText className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
										<div>
											<h4 className="font-medium">File Format</h4>
											<p className="text-gray-600">PDF</p>
										</div>
									</div>
								</div> */}
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
										information. <br />
										<em>Note: The double blind templates will not contain any author information.</em>
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

							{/* <div className="flex flex-col items-center gap-4 mt-6">
								<Button asChild>
									<Link href="#">Download IEEE Template</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href="#">View Sample Paper</Link>
								</Button>
							</div> */}
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
									{[
										{
											title: "Originality and Novelty",
											desc: "Contribution to the field and innovation",
										},
										{
											title: "Technical Quality",
											desc: "Soundness of methodology and analysis",
										},
										{
											title: "Relevance",
											desc: "Alignment with conference themes",
										},
										{
											title: "Clarity and Presentation",
											desc: "Organization, writing, and visual elements",
										},
										{
											title: "Significance",
											desc: "Potential impact on research or practice",
										},
										{
											title: "References",
											desc: "Appropriate citation of related work",
										},
									].map((item, index) => (
										<div
											key={index}
											className="flex items-start gap-3 p-4 bg-[var(--bg-secondary)] rounded-lg"
										>
											<CheckCircle className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
											<div>
												<h4 className="font-medium">{item.title}</h4>
												<p className="text-gray-600">{item.desc}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Review Process Timeline</h3>

								<div className="relative border-l-2 border-blue-200 pl-6 ml-4 space-y-6">
									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Initial Screening</h4>
										<p className="text-gray-600">
											Papers are checked for formatting, plagiarism, and relevance.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">
											July 1–2, 2025
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Reviewer Assignment</h4>
										<p className="text-gray-600">
											Valid papers are assigned to qualified reviewers based on topic match.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">
											July 3–4, 2025
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Peer Review</h4>
										<p className="text-gray-600">
											Each paper is reviewed by at least two independent reviewers under a double-blind process.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">
											July 5–19, 2025
										</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Final Decision</h4>
										<p className="text-gray-600">
											Program committee resolves conflicts and finalizes acceptance decisions.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">July 20, 2025</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Notification</h4>
										<p className="text-gray-600">
											Authors are notified of the decision along with reviewer comments.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">July 21, 2025</p>
									</div>

									<div className="relative">
										<div className="absolute -left-[29px] top-0 h-6 w-6 rounded-full bg-[var(--bg-accent2)] flex items-center justify-center">
											<Clock className="h-3 w-3 text-white" />
										</div>
										<h4 className="font-medium">Camera-Ready Submission</h4>
										<p className="text-gray-600">
											Authors of accepted papers submit the final version addressing reviewer comments.
										</p>
										<p className="text-sm text-[var(--bg-accent2)]">August 1, 2025</p>
									</div>
								</div>
							</div>

							<div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
									<div>
										<h4 className="font-medium text-yellow-800">Important Note</h4>
										<p className="text-yellow-700">
											All accepted papers must be presented at the conference by at least one of the authors. Failure to present may result in the paper being excluded from the conference proceedings.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="max-w-4xl mx-auto mt-12 bg-[var(--bg-secondary)] p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4">Publication Opportunities</h2>
				<p className="mb-4">
					Selected papers from NCCI 2025 will be published in a special edition of {" "}
					<a href="https://journals.ku.edu.np/kuset" target="_blank" className="text-blue-700">
						Kathmandu University Journal of Science, Engineering and Technology (KUSET)
					</a>.
				</p>
			</div>
		</div>
	);
}
