"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface Paper {
  id: string;
  submissionId: string;
  title: string;
}

interface Review {
  paperType: string;
  evaluation: Record<string, string>;
  comfortLevel: string;
  mandatoryComments: string;
  suggestedComments: string;
  overallRecommendation: string;
  forwarded?: boolean;
}
interface AssignedPaper {
  id: string;
  submissionId?: string;
  title: string;
  review?: Review;
}
interface Reviewer {
  id: string;
  name: string;
  email: string;
  assignedPapers: AssignedPaper[];
}

export default function ReviewersPage() {
  const [reviewers, setReviewers] = useState<Reviewer[]>([])
  const [papers, setPapers] = useState<Paper[]>([])
  const [newReviewerName, setNewReviewerName] = useState("")
  const [newReviewerEmail, setNewReviewerEmail] = useState("")
  const [assigningReviewerId, setAssigningReviewerId] = useState<string | null>(null)
  const [selectedPaperId, setSelectedPaperId] = useState<string>("")
  const [expandedReviewers, setExpandedReviewers] = useState<string[]>([])
  const [addError, setAddError] = useState<string>("")
  const [addLoading, setAddLoading] = useState(false)
  const [assignLoading, setAssignLoading] = useState(false)

  // Fetch reviewers and papers on mount
  useEffect(() => {
    fetch("/api/reviewers")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setReviewers(data.data)
      })
    fetch("/api/papers")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPapers(data.data)
      })
  }, [])

  const handleAddReviewer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAddError("")
    setAddLoading(true)
    try {
      const res = await fetch("/api/reviewers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newReviewerName, email: newReviewerEmail }),
      })
      const data = await res.json()
      if (data.success) {
        setReviewers([
          ...reviewers,
          { ...data.data, assignedPapers: [] },
        ])
        setNewReviewerName("")
        setNewReviewerEmail("")
      } else {
        setAddError(data.data || "Failed to add reviewer.")
      }
    } catch {
      setAddError("Network error. Please try again.")
    } finally {
      setAddLoading(false)
    }
  }

  // TODO: Implement real assignment API call
  const handleAssignPaper = async (reviewerId: string, paperId: string) => {
    setAssignLoading(true)
    try {
      const res = await fetch("/api/reviewer-assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewerId, paperId }),
      })
      const data = await res.json()
      if (data.success) {
        // Refresh reviewers list
        const reviewersRes = await fetch("/api/reviewers")
        const reviewersData = await reviewersRes.json()
        if (reviewersData.success) setReviewers(reviewersData.data)
        setAssigningReviewerId(null)
        setSelectedPaperId("")
        toast.success("Paper assigned to reviewer.")
      } else {
        toast.error(data.data || "Failed to assign paper.")
      }
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setAssignLoading(false)
    }
  }

  const handleForwardReview = (reviewerId: string, paperId: string) => {
    setReviewers(
      reviewers.map((r) => {
        if (r.id === reviewerId) {
          return {
            ...r,
            assignedPapers: r.assignedPapers.map((p) => {
              if (p.id === paperId && p.review) {
                return {
                  ...p,
                  review: { ...p.review, forwarded: true },
                }
              }
              return p
            }),
          }
        }
        return r
      })
    )
  }

  const renderReviewDetails = (review?: Review, reviewerId?: string, paperId?: string) => {
    if (!review) return <p className="text-muted-foreground italic">Review pending.</p>
    return (
      <div className="space-y-4">
        {/* Forwarded status or button */}
        <div>
          {review.forwarded ? (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">Forwarded</span>
          ) : reviewerId && paperId ? (
            <Button size="sm" onClick={() => handleForwardReview(reviewerId, paperId)}>Forward</Button>
          ) : null}
        </div>
        <div>
          <Label>Paper Type</Label>
          <div>{review.paperType}</div>
        </div>
        <div>
          <Label>Evaluation</Label>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
            {Object.entries(review.evaluation).map(([key, value]) => (
              <div key={key}>
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span> {value}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label>Comfort Level</Label>
          <div>{review.comfortLevel}</div>
        </div>
        <div>
          <Label>Overall comments and changes that MUST be made before publication</Label>
          <div className="whitespace-pre-wrap">{review.mandatoryComments}</div>
        </div>
        <div>
          <Label>Suggestions which would improve the quality of the paper but are NOT essential for publication</Label>
          <div className="whitespace-pre-wrap">{review.suggestedComments}</div>
        </div>
        <div>
          <Label>Overall Recommendation</Label>
          <div className="font-bold">{review.overallRecommendation}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Manage Reviewers</h1>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Add New Reviewer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddReviewer} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <Label htmlFor="reviewer-name">Name</Label>
              <Input
                id="reviewer-name"
                type="text"
                placeholder="Name"
                value={newReviewerName}
                onChange={(e) => setNewReviewerName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="reviewer-email">Email</Label>
              <Input
                id="reviewer-email"
                type="email"
                placeholder="Email"
                value={newReviewerEmail}
                onChange={(e) => setNewReviewerEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full md:w-auto mt-4 md:mt-0" disabled={addLoading}>
              {addLoading ? "Adding..." : "Add Reviewer"}
            </Button>
          </form>
          {addError && <div className="text-red-600 mt-2 col-span-3">{addError}</div>}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reviewers List</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full" value={expandedReviewers} onValueChange={setExpandedReviewers}>
            {reviewers.map((reviewer) => (
              <AccordionItem value={reviewer.id} key={reviewer.id}>
                <AccordionTrigger>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                    <div>
                      <div className="font-semibold text-lg">{reviewer.name}</div>
                      <div className="text-muted-foreground text-sm">{reviewer.email}</div>
                    </div>
                    <Button
                      type="button"
                      variant={assigningReviewerId === reviewer.id ? "default" : "secondary"}
                      className="mt-2 md:mt-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        setAssigningReviewerId(assigningReviewerId === reviewer.id ? null : reviewer.id)
                        setSelectedPaperId("")
                        if (!expandedReviewers.includes(reviewer.id)) {
                          setExpandedReviewers((prev) => [...prev, reviewer.id])
                        }
                      }}
                    >
                      {assigningReviewerId === reviewer.id ? "Cancel" : "Assign Paper"}
                    </Button>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-2">
                    {assigningReviewerId === reviewer.id && (
                      <div className="mb-4 flex flex-col md:flex-row md:items-end gap-4 bg-muted/30 p-4 rounded-lg">
                        <div className="flex-1">
                          <Label htmlFor={`select-paper-${reviewer.id}`}>Select Paper</Label>
                          <Select value={selectedPaperId} onValueChange={setSelectedPaperId}>
                            <SelectTrigger id={`select-paper-${reviewer.id}`} className="w-full mt-1">
                              <SelectValue placeholder="Choose a paper to assign" />
                            </SelectTrigger>
                            <SelectContent>
                              {papers
                                .filter(
                                  (paper) =>
                                    !reviewers.some((rev) =>
                                      Array.isArray(rev.assignedPapers) && rev.assignedPapers.some((ap) => ap.id === paper.id)
                                    )
                                )
                                .map((paper) => (
                                  <SelectItem value={paper.id} key={paper.id}>
                                    {paper.submissionId} — {paper.title}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          type="button"
                          disabled={!selectedPaperId || assignLoading}
                          onClick={() => handleAssignPaper(reviewer.id, selectedPaperId)}
                        >
                          {assignLoading ? "Assigning..." : "Assign"}
                        </Button>
                      </div>
                    )}
                    <div className="font-medium mb-2">Assigned Papers</div>
                    {reviewer.assignedPapers.length > 0 ? (
                      <Accordion type="multiple">
                        {reviewer.assignedPapers.map((paper) => (
                          <AccordionItem value={paper.id} key={paper.id}>
                            <AccordionTrigger>
                              <div className="flex items-center justify-between w-full">
                                <span className="font-medium">{paper.title}</span>
                                <span className={`text-xs ml-2 ${paper.review ? "text-green-600" : "text-yellow-600"}`}>
                                  {paper.review ? "Reviewed" : "Pending Review"}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-2">
                                {renderReviewDetails(paper.review, reviewer.id, paper.id)}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <div className="text-muted-foreground italic">No papers assigned yet.</div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
} 