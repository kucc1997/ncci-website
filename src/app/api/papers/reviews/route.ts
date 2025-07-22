import { db, papers, reviews } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const paperId = searchParams.get('paperId');

	try {
		const paperRows = await db.select().from(papers).where(eq(papers.submissionId, paperId || ''));
		if (paperRows.length === 0) return Response.json({ success: false, data: "Paper not found." }, { status: 404 });
		const paper = paperRows[0];

		const reviewRows = await db.select().from(reviews).where(eq(reviews.paperId, paper.id));

		const result = await Promise.all(reviewRows.map(async review => {
			return (typeof review.reviewJson === 'object' && review.reviewJson !== null
				? { ...review.reviewJson, forwarded: review.forwarded, reviewId: review.id }
				: { reviewJson: review.reviewJson, forwarded: review.forwarded, reviewId: review.id })
		}));

		return Response.json({ success: true, data: result });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return Response.json({ success: false, data: message }, { status: 500 });
	}
} 
