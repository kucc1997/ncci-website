"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Clock, User, Building, Mail, Phone, FileText } from "lucide-react"
import Link from "next/link"

type RegistrationStatus = "pending" | "accepted" | "rejected"

interface RegistrationDetails {
	registrationId: string
	firstName: string
	lastName: string
	email: string
	phone: string
	institution: string
	designation: string
	participantType: string
	tier: string
	isKuccMember: boolean
	isInternational: boolean
	paperSubmission: boolean
	dietaryRestrictions: string | null
	specialRequirements: string | null
	status: RegistrationStatus
	createdAt: string
}

export default function RegistrationStatusContent({ params }: { params: { id: string } }) {
	const registrationId = params.id
	const [registration, setRegistration] = useState<RegistrationDetails | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!registrationId) {
			setError("Registration ID not found")
			setLoading(false)
			return
		}

		const fetchRegistration = async () => {
			try {
				const response = await fetch(`/api/registration/${registrationId}`)
				const result = await response.json()

				if (!result.success) {
					throw new Error(result.data)
				}

				setRegistration(result.data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to fetch registration details")
			} finally {
				setLoading(false)
			}
		}

		fetchRegistration()
	}, [registrationId])

	if (loading) {
		return (
			<div className="container px-4 md:px-6 py-12">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<CardTitle>Loading...</CardTitle>
						<CardDescription>Please wait while we fetch your registration details.</CardDescription>
					</CardHeader>
				</Card>
			</div>
		)
	}

	if (error || !registration) {
		return (
			<div className="container px-4 md:px-6 py-12">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<div className="flex items-center gap-2 text-red-600">
							<AlertCircle className="h-6 w-6" />
							<CardTitle>Error</CardTitle>
						</div>
						<CardDescription>
							{error || "Registration not found. Please check your registration ID."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild className="w-full">
							<Link href="/registration">Back to Registration</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		)
	}

	const getStatusBadge = (status: RegistrationStatus) => {
		switch (status.trim()) {
			case "accepted":
				return <Badge className="bg-green-100 text-green-800">Accepted</Badge>
			case "rejected":
				return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
			default:
				return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
		}
	}

	if (!registration) return <>Loading...</>

	return (
		<div className="container px-4 md:px-6 py-12">
			<Card className="max-w-2xl mx-auto">
				<CardHeader>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<CheckCircle2 className="h-6 w-6 text-green-600" />
							<CardTitle>Registration Details</CardTitle>
						</div>
						{getStatusBadge(registration.status)}
					</div>
					<CardDescription>
						Registration ID: {registration.registrationId}
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					{/* Personal Information */}
					<div className="space-y-4">
						<h3 className="font-semibold flex items-center gap-2">
							<User className="h-5 w-5" />
							Personal Information
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-gray-500">Full Name</p>
								<p className="font-medium">{registration.firstName} {registration.lastName}</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Email</p>
								<p className="font-medium flex items-center gap-2">
									<Mail className="h-4 w-4" />
									{registration.email}
								</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Phone</p>
								<p className="font-medium flex items-center gap-2">
									<Phone className="h-4 w-4" />
									{registration.phone}
								</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Institution</p>
								<p className="font-medium flex items-center gap-2">
									<Building className="h-4 w-4" />
									{registration.institution}
								</p>
							</div>
						</div>
					</div>

					{/* Registration Details */}
					<div className="space-y-4">
						<h3 className="font-semibold flex items-center gap-2">
							<FileText className="h-5 w-5" />
							Registration Details
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-gray-500">Participant Type</p>
								<p className="font-medium capitalize">{registration.participantType}</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Tier</p>
								<p className="font-medium capitalize">{registration.tier}</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Special Categories</p>
								<div className="flex flex-wrap gap-2 mt-1">
									{registration.isKuccMember && (
										<Badge variant="secondary">KUCC Member</Badge>
									)}
									{registration.isInternational && (
										<Badge variant="secondary">International</Badge>
									)}
									{registration.paperSubmission && (
										<Badge variant="secondary">Paper Submission</Badge>
									)}
								</div>
							</div>
							<div>
								<p className="text-sm text-gray-500">Registration Date</p>
								<p className="font-medium flex items-center gap-2">
									<Clock className="h-4 w-4" />
									{new Date(registration.createdAt).toLocaleDateString()}
								</p>
							</div>
						</div>
					</div>

					{/* Additional Information */}
					{(registration.dietaryRestrictions || registration.specialRequirements) && (
						<div className="space-y-4">
							<h3 className="font-semibold">Additional Information</h3>
							{registration.dietaryRestrictions && (
								<div>
									<p className="text-sm text-gray-500">Dietary Restrictions</p>
									<p className="font-medium">{registration.dietaryRestrictions}</p>
								</div>
							)}
							{registration.specialRequirements && (
								<div>
									<p className="text-sm text-gray-500">Special Requirements</p>
									<p className="font-medium">{registration.specialRequirements}</p>
								</div>
							)}
						</div>
					)}

					{/* Status Information */}
					<div className="bg-blue-50 p-4 rounded-lg">
						<h3 className="font-semibold text-blue-800 mb-2">Registration Status</h3>
						<div className="space-y-2 text-blue-700">
							{registration.status === "pending" && (
								<>
									<p>• Your registration is being reviewed by our team</p>
									<p>• This process typically takes 1-2 business days</p>
									<p>• You will receive an email once your registration is confirmed</p>
								</>
							)}
							{registration.status === "accepted" && (
								<>
									<p>• Your registration has been approved</p>
									<p>• Please check your email for further instructions</p>
									<p>• Keep your registration ID for reference</p>
								</>
							)}
							{registration.status === "rejected" && (
								<>
									<p>• Your registration requires attention</p>
									<p>• Please check your email for details</p>
									<p>• Contact us at <a href="mailto:kucc@ku.edu.np" className="underline">kucc@ku.edu.np</a> for assistance</p>
								</>
							)}
						</div>
					</div>

					<div className="flex gap-4">
						<Button asChild variant="outline" className="flex-1">
							<Link href="/">Return to Home</Link>
						</Button>
						<Button asChild className="flex-1">
							<Link href="/registration">New Registration</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
