import { NextResponse } from "next/server"
import { db, registrations } from "@/db/schema"
import { eq } from "drizzle-orm"
import { customAlphabet } from "nanoid"
import path from "path"
import { writeFile, mkdir } from "fs/promises"

// Get upload directory from environment variable or use default
const UPLOAD_DIR = process.env.UPLOAD_DIR || "public/uploads"

async function generateRegistrationId() {
	let registrationId: string
	const generateId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 8)

	while (true) {
		registrationId = generateId()
		const existing = await db
			.select()
			.from(registrations)
			.where(eq(registrations.registrationId, registrationId))
		if (existing.length === 0) break
	}

	return registrationId
}

export async function POST(req: Request) {
	try {
		const formData = await req.formData()

		// Extract form data
		const firstName = formData.get("firstName")?.toString()
		const lastName = formData.get("lastName")?.toString()
		const email = formData.get("email")?.toString()
		const phone = formData.get("phone")?.toString()
		const institution = formData.get("institution")?.toString()
		const designation = formData.get("designation")?.toString()
		const participantType = formData.get("participantType")?.toString()
		const tier = formData.get("tier")?.toString()
		const isKuccMember = formData.get("isKuccMember") === "true"
		const isInternational = formData.get("isInternational") === "true"
		const paperSubmission = formData.get("paperSubmission") === "true"
		const dietaryRestrictions = formData.get("dietaryRestrictions")?.toString()
		const specialRequirements = formData.get("specialRequirements")?.toString()
		const paymentVoucher = formData.get("paymentVoucher") as File

		// Validate required fields
		if (!firstName || !lastName || !email || !phone || !institution || !designation || !participantType || !tier || !paymentVoucher) {
			return NextResponse.json(
				{
					success: false,
					data: "Missing required fields"
				},
				{ status: 400 }
			)
		}

		// Check if email already exists
		const existingRegistration = await db
			.select()
			.from(registrations)
			.where(eq(registrations.email, email))

		if (existingRegistration.length > 0) {
			return NextResponse.json(
				{
					success: false,
					data: "Email already registered"
				},
				{ status: 400 }
			)
		}

		// Generate unique registration ID
		const registrationId = await generateRegistrationId()

		// Upload payment voucher
		const uploadDir = path.join(process.cwd(), UPLOAD_DIR, "vouchers")
		const filePath = path.join(uploadDir, `${registrationId}.pdf`)
		
		// Ensure the upload directory exists
		await mkdir(uploadDir, { recursive: true })
		await writeFile(filePath, Buffer.from(await paymentVoucher.arrayBuffer()))

		// Insert registration into database
		const registration = await db.insert(registrations).values({
			firstName,
			lastName,
			email,
			phone,
			institution,
			designation,
			participantType,
			tier,
			isKuccMember,
			isInternational,
			paperSubmission,
			dietaryRestrictions: dietaryRestrictions || null,
			specialRequirements: specialRequirements || null,
			paymentVoucherPath: `/uploads/vouchers/${registrationId}.pdf`,
			registrationId,
			status: "pending"
		}).returning()

		return NextResponse.json({
			success: true,
			data: {
				registrationId: registration[0].registrationId
			}
		})

	} catch (error) {
		console.error("Registration error:", error)
		return NextResponse.json(
			{
				success: false,
				data: "An error occurred while processing your registration"
			},
			{ status: 500 }
		)
	}
}

// ... rest of the file stays the same ... 