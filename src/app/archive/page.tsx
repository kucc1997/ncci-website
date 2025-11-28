import Link from "next/link";
import Image from "next/image";
import { db, archiveYears } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function ArchivePage() {
  const years = await db.select().from(archiveYears).orderBy(desc(archiveYears.year));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">NCCI Archives</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Explore past National Conference on Computer Innovations events, including papers, schedules, photos, and more.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {years.map((year) => (
            <Link
              key={year.id}
              href={`/archive/${year.year}`}
              className="group block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {year.coverImage && (
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <Image
                    src={year.coverImage}
                    alt={`NCCI ${year.year}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">NCCI {year.year}</h2>
                <p className="text-sm text-muted-foreground mb-2">{year.eventDate}</p>
                {year.description && (
                  <p className="text-sm line-clamp-3">{year.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {years.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No archives available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
