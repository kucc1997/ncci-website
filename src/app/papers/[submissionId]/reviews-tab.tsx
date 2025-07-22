"use client"
import { Review } from "@/app/admin/reviewers/page";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ReviewsTab({ paperId }: { paperId: string }) {
	const [reviews, setReviews] = useState<Review[]>([])

	useEffect(() => {
		(async function() {
			const res = await axios.get('/api/papers/reviews?paperId=' + paperId)
			setReviews(res.data.data)
		})()
	}, [paperId])

	const renderReviewDetails = (review?: Review) => {
		if (!review) return <p className="text-muted-foreground italic">Review pending.</p>
		return (
			<div className="space-y-4">
				<div>
					<Label className="text-bold text-primary">Paper Type</Label>
					<div>{review.typeOfPaper}</div>
				</div>
				<div>
					<Label className="text-lg text-primary text-bold">Evaluation</Label>
					<div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
						{Object.entries({
							significance: review.significance,
							originality: review.originality,
							technicalQuality: review.technicalQuality,
							relatedWork: review.relatedWork,
							presentationClarity: review.presentationClarity,
							manuscriptOrganization: review.manuscriptOrganization,
							references: review.references,
							paperLength: review.paperLength,
						}).map(([key, value]) => (
							<div key={key}>
								<span className="font-medium capitalize text-primary">{key.replace(/([A-Z])/g, " $1")}:</span> {value}
							</div>
						))}
					</div>
				</div>
				<div>
					<Label className="text-bold text-primary">Comfort Level</Label>
					<div>{review.comfortLevel}</div>
				</div>
				<div>
					<Label className="text-bold text-primary">Overall comments and changes that MUST be made before publication</Label>
					<div className="whitespace-pre-wrap">{review.mandatoryComments}</div>
				</div>
				<div>
					<Label className="text-bold text-primary">Suggestions which would improve the quality of the paper but are NOT essential for publication</Label>
					<div className="whitespace-pre-wrap">{review.suggestedComments}</div>
				</div>
				<div>
					<Label className="text-bold text-primary">Overall Recommendation</Label>
					<div className="font-bold">{review.overallRecommendation}</div>
				</div>
			</div>
		)
	}

	return <TabsContent value="reviews">
		{reviews.map((review, index) => (
			<div key={review.reviewId}>
				<h3 className="text-2xl font-bold text-primary mt-12">Review {index + 1}</h3>
				<hr />
				{renderReviewDetails(review)}
			</div>
		))}
	</TabsContent>
}
