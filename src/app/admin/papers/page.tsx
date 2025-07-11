'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Paper {
	id: string
	submissionId: string
	title: string
	author: string
	theme: string
	status: 'submitted' | 'under_review' | 'accepted' | 'rejected'
	submissionDate: string
	fileUrl: string
}

export default function PapersPage() {
	const [papers, setPapers] = useState<Paper[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [filterTheme, setFilterTheme] = useState<string>('all')
	const themes = ['all', 'Artificial Intelligence', 'Blockchain', 'Machine Learning', 'Cybersecurity']

	useEffect(() => {
		const fetchPapers = async () => {
			setLoading(true)
			setError(null)
			try {
				const response = await fetch('/api/papers')
				const result = await response.json()
				if (!result.success) throw new Error(result.data)
				setPapers(result.data.map((p: any) => ({
					id: p.id,
					submissionId: p.submissionId,
					title: p.title,
					author: p.author?.name || '',
					theme: p.theme?.name || '',
					status: p.status,
					fileUrl: p.fileUrl,
					submissionDate: p.submittedAt ? new Date(p.submittedAt).toISOString().slice(0, 10) : ''
				})))
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch papers')
			} finally {
				setLoading(false)
			}
		}
		fetchPapers()
	}, [])

	const updatePaperStatus = (id: string, newStatus: Paper['status']) => {
		setPapers(prev =>
			prev.map(paper =>
				paper.id === id ? { ...paper, status: newStatus } : paper
			)
		)
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'submitted': return 'bg-blue-100 text-blue-800'
			case 'under_review': return 'bg-yellow-100 text-yellow-800'
			case 'accepted': return 'bg-green-100 text-green-800'
			case 'rejected': return 'bg-red-100 text-red-800'
			default: return 'bg-gray-100 text-gray-800'
		}
	}

	const filteredPapers = filterTheme === 'all'
		? papers
		: papers.filter(paper => paper.theme === filterTheme)

	return (
		<div className=" ">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-gray-900">Papers Management</h1>

				{/* Theme Filter */}
				<div className="flex items-center space-x-2">
					<label className="text-sm font-medium text-gray-700">Filter by Theme:</label>
					<select
						value={filterTheme}
						onChange={(e) => setFilterTheme(e.target.value)}
						className="border border-gray-300 rounded-md px-3 py-1 text-sm"
					>
						{themes.map(theme => (
							<option key={theme} value={theme}>
								{theme === 'all' ? 'All Themes' : theme}
							</option>
						))}
					</select>
				</div>
			</div>

			{loading ? (
				<div className="p-8 text-center">Loading...</div>
			) : error ? (
				<div className="p-8 text-center text-red-600">{error}</div>
			) : (
				<div className="  shadow rounded-lg ">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Submission ID
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Title
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Author
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Theme
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Status
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Submission Date
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{filteredPapers.map((paper) => (
								<tr key={paper.id}>
									<td className="px-6 py-4 text-sm font-medium">
										<Link className="max-w-xs truncate text-blue-900" href={paper.fileUrl}>{paper.submissionId}</Link>
									</td>
									<td className="px-6 py-4 text-sm font-medium text-gray-900">
										<div className="max-w-xs truncate">{paper.title}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{paper.author}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{paper.theme}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(paper.status)}`}>
											{paper.status.replace('_', ' ')}
										</span>
									</td>
									<td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
										{paper.submissionDate}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
										<select
											value={paper.status}
											onChange={(e) => updatePaperStatus(paper.id, e.target.value as Paper['status'])}
											className="border border-gray-300 rounded-md px-2 py-1 text-sm"
										>
											<option value="submitted">Submitted</option>
											<option value="under_review">Under Review</option>
											<option value="accepted">Accepted</option>
											<option value="rejected">Rejected</option>
										</select>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

