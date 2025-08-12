import { NextRequest, NextResponse } from "next/server"
import { db, registrations } from "@/db/schema"
import { eq } from "drizzle-orm"
import { auth } from "@/auth"

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params
		const registration = await db
			.select()
			.from(registrations)
			.where(eq(registrations.registrationId, id))
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

export async function PATCH(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const session = await auth();

		if (!session?.user?.email) {
			return NextResponse.json({
				success: false,
				data: "User not logged in."
			}, { status: 401 });
		}

		const { status }: { status: string } = await request.json()
		const { id } = await params

		// Update the registration status
		await db
			.update(registrations)
			.set({ status: status })
			.where(eq(registrations.id, id))

		return NextResponse.json({ 
			success: true, 
			data: 'Registration status updated successfully!' 
		}, { status: 200 })

	} catch (error) {
		console.error("Error updating registration status:", error)
		return NextResponse.json(
			{
				success: false,
				data: "An error occurred while updating registration status"
			},
			{ status: 500 }
		)
	}
} 
