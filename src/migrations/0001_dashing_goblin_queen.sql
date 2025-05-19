ALTER TABLE "co_authors" ADD COLUMN "orcid" text;--> statement-breakpoint
ALTER TABLE "co_authors" ADD COLUMN "affiliation" text;--> statement-breakpoint
ALTER TABLE "papers" ADD COLUMN "track_type" text NOT NULL;