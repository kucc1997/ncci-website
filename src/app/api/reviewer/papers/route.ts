import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db, reviewers, paperReviewerAssignments, papers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        const assignedPapers = await db
            .select({
                id: papers.id,
                title: papers.title,
                submissionId: papers.submissionId,
            })
            .from(papers)
            .innerJoin(paperReviewerAssignments, eq(papers.id, paperReviewerAssignments.paperId))
            .innerJoin(reviewers, eq(paperReviewerAssignments.reviewerId, reviewers.id))
            .where(eq(reviewers.email, session.user.email));


        return NextResponse.json({ success: true, data: assignedPapers });

    } catch (error) {
        console.error("Error fetching assigned papers:", error);
        return NextResponse.json({ success: false, message: "An error occurred." }, { status: 500 });
    }
}
