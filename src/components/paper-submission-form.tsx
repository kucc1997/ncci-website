"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, MinusCircle, Upload, Loader2 } from "lucide-react"
import { getThemes } from "@/lib/api/themes"
import { CoAuthor, SubmissionData, Theme } from "@/app"
import { AxiosError } from "axios"
import { toast } from "sonner"

interface PaperSubmissionFormProps {
	onSubmitAction: (formData: SubmissionData) => Promise<void>
	isSubmitting: boolean
}

export default function PaperSubmissionForm({ onSubmitAction: onSubmit, isSubmitting }: PaperSubmissionFormProps) {
	const [title, setTitle] = useState("")
	const [abstract, setAbstract] = useState("")
	const [keywords, setKeywords] = useState("")
	const [coAuthors, setCoAuthors] = useState<CoAuthor[]>([{ name: "", email: "", orcid: "", affiliation: "" }])
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [trackType, setTrackType] = useState("Regular Paper")
	const [theme, setTheme] = useState("")
	const [themes, setThemes] = useState<Theme[]>([]);

	useEffect(() => {
		if (themes.length === 0) {
			(async function() {
				const res = await getThemes();
				const data = res.data
				setThemes(data.data);
				if (data.data.length > 0) {
					setTheme(data.data[0].id)
				}
			})()
		}
	}, [themes])

	const handleAddCoAuthor = () => {
		setCoAuthors([...coAuthors, { name: "", email: "", orcid: "", affiliation: "" }])
	}

	const handleRemoveCoAuthor = (index: number) => {
		const updatedCoAuthors = [...coAuthors]
		updatedCoAuthors.splice(index, 1)
		setCoAuthors(updatedCoAuthors)
	}

	const handleCoAuthorChange = (index: number, field: keyof CoAuthor, value: string) => {
		const updatedCoAuthors = [...coAuthors]
		updatedCoAuthors[index][field] = value
		setCoAuthors(updatedCoAuthors)
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedFile(e.target.files[0])
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Validate form
		if (!title.trim()) {
			alert("Please enter a paper title")
			return
		}

		if (!abstract.trim()) {
			alert("Please enter an abstract")
			return
		}

		if (!selectedFile) {
			alert("Please upload your paper in PDF format")
			return
		}

		// Check if all co-authors have at least a name and email
		const invalidCoAuthors = coAuthors.filter((author) => !author.name.trim() || !author.email.trim())
		if (invalidCoAuthors.length > 0) {
			alert("Please provide at least name and email for all authors")
			return
		}

		// Submit the form data
		try {
			await onSubmit({
				title,
				abstract,
				keywords: keywords ? keywords.split(",").map((k) => k.trim()) : [],
				coAuthors,
				file: selectedFile,
				trackType,
				theme,
			})

		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.data)
			}
			else toast.error(error.message)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Paper Information</CardTitle>
					<CardDescription>
						Enter the details of your paper submission. All fields marked with * are required.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="title">
							Paper Title <span className="text-red-500">*</span>
						</Label>
						<Input
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter the title of your paper"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="abstract">
							Abstract <span className="text-red-500">*</span>
						</Label>
						<Textarea
							id="abstract"
							value={abstract}
							onChange={(e) => setAbstract(e.target.value)}
							placeholder="Provide a concise summary of your paper"
							rows={6}
							required
						/>
						<p className="text-sm text-gray-500">{abstract.split(/\s+/).filter(Boolean).length} words</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="keywords">Keywords</Label>
						<Input
							id="keywords"
							value={keywords}
							onChange={(e) => setKeywords(e.target.value)}
							placeholder="Enter keywords separated by commas (e.g., AI, Machine Learning, Neural Networks)"
						/>
						<p className="text-sm text-gray-500">Enter keywords that best describe your paper, separated by commas</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="track">
								Track Type <span className="text-red-500">*</span>
							</Label>
							<select
								id="track"
								value={trackType}
								onChange={(e) => setTrackType(e.target.value)}
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								required
							>
								<option value="Regular Paper">Regular Paper</option>
								<option value="Short Paper">Short Paper</option>
								<option value="Poster Presentation">Poster Presentation</option>
							</select>
						</div>

						<div className="space-y-2">
							<Label htmlFor="theme">
								Theme <span className="text-red-500">*</span>
							</Label>
							<select
								id="theme"
								value={theme}
								onChange={(e) => setTheme(e.target.value)}
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								required
							>
								{themes.map(theme => <option value={theme.id} key={theme.id}>{theme.name}</option>)}
							</select>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="paper-file">
							Upload Paper (PDF) <span className="text-red-500">*</span>
						</Label>
						<div className="flex items-center gap-4">
							<Input
								id="paper-file"
								type="file"
								accept=".pdf"
								onChange={handleFileChange}
								className="flex-1"
								required
							/>
						</div>
						{selectedFile && (
							<p className="text-sm text-gray-500">
								Selected file: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
							</p>
						)}
						<p className="text-sm text-gray-500">
							Maximum file size: 10MB. Please ensure your paper follows the IEEE conference format.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Authors</CardTitle>
					<CardDescription>
						Add information about all authors of the paper. At least one author is required.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					{coAuthors.map((author, index) => (
						<div key={index} className="p-4 border rounded-lg space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="font-medium">Author {index + 1}</h3>
								{index > 0 && (
									<Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveCoAuthor(index)}>
										<MinusCircle className="h-4 w-4 mr-2" />
										Remove
									</Button>
								)}
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor={`author-name-${index}`}>
										Name <span className="text-red-500">*</span>
									</Label>
									<Input
										id={`author-name-${index}`}
										value={author.name}
										onChange={(e) => handleCoAuthorChange(index, "name", e.target.value)}
										placeholder="Full name"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor={`author-email-${index}`}>
										Email <span className="text-red-500">*</span>
									</Label>
									<Input
										id={`author-email-${index}`}
										type="email"
										value={author.email}
										onChange={(e) => handleCoAuthorChange(index, "email", e.target.value)}
										placeholder="Email address"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor={`author-orcid-${index}`}>ORCID ID</Label>
									<Input
										id={`author-orcid-${index}`}
										value={author.orcid}
										onChange={(e) => handleCoAuthorChange(index, "orcid", e.target.value)}
										placeholder="e.g., 0000-0002-1825-0097"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor={`author-affiliation-${index}`}>Affiliation</Label>
									<Input
										id={`author-affiliation-${index}`}
										value={author.affiliation}
										onChange={(e) => handleCoAuthorChange(index, "affiliation", e.target.value)}
										placeholder="Institution/Organization"
									/>
								</div>
							</div>
						</div>
					))}

					<Button type="button" variant="outline" onClick={handleAddCoAuthor} className="w-full">
						<PlusCircle className="h-4 w-4 mr-2" />
						Add Another Co-Author
					</Button>
				</CardContent>
			</Card>

			<div className="flex justify-end">
				<Button type="submit" size="lg" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Submitting...
						</>
					) : (
						<>
							<Upload className="mr-2 h-4 w-4" />
							Submit Paper
						</>
					)}
				</Button>
			</div>
		</form>
	)
}
