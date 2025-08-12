'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

interface Registration {
	id: string
	registrationId: string
	name: string
	email: string
	organization: string
	status: 'pending' | 'accepted' | 'rejected'
	registrationDate: string
	fileUrl: string
}

export default function RegistrationsPage() {
	const [registrations, setRegistrations] = useState<Registration[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)

	useEffect(() => {
		const fetchRegistrations = async () => {
			setLoading(true)
			setError(null)
			try {
				const response = await fetch('/api/registration')
				const result = await response.json()
				if (!result.success) throw new Error(result.data)
				setRegistrations(result.data.map((r: any) => ({
					id: r.id,
					registrationId: r.registrationId,
					name: r.firstName + ' ' + r.lastName,
					email: r.email,
					organization: r.institution,
					status: r.status,
					registrationDate: r.createdAt ? new Date(r.createdAt).toISOString().slice(0, 10) : '',
					fileUrl: r.paymentVoucherPath
				})))
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch registrations')
			} finally {
				setLoading(false)
			}
		}
		fetchRegistrations()
	}, [])

	const updateStatus = async (id: string, newStatus: 'pending' | 'accepted' | 'rejected') => {
		setUpdatingStatus(id)
		// Optimistically update the UI
		setRegistrations(prev =>
			prev.map(reg =>
				reg.id === id ? { ...reg, status: newStatus } : reg
			)
		)
		
		// Make API call to update the database
		try {
			const response = await fetch(`/api/registration/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ status: newStatus })
			})
			
			const result = await response.json()
			
			if (!result.success) {
				// Revert the UI change if the API call failed
				setRegistrations(prev =>
					prev.map(reg =>
						reg.id === id ? { ...reg, status: reg.status } : reg
					)
				)
				toast.error(`Failed to update registration status: ${result.data}`)
			} else {
				toast.success('Registration status updated successfully!')
			}
		} catch (error) {
			// Revert the UI change if the API call failed
			setRegistrations(prev =>
				prev.map(reg =>
					reg.id === id ? { ...reg, status: reg.status } : reg
				)
			)
			toast.error(`Error updating registration status: ${error instanceof Error ? error.message : 'Unknown error occurred'}`)
		} finally {
			setUpdatingStatus(null)
		}
	}

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">Registrations</h1>

			{loading ? (
				<div className="p-8 text-center">Loading...</div>
			) : error ? (
				<div className="p-8 text-center text-red-600">{error}</div>
			) : (
				<div className="bg-white shadow rounded-lg overflow-hidden">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Registration ID
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Email
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Organization
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Date
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{registrations.map((registration) => (
								<tr key={registration.id}>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										<Link className="max-w-xs truncate text-blue-900" href={`/registration/status/${registration.registrationId}`}>{registration.registrationId}</Link>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{registration.name}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{registration.email}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{registration.organization}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{registration.registrationDate}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
										<select
											value={registration.status}
											onChange={(e) => updateStatus(registration.id, e.target.value as any)}
											className="border border-gray-300 rounded-md px-2 py-1 text-sm"
											disabled={updatingStatus === registration.id}
										>
											<option value="pending">Pending</option>
											<option value="accepted">Accepted</option>
											<option value="rejected">Rejected</option>
										</select>
										{updatingStatus === registration.id && (
											<span className="ml-2 text-xs text-gray-500">Updating...</span>
										)}
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

