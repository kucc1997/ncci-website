import { NextResponse } from "next/server";
import { db, reviewers, paperReviewerAssignments, papers, reviews } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ success: false, data: "Name and email are required." }, { status: 400 });
    }
    const [newReviewer] = await db
      .insert(reviewers)
      .values({ name, email })
      .returning();
    return NextResponse.json({ success: true, data: newReviewer });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, data: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Get all reviewers
    const reviewerRows = await db.select().from(reviewers);
    // For each reviewer, get assigned papers and their reviews
    const result = await Promise.all(reviewerRows.map(async (rev) => {
      // Get assignments for this reviewer
      const assignments = await db.select().from(paperReviewerAssignments).where(eq(paperReviewerAssignments.reviewerId, rev.id));
      // For each assignment, get paper and review
      const assignedPapers = await Promise.all(assignments.map(async (assign) => {
        const paperRows = await db.select().from(papers).where(eq(papers.id, assign.paperId));
        const paper = paperRows[0];
        const reviewRows = await db.select().from(reviews).where(
          and(
            eq(reviews.paperId, assign.paperId),
            eq(reviews.reviewerId, rev.id)
          )
        );
        const review = reviewRows[0];
        return {
          id: paper?.id,
          title: paper?.title,
          review: review
            ? (typeof review.reviewJson === 'object' && review.reviewJson !== null
                ? { ...review.reviewJson, forwarded: review.forwarded }
                : { reviewJson: review.reviewJson, forwarded: review.forwarded })
            : undefined,
        };
      }));
      return {
        id: rev.id,
        name: rev.name,
        email: rev.email,
        assignedPapers,
      };
    }));
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, data: message }, { status: 500 });
  }
} 