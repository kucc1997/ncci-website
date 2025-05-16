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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegistrationPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		institution: "",
		designation: "",
		participantType: "student",
		paperSubmission: false,
		dietaryRestrictions: "",
		specialRequirements: "",
		termsAccepted: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real application, this would submit the form data to a server
		console.log("Form submitted:", formData);
		alert("Registration submitted successfully!");
	};

	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">Registration</h1>
				<div className="w-20 h-1 bg-blue-600 mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Register for the National Conference on Computer Innovations (NCCI)
					2025 to be held on August 24, 2025, at Kathmandu University.
				</p>
			</div>

			<Tabs defaultValue="individual" className="max-w-4xl mx-auto">
				<TabsList className="grid w-full grid-cols-2 mb-8">
					<TabsTrigger value="individual">Individual Registration</TabsTrigger>
					<TabsTrigger value="group">Group Registration</TabsTrigger>
				</TabsList>

				<TabsContent value="individual">
					<Card>
						<CardHeader>
							<CardTitle>Individual Registration</CardTitle>
							<CardDescription>
								Fill out the form below to register for the conference as an
								individual participant.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<Label htmlFor="firstName">First Name</Label>
										<Input
											id="firstName"
											name="firstName"
											placeholder="Enter your first name"
											value={formData.firstName}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">Last Name</Label>
										<Input
											id="lastName"
											name="lastName"
											placeholder="Enter your last name"
											value={formData.lastName}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
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
									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number</Label>
										<Input
											id="phone"
											name="phone"
											placeholder="Enter your phone number"
											value={formData.phone}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="institution">
											Institution/Organization
										</Label>
										<Input
											id="institution"
											name="institution"
											placeholder="Enter your institution or organization"
											value={formData.institution}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="designation">Designation</Label>
										<Input
											id="designation"
											name="designation"
											placeholder="Enter your designation"
											value={formData.designation}
											onChange={handleChange}
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label>Participant Type</Label>
									<RadioGroup
										value={formData.participantType || "student"}
										onValueChange={(value) =>
											setFormData((prev) => ({
												...prev,
												participantType: value,
											}))
										}
										className="flex flex-col space-y-1"
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="student" id="student" />
											<Label htmlFor="student">Student (NPR 1,000)</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="faculty" id="faculty" />
											<Label htmlFor="faculty">
												Faculty Member (NPR 2,000)
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="professional" id="professional" />
											<Label htmlFor="professional">
												Industry Professional (NPR 3,000)
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="international"
												id="international"
											/>
											<Label htmlFor="international">
												International Participant (USD 100)
											</Label>
										</div>
									</RadioGroup>
								</div>

								<div className="flex items-center space-x-2">
									<Checkbox
										id="paperSubmission"
										checked={formData.paperSubmission}
										onCheckedChange={(checked) =>
											setFormData((prev) => ({
												...prev,
												paperSubmission: checked === true,
											}))
										}
									/>
									<Label htmlFor="paperSubmission">
										I will be submitting a paper for the conference
									</Label>
								</div>

								<div className="space-y-2">
									<Label htmlFor="dietaryRestrictions">
										Dietary Restrictions (if any)
									</Label>
									<Input
										id="dietaryRestrictions"
										name="dietaryRestrictions"
										placeholder="Enter any dietary restrictions"
										value={formData.dietaryRestrictions}
										onChange={handleChange}
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="specialRequirements">
										Special Requirements (if any)
									</Label>
									<Input
										id="specialRequirements"
										name="specialRequirements"
										placeholder="Enter any special requirements"
										value={formData.specialRequirements}
										onChange={handleChange}
									/>
								</div>

								<div className="flex items-center space-x-2">
									<Checkbox
										id="terms"
										checked={formData.termsAccepted || false}
										onCheckedChange={(checked) =>
											setFormData((prev) => ({
												...prev,
												termsAccepted: checked === true,
											}))
										}
										required
									/>
									<Label htmlFor="terms">
										I agree to the terms and conditions of the conference
									</Label>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							<Button type="submit" className="w-full">
								Register Now
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="group">
					<Card>
						<CardHeader>
							<CardTitle>Group Registration</CardTitle>
							<CardDescription>
								Register multiple participants from the same institution or
								organization.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="mb-4">
								For group registrations (5 or more participants), please
								download the group registration form, fill it out, and email it
								to{" "}
								<a
									href="mailto:kucc@ku.edu.np"
									className="text-blue-600 hover:underline"
								>
									kucc@ku.edu.np
								</a>
								.
							</p>
							<Button className="mb-6">Download Group Registration Form</Button>

							<div className="bg-blue-50 p-4 rounded-lg">
								<h3 className="font-semibold text-blue-800 mb-2">
									Group Registration Benefits
								</h3>
								<ul className="list-disc list-inside text-blue-700 space-y-1">
									<li>
										10% discount on registration fees for groups of 5-9
										participants
									</li>
									<li>
										15% discount on registration fees for groups of 10 or more
										participants
									</li>
									<li>Reserved seating during keynote sessions</li>
									<li>Group acknowledgment in the conference program</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="max-w-4xl mx-auto mt-12 bg-gray-50 p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-4">Registration Information</h2>

				<div className="space-y-4">
					<div>
						<h3 className="font-semibold">Registration Fees</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li>Students: NPR 1,000</li>
							<li>Faculty Members: NPR 2,000</li>
							<li>Industry Professionals: NPR 3,000</li>
							<li>International Participants: USD 100</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Registration Includes</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li>Access to all conference sessions</li>
							<li>Conference materials</li>
							<li>Lunch and refreshments</li>
							<li>Certificate of participation</li>
							<li>Networking opportunities</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Payment Methods</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li>Online payment through eSewa or Khalti (preferred)</li>
							<li>Bank transfer</li>
							<li>
								Cash payment at the registration desk on the day of the
								conference (prior registration required)
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Important Dates</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li>
								Early Bird Registration Deadline: June 30, 2025 (15% discount)
							</li>
							<li>Regular Registration Deadline: August 10, 2025</li>
							<li>
								Late Registration: August 11-23, 2025 (10% additional fee)
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Cancellation Policy</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li>
								Cancellations before July 24, 2025: Full refund minus processing
								fee
							</li>
							<li>
								Cancellations between July 25 and August 10, 2025: 50% refund
							</li>
							<li>Cancellations after August 10, 2025: No refund</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
