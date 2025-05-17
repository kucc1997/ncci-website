import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SpeakersPage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Keynote Speakers
				</h1>
				<div className="w-20 h-1 bg-blue-600 mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Meet our distinguished keynote speakers who will share their expertise
					and insights at NCCI 2025.
				</p>
			</div>

			<Tabs defaultValue="keynote" className="max-w-5xl mx-auto">
				<TabsList className="grid w-full grid-cols-2 mb-8">
					<TabsTrigger value="keynote">Keynote Speakers</TabsTrigger>
					<TabsTrigger value="panel">Panel Speakers</TabsTrigger>
				</TabsList>

				<TabsContent value="keynote">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								name: "Dr. Rajesh Sharma",
								title: "Professor of Artificial Intelligence",
								affiliation: "Stanford University, USA",
								image: "/placeholder.svg?height=400&width=400&text=RS",
								topic: "The Future of AI: Opportunities and Challenges",
								time: "9:30 AM - 10:30 AM",
								bio: "Dr. Rajesh Sharma is a renowned expert in artificial intelligence and machine learning. He has published over 100 research papers in top-tier conferences and journals. His work on deep learning algorithms has been widely recognized and implemented in various industries. Dr. Sharma is also the founder of AI Solutions, a startup focused on developing AI applications for healthcare.",
								expertise: [
									"Artificial Intelligence",
									"Machine Learning",
									"Deep Learning",
									"Neural Networks",
								],
							},
							{
								name: "Dr. Lisa Chen",
								title: "Chief Technology Officer",
								affiliation: "TechGlobal Inc., Singapore",
								image: "/placeholder.svg?height=400&width=400&text=LC",
								topic: "Cybersecurity in the Age of Quantum Computing",
								time: "11:00 AM - 12:00 PM",
								bio: "Dr. Lisa Chen is the CTO of TechGlobal Inc., where she leads the development of cutting-edge cybersecurity solutions. With over 15 years of experience in the industry, she has been instrumental in developing security protocols that are now industry standards. Dr. Chen holds multiple patents in quantum cryptography and has advised several governments on cybersecurity strategies.",
								expertise: [
									"Cybersecurity",
									"Quantum Computing",
									"Cryptography",
									"Network Security",
								],
							},
							{
								name: "Prof. David Kumar",
								title: "Director of Cloud Computing Research",
								affiliation: "MIT, USA",
								image: "/placeholder.svg?height=400&width=400&text=DK",
								topic: "Cloud Computing: Trends and Future Directions",
								time: "2:00 PM - 3:00 PM",
								bio: "Prof. David Kumar is a leading researcher in cloud computing and distributed systems. His work has significantly contributed to the development of efficient cloud architectures and resource management algorithms. Prof. Kumar has collaborated with major tech companies like Amazon, Google, and Microsoft on various cloud computing projects. He is also the author of the bestselling book 'Cloud Computing: A Comprehensive Guide'.",
								expertise: [
									"Cloud Computing",
									"Distributed Systems",
									"Virtualization",
									"Edge Computing",
								],
							},
							{
								name: "Dr. Sarah Johnson",
								title: "Head of Data Science",
								affiliation: "Google Research, USA",
								image: "/placeholder.svg?height=400&width=400&text=SJ",
								topic: "Big Data Analytics: Extracting Value from Data",
								time: "3:30 PM - 4:30 PM",
								bio: "Dr. Sarah Johnson leads the Data Science team at Google Research, where she works on developing advanced algorithms for data analysis and visualization. Her research focuses on scalable machine learning techniques for big data applications. Dr. Johnson has received numerous awards for her contributions to the field, including the prestigious Data Science Innovation Award. She is passionate about promoting diversity in tech and mentors young women pursuing careers in data science.",
								expertise: [
									"Data Science",
									"Big Data Analytics",
									"Data Visualization",
									"Statistical Analysis",
								],
							},
						].map((speaker, index) => (
							<Card key={index} className="overflow-hidden">
								<div className="relative h-64 bg-gradient-to-b from-blue-100 to-blue-50">
									<div className="absolute inset-0 flex items-center justify-center">
										<Image
											src={speaker.image || "/placeholder.svg"}
											alt={speaker.name}
											width={150}
											height={150}
											className="rounded-full border-4 border-white shadow-lg"
										/>
									</div>
								</div>
								<CardHeader className="text-center pt-4 pb-2">
									<CardTitle className="text-xl">{speaker.name}</CardTitle>
									<CardDescription className="text-sm">
										{speaker.title}
									</CardDescription>
									<CardDescription className="text-sm font-medium">
										{speaker.affiliation}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="mb-4">
										<h3 className="font-semibold text-blue-700">
											Keynote Topic
										</h3>
										<p className="text-gray-800">{speaker.topic}</p>
										<p className="text-sm text-gray-600 mt-1">{speaker.time}</p>
									</div>

									<div className="mb-4">
										<h3 className="font-semibold text-blue-700">Biography</h3>
										<p className="text-sm text-gray-700">{speaker.bio}</p>
									</div>

									<div>
										<h3 className="font-semibold text-blue-700 mb-2">
											Areas of Expertise
										</h3>
										<div className="flex flex-wrap gap-2">
											{speaker.expertise.map((area, i) => (
												<Badge key={i} variant="secondary">
													{area}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				<TabsContent value="panel">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								name: "Dr. Michael Wong",
								title: "Associate Professor",
								affiliation: "University of Tokyo, Japan",
								image: "/placeholder.svg?height=300&width=300&text=MW",
								topic: "Blockchain Technology and Applications",
								expertise: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
							},
							{
								name: "Prof. Anita Patel",
								title: "Professor of Computer Science",
								affiliation: "University of Cambridge, UK",
								image: "/placeholder.svg?height=300&width=300&text=AP",
								topic: "Human-Computer Interaction",
								expertise: ["HCI", "User Experience", "Interface Design"],
							},
							{
								name: "Dr. Robert Kim",
								title: "Research Scientist",
								affiliation: "IBM Research, USA",
								image: "/placeholder.svg?height=300&width=300&text=RK",
								topic: "Quantum Computing",
								expertise: [
									"Quantum Algorithms",
									"Quantum Hardware",
									"Quantum Programming",
								],
							},
							{
								name: "Dr. Elena Rodriguez",
								title: "Director of AI Ethics",
								affiliation: "Microsoft Research, USA",
								image: "/placeholder.svg?height=300&width=300&text=ER",
								topic: "Ethical AI and Responsible Innovation",
								expertise: ["AI Ethics", "Responsible AI", "Technology Policy"],
							},
							{
								name: "Prof. James Chen",
								title: "Professor of IoT",
								affiliation: "National University of Singapore",
								image: "/placeholder.svg?height=300&width=300&text=JC",
								topic: "Internet of Things: Smart Cities and Beyond",
								expertise: ["IoT", "Smart Cities", "Embedded Systems"],
							},
							{
								name: "Dr. Priya Sharma",
								title: "Lead Data Scientist",
								affiliation: "Amazon Web Services, India",
								image: "/placeholder.svg?height=300&width=300&text=PS",
								topic: "Machine Learning in Production",
								expertise: ["MLOps", "Production ML", "Cloud ML"],
							},
							{
								name: "Dr. Thomas Wilson",
								title: "Cybersecurity Researcher",
								affiliation: "ETH Zurich, Switzerland",
								image: "/placeholder.svg?height=300&width=300&text=TW",
								topic: "Advanced Threat Detection",
								expertise: [
									"Threat Intelligence",
									"Network Security",
									"Malware Analysis",
								],
							},
							{
								name: "Prof. Maria Garcia",
								title: "Professor of Software Engineering",
								affiliation: "Technical University of Munich, Germany",
								image: "/placeholder.svg?height=300&width=300&text=MG",
								topic: "DevOps and Continuous Delivery",
								expertise: ["DevOps", "CI/CD", "Software Quality"],
							},
							{
								name: "Dr. Alex Johnson",
								title: "VR/AR Researcher",
								affiliation: "Meta Research, USA",
								image: "/placeholder.svg?height=300&width=300&text=AJ",
								topic: "Virtual and Augmented Reality Applications",
								expertise: ["VR/AR", "Immersive Computing", "3D Visualization"],
							},
						].map((speaker, index) => (
							<Card key={index} className="overflow-hidden">
								<div className="relative h-40 bg-gradient-to-b from-blue-100 to-blue-50">
									<div className="absolute inset-0 flex items-center justify-center">
										<Image
											src={speaker.image || "/placeholder.svg"}
											alt={speaker.name}
											width={80}
											height={80}
											className="rounded-full border-2 border-white shadow-md"
										/>
									</div>
								</div>
								<CardHeader className="text-center pt-3 pb-2">
									<CardTitle className="text-lg">{speaker.name}</CardTitle>
									<CardDescription className="text-xs">
										{speaker.title}
									</CardDescription>
									<CardDescription className="text-xs font-medium">
										{speaker.affiliation}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="mb-3">
										<h3 className="text-sm font-semibold text-blue-700">
											Panel Topic
										</h3>
										<p className="text-sm text-gray-800">{speaker.topic}</p>
									</div>

									<div>
										<h3 className="text-sm font-semibold text-blue-700 mb-1">
											Expertise
										</h3>
										<div className="flex flex-wrap gap-1">
											{speaker.expertise.map((area, i) => (
												<Badge key={i} variant="outline" className="text-xs">
													{area}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>
			</Tabs>

			<div className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4">Panel Discussions</h2>
				<div className="space-y-4">
					<div className="bg-white p-4 rounded-lg shadow-sm">
						<h3 className="font-semibold text-lg">
							The Future of Computing: AI, Quantum, and Beyond
						</h3>
						<p className="text-gray-600 mb-2">10:30 AM - 11:30 AM</p>
						<p className="text-gray-700">
							This panel brings together experts from various fields to discuss
							the future directions of computing technologies, including
							artificial intelligence, quantum computing, and emerging
							paradigms.
						</p>
					</div>

					<div className="bg-white p-4 rounded-lg shadow-sm">
						<h3 className="font-semibold text-lg">
							Cybersecurity Challenges in the Digital Age
						</h3>
						<p className="text-gray-600 mb-2">1:00 PM - 2:00 PM</p>
						<p className="text-gray-700">
							As digital technologies become increasingly integrated into our
							lives, this panel explores the evolving cybersecurity landscape
							and strategies to protect individuals, organizations, and critical
							infrastructure.
						</p>
					</div>

					<div className="bg-white p-4 rounded-lg shadow-sm">
						<h3 className="font-semibold text-lg">
							Innovation and Entrepreneurship in Tech
						</h3>
						<p className="text-gray-600 mb-2">4:30 PM - 5:30 PM</p>
						<p className="text-gray-700">
							Industry leaders and successful entrepreneurs share their
							experiences and insights on fostering innovation, building tech
							startups, and navigating the challenges of the competitive
							technology market.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
