import { auth } from "@/auth";
import { coAuthors, db, papers, users } from "@/db/schema";
import { eq, InferSelectModel } from "drizzle-orm";

export default async function GET() {
	const session = await auth();
	if (!session) {
		return Response.json({
			success: false,
			data: "User not logged in."
		}, { status: 401 })
	}

	const user = session.user;

	if (!user) {
		return Response.json({
			success: false,
			data: "User not logged in."
		}, { status: 401 })
	}

	const usersPaperFromDb = await db.select().from(papers)
		.innerJoin(users, eq(papers.authorId, users.id))
		.where(eq(users.email, user.email || ""));

	const papersFromDbAndCoauthors = await db.select().from(papers)
		.innerJoin(coAuthors, eq(papers.id, coAuthors.paperId)).where(
			eq(coAuthors.email, user.email || "")
		);

	const allPapers: InferSelectModel<typeof papers>[] = []
	for (const userAndPaper of usersPaperFromDb) {
		allPapers.push(userAndPaper.papers)
	}
	for (const paperAndCoauthors of papersFromDbAndCoauthors) {
		allPapers.push(paperAndCoauthors.papers)
	}

	return Response.json({
		success: true,
		data: allPapers
	})
}
