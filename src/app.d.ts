import { InferSelectModel } from "drizzle-orm";
import { papers, themes } from "./db/schema";

type Theme = InferSelectModel<typeof themes>

type ThemeApiResponse = { success: true; data: Theme[] }

type CoAuthor = {
	name: string
	email: string
	orcid?: string | null | undefined;
	affiliation?: string | null | undefined;
}

type SubmissionData = {
	title: string;
	abstract: string;
	keywords: string[];
	coAuthors: CoAuthor[];
	file: File;
	trackType: string;
	theme: string;
};

type Paper = InferSelectModel<typeof papers>
