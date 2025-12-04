"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export const dynamic = 'force-dynamic';

interface Paper {
  id: string;
  submissionId: string;
  title: string;
  abstract: string;
  keywords: string[];
  fileUrl: string;
  trackType: string;
  status: string;
  author: {
    name: string;
  };
}

export default function ImportArchivePapersPage() {
  const router = useRouter();
  const params = useParams();
  const year = params.year as string;
  const [loading, setLoading] = useState(false);
  const [papers, setPapers] = useState<Paper[]>([]);
  const [selectedPapers, setSelectedPapers] = useState<Set<string>>(new Set());
  const [yearId, setYearId] = useState("");
  const [filterStatus, setFilterStatus] = useState("accepted");

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

    fetch("/api/papers")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setPapers(data.data);
        }
      })
      .catch(() => {
        toast.error("Failed to fetch papers");
      });
  }, [year]);

  const filteredPapers = papers.filter(paper => {
    if (filterStatus === "all") return true;
    return paper.status === filterStatus;
  });

  const togglePaper = (paperId: string) => {
    const newSelected = new Set(selectedPapers);
    if (newSelected.has(paperId)) {
      newSelected.delete(paperId);
    } else {
      newSelected.add(paperId);
    }
    setSelectedPapers(newSelected);
  };

  const selectAll = () => {
    setSelectedPapers(new Set(filteredPapers.map(p => p.id)));
  };

  const deselectAll = () => {
    setSelectedPapers(new Set());
  };

  const handleImport = async () => {
    if (selectedPapers.size === 0) {
      toast.error("Please select at least one paper");
      return;
    }

    setLoading(true);

    try {
      const papersToImport = papers.filter(p => selectedPapers.has(p.id));
      
      for (const paper of papersToImport) {
        const paperDetails = await fetch(`/api/papers/${paper.submissionId}`)
          .then(res => res.json());
        
        if (!paperDetails.success) continue;
        
        const fullPaper = paperDetails.data;
        const authors = [
          fullPaper.author.name,
          ...(fullPaper.coAuthors || []).map((ca: any) => ca.name)
        ].filter(Boolean).join(", ");

        await fetch("/api/admin/archive/papers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            yearId,
            paperId: paper.id,
            title: paper.title,
            authors: authors || paper.author.name,
            abstract: paper.abstract,
            keywords: paper.keywords,
            fileUrl: paper.fileUrl,
            trackType: paper.trackType,
            isAccepted: paper.status === "accepted",
          }),
        });
      }

      toast.success(`Successfully imported ${selectedPapers.size} papers`);
      router.push(`/admin/archive/${year}`);
    } catch {
      toast.error("Failed to import papers");
    } finally {
      setLoading(false);
    }
  };

  if (!yearId) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <Link href={`/admin/archive/${year}`} className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to {year} Archive
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Import Papers from Submissions</h1>
        <p className="text-muted-foreground">
          Select papers from current submissions to add to the archive
        </p>
      </div>

      <div className="mb-6 flex gap-4 items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-4 py-2 rounded-md ${
              filterStatus === "all" ? "bg-primary text-primary-foreground" : "border"
            }`}
          >
            All ({papers.length})
          </button>
          <button
            onClick={() => setFilterStatus("accepted")}
            className={`px-4 py-2 rounded-md ${
              filterStatus === "accepted" ? "bg-primary text-primary-foreground" : "border"
            }`}
          >
            Accepted ({papers.filter(p => p.status === "accepted").length})
          </button>
          <button
            onClick={() => setFilterStatus("submitted")}
            className={`px-4 py-2 rounded-md ${
              filterStatus === "submitted" ? "bg-primary text-primary-foreground" : "border"
            }`}
          >
            Submitted ({papers.filter(p => p.status === "submitted").length})
          </button>
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={selectAll}
            className="px-4 py-2 border rounded-md hover:bg-muted text-sm"
          >
            Select All
          </button>
          <button
            onClick={deselectAll}
            className="px-4 py-2 border rounded-md hover:bg-muted text-sm"
          >
            Deselect All
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {filteredPapers.map((paper) => {
          const authors = paper.author?.name || "Unknown";
          return (
            <div
              key={paper.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedPapers.has(paper.id) ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => togglePaper(paper.id)}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedPapers.has(paper.id)}
                  onChange={() => togglePaper(paper.id)}
                  className="mt-1 w-4 h-4"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold mb-1">{paper.title}</h3>
                      <p className="text-sm text-muted-foreground">{authors}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-muted">
                      {paper.submissionId}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    {paper.trackType && (
                      <span className="text-xs px-2 py-1 rounded bg-muted">
                        {paper.trackType}
                      </span>
                    )}
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        paper.status === "accepted"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {paper.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPapers.length === 0 && (
        <div className="text-center py-12 border rounded-lg">
          <p className="text-muted-foreground">No papers found</p>
        </div>
      )}

      <div className="sticky bottom-0 bg-background border-t pt-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {selectedPapers.size} paper{selectedPapers.size !== 1 ? "s" : ""} selected
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 border rounded-md hover:bg-muted"
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            disabled={loading || selectedPapers.size === 0}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Importing..." : `Import ${selectedPapers.size} Paper${selectedPapers.size !== 1 ? "s" : ""}`}
          </button>
        </div>
      </div>
    </div>
  );
}
