import Link from "next/link";
import { db, archiveCategories } from "@/db/schema";

export default async function CategoriesManagementPage() {
  const categories = await db.select().from(archiveCategories).orderBy(archiveCategories.displayOrder);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Archive Categories</h1>
          <p className="text-muted-foreground">Manage content categories for the archive</p>
        </div>
        <Link
          href="/admin/archive/categories/add"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Add Category
        </Link>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground mb-4">No categories yet. Initialize default categories first.</p>
          <form action="/api/admin/archive/init" method="POST" className="inline">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Initialize Default Categories
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="border rounded-lg p-6 flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-muted">
                    {category.slug}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Order: {category.displayOrder}
                  </span>
                </div>
                {category.description && (
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/archive/categories/${category.id}/edit`}
                  className="px-3 py-1 text-sm border rounded-md hover:bg-muted"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 p-4 border rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-2">About Categories</h3>
        <p className="text-sm text-muted-foreground">
          Categories organize archive content. The "Papers Repository" category is special and handled separately.
          Other categories like Photos, Documents, Schedules can contain multiple content items.
        </p>
      </div>
    </div>
  );
}
