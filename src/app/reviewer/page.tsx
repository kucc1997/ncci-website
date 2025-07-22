"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReviewForm from "@/components/review-form";

interface AssignedPaper {
    id: string;
    title: string;
    reviewId: string | null;
}

export default function ReviewerPage() {
    const router = useRouter();
    const [assignedPapers, setAssignedPapers] = useState<AssignedPaper[]>([]);
    const [expandedPaperId, setExpandedPaperId] = useState<string | null>(null);

    const fetchAssignedPapers = useCallback(async () => {
        try {
            const res = await fetch("/api/reviewer/papers");
            const data = await res.json();
            if (data.success) {
                setAssignedPapers(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch assigned papers:", error);
        }
    }, []);

    useEffect(() => {
        const checkReviewerStatus = async () => {
            const res = await fetch("/api/users/is-reviewer");
            const data = await res.json();

            if (!data.success || !data.data) {
                router.push("/");
            }
        };

        checkReviewerStatus();
        fetchAssignedPapers();
    }, [router, fetchAssignedPapers]);

    const handlePaperClick = (paperId: string) => {
        setExpandedPaperId(expandedPaperId === paperId ? null : paperId);
    };

    const handleReviewSuccess = () => {
        setExpandedPaperId(null); // Collapse the form
        fetchAssignedPapers(); // Refresh the paper list
    };

    return (
        <div className="container px-4 md:px-6 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">Reviewer Dashboard</h1>
                <div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Welcome, Reviewer! Here are the papers assigned to you for review.
                </p>
            </div>

            <div className="space-y-8">
                {assignedPapers.length > 0 ? (
                    assignedPapers.map((paper) => (
                        <div key={paper.id}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-[var(--bg-accent2)]">{paper.title}</h2>
                                {paper.reviewId ? (
                                    <span className="text-green-600 font-semibold">Reviewed</span>
                                ) : (
                                    <button
                                        onClick={() => handlePaperClick(paper.id)}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {expandedPaperId === paper.id ? "Collapse" : "Review"}
                                    </button>
                                )}
                            </div>
                            {expandedPaperId === paper.id && (
                                <div className="mt-4">
                                    <ReviewForm paperId={paper.id} onSubmitSuccess={handleReviewSuccess} />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-lg text-gray-600">No papers assigned yet.</p>
                )}
            </div>
        </div>
    );
}
