"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function EditArchivePaperPage() {
  const router = useRouter();
  const params = useParams();
  const year = params.year as string;
  const paperId = params.id as string;
  const [loading, setLoading] = useState(false);
  const [paper, setPaper] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/archive/papers/${paperId}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setPaper(data);
        }
      })
      .catch(() => {
        toast.error("Failed to fetch paper");
      });
  }, [paperId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const keywords = (formData.get("keywords") as string)
      .split(",")
      .map(k => k.trim())
      .filter(Boolean);

    const data = {
      title: formData.get("title") as string,
      authors: formData.get("authors") as string,
      abstract: formData.get("abstract") as string,
      keywords,
      fileUrl: formData.get("fileUrl") as string,
      trackType: formData.get("trackType") as string,
      isAccepted: formData.get("isAccepted") === "true",
      presentedAt: formData.get("presentedAt") as string,
    };

    try {
      const response = await fetch(`/api/admin/archive/papers/${paperId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update paper");

      toast.success("Paper updated successfully");
      router.push(`/admin/archive/${year}`);
    } catch {
      toast.error("Failed to update paper");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this paper?")) return;

    try {
      const response = await fetch(`/api/admin/archive/papers/${paperId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete paper");

      toast.success("Paper deleted successfully");
      router.push(`/admin/archive/${year}`);
    } catch {
      toast.error("Failed to delete paper");
    }
  };

  if (!paper) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <Link href={`/admin/archive/${year}`} className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to {year} Archive
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Edit Archive Paper</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Paper Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={paper.title}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter paper title"
          />
        </div>

        <div>
          <label htmlFor="authors" className="block text-sm font-medium mb-2">
            Authors *
          </label>
          <input
            type="text"
            id="authors"
            name="authors"
            required
            defaultValue={paper.authors}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Author1, Author2, Author3"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Enter author names separated by commas
          </p>
        </div>

        <div>
          <label htmlFor="abstract" className="block text-sm font-medium mb-2">
            Abstract
          </label>
          <textarea
            id="abstract"
            name="abstract"
            rows={6}
            defaultValue={paper.abstract || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter paper abstract..."
          />
        </div>

        <div>
          <label htmlFor="keywords" className="block text-sm font-medium mb-2">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={paper.keywords?.join(", ") || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="keyword1, keyword2, keyword3"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Enter keywords separated by commas
          </p>
        </div>

        <div>
          <label htmlFor="fileUrl" className="block text-sm font-medium mb-2">
            Paper File URL *
          </label>
          <input
            type="url"
            id="fileUrl"
            name="fileUrl"
            required
            defaultValue={paper.fileUrl}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="https://example.com/papers/paper.pdf"
          />
        </div>

        <div>
          <label htmlFor="trackType" className="block text-sm font-medium mb-2">
            Track Type
          </label>
          <select
            id="trackType"
            name="trackType"
            defaultValue={paper.trackType || ""}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select track type</option>
            <option value="Research">Research</option>
            <option value="Industry">Industry</option>
            <option value="Student">Student</option>
            <option value="Poster">Poster</option>
          </select>
        </div>

        <div>
          <label htmlFor="presentedAt" className="block text-sm font-medium mb-2">
            Presented At
          </label>
          <input
            type="text"
            id="presentedAt"
            name="presentedAt"
            defaultValue={paper.presentedAt || ""}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., Session 1, Room A"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Acceptance Status
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAccepted"
                value="true"
                defaultChecked={paper.isAccepted}
                className="w-4 h-4"
              />
              <span>Accepted</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAccepted"
                value="false"
                defaultChecked={!paper.isAccepted}
                className="w-4 h-4"
              />
              <span>Not Accepted</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <button
            type="button"
            onClick={handleDelete}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete Paper
          </button>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border rounded-md hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Paper"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
