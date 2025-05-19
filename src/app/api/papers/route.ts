import { CoAuthor, SubmissionData } from "@/app";
import { coAuthors, db, papers, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { customAlphabet } from "nanoid";
import path from "path";

export async function generateSubmissionId() {
	let submissionId: string
	const generateId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 8)

	while (true) {
		submissionId = generateId()
		const existing = await db.select().from(papers).where(eq(papers.submissionId, submissionId))
		if (existing.length === 0) break
	}

	return submissionId
}

export async function POST(req: Request) {
	const formData = await req.formData();
	const data = parseFormData(formData)

	const paperID = await generateSubmissionId();

	// Upload file
	const uploadPath = path.join(process.cwd(), "public", "uploads", "papers", `${paperID}.pdf`);
	await Bun.write(uploadPath, data.file);

	const authorFromDb = await db.select({ id: users.id }).from(users).where(
		eq(users.email, data.coAuthors?.[0]?.email)
	);
	if (authorFromDb.length === 0) {
		return Response.json({
			success: false,
			data: "First author not registered! Please make sure the email matches with your GitHub's primary email."
		}, {
			status: 400
		})
	}

	const paperReturned = await db
		.insert(papers)
		.values({
			title: data.title,
			abstract: data.abstract,
			keywords: data.keywords,
			fileUrl: `/uploads/papers/${paperID}.pdf`,
			themeId: data.theme,
			trackType: data.trackType,
			authorId: authorFromDb[0].id,
			submissionId: paperID
		}).returning({ id: papers.id, submissionId: papers.submissionId })

	await Promise.all(
		data.coAuthors.map(async (coauthor, index) => {
			if (index > 1) {
				await db.insert(coAuthors).values({
					name: coauthor.name,
					email: coauthor.email,
					paperId: paperReturned[0].id,
					orcid: coauthor?.orcid,
					affiliation: coauthor?.affiliation
				})
			}
		})
	)

	return Response.json({
		success: true, data: {
			submissionId: paperReturned[0].submissionId
		}
	})
}

function parseFormData(formData: FormData): SubmissionData {
	const title = formData.get('title');
	const abstract = formData.get('abstract');
	const trackType = formData.get('trackType');
	const theme = formData.get('theme');
	const file = formData.get('file');

	// keywords[]
	const keywords: string[] = [];
	for (let i = 0; ; i++) {
		const kw = formData.get(`keywords[${i}]`);
		if (!kw) break;
		keywords.push(kw.toString());
	}

	// coAuthors[]
	const coAuthors: CoAuthor[] = [];
	for (let i = 0; ; i++) {
		const name = formData.get(`coAuthors[${i}][name]`);
		const email = formData.get(`coAuthors[${i}][email]`);
		const orcid = formData.get(`coAuthors[${i}][orcid]`);
		const affiliation = formData.get(`coAuthors[${i}][affiliation]`);
		if (!name || !email) break;
		coAuthors.push({
			name: name.toString(),
			email: email.toString(),
			orcid: orcid && orcid.toString(),
			affiliation: affiliation && affiliation.toString()
		});
	}

	if (
		!title || !abstract || !trackType || !theme ||
		!file || !(file instanceof File)
	) {
		throw new Error("Missing or invalid fields in FormData.");
	}

	return {
		title: title.toString(),
		abstract: abstract.toString(),
		keywords,
		coAuthors,
		file,
		trackType: trackType.toString(),
		theme: theme.toString(),
	};
}
