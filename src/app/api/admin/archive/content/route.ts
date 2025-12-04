import { NextRequest, NextResponse } from "next/server";
import { db, archiveContent } from "@/db/schema";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      yearId,
      categoryId,
      title,
      description,
      fileUrl,
      fileType,
      thumbnailUrl,
      metadata,
      displayOrder,
    } = body;

    if (!yearId || !categoryId || !title) {
      return NextResponse.json(
        { error: "Year ID, category ID, and title are required" },
        { status: 400 }
      );
    }

    const result = await db.insert(archiveContent).values({
      yearId,
      categoryId,
      title,
      description,
      fileUrl,
      fileType,
      thumbnailUrl,
      metadata,
      displayOrder: displayOrder || 0,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error creating archive content:", error);
    return NextResponse.json(
      { error: "Failed to create archive content" },
      { status: 500 }
    );
  }
}
