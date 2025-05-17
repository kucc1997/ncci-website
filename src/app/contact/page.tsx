"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real application, this would submit the form data to a server
		console.log("Form submitted:", formData);
		alert("Message sent successfully! We'll get back to you soon.");
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-[var(--bg-accent)] text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
				<div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Have questions about the National Conference on Computer Innovations
					(NCCI) 2025? Get in touch with our team.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<div className="lg:col-span-1 space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								Reach out to us through any of these channels.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-start gap-3">
								<Mail className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
								<div>
									<h3 className="font-medium">Email</h3>
									<a
										href="mailto:kucc@ku.edu.np"
										className="text-[var(--bg-accent2)] hover:underline"
									>
										kucc@ku.edu.np
									</a>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<Phone className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
								<div>
									<h3 className="font-medium">Phone</h3>
									<a className="text-[var(--bg-accent2)]" href="tel:+9779847382531">+977 9847382531</a>
									<br />
									<a className="text-[var(--bg-accent2)]" href="tel:+9779861367984">+977 9861367984</a>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<MapPin className="h-5 w-5 text-[var(--bg-accent2)] mt-0.5" />
								<div>
									<h3 className="font-medium">Address</h3>
									<p>Kathmandu University</p>
									<p>Department of Computer Science and Engineering</p>
									<p>Dhulikhel, Kavre</p>
									<p>Nepal</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Quick Links</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<p>
								<Link
									href="/timeline"
									className="text-[var(--bg-accent2)] hover:underline"
								>
									Timeline
								</Link>
							</p>
							<p>
								<Link
									href="/registration"
									className="text-[var(--bg-accent2)] hover:underline"
								>
									Registration Information
								</Link>
							</p>
							<p>
								<Link href="/authors" className="text-[var(--bg-accent2)] hover:underline">
									Paper Submission Guidelines
								</Link>
							</p>
							<p>
								<Link href="/schedule" className="text-[var(--bg-accent2)] hover:underline">
									Conference Schedule
								</Link>
							</p>
							<p>
								<Link href="/speakers" className="text-[var(--bg-accent2)] hover:underline">
									Keynote Speakers
								</Link>
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="lg:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle>Send Us a Message</CardTitle>
							<CardDescription>
								Fill out the form below and we&apos;ll get back to you as soon
								as possible.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">Your Name</Label>
										<Input
											id="name"
											name="name"
											placeholder="Enter your name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Your Email</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="Enter your email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input
										id="subject"
										name="subject"
										placeholder="Enter subject"
										value={formData.subject}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Enter your message"
										rows={5}
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							<Button type="submit" className="w-full" onClick={handleSubmit}>
								<Send className="h-4 w-4 mr-2" /> Send Message
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>

			<div className="mt-12 max-w-6xl mx-auto">
				<h2 className="text-2xl font-bold mb-6 text-center text-[var(--bg-accent)]">Find Us</h2>
				<div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.4938700187545!2d85.53757873316432!3d27.619382192211134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09d44e64d02b%3A0xfe79a3be7ee90d1b!2sKathmandu%20University!5e0!3m2!1sen!2snp!4v1747478474847!5m2!1sen!2snp"
						style={{ border: 0 }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full"
					></iframe>
				</div>

				<div className="mt-6 text-center">
					<h3 className="font-semibold text-lg mb-2">
						Getting to Kathmandu University
					</h3>
					<p className="text-gray-700 max-w-3xl mx-auto">
						Kathmandu University is located in Dhulikhel, approximately 30
						kilometers east of Kathmandu. Transportation options include public
						buses, taxis, and private vehicles. For international participants,
						we recommend arranging transportation through your hotel or
						contacting the conference organizers for assistance.
					</p>
				</div>
			</div>

			<div className="mt-12 max-w-4xl mx-auto bg-[var(--bg-secondary)] p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4 text-[var(--bg-accent)]">Frequently Asked Questions</h2>
				<div className="space-y-4">
					<div>
						<h3 className="font-semibold">
							How can I register for the conference?
						</h3>
						<p className="text-gray-700 mt-1">
							You can register for the conference through our{" "}
							<Link href="/registration" className="text-[var(--bg-accent2)] hover:underline">
								registration page
							</Link>
							. Early bird registration is available until 27<sup>th</sup> July, 2025.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">
							What is the deadline for paper submission?
						</h3>
						<p className="text-gray-700 mt-1">
							The deadline for paper submission is June 30, 2025. Please refer
							to our{" "}
							<Link href="/authors" className="text-[var(--bg-accent2)] hover:underline">
								authors page
							</Link>{" "}
							for detailed guidelines.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">
							Are there accommodation options near the conference venue?
						</h3>
						<p className="text-gray-700 mt-1">
							Yes, there are several hotels and guesthouses in Dhulikhel near
							Kathmandu University. We will provide a list of recommended
							accommodations to registered participants.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">
							Is there a dress code for the conference?
						</h3>
						<p className="text-gray-700 mt-1">
							Business casual attire is recommended for all conference sessions
							and events.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
