import Link from "next/link";
import Image from "next/image";
import { db, archiveYears, archiveCategories, archiveContent, archivePapers } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Archive2025Page() {
  const yearData = await db.select().from(archiveYears).where(eq(archiveYears.year, 2025)).limit(1);
  
  if (yearData.length === 0) {
    notFound();
  }

  const year = yearData[0];
  const categories = await db.select().from(archiveCategories).orderBy(archiveCategories.displayOrder);
  
  const contentByCategory = new Map<string, typeof archiveContent.$inferSelect[]>();
  for (const category of categories) {
    const content = await db
      .select()
      .from(archiveContent)
      .where(
        and(
          eq(archiveContent.categoryId, category.id),
          eq(archiveContent.yearId, year.id)
        )
      )
      .orderBy(archiveContent.displayOrder);
    contentByCategory.set(category.id, content);
  }

  const papers = await db
    .select()
    .from(archivePapers)
    .where(
      and(
        eq(archivePapers.yearId, year.id),
        eq(archivePapers.isAccepted, true)
      )
    );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/archive" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Archives
          </Link>
        </div>

        <div className="mb-12">
          {year.coverImage && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6 relative">
              <Image
                src={year.coverImage}
                alt={`NCCI ${year.year}`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{year.title}</h1>
          {year.theme && (
            <p className="text-xl text-muted-foreground mb-2">Theme: {year.theme}</p>
          )}
          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
            {year.eventDate && <span>{year.eventDate}</span>}
            {year.location && <span>• {year.location}</span>}
          </div>
          {year.description && (
            <p className="text-lg">{year.description}</p>
          )}
        </div>

        <div className="space-y-12">
          {papers.length > 0 && (
            <section id="papers">
              <h2 className="text-3xl font-bold mb-6">Papers Repository</h2>
              <p className="text-muted-foreground mb-6">
                Published papers from NCCI {year.year}
              </p>
              <div className="space-y-4">
                {papers.map((paper) => (
                  <div key={paper.id} className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">by {paper.authors}</p>
                    {paper.trackType && (
                      <span className="inline-block text-xs px-2 py-1 rounded bg-muted mb-3">
                        {paper.trackType}
                      </span>
                    )}
                    {paper.abstract && (
                      <p className="text-sm mb-4 line-clamp-3">{paper.abstract}</p>
                    )}
                    <a
                      href={paper.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Paper →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {categories.map((category) => {
            const items = contentByCategory.get(category.id) || [];
            if (items.length === 0 && category.slug !== 'abstract-book') return null;
            if (category.slug === 'papers') return null;

            return (
              <section key={category.id} id={category.slug}>
                <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
                {category.description && (
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                )}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                      {item.thumbnailUrl && (
                        <div className="aspect-video bg-muted relative">
                          <Image
                            src={item.thumbnailUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        {item.fileUrl && (
                          <a
                            href={item.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            View →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
