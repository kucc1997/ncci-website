'use client'

import { useState } from 'react'

interface Paper {
	id: string
	title: string
	author: string
	theme: string
	status: 'submitted' | 'under_review' | 'accepted' | 'rejected'
	submissionDate: string
}

export default function PapersPage() {
	const [papers, setPapers] = useState<Paper[]>([
		{
			id: '1',
			title: 'AI in Healthcare: A Comprehensive Study',
			author: 'Dr. John Smith',
			theme: 'Artificial Intelligence',
			status: 'under_review',
			submissionDate: '2025-05-28'
		},
		{
			id: '2',
			title: 'Blockchain Technology in Finance',
			author: 'Prof. Jane Doe',
			theme: 'Blockchain',
			status: 'accepted',
			submissionDate: '2025-05-27'
		},
		{
			id: '3',
			title: 'Machine Learning Applications',
			author: 'Dr. Mike Wilson',
			theme: 'Machine Learning',
			status: 'submitted',
			submissionDate: '2025-05-26'
		}
	])

	const [filterTheme, setFilterTheme] = useState<string>('all')
	const themes = ['all', 'Artificial Intelligence', 'Blockchain', 'Machine Learning', 'Cybersecurity']

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
		<div className=" bg-red-900 ">
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

			<div className="  shadow rounded-lg ">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
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
		</div>
	)
}

