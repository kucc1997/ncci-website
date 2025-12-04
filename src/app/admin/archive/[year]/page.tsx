import Link from "next/link";
import { db, archiveYears, archiveCategories, archivePapers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function AdminArchiveYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params;
  const year = parseInt(yearStr);
  const yearData = await db.select().from(archiveYears).where(eq(archiveYears.year, year)).limit(1);
  
  if (yearData.length === 0) {
    notFound();
  }

  const yearInfo = yearData[0];
  const categories = await db.select().from(archiveCategories).orderBy(archiveCategories.displayOrder);
  const papers = await db.select().from(archivePapers).where(eq(archivePapers.yearId, yearInfo.id));

  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href="/admin/archive" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Archives
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">NCCI {year}</h1>
        <p className="text-muted-foreground">{yearInfo.eventDate}</p>
      </div>

      <div className="grid gap-6 mb-8">
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Papers Repository</h2>
            <Link
              href={`/admin/archive/${year}/papers/add`}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Add Paper
            </Link>
          </div>
          
          {papers.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-muted/50">
              <p className="text-muted-foreground mb-4">No papers added yet</p>
              <Link
                href={`/admin/archive/${year}/papers/add`}
                className="text-primary hover:underline"
              >
                Add your first paper
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {papers.map((paper) => (
                <div key={paper.id} className="border rounded-lg p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                    <div className="flex gap-2 items-center">
                      {paper.trackType && (
                        <span className="text-xs px-2 py-1 rounded bg-muted">
                          {paper.trackType}
                        </span>
                      )}
                      {paper.isAccepted ? (
                        <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                          Accepted
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800">
                          Not Accepted
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/archive/${year}/papers/${paper.id}/edit`}
                      className="px-3 py-1 text-sm border rounded-md hover:bg-muted"
                    >
                      Edit
                    </Link>
                    <a
                      href={paper.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm border rounded-md hover:bg-muted"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Total Papers: {papers.length}</p>
                <p className="text-sm text-muted-foreground">
                  Accepted: {papers.filter(p => p.isAccepted).length}
                </p>
              </div>
              <Link
                href={`/admin/archive/${year}/papers/import`}
                className="px-4 py-2 border rounded-md hover:bg-muted"
              >
                Import from Submissions
              </Link>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Other Content</h2>
            <Link
              href={`/admin/archive/${year}/content/add`}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Add Content
            </Link>
          </div>
          
          <div className="grid gap-4">
            {categories.map((category) => (
              <div key={category.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <Link
                    href={`/admin/archive/${year}/content/add?category=${category.id}`}
                    className="px-3 py-1 text-sm border rounded-md hover:bg-muted"
                  >
                    Add Items
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
