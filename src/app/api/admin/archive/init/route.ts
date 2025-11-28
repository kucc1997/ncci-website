import { NextResponse } from "next/server";
import { db, archiveCategories } from "@/db/schema";
import { auth } from "@/auth";

const defaultCategories = [
  {
    name: "Event Overview",
    slug: "overview",
    description: "General information and statistics about the event",
    displayOrder: 1,
  },
  {
    name: "Schedules & Programs",
    slug: "schedules",
    description: "Event schedules, programs, and timelines",
    displayOrder: 2,
  },
  {
    name: "Photo Gallery",
    slug: "photos",
    description: "Event photos and moments",
    displayOrder: 3,
  },
  {
    name: "Papers Repository",
    slug: "papers",
    description: "Accepted papers and proceedings",
    displayOrder: 4,
  },
  {
    name: "Abstract Book",
    slug: "abstract-book",
    description: "Complete abstract book of all papers",
    displayOrder: 5,
  },
  {
    name: "Speakers & Participants",
    slug: "speakers",
    description: "Information about keynote speakers and participants",
    displayOrder: 6,
  },
  {
    name: "Competition Results",
    slug: "results",
    description: "Competition winners and results",
    displayOrder: 7,
  },
  {
    name: "Documents",
    slug: "documents",
    description: "Additional documents and resources",
    displayOrder: 8,
  },
];

export async function POST() {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const results = [];
    for (const category of defaultCategories) {
      try {
        const result = await db.insert(archiveCategories).values(category).returning();
        results.push(result[0]);
      } catch {
        console.log(`Category ${category.slug} might already exist, skipping...`);
      }
    }

    return NextResponse.json({
      message: "Archive categories initialized",
      categories: results,
    });
  } catch (err) {
    console.error("Error initializing categories:", err);
    return NextResponse.json(
      { error: "Failed to initialize categories" },
      { status: 500 }
    );
  }
}
