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
  const [uploading, setUploading] = useState(false);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [yearData, setYearData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/admin/archive/years/${yearNum}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setYearData(data);
          setCoverImageUrl(data.coverImage || "");
        }
      })
      .catch(() => {
        toast.error("Failed to fetch year information");
      });
  }, [yearNum]);

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
      setCoverImageUrl(data.url);
      toast.success("Cover image uploaded successfully");
      return data.url;
    } catch {
      toast.error("Cover image upload failed");
      return null;
    } finally {
      setUploading(false);
    }
  };

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
      coverImage: coverImageUrl,
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
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            accept="image/*"
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
            <p className="text-sm text-blue-600 mt-1">Uploading image...</p>
          )}
          {coverImageUrl && (
            <div className="mt-2">
              <p className="text-sm text-green-600">Current image: {coverImageUrl}</p>
              <img src={coverImageUrl} alt="Cover preview" className="mt-2 w-32 h-32 object-cover rounded" />
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Upload a new image to replace the current one. Maximum size: 10MB
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Updating..." : uploading ? "Uploading..." : "Update Archive Year"}
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
