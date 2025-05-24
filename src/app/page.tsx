import Link from "next/link";
import Image from "next/image";
import {
	Calendar,
	MapPin,
	Users,
	FileText,
	Mic,
	Clock,
	Mail,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-[var(--bg-accent)]/80 z-10" />
				<div
					className="absolute inset-0 bg-cover bg-center bg-[url('/ku.png')]"
					style={{ filter: "blur(1px)" }}
				/>
				<div className="container relative z-20 text-center px-4 md:px-6">
					<div className="flex justify-center mb-6">
						<Image
							src="/ncci-dark.svg"
							alt="NCCI Logo"
							width={448}
							height={448}
						/>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						National Conference on{" "}
						<span className="text-[var(--bg-accent2-dark)]">Computer Innovations</span>
					</h1>
					<p className="text-xl md:text-2xl text-white/90 mb-6">
						Exploring the Future of Technology and Innovation
					</p>
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
							<Calendar className="h-5 w-5" />
							<span>August 24, 2025</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
							<MapPin className="h-5 w-5" />
							<span>Kathmandu University</span>
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							size="lg"
							className="bg-[var(--bg-accent2)] hover:bg-blue-700 text-white"
							asChild
						>
							<Link href="/registration">Register Now</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white hover:bg-white/10"
						>
							<Link href="/authors">Submit a Paper</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Organizers */}
			<section className="py-12">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-[var(--bg-accent)]">Organized by</h2>
					</div>
					<div className="text-center">
						<Image
							src="/kucc-logo.png?height=120&width=120"
							alt="KUCC Logo"
							width={120}
							height={120}
							className="mx-auto mb-3"
						/>
						<p className="font-medium">
							Kathmandu University Computer Club
						</p>
					</div>

					<h3 className="text-2xl font-bold text-[var(--bg-accent)] text-center py-8">In Collaboration With</h3>

					<div className="text-center">
						<Image
							src="/ku-logo.png"
							alt="DoCSE Logo"
							width={100}
							height={100}
							className="mx-auto mb-3"
						/>
						<p className="font-medium">
							Department of Computer Science and Engineering
						</p>
					</div>
				</div>
			</section>

			{/* Key Sections */}
			<section className="py-16">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-[var(--bg-accent)]">
						Explore the Conference
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								icon: <Users className="h-8 w-8" />,
								title: "About",
								description:
									"Learn about the conference objectives and significance",
							},
							{
								icon: <Users className="h-8 w-8" />,
								title: "Committee",
								description:
									"Meet our organizing and advisory committee members",
							},
							{
								icon: <FileText className="h-8 w-8" />,
								title: "Registration",
								description:
									"Register to participate in this prestigious event",
							},
							{
								icon: <FileText className="h-8 w-8" />,
								title: "Authors",
								description: "Guidelines for paper submission and deadlines",
							},
							{
								icon: <Mic className="h-8 w-8" />,
								title: "Speakers",
								description: "Discover our keynote speakers and their topics",
							},
							{
								icon: <Clock className="h-8 w-8" />,
								title: "Timeline",
								description: "View the detailed timeline",
							},
						].map((item, index) => (
							<Link
								key={index}
								href={`/${item.title.toLowerCase()}`}
								className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center"
							>
								<div className="bg-blue-100 text-[var(--bg-accent2)] p-3 rounded-full mb-4">
									{item.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{item.title}
								</h3>
								<p className="text-[var(--bg-accent)] mb-4">{item.description}</p>
								<div className="mt-auto flex items-center text-[var(--bg-accent2)] font-medium group-hover:text-blue-700">
									Learn more <ArrowRight className="ml-1 h-4 w-4" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-[var(--bg-accent2)] text-white">
				<div className="container px-4 md:px-6 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to be part of NCCI 2025?
					</h2>
					<p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
						Join us for a day of innovation, learning, and networking with the
						brightest minds in computer science.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							size="lg"
							className="bg-white text-blue-800 hover:bg-gray-100"
						>
							Register Now
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white/10"
						>
							Submit Paper
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Quick Info */}
			<section className="py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8">
						<div>
							<h2 className="text-2xl font-bold mb-2">
								Have Questions?
							</h2>
							<p className="text-gray-600">
								Reach out to our team for any inquiries
							</p>
						</div>
						<div className="flex items-center gap-3">
							<Mail className="h-5 w-5 text-blue-500" />
							<a
								href="mailto:kucc@ku.edu.np"
								className="text-blue-500 hover:underline"
							>
								kucc@ku.edu.np
							</a>
						</div>
						<Button asChild>
							<Link href="/contact">Contact Us</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
