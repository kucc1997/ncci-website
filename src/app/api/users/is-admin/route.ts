import { NextRequest } from "next/server";
import { db, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const email = searchParams.get('email')
	if (!email) return Response.json(
		{ success: false, data: "Please provide an email." },
		{ status: 400 });

	const userInDb = await db.select({ role: users.role }).from(users).where(
		eq(users.email, email)
	)
	if (userInDb.length === 0) return Response.json(
		{ success: false, data: "Email not found." },
		{ status: 404 })

	const response = {
		success: true,
		data: false
	}

	if (userInDb[0].role === 'admin') response.data = true

	return Response.json(response)
}
