import { NextResponse } from "next/server";
import { db, users } from "@/db/schema";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json({ success: true, data: allUsers });
} 