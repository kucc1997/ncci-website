import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar1 } from "lucide-react";
import Link from "next/link";

export default function TimelinePage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">
					Conference Timeline
				</h1>
				<div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Detailed timeline for the National Conference on Computer Innovations
					(NCCI) 2026.
				</p>
			</div>

			<div>
				<div className="space-y-8">
					{/* Paper Submission */}
					<div>
						<div className="space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Paper Submission</CardTitle>
										</div>
										<Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">
											Paper Submission
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>29<sup>th</sup> August 2026 - 15<sup>th</sup> October 2026</span>
									</div>
									<p className="text-gray-700">
										Submit your paper following the details mentioned in {" "}
										<Link href="/authors" className="text-[var(--bg-accent2)]">
											authors section</Link> within the deadline of <strong>15<sup>th</sup>
											October 2026 11:59 PM NPT</strong>.
									</p>
								</CardContent>
							</Card>

							{/* Notice of Acknowledgement */}
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Paper Acknowledge Notice</CardTitle>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
											Paper
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>3- 5 Days</span>
									</div>
									<p className="text-gray-700">
										After the submission of the paper, the authors will be notified
										about the acknowledgement of the paper within 3-5 days. The
										authors are requested to check their email for the
										acknowledgement notice. The review process will start after the acknowledgement of the paper.
									</p>
								</CardContent>
							</Card>

							{/* Review Period */}
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Review Period</CardTitle>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
											Paper
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>16<sup>th</sup> October - 31<sup>st</sup> October, 2026 </span>
									</div>
									<p className="text-gray-700">
										The submitted papers will be screened and reviewed by the
										review committee. The review process will take on a rolling basis right after the notice of acknowledgement of your paper. Additionally the review duration for all research papers will take place from
										16<sup>th</sup> October to 31<sup>st</sup> October, 2026. Authors will be
										informed about the review results after the end of this period.
									</p>
								</CardContent>
							</Card>

							{/* Notice of Acceptance */}
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Notice of Acceptance</CardTitle>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
											Paper
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>1<sup>st</sup> November - 4<sup>th</sup> November,2026</span>
									</div>
									<p className="text-gray-700">
										The authors of the papers accepted from the review committee
										will be mailed about the acceptance. The authors of the
										selected papers are required to prepare the camera ready
										version of the paper.
									</p>
								</CardContent>
							</Card>

							{/* Camera Ready  */}
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Camera-Ready Submission Deadline</CardTitle>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
											Paper
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>11<sup>th</sup> November, 2026 11:59 PM NPT</span>
									</div>
									<p className="text-gray-700">
										The authors of the accepted paper should submit a camera-ready version
										of the paper by 11<sup>th</sup> November, 2026 11:59 PM NPT in the proper
										format. The camera-ready version template will be provided
										after the acceptance of the paper.
									</p>
								</CardContent>
							</Card>

							{/* Registration Deadline */}
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Early Registration Closes</CardTitle>
										</div>
										<Badge className="bg-red-100 text-red-800 hover:bg-red-200">
											Registration
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>18<sup>th</sup> November, 2026 11:59 PM NPT</span>
									</div>
									<p className="text-gray-700">
										The early registration for all the participants as well as
										paper presentors closes on the date mentioned above. Please
										find the details about registration <Link href="/registration" className="text-[var(--bg-accent2)]">here</Link>
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Late Registration Closes</CardTitle>
										</div>
										<Badge className="bg-red-100 text-red-800 hover:bg-red-200">
											Registration
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>25<sup>th</sup> November, 2026 11:59 PM NPT</span>
									</div>
									<p className="text-gray-700">
										Final chance to register—secure your spot before the deadline!
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Conference Day</CardTitle>
										</div>
										<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
											Conference
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<Calendar1 className="h-4 w-4" />
										<span>21<sup>st</sup> December, 2026 09:00 AM NPT</span>
									</div>
									<p className="text-gray-700">
										The main event of the program featuring keynote speakers,
										expert panels, and interactive sessions designed to share
										insights, foster networking, and celebrate innovation.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
