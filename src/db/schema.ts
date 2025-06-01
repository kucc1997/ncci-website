import {
	timestamp,
	pgTable,
	text,
	uuid,
	boolean,
} from "drizzle-orm/pg-core"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

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
	trackType: text('track_type').notNull(),

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
	status: text('status').default('pending'),
	orcid: text('orcid'),
	affiliation: text('affiliation')
})

export const themes = pgTable('themes', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
})

export const contacts = pgTable('contacts', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	subject: text('subject').notNull(),
	message: text('message').notNull(),
	createdAt: timestamp('created_at').defaultNow()
})

export const registrations = pgTable('registrations', {
	id: uuid('id').primaryKey().defaultRandom(),
	registrationId: text('registration_id').notNull().unique(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email').notNull(),
	phone: text('phone').notNull(),
	institution: text('institution').notNull(),
	designation: text('designation').notNull(),
	participantType: text('participant_type').notNull(),
	tier: text('tier').notNull(),
	isKuccMember: boolean('is_kucc_member').default(false),
	isInternational: boolean('is_international').default(false),
	paperSubmission: boolean('paper_submission').default(false),
	dietaryRestrictions: text('dietary_restrictions'),
	specialRequirements: text('special_requirements'),
	paymentVoucherPath: text('payment_voucher_path').notNull(),
	status: text('status').default('pending').notNull(),
	createdAt: timestamp('created_at').defaultNow()
})
