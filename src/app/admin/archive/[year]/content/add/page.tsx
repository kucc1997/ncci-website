"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export default function AddArchiveContentPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const year = params.year as string;
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [yearId, setYearId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");

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

    fetch("/api/admin/archive/categories")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data.filter(c => c.slug !== 'papers'));
        }
      })
      .catch(() => {
        toast.error("Failed to fetch categories");
      });
  }, [year]);

  const handleFileUpload = async (file: File, type: "file" | "thumbnail") => {
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
      if (type === "file") {
        setFileUrl(data.url);
      } else {
        setThumbnailUrl(data.url);
      }
      toast.success(`${type === "file" ? "File" : "Thumbnail"} uploaded successfully`);
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
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      yearId,
      categoryId: formData.get("categoryId") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      fileUrl: fileUrl,
      fileType: formData.get("fileType") as string,
      thumbnailUrl: thumbnailUrl,
      displayOrder: parseInt(formData.get("displayOrder") as string) || 0,
    };

    try {
      const response = await fetch("/api/admin/archive/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to add content");

      toast.success("Content added successfully");
      router.push(`/admin/archive/${year}`);
    } catch {
      toast.error("Failed to add content");
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

      <h1 className="text-3xl font-bold mb-8">Add Archive Content</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="categoryId" className="block text-sm font-medium mb-2">
            Category *
          </label>
          <select
            id="categoryId"
            name="categoryId"
            required
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            {categories.find(c => c.id === selectedCategory)?.description}
          </p>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter content title"
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
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter content description..."
          />
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium mb-2">
            Content File
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf,image/*"
            disabled={uploading}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                await handleFileUpload(file, "file");
              }
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
          {uploading && (
            <p className="text-sm text-blue-600 mt-1">Uploading file...</p>
          )}
          {fileUrl && (
            <p className="text-sm text-green-600 mt-1">
              File uploaded: {fileUrl}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Upload document, image, or other file. Maximum size: 10MB
          </p>
        </div>

        <div>
          <label htmlFor="fileType" className="block text-sm font-medium mb-2">
            File Type
          </label>
          <select
            id="fileType"
            name="fileType"
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select file type</option>
            <option value="pdf">PDF</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="document">Document</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium mb-2">
            Thumbnail Image (Optional)
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            disabled={uploading}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                await handleFileUpload(file, "thumbnail");
              }
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
          {thumbnailUrl && (
            <p className="text-sm text-green-600 mt-1">
              Thumbnail uploaded: {thumbnailUrl}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Optional preview image for the content
          </p>
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
            placeholder="0"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Lower numbers appear first (0 = first)
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Adding..." : uploading ? "Uploading..." : "Add Content"}
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
