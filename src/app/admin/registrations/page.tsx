'use client'

import { useState } from 'react'

interface Registration {
	id: string
	name: string
	email: string
	organization: string
	status: 'pending' | 'accepted' | 'rejected'
	registrationDate: string
}

export default function RegistrationsPage() {
	const [registrations, setRegistrations] = useState<Registration[]>([
		{
			id: '1',
			name: 'John Doe',
			email: 'john@example.com',
			organization: 'University A',
			status: 'pending',
			registrationDate: '2025-05-28'
		},
		{
			id: '2',
			name: 'Jane Smith',
			email: 'jane@example.com',
			organization: 'Company B',
			status: 'accepted',
			registrationDate: '2025-05-27'
		},
		{
			id: '3',
			name: 'Mike Johnson',
			email: 'mike@example.com',
			organization: 'Institute C',
			status: 'rejected',
			registrationDate: '2025-05-26'
		}
	])

	const updateStatus = (id: string, newStatus: 'pending' | 'accepted' | 'rejected') => {
		setRegistrations(prev =>
			prev.map(reg =>
				reg.id === id ? { ...reg, status: newStatus } : reg
			)
		)
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'pending': return 'bg-yellow-100 text-yellow-800'
			case 'accepted': return 'bg-green-100 text-green-800'
			case 'rejected': return 'bg-red-100 text-red-800'
			default: return 'bg-gray-100 text-gray-800'
		}
	}

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">Registrations</h1>

			<div className="bg-white shadow rounded-lg overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
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
								Status
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
									{registration.name}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{registration.email}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{registration.organization}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(registration.status)}`}>
										{registration.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{registration.registrationDate}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
									<select
										value={registration.status}
										onChange={(e) => updateStatus(registration.id, e.target.value as any)}
										className="border border-gray-300 rounded-md px-2 py-1 text-sm"
									>
										<option value="pending">Pending</option>
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

