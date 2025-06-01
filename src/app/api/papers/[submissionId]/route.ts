import { auth } from "@/auth";
import { coAuthors, db, papers, themes, users } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ submissionId: string }> }
) {
	const session = await auth();
	if (!session?.user?.email) {
		return Response.json({
			success: false,
			data: "User not logged in."
		}, { status: 401 });
	}

	const { submissionId } = await params;

	// Get paper with author details
	const paperWithAuthor = await db
		.select({
			paper: papers,
			author: users,
			theme: themes,
		})
		.from(papers)
		.innerJoin(users, eq(papers.authorId, users.id))
		.innerJoin(themes, eq(papers.themeId, themes.id))
		.where(eq(papers.submissionId, submissionId));

	if (paperWithAuthor.length === 0) {
		return Response.json({
			success: false,
			data: "Paper not found"
		}, { status: 404 });
	}

	const paper = paperWithAuthor[0];

	// Check if user has access to this paper
	const hasAccess = paper.author.email === session.user.email;

	// Also check if user is a co-author
	if (!hasAccess) {
		const coAuthorAccess = await db
			.select()
			.from(coAuthors)
			.where(
				and(
					eq(coAuthors.paperId, paper.paper.id),
					eq(coAuthors.email, session.user.email)
				)
			);

		if (coAuthorAccess.length === 0) {
			return Response.json({
				success: false,
				data: "Access denied"
			}, { status: 403 });
		}
	}

	// Get all co-authors
	const paperCoAuthors = await db
		.select()
		.from(coAuthors)
		.where(eq(coAuthors.paperId, paper.paper.id));

	return Response.json({
		success: true,
		data: {
			...paper.paper,
			author: paper.author,
			theme: paper.theme,
			coAuthors: paperCoAuthors,
		}
	});
}

