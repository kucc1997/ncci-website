import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">About NCCI 2025</h1>
				<div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Learn about the National Conference on Computer Innovations, its
					objectives, and significance in the field of computer science and
					technology.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
				<div>
					<h2 className="text-2xl font-bold mb-4 text-[var(--bg-accent)]">Conference Overview</h2>
					<p className="mb-4 text-[var(--bg-secondary-dark)]">
						The National Conference on Computer Innovations (NCCI) is a premier
						academic event that brings together researchers, industry
						professionals, and students to share knowledge, present research
						findings, and discuss emerging trends in computer science and
						technology.
					</p>
					<p className="mb-4 text-[var(--bg-secondary-dark)]">
						Hosted by Kathmandu University Computer Club (KUCC) in collaboration
						with the Department of Computer Science and Engineering (DoCSE),
						NCCI 2025 aims to foster innovation, collaboration, and knowledge
						exchange in the rapidly evolving field of computer science.
					</p>
					<p className="text-[var(--bg-secondary-dark)] mb-4">
						The conference provides a platform for participants to network with
						peers, engage with industry leaders, and gain insights into
						cutting-edge research and technological advancements.
					</p>
					<p className="text-[var(--bg-secondary-dark)]">
						The selected papers will be published in a special edition of {" "}
						<a href="https://journals.ku.edu.np/kuset" target="_blank" className="text-[var(--bg-accent2)]">
							Kathmandu University Journal of Science, Engineering and Technology (KUSET)
						</a>.
					</p>
				</div>
				<div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
					<Image
						src="/ncci-icon.svg?height=800&width=1200"
						alt="NCCI Logo"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="bg-gray-50 p-8 rounded-xl mb-16">
				<h2 className="text-2xl font-bold mb-6 text-center text-[var(--bg-accent)]">
					Conference Objectives
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							title: "Knowledge Sharing",
							description:
								"Facilitate the exchange of ideas, research findings, and technological innovations among participants.",
						},
						{
							title: "Networking",
							description:
								"Create opportunities for researchers, professionals, and students to connect and establish collaborative relationships.",
						},
						{
							title: "Research Promotion",
							description:
								"Encourage high-quality research in computer science and related fields through paper presentations and discussions.",
						},
						{
							title: "Industry Engagement",
							description:
								"Bridge the gap between academia and industry by involving industry professionals in discussions and presentations.",
						},
						{
							title: "Student Development",
							description:
								"Provide students with exposure to current research trends and career opportunities in computer science.",
						},
						{
							title: "Innovation Showcase",
							description:
								"Highlight innovative projects, products, and solutions developed by researchers and industry professionals.",
						},
					].map((item, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-sm">
							<h3 className="text-xl font-semibold mb-3 text-[var(--bg-accent2)]">
								{item.title}
							</h3>
							<p className="text-[var(--bg-secondary-dark)]">{item.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="text-center mb-16">
				<h2 className="text-2xl font-bold mb-6 text-[var(--bg-accent)]">Conference Themes</h2>

				<div className="space-y-8 text-left max-w-4xl mx-auto">

					{/* Intelligent Systems */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-blue-900">Intelligent Systems and Data Innovation</h3>
						<p className="text-sm text-gray-600 mb-2">Exploring the power of intelligent algorithms, data processing, and automation.</p>
						<div className="flex flex-wrap gap-2">
							{["Artificial Intelligence", "Machine Learning", "Data Science", "Deep Learning", "Computer Vision", "Natural Language Processing"].map((theme, index) => (
								<span key={index} className="bg-[var(--bg-secondary)] text-blue-800 px-3 py-1 rounded-full text-sm">
									{theme}
								</span>
							))}
						</div>
					</div>

					{/* Secure & Scalable Systems */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-blue-900">Secure and Scalable Computing</h3>
						<p className="text-sm text-gray-600 mb-2">Focusing on building reliable, connected, and protected digital infrastructures.</p>
						<div className="flex flex-wrap gap-2">
							{["Cybersecurity", "Cloud Computing", "Computer Networks"].map((theme, index) => (
								<span key={index} className="bg-[var(--bg-secondary)] text-blue-800 px-3 py-1 rounded-full text-sm">
									{theme}
								</span>
							))}
						</div>
					</div>

					{/* Emerging Tech */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-blue-900">Emerging Technologies</h3>
						<p className="text-sm text-gray-600 mb-2">Innovations that are transforming industries and the future of tech.</p>
						<div className="flex flex-wrap gap-2">
							{["Internet of Things", "Blockchain Technology"].map((theme, index) => (
								<span key={index} className="bg-[var(--bg-secondary)] text-blue-800 px-3 py-1 rounded-full text-sm">
									{theme}
								</span>
							))}
						</div>
					</div>

					{/* Human & Software */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-blue-900">Human-Centered Software and Interaction</h3>
						<p className="text-sm text-gray-600 mb-2">Bridging technology with usability, design, and system development.</p>
						<div className="flex flex-wrap gap-2">
							{["Human-Computer Interaction", "Software Engineering"].map((theme, index) => (
								<span key={index} className="bg-[var(--bg-secondary)] text-blue-800 px-3 py-1 rounded-full text-sm">
									{theme}
								</span>
							))}
						</div>
					</div>

				</div>
			</div>


			<div className="bg-[var(--bg-accent2)] text-white p-8 md:p-12 rounded-xl text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					Join Us at NCCI 2025
				</h2>
				<p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
					Be part of this exciting event and contribute to the advancement of
					computer science and technology in Nepal and beyond.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Button
						asChild
						size="lg"
						className="bg-white text-blue-700 hover:bg-gray-100"
					>
						<Link href="/registration">Register Now</Link>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="border-white text-white hover:bg-white/90 bg-transparent"
					>
						<Link href="/authors">Submit Paper</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
