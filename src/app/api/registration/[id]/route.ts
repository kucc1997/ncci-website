import { NextResponse } from "next/server"
import { db, registrations } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const registration = await db
			.select()
			.from(registrations)
			.where(eq(registrations.registrationId, params.id))
			.limit(1)

		if (registration.length === 0) {
			return NextResponse.json(
				{
					success: false,
					data: "Registration not found"
				},
				{ status: 404 }
			)
		}

		return NextResponse.json({
			success: true,
			data: registration[0]
		})

	} catch (error) {
		console.error("Error fetching registration:", error)
		return NextResponse.json(
			{
				success: false,
				data: "An error occurred while fetching registration details"
			},
			{ status: 500 }
		)
	}
} 
