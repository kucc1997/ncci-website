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
					(NCCI) 2025.
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
										<span>1<sup>st</sup> June 2025 - 20<sup>th</sup> July 2025</span>
									</div>
									<p className="text-gray-700">
										Submit your paper following the details mentioned in {" "}
										<Link href="/authors" className="text-[var(--bg-accent2)]">
											authors section</Link> within the deadline of <strong>15<sup>th</sup>
											July 2025 11:59 PM NPT</strong>.
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
										<span>21<sup>st</sup> July - 31<sup>st</sup> July 2025 </span>
									</div>
									<p className="text-gray-700">
										The submitted papers will be screened and reviewed by the
										review committee. The review process will take place from
										16<sup>th</sup> July to 31<sup>st</sup> July 2025. Authors will be
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
										<span>31<sup>st</sup> July 2025</span>
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
										<span>7<sup>th</sup> August, 2025 11:59 PM NPT</span>
									</div>
									<p className="text-gray-700">
										The authors of the accepted paper should submit a camera-ready version
										of the paper by 7<sup>th</sup> August, 2025 11:59 PM NPT in the proper
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
										<span>5<sup>th</sup> August 2025 11:59 PM NPT</span>
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
										<span>21<sup>st</sup> August 2025 11:59 PM NPT</span>
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
										<span>24<sup>th</sup> August 2025 09:00 AM NPT</span>
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
