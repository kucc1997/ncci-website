import { auth } from "@/auth";
import { db, reviewers, paperReviewerAssignments, reviews } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function POST(request: Request) {
	try {
		console.log("Submitting review...");
		const session = await auth();
		if (!session?.user?.email) {
			console.log("Unauthorized: No session found");
			return new Response(JSON.stringify({ success: false, message: "Unauthorized: No session found" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		const body = await request.json();
		console.log("Request body:", body);
		const { paperId, ...reviewData } = body;

		if (!paperId) {
			console.log("Paper ID is required");
			return new Response(JSON.stringify({ success: false, message: "Paper ID is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		// 1. Find the reviewer record for the logged-in user
		const reviewerRecord = await db.select().from(reviewers).where(eq(reviewers.email, session.user.email));
		console.log("Reviewer record:", reviewerRecord);

		if (reviewerRecord.length === 0) {
			console.log("Unauthorized: User is not a reviewer");
			return new Response(JSON.stringify({ success: false, message: "Unauthorized: User is not a reviewer" }), {
				status: 403,
				headers: { "Content-Type": "application/json" },
			});
		}

		const reviewerId = reviewerRecord[0].id;
		console.log("Reviewer ID:", reviewerId);

		// 2. Verify that the paper is assigned to this reviewer
		const assignment = await db.select().from(paperReviewerAssignments).where(and(
			eq(paperReviewerAssignments.reviewerId, reviewerId),
			eq(paperReviewerAssignments.paperId, paperId)
		));
		console.log("Assignment:", assignment);

		if (assignment.length === 0) {
			console.log("Forbidden: Paper not assigned to this reviewer");
			return new Response(JSON.stringify({ success: false, message: "Forbidden: Paper not assigned to this reviewer" }), {
				status: 403,
				headers: { "Content-Type": "application/json" },
			});
		}

		await db.insert(reviews).values({
			paperId: paperId as string,
			reviewerId: reviewerId,
			reviewJson: JSON.stringify(reviewData),
		});
		console.log("Review inserted successfully");

		return new Response(JSON.stringify({ success: true, message: "Review submitted successfully." }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});

	} catch (error) {
		console.error("Error submitting review:", error);
		return new Response(JSON.stringify({ success: false, message: "An error occurred while submitting the review." }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
