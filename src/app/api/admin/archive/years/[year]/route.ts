import { NextResponse } from "next/server";
import { db, archiveYears } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { year: yearStr } = await params;
    const year = parseInt(yearStr);
    const yearData = await db
      .select()
      .from(archiveYears)
      .where(eq(archiveYears.year, year))
      .limit(1);

    if (yearData.length === 0) {
      return NextResponse.json({ error: "Year not found" }, { status: 404 });
    }

    return NextResponse.json(yearData[0]);
  } catch (error) {
    console.error("Error fetching year:", error);
    return NextResponse.json(
      { error: "Failed to fetch year" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { year: yearStr } = await params;
    const year = parseInt(yearStr);
    const body = await request.json();
    const { title, description, eventDate, location, theme, coverImage } = body;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const result = await db
      .update(archiveYears)
      .set({
        title,
        description,
        eventDate,
        location,
        theme,
        coverImage,
      })
      .where(eq(archiveYears.year, year))
      .returning();

    if (result.length === 0) {
      return NextResponse.json({ error: "Year not found" }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error updating year:", error);
    return NextResponse.json(
      { error: "Failed to update year" },
      { status: 500 }
    );
  }
}
