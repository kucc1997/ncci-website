"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Crown, Clock, AlertCircle, CreditCard } from "lucide-react"

export default function RegistrationPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		institution: "",
		designation: "",
		participantType: "attendee",
		tier: "tier1",
		isKuccMember: false,
		isInternational: false,
		paperSubmission: false,
		dietaryRestrictions: "",
		specialRequirements: "",
		termsAccepted: false,
	})

	const [paymentVoucher, setPaymentVoucher] = useState<File | null>(null)

	// Check if early registration (before August 5th midnight NPT)
	const isEarlyRegistration = useMemo(() => {
		const now = new Date()
		const deadline = new Date("2025-08-06T00:00:00")
		return now < deadline
	}, [])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleParticipantTypeChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			participantType: value,
			tier: value === "author" ? "tier1" : prev.tier,
		}))
	}

	const handleTierChange = (value: string) => {
		setFormData((prev) => ({ ...prev, tier: value }))
	}

	const handleTermsChange = (checked: boolean) => {
		setFormData((prev) => ({ ...prev, termsAccepted: checked }))
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setPaymentVoucher(e.target.files[0])
		}
	}

	const calculatePrice = () => {
		const { participantType, tier, isKuccMember, isInternational } = formData

		if (isInternational) {
			if (participantType === "author" || tier === "tier1") {
				return isEarlyRegistration ? "$50" : "$65"
			}
			return "Contact us for Tier 2 international pricing"
		}

		if (participantType === "author" || tier === "tier1") {
			if (isEarlyRegistration) {
				return isKuccMember ? "NPR 3,000" : "NPR 3,500"
			} else {
				return isKuccMember ? "NPR 4,200" : "NPR 4,500"
			}
		} else {
			// Tier 2
			if (isEarlyRegistration) {
				return isKuccMember ? "NPR 2,150" : "NPR 2,500"
			} else {
				return isKuccMember ? "NPR 3,150" : "NPR 3,500"
			}
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!formData.termsAccepted) {
			alert("Please accept the terms and conditions to proceed.")
			return
		}

		if (!paymentVoucher) {
			alert("Please upload your payment voucher or bank statement.")
			return
		}

		console.log("Registration submitted:", formData)
		console.log("Payment voucher:", paymentVoucher)
		alert("Registration submitted successfully!")
	}

	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">Conference Registration</h1>
				<div className="w-20 h-1 mb-6 bg-[var(--bg-accent2)]"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Register for NCCI 2025 - Choose your registration type and tier based on your needs.
				</p>

				{/* Important Notice */}
				<div className="mt-6 p-4 rounded-lg border bg-yellow-50 border-yellow-200 max-w-4xl">
					<div className="flex items-start gap-2">
						<AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
						<div className="text-left">
							<span className="font-medium text-yellow-800">Important Notice for Authors:</span>
							<p className="text-yellow-700 mt-1">
								If you are an author with co-authors, please note that each co-author must register separately to attend
								the conference. A single author registration does not cover co-authors&apos; attendance.
							</p>
						</div>
					</div>
				</div>

				{/* Registration Deadline Alert */}
				<div
					className={`mt-4 p-4 rounded-lg border ${isEarlyRegistration ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}
				>
					<div className="flex items-center gap-2">
						<Clock className={`h-5 w-5 ${isEarlyRegistration ? "text-green-600" : "text-orange-600"}`} />
						<span className={`font-medium ${isEarlyRegistration ? "text-green-800" : "text-orange-800"}`}>
							{isEarlyRegistration
								? "Early Registration Available until August 5th, 2025 (Midnight NPT)"
								: "Late Registration Period - Deadline: August 21st, 2025 (Midnight NPT)"}
						</span>
					</div>
				</div>
			</div>

			{/* Registration Tiers Overview */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
				<Card className="border-2 border-blue-200 relative">
					<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
						<Badge className="bg-[var(--bg-accent2)] text-white px-4 py-1">
							<Crown className="h-4 w-4 mr-1" />
							Tier 1 - Premium
						</Badge>
					</div>
					<CardHeader className="pt-8">
						<CardTitle className="text-center">Premium Experience</CardTitle>
						<CardDescription className="text-center">
							Enhanced conference experience with exclusive benefits
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3">
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Reserved special seating</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Premium conference kit</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Exclusive networking dinner with keynote speakers</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Priority access to all sessions</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Certificate of participation</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card className="border-2 border-gray-200">
					<CardHeader>
						<CardTitle className="text-center">
							<Badge variant="outline" className="mb-2">
								<Users className="h-4 w-4 mr-1" />
								Tier 2 - Standard
							</Badge>
						</CardTitle>
						<CardDescription className="text-center">
							Essential conference experience with core benefits
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3">
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>General seating</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Standard conference kit</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Standard refreshments and lunch</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Access to all sessions</span>
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-600" />
								<span>Certificate of participation</span>
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>

			<Card className="max-w-4xl mx-auto">
				<CardHeader>
					<CardTitle className="text-[var(--bg-accent)]">Conference Registration</CardTitle>
					<CardDescription>
						Complete your registration for NCCI 2025. Authors must register as &quot;Author&quot; if presenting a paper.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Personal Information */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									name="firstName"
									placeholder="Enter your first name"
									value={formData.firstName}
									onChange={handleInputChange}
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
									onChange={handleInputChange}
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
									onChange={handleInputChange}
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
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="institution">Institution/Organization</Label>
								<Input
									id="institution"
									name="institution"
									placeholder="Enter your institution or organization"
									value={formData.institution}
									onChange={handleInputChange}
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
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>

						{/* Registration Type */}
						<div className="space-y-4">
							<Label className="text-base font-medium">Registration Type</Label>
							<RadioGroup
								value={formData.participantType}
								onValueChange={handleParticipantTypeChange}
								className="space-y-3"
							>
								<div className="flex items-start space-x-3 p-4 border rounded-lg">
									<RadioGroupItem value="author" id="author" className="mt-1" />
									<div className="flex-1">
										<Label htmlFor="author" className="font-medium cursor-pointer">
											Author
										</Label>
										<p className="text-sm text-gray-600 mt-1">
											Required if you are presenting a paper. Automatically includes Tier 1 benefits.
										</p>
										<Badge className="mt-2 bg-blue-100 text-blue-800">Tier 1 Premium</Badge>
									</div>
								</div>
								<div className="flex items-start space-x-3 p-4 border rounded-lg">
									<RadioGroupItem value="attendee" id="attendee" className="mt-1" />
									<div className="flex-1">
										<Label htmlFor="attendee" className="font-medium cursor-pointer">
											Attendee
										</Label>
										<p className="text-sm text-gray-600 mt-1">
											Attending the conference without presenting a paper. Choose your preferred tier below.
										</p>
									</div>
								</div>
							</RadioGroup>
						</div>

						{/* Tier Selection (only for attendees) */}
						{formData.participantType === "attendee" && (
							<div className="space-y-4">
								<Label className="text-base font-medium">Select Tier</Label>
								<RadioGroup value={formData.tier} onValueChange={handleTierChange} className="space-y-3">
									<div className="flex items-start space-x-3 p-4 border-2 border-blue-200 rounded-lg">
										<RadioGroupItem value="tier1" id="tier1" className="mt-1" />
										<div className="flex-1">
											<Label htmlFor="tier1" className="font-medium flex items-center gap-2 cursor-pointer">
												<Crown className="h-4 w-4 text-[var(--bg-accent2)]" />
												Tier 1 - Premium Experience
											</Label>
											<p className="text-sm text-gray-600 mt-1">
												Reserved seating, premium kit, exclusive networking dinner with speakers
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3 p-4 border rounded-lg">
										<RadioGroupItem value="tier2" id="tier2" className="mt-1" />
										<div className="flex-1">
											<Label htmlFor="tier2" className="font-medium flex items-center gap-2 cursor-pointer">
												<Users className="h-4 w-4 text-gray-600" />
												Tier 2 - Standard Experience
											</Label>
											<p className="text-sm text-gray-600 mt-1">General seating, standard kit, standard refreshments</p>
										</div>
									</div>
								</RadioGroup>
							</div>
						)}

						{/* Registration Fee Display */}
						<div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
							<div className="flex justify-between items-center">
								<div>
									<h3 className="font-semibold text-lg">Registration Fee</h3>
									<p className="text-sm text-gray-600">
										{isEarlyRegistration ? "Early Registration" : "Late Registration"} -
										{formData.participantType === "author"
											? " Author (Tier 1)"
											: ` Attendee (${formData.tier === "tier1" ? "Tier 1" : "Tier 2"})`}
										{formData.isKuccMember && " - KUCC Member Discount Applied"}
									</p>
								</div>
								<div className="text-right">
									<div className="text-2xl font-bold text-[var(--bg-accent2)]">{calculatePrice()}</div>
									{formData.isInternational && formData.participantType === "attendee" && formData.tier === "tier2" && (
										<p className="text-sm text-gray-600 mt-1">Please contact us for payment details</p>
									)}
								</div>
							</div>
						</div>

						{/* Payment Information */}
						<Card className="border-2 border-blue-200">
							<CardHeader className="bg-blue-50">
								<CardTitle className="flex items-center gap-2">
									<CreditCard className="h-5 w-5" />
									Payment Information
								</CardTitle>
								<CardDescription>
									Please make your payment to the following bank account and upload the voucher/statement below.
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
									<div className="p-4 bg-gray-50 rounded-lg">
										<h3 className="font-semibold text-gray-800 mb-2">Bank Name</h3>
										<p className="text-lg font-medium">Nepal Investment Mega Bank Ltd.</p>
									</div>
									<div className="p-4 bg-gray-50 rounded-lg">
										<h3 className="font-semibold text-gray-800 mb-2">Account Name</h3>
										<p className="text-lg font-medium">KU-Computer Club</p>
									</div>
									<div className="p-4 bg-gray-50 rounded-lg">
										<h3 className="font-semibold text-gray-800 mb-2">Account Number</h3>
										<p className="text-lg font-medium">00505030016634</p>
									</div>
								</div>
								<div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
									<p className="text-sm text-yellow-800">
										<strong>Note:</strong> After making the payment, please upload your bank voucher or transaction
										statement as proof of payment during registration.
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Upload Payment Voucher */}
						<div className="space-y-2">
							<Label htmlFor="payment-voucher">
								Upload Payment Voucher/Bank Statement <span className="text-red-500">*</span>
							</Label>
							<Input
								id="payment-voucher"
								type="file"
								accept=".pdf,.jpg,.jpeg,.png"
								onChange={handleFileChange}
								required
							/>
							{paymentVoucher && (
								<p className="text-sm text-gray-500">
									Selected file: {paymentVoucher.name} ({Math.round(paymentVoucher.size / 1024)} KB)
								</p>
							)}
							<p className="text-sm text-gray-500">
								Upload your bank voucher or transaction statement as proof of payment. Accepted formats: PDF, JPG, PNG
								(Max 5MB)
							</p>
						</div>

						{/* Additional Information */}
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="dietaryRestrictions">Dietary Restrictions (if any)</Label>
								<Input
									id="dietaryRestrictions"
									name="dietaryRestrictions"
									placeholder="Enter any dietary restrictions"
									value={formData.dietaryRestrictions}
									onChange={handleInputChange}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="specialRequirements">Special Requirements (if any)</Label>
								<Input
									id="specialRequirements"
									name="specialRequirements"
									placeholder="Enter any special requirements"
									value={formData.specialRequirements}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						{/* Terms and Submit */}
						<div className="flex items-center space-x-2">
							<Checkbox id="terms" checked={formData.termsAccepted} onCheckedChange={handleTermsChange} required />
							<Label htmlFor="terms" className="cursor-pointer">
								I agree to the terms and conditions of the conference
							</Label>
						</div>

						<Button type="submit" className="w-full" size="lg">
							Complete Registration
						</Button>
					</form>
				</CardContent>
			</Card>

			{/* Registration Information */}
			<div className="max-w-4xl mx-auto mt-12 bg-gray-50 p-6 rounded-lg">
				<h2 className="text-xl font-bold mb-6">Registration Information</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="font-semibold mb-3">Important Dates</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<Clock className="h-4 w-4 text-[var(--bg-accent2)]" />
								<span>Early Registration: Until August 5th, 2025 (Midnight NPT)</span>
							</li>
							<li className="flex items-center gap-2">
								<Clock className="h-4 w-4 text-orange-600" />
								<span>Late Registration: August 6th - 21st, 2025 (Midnight NPT)</span>
							</li>
							<li className="flex items-center gap-2">
								<AlertCircle className="h-4 w-4 text-red-600" />
								<span>Registration closes: August 21st, 2025 (Midnight NPT)</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-3">Payment Methods</h3>
						<ul className="space-y-1 text-sm">
							<li>• Bank transfer to the provided account</li>
							<li>• Online payment through eSewa or Khalti</li>
							<li>• International participants: Contact us for payment details</li>
							<li>• Upload payment voucher/statement as proof</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-3">What&apos;s Included</h3>
						<ul className="space-y-1 text-sm">
							<li>• Access to all conference sessions</li>
							<li>• Conference materials and kit</li>
							<li>• Refreshments and lunch</li>
							<li>• Certificate of participation</li>
							<li>• Networking opportunities</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-3">Cancellation Policy</h3>
						<ul className="space-y-1 text-sm">
							<li>• Before July 24, 2025: Full refund minus processing fee</li>
							<li>• July 25 - August 10, 2025: 50% refund</li>
							<li>• After August 10, 2025: No refund</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
