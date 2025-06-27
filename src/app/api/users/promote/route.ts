import { NextResponse } from "next/server";
import { db, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ success: false, data: "Email is required" }, { status: 400 });
  }
  const updated = await db.update(users).set({ role: "admin" }).where(eq(users.email, email)).returning();
  if (!updated || updated.length === 0) {
    return NextResponse.json({ success: false, data: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
} 