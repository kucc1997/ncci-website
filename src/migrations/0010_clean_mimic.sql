CREATE TABLE "archive_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"display_order" integer DEFAULT 0,
	CONSTRAINT "archive_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "archive_content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"year_id" uuid NOT NULL,
	"category_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"file_url" text,
	"file_type" text,
	"thumbnail_url" text,
	"metadata" jsonb,
	"display_order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "archive_papers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"year_id" uuid NOT NULL,
	"paper_id" uuid,
	"title" text NOT NULL,
	"authors" text NOT NULL,
	"abstract" text,
	"keywords" text[],
	"file_url" text NOT NULL,
	"track_type" text,
	"is_accepted" boolean DEFAULT true,
	"presented_at" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "archive_years" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"year" integer NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"event_date" text,
	"location" text,
	"theme" text,
	"cover_image" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "archive_years_year_unique" UNIQUE("year")
);
--> statement-breakpoint
ALTER TABLE "archive_content" ADD CONSTRAINT "archive_content_year_id_archive_years_id_fk" FOREIGN KEY ("year_id") REFERENCES "public"."archive_years"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "archive_content" ADD CONSTRAINT "archive_content_category_id_archive_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."archive_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "archive_papers" ADD CONSTRAINT "archive_papers_year_id_archive_years_id_fk" FOREIGN KEY ("year_id") REFERENCES "public"."archive_years"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "archive_papers" ADD CONSTRAINT "archive_papers_paper_id_papers_id_fk" FOREIGN KEY ("paper_id") REFERENCES "public"."papers"("id") ON DELETE set null ON UPDATE no action;