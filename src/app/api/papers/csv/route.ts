import { auth } from "@/auth";
import { coAuthors, db, papers,  users } from "@/db/schema";
import { json2csv } from 'json-2-csv';
import { eq } from "drizzle-orm";

export async function GET() {

  const session = await auth();
  if (!session) {
    return Response.json({
      success: false,
      data: "User not logged in."
    }, { status: 401 })
  }

  const papersAndUsers = json2csv(await db.select({
    paper_title: papers.title,
    user_name:users.name,
    coauthor_name: coAuthors.name,
    user_email: users.email,
    co_author_email: coAuthors.email,
    paper_track_type: papers.trackType,
  }).from(papers)
    .innerJoin(users, eq(papers.authorId, users.id))
    .innerJoin(coAuthors, eq(papers.id, coAuthors.paperId))
  )


  return new Response(papersAndUsers, {
    headers: {
      'Content-Disposition': 'attachment; filename="export.csv"',
      'Content-Type': 'text/csv',
    },
  });

}
