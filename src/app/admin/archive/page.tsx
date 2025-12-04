import Link from "next/link";
import { db, archiveYears } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function AdminArchivePage() {
  const years = await db.select().from(archiveYears).orderBy(desc(archiveYears.year));

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Archives</h1>
        <Link
          href="/admin/archive/create"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Add New Year
        </Link>
      </div>

      <div className="grid gap-4">
        {years.map((year) => (
          <div key={year.id} className="border rounded-lg p-6 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">NCCI {year.year}</h2>
              <p className="text-sm text-muted-foreground mb-2">{year.eventDate}</p>
              <p className="text-sm">{year.description}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/admin/archive/${year.year}`}
                className="px-4 py-2 border rounded-md hover:bg-muted"
              >
                Manage Content
              </Link>
              <Link
                href={`/admin/archive/${year.year}/edit`}
                className="px-4 py-2 border rounded-md hover:bg-muted"
              >
                Edit
              </Link>
              <Link
                href={`/archive/${year.year}`}
                className="px-4 py-2 border rounded-md hover:bg-muted"
              >
                View Public
              </Link>
            </div>
          </div>
        ))}
      </div>

      {years.length === 0 && (
        <div className="text-center py-12 border rounded-lg">
          <p className="text-muted-foreground">No archive years created yet.</p>
          <Link
            href="/admin/archive/create"
            className="inline-block mt-4 text-primary hover:underline"
          >
            Create your first archive year
          </Link>
        </div>
      )}
    </div>
  );
}
