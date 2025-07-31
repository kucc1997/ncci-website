"use client";

import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Textarea,
} from "@/components/ui/textarea";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/components/ui/radio-group";
import {
	Label,
} from "@/components/ui/label";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ReviewFormProps {
	paperId: string;
	onSubmitSuccess: () => void;
}

export default function ReviewForm({ paperId, onSubmitSuccess }: ReviewFormProps) {
	const [formData, setFormData] = useState({
		typeOfPaper: "",
		significance: "",
		originality: "",
		technicalQuality: "",
		relatedWork: "",
		presentationClarity: "",
		manuscriptOrganization: "",
		references: "",
		paperLength: "",
		expertiseLevel: "",
		mandatoryComments: "",
		suggestedComments: "",
		overallRecommendation: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const isFormValid = () => {
		return Object.values(formData).every((value) => value.trim() !== "");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!isFormValid()) {
			toast.error("Please fill out all fields before submitting.");
			return;
		}
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/reviewer/submit-review", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ paperId, ...formData }),
			});

			const result = await response.json();

			if (result.success) {
				toast.success("Review submitted successfully!");
				onSubmitSuccess();
			} else {
				toast.error(result.message || "Failed to submit review.");
			}
		} catch (error) {
			if (error instanceof Error)
				toast.error("An error occurred while submitting the review.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const evaluationCriteria = [
		{ id: "significance", label: "Significance of the main idea(s)" },
		{ id: "originality", label: "Originality" },
		{ id: "technicalQuality", label: "Technical quality of the paper" },
		{ id: "relatedWork", label: "Awareness of related work" },
		{ id: "presentationClarity", label: "Clarity of presentation" },
		{ id: "manuscriptOrganization", label: "Organization of the manuscript" },
		{ id: "references", label: "References" },
		{ id: "paperLength", label: "Paper Length" },
	];

	const ratingOptions = ["Very Poor", "Poor", "Average", "Good", "Very Good"];

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-[var(--bg-accent)]">Paper Review</CardTitle>
					<CardDescription>Provide your evaluation for this paper.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">Type of Paper</Label>
						<Select onValueChange={(value) => handleChange("typeOfPaper", value)} value={formData.typeOfPaper}>
							<SelectTrigger>
								<SelectValue placeholder="Select paper type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="research">Research</SelectItem>
								<SelectItem value="survey">Survey</SelectItem>
								<SelectItem value="tutorial">Tutorial</SelectItem>
								<SelectItem value="speculative">Speculative</SelectItem>
								<SelectItem value="others">Others</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">Evaluation</Label>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{evaluationCriteria.map((criterion) => (
								<div key={criterion.id}>
									<Label className="font-semibold">{criterion.label}</Label>
									<RadioGroup
										className="flex flex-wrap gap-4 mt-2"
										onValueChange={(value) => handleChange(criterion.id, value)}
										value={formData[criterion.id as keyof typeof formData]}
									>
										{ratingOptions.map((option) => {
											const value = option.toLowerCase().replace(" ", "-");
											return (
												<div className="flex items-center space-x-2" key={value}>
													<RadioGroupItem value={value} id={`${criterion.id}-${value}`} />
													<Label htmlFor={`${criterion.id}-${value}`}>{option}</Label>
												</div>
											);
										})}
									</RadioGroup>
								</div>
							))}
						</div>
					</div>

					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">What is your level of expertise in the domain of this paper?</Label>
						<Select onValueChange={(value) => handleChange("expertiseLevel", value)} value={formData.expertiseLevel}>
							<SelectTrigger>
								<SelectValue placeholder="Select expertise level" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="no-familiarity">No familiarity</SelectItem>
								<SelectItem value="some-familiarity">Some familiarity </SelectItem>
								<SelectItem value="moderate-expertise">Moderate expertise</SelectItem>
								<SelectItem value="high-expertise">High expertise</SelectItem>
								<SelectItem value="expert">Expert</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">Overall comments and changes that MUST be made before publication</Label>
						<Textarea
							placeholder="Enter comments"
							value={formData.mandatoryComments}
							onChange={(e) => handleChange("mandatoryComments", e.target.value)}
						/>
					</div>

					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">Suggestions which would improve the quality of the paper but are NOT essential for publication</Label>
						<Textarea
							placeholder="Enter suggestions"
							value={formData.suggestedComments}
							onChange={(e) => handleChange("suggestedComments", e.target.value)}
						/>
					</div>

					<div>
						<Label className="text-lg font-semibold text-[var(--bg-accent2)]">Overall Recommendation</Label>
						<Select onValueChange={(value) => handleChange("overallRecommendation", value)} value={formData.overallRecommendation}>
							<SelectTrigger>
								<SelectValue placeholder="Select recommendation" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="strongly-reject">Strongly Reject</SelectItem>
								<SelectItem value="reject">Reject</SelectItem>
								<SelectItem value="marginally-accept">Marginally Accept</SelectItem>
								<SelectItem value="accept">Accept</SelectItem>
								<SelectItem value="strongly-accept">Strongly Accept</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</CardContent>
				<CardFooter>
					<Button type="submit" disabled={!isFormValid() || isSubmitting}>
						{isSubmitting ? "Submitting..." : "Submit Review"}
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
