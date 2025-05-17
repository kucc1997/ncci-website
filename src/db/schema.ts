import {
	timestamp,
	pgTable,
	text,
	uuid,
} from "drizzle-orm/pg-core"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { config } from "dotenv";

config({ path: ".env.local" });

const connectionString = process.env.AUTH_DRIZZLE_URL || "";
const pool = postgres(connectionString, { max: 1 })

export const db = drizzle(pool)

export const users = pgTable('user', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	profile_pic: text('profile_pic'),
	createdAt: timestamp('created_at').defaultNow(),
	orcid: text('orcid')
})

export const papers = pgTable('papers', {
	id: uuid('id').primaryKey().defaultRandom(),

	// Short unique ID like "K8X21Z"
	submissionId: text('submission_id').notNull().unique(),

	title: text('title').notNull(),
	abstract: text('abstract'),
	keywords: text('keywords').array(),
	fileUrl: text('file_url').notNull(),
	themeId: uuid('theme_id').references(() => themes.id, { onDelete: 'set null' }),

	authorId: uuid('author_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),

	submittedAt: timestamp('submitted_at').defaultNow(),
	status: text('status')
		.default('submitted')
		.notNull()
})

export const coAuthors = pgTable('co_authors', {
	id: uuid('id').primaryKey().defaultRandom(),
	paperId: uuid('paper_id')
		.notNull()
		.references(() => papers.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
	email: text('email'),
	status: text('status').default('pending')
})

export const themes = pgTable('themes', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
})
