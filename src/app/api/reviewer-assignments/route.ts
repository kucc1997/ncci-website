import { NextResponse } from "next/server";
import { db, paperReviewerAssignments } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { reviewerId, paperId } = await req.json();
    if (!reviewerId || !paperId) {
      return NextResponse.json({ success: false, data: "reviewerId and paperId are required." }, { status: 400 });
    }
    const [assignment] = await db
      .insert(paperReviewerAssignments)
      .values({ reviewerId, paperId })
      .returning();
    return NextResponse.json({ success: true, data: assignment });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, data: message }, { status: 500 });
  }
} 