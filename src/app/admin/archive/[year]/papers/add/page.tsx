"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function AddArchivePaperPage() {
  const router = useRouter();
  const params = useParams();
  const year = params.year as string;
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [yearId, setYearId] = useState("");

  useEffect(() => {
    fetch(`/api/admin/archive/years/${year}`)
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          setYearId(data.id);
        }
      })
      .catch(() => {
        toast.error("Failed to fetch year information");
      });
  }, [year]);

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setFileUrl(data.url);
      toast.success("File uploaded successfully");
      return data.url;
    } catch {
      toast.error("File upload failed");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!fileUrl) {
      toast.error("Please upload a paper file");
      return;
    }
    
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const keywords = (formData.get("keywords") as string)
      .split(",")
      .map(k => k.trim())
      .filter(Boolean);

    const data = {
      yearId,
      title: formData.get("title") as string,
      authors: formData.get("authors") as string,
      abstract: formData.get("abstract") as string,
      keywords,
      fileUrl: fileUrl,
      trackType: formData.get("trackType") as string,
      isAccepted: formData.get("isAccepted") === "true",
      presentedAt: formData.get("presentedAt") as string,
    };

    try {
      const response = await fetch("/api/admin/archive/papers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to add paper");

      toast.success("Paper added successfully");
      router.push(`/admin/archive/${year}`);
    } catch {
      toast.error("Failed to add paper");
    } finally {
      setLoading(false);
    }
  };

  if (!yearId) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <Link href={`/admin/archive/${year}`} className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to {year} Archive
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Add Archive Paper</h1>

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
            className="w-full px-3 py-2 border rounded-md"
            placeholder="keyword1, keyword2, keyword3"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Enter keywords separated by commas
          </p>
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium mb-2">
            Paper File (PDF) *
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf,application/pdf"
            disabled={uploading}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                await handleFileUpload(file);
              }
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
          {uploading && (
            <p className="text-sm text-blue-600 mt-1">Uploading file...</p>
          )}
          {fileUrl && (
            <p className="text-sm text-green-600 mt-1">
              File uploaded successfully: {fileUrl}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Maximum file size: 10MB. Accepted format: PDF
          </p>
        </div>

        <div>
          <label htmlFor="trackType" className="block text-sm font-medium mb-2">
            Track Type
          </label>
          <select
            id="trackType"
            name="trackType"
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
                defaultChecked
                className="w-4 h-4"
              />
              <span>Accepted</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAccepted"
                value="false"
                className="w-4 h-4"
              />
              <span>Not Accepted</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading || uploading || !fileUrl}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Adding..." : uploading ? "Uploading..." : "Add Paper"}
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
