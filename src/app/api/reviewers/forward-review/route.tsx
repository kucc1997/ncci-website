import { auth } from "@/auth";
import { db, reviewers, reviews } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams

	const reviewId = searchParams.get('reviewId')
	if (!reviewId) return Response.json(
		{ success: false, message: "Review not found." },
		{ status: 400 })

	const session = await auth();
	if (!session || !session.user?.email) {
		return Response.json({ success: false, message: "Unauthenticated." }, { status: 401 });
	}
	const email = session.user.email;
	const reviewerRows = await db.select().from(reviewers).where(eq(reviewers.email, email));
	const isReviewer = reviewerRows.length > 0;

	if (!isReviewer)
		return Response.json({ success: false, message: "Unauthorized." }, { status: 401 });

	const reviewInDb = await db.select().from(reviews).where(eq(reviews.id, reviewId));
	if (reviewInDb.length === 0) return Response.json(
		{ success: false, message: "Review not found." },
		{ status: 404 })

	await db.update(reviews).set({ forwarded: true }).where(eq(reviews.id, reviewId))

	return Response.json({ success: true, message: "Successfully forwarded!" })
}
