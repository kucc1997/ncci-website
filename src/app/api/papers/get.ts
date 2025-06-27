import { auth } from "@/auth";
import { coAuthors, db, papers, themes, users } from "@/db/schema";
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

	if (user?.role === 'admin') {
		const allPapers = await db.select().from(papers);
		const allPapersWithThemesAndAuthors = [];
		for (const paper of allPapers) {
			const themeArr = await db.select().from(themes).where(eq(themes.id, paper.themeId || ""));
			const authorArr = await db.select().from(users).where(eq(users.id, paper.authorId));
			allPapersWithThemesAndAuthors.push({
				...paper,
				theme: themeArr[0] || null,
				author: authorArr[0] || null,
			});
		}
		return Response.json({
			success: true,
			data: allPapersWithThemesAndAuthors
		});
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

	const allPapersWithThemes = []

	// Add themes to papers
	for (const paper of allPapers) {
		const themeArr = await db.select().from(themes)
			.where(eq(themes.id, paper.themeId || ""))

		const theme = themeArr[0]

		if (!theme) {
			return Response.json({
				success: false,
				data: "Failed to find theme for paper " + paper.title
			}, { status: 404 })
		}

		allPapersWithThemes.push({ ...paper, theme })
	}

	return Response.json({
		success: true,
		data: allPapersWithThemes
	})
}
