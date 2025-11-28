import { NextRequest, NextResponse } from "next/server";
import { db, archiveYears } from "@/db/schema";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { year, title, description, eventDate, location, theme, coverImage } = body;

    if (!year || !title) {
      return NextResponse.json(
        { error: "Year and title are required" },
        { status: 400 }
      );
    }

    const result = await db.insert(archiveYears).values({
      year,
      title,
      description,
      eventDate,
      location,
      theme,
      coverImage,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error creating archive year:", error);
    return NextResponse.json(
      { error: "Failed to create archive year" },
      { status: 500 }
    );
  }
}
