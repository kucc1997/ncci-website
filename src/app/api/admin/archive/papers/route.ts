import { NextRequest, NextResponse } from "next/server";
import { db, archivePapers } from "@/db/schema";
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
      paperId,
      title,
      authors,
      abstract,
      keywords,
      fileUrl,
      trackType,
      isAccepted,
      presentedAt,
    } = body;

    if (!yearId || !title || !authors || !fileUrl) {
      return NextResponse.json(
        { error: "Year ID, title, authors, and file URL are required" },
        { status: 400 }
      );
    }

    const result = await db.insert(archivePapers).values({
      yearId,
      paperId,
      title,
      authors,
      abstract,
      keywords,
      fileUrl,
      trackType,
      isAccepted: isAccepted !== false,
      presentedAt,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error creating archive paper:", error);
    return NextResponse.json(
      { error: "Failed to create archive paper" },
      { status: 500 }
    );
  }
}
