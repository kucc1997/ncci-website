CREATE TABLE "co_authors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"paper_id" uuid NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"status" text DEFAULT 'pending'
);
--> statement-breakpoint
CREATE TABLE "papers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"submission_id" text NOT NULL,
	"title" text NOT NULL,
	"abstract" text,
	"keywords" text[],
	"file_url" text NOT NULL,
	"theme_id" uuid,
	"author_id" uuid NOT NULL,
	"submitted_at" timestamp DEFAULT now(),
	"status" text DEFAULT 'submitted' NOT NULL,
	CONSTRAINT "papers_submission_id_unique" UNIQUE("submission_id")
);
--> statement-breakpoint
CREATE TABLE "themes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"profile_pic" text,
	"created_at" timestamp DEFAULT now(),
	"orcid" text
);
--> statement-breakpoint
ALTER TABLE "co_authors" ADD CONSTRAINT "co_authors_paper_id_papers_id_fk" FOREIGN KEY ("paper_id") REFERENCES "public"."papers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "papers" ADD CONSTRAINT "papers_theme_id_themes_id_fk" FOREIGN KEY ("theme_id") REFERENCES "public"."themes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "papers" ADD CONSTRAINT "papers_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;