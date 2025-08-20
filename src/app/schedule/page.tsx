import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Coffee, FileText, Mic } from "lucide-react";

export default function SchedulePage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Conference Schedule
				</h1>
				<div className="w-20 h-1 bg-blue-600 mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Detailed agenda for the National Conference on Computer Innovations
					(NCCI) 2025, scheduled for August 24, 2025.
				</p>
			</div>

			<div className="flex items-center justify-center mb-8">
				<div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
					<Clock className="h-5 w-5" />
					<span className="font-medium">August 24, 2025</span>
				</div>
			</div>

			<Tabs defaultValue="all" className="max-w-5xl mx-auto">
				<TabsList className="grid w-full grid-cols-4 mb-8">
					<TabsTrigger value="all">All Sessions</TabsTrigger>
					<TabsTrigger value="keynotes">Keynotes</TabsTrigger>
					<TabsTrigger value="papers">Paper Presentations</TabsTrigger>
					<TabsTrigger value="panels">Panel Discussions</TabsTrigger>
				</TabsList>

				<TabsContent value="all">
					<div className="space-y-8">
						{/* Morning Sessions */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Morning Sessions</h2>
							<div className="space-y-4">
								<Card>
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle>Registration & Refreshments</CardTitle>
												<CardDescription>8:00 AM - 9:00 AM</CardDescription>
											</div>
											<Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">
												Registration
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex items-center gap-2 text-gray-600 mb-2">
											<MapPin className="h-4 w-4" />
											<span>Main Entrance, CV Raman Building</span>
										</div>
										<p className="text-gray-700">
											Collect your conference badge, welcome kit, and program
											schedule. Morning refreshments will be available.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle>Conference Formal Ceremony</CardTitle>
												<CardDescription>9:10 AM - 9:30 AM</CardDescription>
											</div>
											<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
												Ceremony
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex items-center gap-2 text-gray-600 mb-2">
											<MapPin className="h-4 w-4" />
											<span>Cv Raman Hall</span>
										</div>
										<p className="text-gray-700">
											Opening formalities led by Convener 
											<strong> Dr. Pankaj Raj Dawadi</strong>.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Honoring Dignitaries with Khada</CardTitle>
										<CardDescription>9:30 AM - 9:50 AM</CardDescription>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
										Ceremony
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Cv Raman Hall</span>
									</div>
									<p className="text-gray-700">
										Welcoming chief guests and dignitaries with Khada.
									</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Lighting the Panas & Anthems</CardTitle>
										<CardDescription>9:50 AM - 10:00 AM</CardDescription>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
										Ceremony
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Cv Raman Hall</span>
									</div>
									<p className="text-gray-700">
										Lighting of the Panas by the Chief Guest <strong> Prof. Dr. Achyut Prasad Wagle </strong>, Vice 
										Chancellor, Kathmandu University, followed by the National Anthem and KU Anthem.
									</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Opening Remarks from Chief Guest</CardTitle>
										<CardDescription>10:00 AM - 10:20 AM</CardDescription>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
										Ceremony
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Cv Raman Hall</span>
									</div>
									<div className="flex items-center gap-2 text-gray-600 mb-3">
										<Mic className="h-4 w-4" />
										<span>
										Chief Guest: Prof. Dr. Achyut Prasad Wagle, Vice Chancellor, Kathmandu University
										</span>
									</div>
									<p className="text-gray-700">
										Inaugural address by the Chief Guest to open the conference.
									</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Messages from Guests & Keynote Speakers</CardTitle>
										<CardDescription>10:20 AM - 11:20 AM</CardDescription>
										</div>
										<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
										Ceremony
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Main Auditorium</span>
									</div>
									<p className="text-gray-700">
										Addresses and keynote messages from distinguished guests and speakers.
									</p>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Lunch Break */}
						<div>
							<Card className="bg-green-50 border-green-100">
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle>Lunch Break</CardTitle>
											<CardDescription>12:00 PM - 1:00 PM</CardDescription>
										</div>
										<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
											Break
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Dining Hall</span>
									</div>
									<p className="text-gray-700">
										Enjoy a buffet lunch with a variety of options, including
										vegetarian and non-vegetarian dishes.
									</p>
								</CardContent>
							</Card>
						</div>

						{/* Afternoon Sessions */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Afternoon Sessions</h2>
							<div className="space-y-4">
								{/* Parallel I */}
								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Parallel Session I - Led by Dr. Aman Shakya</CardTitle>
										<CardDescription>12:15 PM - 1:40 PM</CardDescription>
										</div>
										<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Papers
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>Cv Raman Hall</span>
									</div>
									<ul className="list-disc pl-5 text-gray-700 space-y-1">
										<li>12:15–12:30 : Federated Learning Framework for Scalable AI in Heterogeneous HPC and Cloud Environments</li>
										<li>12:30–12:40 : Enhancing Ethical Reasoning in Tiny Language Models via Fine-Tuning and Multi-Agent Consensus</li>
										<li>12:40–12:55 : TikhoFormer: Two-Stage Blur Classification & Transformer-Based Deblurring</li>
										<li>12:55–01:10  : Detecting Image Forgeries and Deepfakes: CNN vs Transformer</li>
										<li>01:10–01:25   : eBPF-PATROL- Protective Agent for Threat Recognition in Containerized/Virtualized Environments</li>
									</ul>
									</CardContent>
								</Card>

								{/* Parallel II */}
								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Parallel Session II - Led by Dr. Bhoj Raj Ghimire</CardTitle>
										<CardDescription>12:15 PM - 1:40 PM</CardDescription>
										</div>
										<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Papers
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>CV Raman Hall</span>
									</div>
									<ul className="list-disc pl-5 text-gray-700 space-y-1">
										<li>12:15–12:25 : Attention-Based Multimodal Integration for Live Nepali Sign Language Interpretation</li>
										<li>12:25–12:35 : Cognify — Cognitive Tools for Mental Condition Enhancement</li>
										<li>12:35–12:50 : Designing Intuitive Mobile News Interfaces for Gen-Z Engagement in Nepal</li>
										<li>12:50–01:05 : Sambodhan — Youth-Centered Digital Mental Health Solution</li>
										<li>01:05–01:15 : Braille Voice — Digital Braille-to-Speech for Nepali & English</li>
										<li>01:15–01:30 : UX Assessment of the DOTM License Platform in Nepal</li>
									</ul>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle>Snacks, Tea & Networking</CardTitle>
												<CardDescription>1:40 PM - 2:15 PM</CardDescription>
											</div>
											<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
												Break
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex items-center gap-2 text-gray-600 mb-2">
											<MapPin className="h-4 w-4" />
											<span>Exhibition Hall</span>
										</div>
										<div className="flex items-center gap-2 text-gray-600 mb-3">
											<Coffee className="h-4 w-4" />
											<span>Refreshments provided</span>
										</div>
										<p className="text-gray-700">
											Tea, snacks, and networking with speakers and attendees.
										</p>
									</CardContent>
								</Card>

								{/* Parallel III */}
								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Parallel Session III - Led by Dr. Gajendra Sharma</CardTitle>
										<CardDescription>2:15 PM - 3:30 PM</CardDescription>
										</div>
										<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Papers
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>CV Raman Hall</span>
									</div>
									<ul className="list-disc pl-5 text-gray-700 space-y-1">
										<li>2:15–2:25 : Evaluating Sentence Embedding Models for Nepali Sentiment Analysis </li>
										<li>2:25–2:35 : Multi-Stage Fine-Tuning of mT5-Small for Nepali News Summarization </li>
										<li>2:35–2:45 : Ran2Dev — Converting Ranjana Lipi to Devanagari </li>
										<li>2:45–3:00 : Comparing OCR Engines for Nepal Lipi Extraction </li>
										<li>3:00–3:15 : Factors Influencing Nepali Students’ Study Abroad Decisions </li>
										<li>3:15–3:30 : ML Algorithms for Document Classification — Beyond Accuracy </li>
									</ul>
									</CardContent>
								</Card>

								 {/* Parallel IV */}
								<Card>
									<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<div>
										<CardTitle>Parallel Session IV - Led by Dr. Sudan Jha</CardTitle>
										<CardDescription>2:15 PM - 3:25 PM</CardDescription>
										</div>
										<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Papers
										</Badge>
									</div>
									</CardHeader>
									<CardContent>
									<div className="flex items-center gap-2 text-gray-600 mb-2">
										<MapPin className="h-4 w-4" />
										<span>CV Raman Hall</span>
									</div>
									<ul className="list-disc pl-5 text-gray-700 space-y-1">
										<li>2:15–2:30 : IoT-Driven Decision Support System for Crop Selection </li>
										<li>2:30–2:45 : Acoustic Event Detection for Illegal Logging & Deforestation </li>
										<li>2:45–2:55 : Lightweight ML for IoT Botnet Detection — Performance & Efficiency (Short)</li>
										<li>2:55–3:10 : AI-Driven Semantic Similarity Pipeline for Rapid Literature Review </li>
										<li>3:10–3:25 : Multi-Layered Cyber Defense: Malware Classification, Server Monitoring & Pen-Testing </li>
									</ul>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Closing Session */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Closing Session</h2>
							<div className="space-y-4">
								<Card>
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle>
													Best Paper Awards & Closing Ceremony
												</CardTitle>
												<CardDescription>5:30 PM - 6:00 PM</CardDescription>
											</div>
											<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
												Ceremony
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex items-center gap-2 text-gray-600 mb-2">
											<MapPin className="h-4 w-4" />
											<span>Main Auditorium</span>
										</div>
										<div className="flex items-center gap-2 text-gray-600 mb-3">
											<FileText className="h-4 w-4" />
											<span>Awards for best papers and presentations</span>
										</div>
										<p className="text-gray-700">
											Recognition of outstanding papers and presentations,
											followed by closing remarks and announcement of future
											events.
										</p>
									</CardContent>
								</Card>

								<Card>
									<CardHeader className="pb-2">
										<div className="flex justify-between items-start">
											<div>
												<CardTitle>Networking Reception</CardTitle>
												<CardDescription>6:00 PM - 7:30 PM</CardDescription>
											</div>
											<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
												Social
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="flex items-center gap-2 text-gray-600 mb-2">
											<MapPin className="h-4 w-4" />
											<span>Garden Area</span>
										</div>
										<p className="text-gray-700">
											Join us for a farewell reception with light refreshments
											and networking opportunities. Connect with speakers,
											fellow attendees, and industry representatives in a
											relaxed setting.
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</TabsContent>

				<TabsContent value="keynotes">
					<div className="space-y-4">
						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Keynote: The Future of AI: Opportunities and Challenges
										</CardTitle>
										<CardDescription>9:30 AM - 10:30 AM</CardDescription>
									</div>
									<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Keynote
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Mic className="h-4 w-4" />
									<span>Dr. Rajesh Sharma, Stanford University</span>
								</div>
								<p className="text-gray-700">
									An exploration of the current state and future directions of
									artificial intelligence, including ethical considerations,
									technological advancements, and potential societal impacts.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Keynote: Cybersecurity in the Age of Quantum Computing
										</CardTitle>
										<CardDescription>11:00 AM - 12:00 PM</CardDescription>
									</div>
									<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Keynote
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Mic className="h-4 w-4" />
									<span>Dr. Lisa Chen, TechGlobal Inc.</span>
								</div>
								<p className="text-gray-700">
									An in-depth look at how quantum computing is reshaping the
									cybersecurity landscape, including threats to current
									encryption methods and the development of quantum-resistant
									cryptography.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Keynote: Cloud Computing: Trends and Future Directions
										</CardTitle>
										<CardDescription>2:00 PM - 3:00 PM</CardDescription>
									</div>
									<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Keynote
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Mic className="h-4 w-4" />
									<span>Prof. David Kumar, MIT</span>
								</div>
								<p className="text-gray-700">
									An overview of the latest developments in cloud computing,
									including serverless architectures, edge computing, and
									multi-cloud strategies.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Keynote: Big Data Analytics: Extracting Value from Data
										</CardTitle>
										<CardDescription>3:30 PM - 4:30 PM</CardDescription>
									</div>
									<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
										Keynote
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Mic className="h-4 w-4" />
									<span>Dr. Sarah Johnson, Google Research</span>
								</div>
								<p className="text-gray-700">
									A deep dive into the world of big data analytics, exploring
									techniques for data processing, analysis, and visualization to
									derive meaningful insights.
								</p>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="papers">
					<div className="space-y-4">
						<div className="bg-gray-50 p-4 rounded-lg mb-6">
							<h3 className="font-semibold text-lg mb-2">
								Paper Presentation Sessions
							</h3>
							<p className="text-gray-700">
								 Paper presentations are organized into four parallel tracks in CV Raman Hall.
								 Each presenter will have 10–15 minutes brief  questions and discussion.
							</p>
						</div>

						<h3 className="font-semibold text-lg mb-3">
							Parallel Session I — Led by Dr. Aman Shakya
						</h3>
						<div className="space-y-3 mb-6">
							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Federated Learning Framework for Scalable AI in Heterogeneous HPC and Cloud Environments
									</CardTitle>
									<CardDescription>
										12:15 PM - 12:30 PM | Submission ID: KUD9PVS5 | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Enhancing Ethical Reasoning in Tiny Language Models via Fine-Tuning and Multi-Agent Consensus
									</CardTitle>
									<CardDescription>
										12:30 PM - 12:40 PM | Submission ID: 4FZTG9HL | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										TikhoFormer: A Two-Stage Blur Classification and Transformer-Based Deblurring Framework
									</CardTitle>
									<CardDescription>
										12:40 PM - 12:55 PM | Submission ID: OYV7IEJX | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Detecting Image Forgeries and Deepfakes: A Comparative Study of CNN and Transformer Models with a Custom-Curated Dataset
									</CardTitle>
									<CardDescription>
										12:55 PM - 1:10 PM | Submission ID: G3LBRZOU | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										eBPF-PATROL: Protective Agent for Threat Recognition and Overreach Limitation using eBPF in Containerized and Virtualized Environments
									</CardTitle>
									<CardDescription>
										1:10 PM - 1:25 PM | Submission ID: LURDQO51 | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>
						</div>

						<h3 className="font-semibold text-lg mb-3">
							Parallel Session II — Led by Dr. Bhoj Raj Ghimire
						</h3>
						<div className="space-y-3 mb-6">
							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Improved Multimodal Integration with Attention for Live Nepali Sign Language Interpretation
									</CardTitle>
									<CardDescription>
										12:15 PM - 12:25 PM | Submission ID: VFGKAGUK | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Cognify: Enhancement of Mental Conditions Using Cognitive Tools
									</CardTitle>
									<CardDescription>
										12:25 PM - 12:35 PM | Submission ID: 43V5AL04 | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Touch, Swipe, Share: Designing Intuitive Mobile News Interfaces for Gen-Z Engagement in Nepal
									</CardTitle>
									<CardDescription>
										12:35 PM - 12:50 PM | Submission ID: 1787BWVM | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Sambodhan: Addressing Stigma and Accessibility Through a Youth-Centered Digital Mental Health Solution
									</CardTitle>
									<CardDescription>
										12:50 PM - 1:05 PM | Submission ID: 9F975W1L | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Braille Voice: A Digital Braille-to-Speech System for Nepali and English Language Accessibility
									</CardTitle>
									<CardDescription>
										1:05 PM - 1:15 PM | Submission ID: PCCSRUAR | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Digital Friction in Public Services: A UX Assessment of the DOTM License Platform in Nepal
									</CardTitle>
									<CardDescription>
										1:15 PM - 1:30 PM | Submission ID: S4E9C8VH | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>
						</div>

						<h3 className="font-semibold text-lg mb-3">
							Parallel Session III — Led by Dr. Gajendra Sharma
						</h3>
						<div className="space-y-3 mb-6">
							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Evaluating Sentence Embedding Models for Nepali Sentiment Analysis: A Comparative Study
									</CardTitle>
									<CardDescription>
										2:15 PM - 2:25 PM | Submission ID: 5QDYOAVK | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Multi-Stage Fine-Tuning of mT5-Small for Nepali News Summarization
									</CardTitle>
									<CardDescription>
										2:25 PM - 2:35 PM | Submission ID: JF1PNU67 | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Developing Ran2Dev: A Model Converting Ranjana Lipi to Devanagari Script (Without Modifiers)
									</CardTitle>
									<CardDescription>
										2:35 PM - 2:45 PM | Submission ID: 9ED9P1FX | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Comparing OCR Engines for Nepal Lipi Extraction
									</CardTitle>
									<CardDescription>
										2:45 PM - 3:00 PM | Submission ID: J13J84QD | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Factors Influencing Nepali Students' Study Abroad Decisions: An Integration of Discrete Choice and Predictive Models
									</CardTitle>
									<CardDescription>
										3:00 PM - 3:15 PM | Submission ID: P54HQ8A9 | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										A Comparative Study of Machine Learning Algorithms for Document Classification: Insights Beyond Accuracy
									</CardTitle>
									<CardDescription>
										3:15 PM - 3:30 PM | Submission ID: P5PP23OY | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>
						</div>

						<h3 className="font-semibold text-lg mb-3">
							Parallel Session IV — Led by Dr. Sudan Jha
						</h3>
						<div className="space-y-3">
							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										A Data-Driven Decision Support System for Crop Selection Using IoT Sensors and Machine Learning
									</CardTitle>
									<CardDescription>
										2:15 PM - 2:30 PM | Submission ID: ZSZVD84Q | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Acoustic Event Detection and Classification for Monitoring Illegal Logging and Deforestation Using Edge AI Devices
									</CardTitle>
									<CardDescription>
										2:30 PM - 2:45 PM | Submission ID: QM3ZTOAU | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Evaluating Lightweight Machine Learning Models for Botnet Detection in IoT: A Performance and Efficiency Perspective
									</CardTitle>
									<CardDescription>
										2:45 PM - 2:55 PM | Submission ID: 2U4RG8YX | Short Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										An Artificial Intelligence Driven Semantic Similarity-Based Pipeline for Rapid Literature Review
									</CardTitle>
									<CardDescription>
										2:55 PM - 3:10 PM | Submission ID: HZYQSC1V | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader className="py-3">
								<div className="flex justify-between items-start">
									<div>
									<CardTitle className="text-base">
										Multi-Layered Cyber Defense: Combining AI-Based Malware Classification, Server Monitoring, and Penetration Testing
									</CardTitle>
									<CardDescription>
										3:10 PM - 3:25 PM | Submission ID: I1LSEMH4 | Full Paper
									</CardDescription>
									</div>
									<Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
								</div>
								</CardHeader>
							</Card>
						</div>
					</div>
				</TabsContent>

				<TabsContent value="panels">
					<div className="space-y-6">
						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Panel Discussion: The Future of Computing: AI, Quantum,
											and Beyond
										</CardTitle>
										<CardDescription>10:30 AM - 11:30 AM</CardDescription>
									</div>
									<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
										Panel
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Users className="h-4 w-4" />
									<span>Moderator: Dr. Robert Kim, IBM Research</span>
								</div>
								<p className="text-gray-700 mb-4">
									This panel brings together experts from various fields to
									discuss the future directions of computing technologies,
									including artificial intelligence, quantum computing, and
									emerging paradigms.
								</p>
								<div className="space-y-2">
									<h4 className="font-medium">Panelists:</h4>
									<ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
										<li>Dr. Rajesh Sharma, Stanford University</li>
										<li>Prof. Anita Patel, University of Cambridge</li>
										<li>Dr. Elena Rodriguez, Microsoft Research</li>
										<li>Prof. James Chen, National University of Singapore</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Panel Discussion: Cybersecurity Challenges in the Digital
											Age
										</CardTitle>
										<CardDescription>1:00 PM - 2:00 PM</CardDescription>
									</div>
									<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
										Panel
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Users className="h-4 w-4" />
									<span>Moderator: Dr. Thomas Wilson, ETH Zurich</span>
								</div>
								<p className="text-gray-700 mb-4">
									As digital technologies become increasingly integrated into
									our lives, this panel explores the evolving cybersecurity
									landscape and strategies to protect individuals,
									organizations, and critical infrastructure.
								</p>
								<div className="space-y-2">
									<h4 className="font-medium">Panelists:</h4>
									<ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
										<li>Dr. Lisa Chen, TechGlobal Inc.</li>
										<li>Dr. Michael Wong, University of Tokyo</li>
										<li>Prof. Maria Garcia, Technical University of Munich</li>
										<li>Dr. Alex Johnson, Meta Research</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div>
										<CardTitle>
											Panel Discussion: Innovation and Entrepreneurship in Tech
										</CardTitle>
										<CardDescription>4:30 PM - 5:30 PM</CardDescription>
									</div>
									<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
										Panel
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 text-gray-600 mb-2">
									<MapPin className="h-4 w-4" />
									<span>Main Auditorium</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 mb-3">
									<Users className="h-4 w-4" />
									<span>
										Moderator: Prof. Maria Garcia, Technical University of
										Munich
									</span>
								</div>
								<p className="text-gray-700 mb-4">
									Industry leaders and successful entrepreneurs share their
									experiences and insights on fostering innovation, building
									tech startups, and navigating the challenges of the
									competitive technology market.
								</p>
								<div className="space-y-2">
									<h4 className="font-medium">Panelists:</h4>
									<ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
										<li>Dr. Sarah Johnson, Google Research</li>
										<li>Prof. David Kumar, MIT</li>
										<li>Dr. Priya Sharma, Amazon Web Services</li>
										<li>Dr. Michael Brown, AWS</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>

			<div className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4">Schedule Information</h2>
				<div className="space-y-4">
					<div>
						<h3 className="font-semibold">Venue Information</h3>
						<p className="text-gray-700 mt-1">
							All sessions will take place at the CV Raman Building, Kathmandu
							University, Dhulikhel, Kavre, Nepal.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">Schedule Updates</h3>
						<p className="text-gray-700 mt-1">
							The schedule is subject to change. Please check the conference
							website or mobile app for the most up-to-date information.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">Mobile App</h3>
						<p className="text-gray-700 mt-1">
							Download the NCCI 2025 mobile app for real-time schedule updates,
							speaker information, and networking features.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
