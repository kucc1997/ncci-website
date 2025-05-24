import { NextResponse } from "next/server"
import { db, registrations } from "@/db/schema"
import { eq } from "drizzle-orm"
import { customAlphabet } from "nanoid"
import path from "path"
import { writeFile, mkdir } from "fs/promises"

// Get upload directory from environment variable or use default
const UPLOAD_DIR = process.env.UPLOAD_DIR || "public/uploads"

// Create a custom nanoid generator for registration IDs
const generateRegistrationId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 8)

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
		let registrationId = generateRegistrationId()
		let isUnique = false
		while (!isUnique) {
			const existing = await db
				.select()
				.from(registrations)
				.where(eq(registrations.registrationId, registrationId))
			isUnique = existing.length === 0
			if (!isUnique) {
				registrationId = generateRegistrationId()
			}
		}

		// Upload payment voucher
		const uploadDir = path.join(process.cwd(), UPLOAD_DIR, "vouchers")

		// Get file extension from the uploaded file
		const fileExtension = paymentVoucher.name.split('.').pop()?.toLowerCase()
		if (!fileExtension || !['pdf', 'png', 'jpg', 'jpeg'].includes(fileExtension)) {
			return NextResponse.json(
				{
					success: false,
					data: "Invalid file type. Please upload PDF, PNG, or JPG files only."
				},
				{ status: 400 }
			)
		}

		const filePath = path.join(uploadDir, `${registrationId}.${fileExtension}`)

		// Ensure the upload directory exists
		await mkdir(uploadDir, { recursive: true })
		await writeFile(filePath, Buffer.from(await paymentVoucher.arrayBuffer()))

		// Insert registration into database
		const registration = await db.insert(registrations).values({
			registrationId,
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
			paymentVoucherPath: `/uploads/vouchers/${registrationId}.${fileExtension}`,
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
