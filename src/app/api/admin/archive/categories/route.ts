import { NextRequest, NextResponse } from "next/server";
import { db, archiveCategories } from "@/db/schema";
import { auth } from "@/auth";

export async function GET() {
  try {
    const categories = await db.select().from(archiveCategories).orderBy(archiveCategories.displayOrder);
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, description, displayOrder } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Name and slug are required" },
        { status: 400 }
      );
    }

    const result = await db.insert(archiveCategories).values({
      name,
      slug,
      description,
      displayOrder: displayOrder || 0,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
