import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RegistrationStatusContent from "./content"
import { Suspense } from "react"

export default async function RegistrationStatusPage({ params: paramsAsync }: { params: Promise<{ id: string }> }) {
	const params = await paramsAsync

	return (
		<Suspense fallback={
			<div className="container px-4 md:px-6 py-12">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<CardTitle>Loading...</CardTitle>
						<CardDescription>Please wait while we load your registration details.</CardDescription>
					</CardHeader>
				</Card>
			</div>
		}>
			<RegistrationStatusContent params={params} />
		</Suspense>
	)
} 
