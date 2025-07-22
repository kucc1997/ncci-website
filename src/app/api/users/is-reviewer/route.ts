import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db, reviewers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ success: false, data: false }, { status: 401 });
  }
  const email = session.user.email;
  const reviewerRows = await db.select().from(reviewers).where(eq(reviewers.email, email));
  const isReviewer = reviewerRows.length > 0;
  return NextResponse.json({ success: true, data: isReviewer });
} 