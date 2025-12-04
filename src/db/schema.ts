import {
	timestamp,
	pgTable,
	text,
	uuid,
	boolean,
  jsonb,
  integer,
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
	password: text('password'),
	role: text('role').default("user").notNull(),
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

export const reviewers = pgTable('reviewers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const paperReviewerAssignments = pgTable('paper_reviewer_assignments', {
  id: uuid('id').primaryKey().defaultRandom(),
  paperId: uuid('paper_id').notNull().references(() => papers.id, { onDelete: 'cascade' }),
  reviewerId: uuid('reviewer_id').notNull().references(() => reviewers.id, { onDelete: 'cascade' }),
  assignedAt: timestamp('assigned_at').defaultNow(),
  status: text('status').default('assigned').notNull(), // assigned, completed, etc.
})

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  paperId: uuid('paper_id').notNull().references(() => papers.id, { onDelete: 'cascade' }),
  reviewerId: uuid('reviewer_id').notNull().references(() => reviewers.id, { onDelete: 'cascade' }),
  reviewJson: jsonb('review_json').notNull(),
  forwarded: boolean('forwarded').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const archiveYears = pgTable('archive_years', {
  id: uuid('id').primaryKey().defaultRandom(),
  year: integer('year').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  eventDate: text('event_date'),
  location: text('location'),
  theme: text('theme'),
  coverImage: text('cover_image'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const archiveCategories = pgTable('archive_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  displayOrder: integer('display_order').default(0),
})

export const archiveContent = pgTable('archive_content', {
  id: uuid('id').primaryKey().defaultRandom(),
  yearId: uuid('year_id').notNull().references(() => archiveYears.id, { onDelete: 'cascade' }),
  categoryId: uuid('category_id').notNull().references(() => archiveCategories.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description'),
  fileUrl: text('file_url'),
  fileType: text('file_type'),
  thumbnailUrl: text('thumbnail_url'),
  metadata: jsonb('metadata'),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
})

export const archivePapers = pgTable('archive_papers', {
  id: uuid('id').primaryKey().defaultRandom(),
  yearId: uuid('year_id').notNull().references(() => archiveYears.id, { onDelete: 'cascade' }),
  paperId: uuid('paper_id').references(() => papers.id, { onDelete: 'set null' }),
  title: text('title').notNull(),
  authors: text('authors').notNull(),
  abstract: text('abstract'),
  keywords: text('keywords').array(),
  fileUrl: text('file_url').notNull(),
  trackType: text('track_type'),
  isAccepted: boolean('is_accepted').default(true),
  presentedAt: text('presented_at'),
  createdAt: timestamp('created_at').defaultNow(),
})
