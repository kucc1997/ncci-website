"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function EditArchiveYearPage() {
  const router = useRouter();
  const params = useParams();
  const yearNum = params.year as string;
  const [loading, setLoading] = useState(false);
  const [yearData, setYearData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/archive/years/${yearNum}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setYearData(data);
        }
      })
      .catch(() => {
        toast.error("Failed to fetch year information");
      });
  }, [yearNum]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      eventDate: formData.get("eventDate") as string,
      location: formData.get("location") as string,
      theme: formData.get("theme") as string,
      coverImage: formData.get("coverImage") as string,
    };

    try {
      const response = await fetch(`/api/admin/archive/years/${yearNum}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update archive year");

      toast.success("Archive year updated successfully");
      router.push("/admin/archive");
    } catch {
      toast.error("Failed to update archive year");
    } finally {
      setLoading(false);
    }
  };

  if (!yearData) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/archive" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Archives
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Edit NCCI {yearData.year}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={yearData.title}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="NCCI 2025 - National Conference on Computer Innovations"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue={yearData.description || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Brief description of the event..."
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
            Event Date
          </label>
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            defaultValue={yearData.eventDate || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="August 24, 2025"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={yearData.location || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Kathmandu University, Dhulikhel, Nepal"
          />
        </div>

        <div>
          <label htmlFor="theme" className="block text-sm font-medium mb-2">
            Theme
          </label>
          <input
            type="text"
            id="theme"
            name="theme"
            defaultValue={yearData.theme || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Exploring the Future of Technology and Innovation"
          />
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium mb-2">
            Cover Image URL
          </label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            defaultValue={yearData.coverImage || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Archive Year"}
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
