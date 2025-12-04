"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function AddCategoryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      displayOrder: parseInt(formData.get("displayOrder") as string) || 0,
    };

    try {
      const response = await fetch("/api/admin/archive/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to create category");

      toast.success("Category created successfully");
      router.push("/admin/archive/categories");
    } catch {
      toast.error("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/archive/categories" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Categories
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Add Archive Category</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Category Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., Photo Gallery"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium mb-2">
            Slug *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            required
            pattern="[a-z0-9-]+"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., photos"
          />
          <p className="text-xs text-muted-foreground mt-1">
            URL-friendly identifier (lowercase, numbers, and hyphens only)
          </p>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Brief description of this category..."
          />
        </div>

        <div>
          <label htmlFor="displayOrder" className="block text-sm font-medium mb-2">
            Display Order
          </label>
          <input
            type="number"
            id="displayOrder"
            name="displayOrder"
            defaultValue={0}
            className="w-full px-3 py-2 border rounded-md"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Lower numbers appear first (0 = first)
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Category"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border rounded-md hover:bg-muted"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
