"use client"
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
	const [stats, setStats] = useState<any[]>([])
	const [recentActivity, setRecentActivity] = useState<any[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			setError(null)
			try {
				const [regRes, paperRes] = await Promise.all([
					fetch('/api/registration'),
					fetch('/api/papers'),
				])
				const regJson = await regRes.json()
				const paperJson = await paperRes.json()
				if (!regJson.success) throw new Error(regJson.data)
				if (!paperJson.success) throw new Error(paperJson.data)
				const regs = regJson.data
				const papers = paperJson.data

				const stats = [
					{ name: 'Total Registrations', value: regs.length, icon: '👥' },
					{ name: 'Pending Reviews', value: regs.filter((r: any) => r.status === 'pending').length, icon: '⏳' },
					{ name: 'Accepted Papers', value: papers.filter((p: any) => p.status === 'accepted').length, icon: '✅' },
					{ name: 'Total Papers', value: papers.length, icon: '📄' },
				]

				const recentRegs = regs.slice(-2).map((r: any) => ({
					action: 'New registration',
					user: `${r.firstName} ${r.lastName}`,
					time: r.createdAt ? new Date(r.createdAt).toLocaleString() : '',
				}))
				const recentPapers = papers.slice(-2).map((p: any) => ({
					action: 'Paper submitted',
					user: p.title,
					time: p.submittedAt ? new Date(p.submittedAt).toLocaleString() : '',
				}))
				setStats(stats)
				setRecentActivity([...recentRegs, ...recentPapers])
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch dashboard data')
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

			{loading ? (
				<div className="p-8 text-center">Loading...</div>
			) : error ? (
				<div className="p-8 text-center text-red-600">{error}</div>
			) : (
				<>
					{/* Stats Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{stats.map((stat) => (
							<div key={stat.name} className="bg-white p-6 rounded-lg shadow">
								<div className="flex items-center">
									<div className="text-2xl mr-4">{stat.icon}</div>
									<div>
										<p className="text-sm font-medium text-gray-600">{stat.name}</p>
										<p className="text-2xl font-bold text-gray-900">{stat.value}</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Recent Activity */}
					<div className="bg-white shadow rounded-lg">
						<div className="px-6 py-4 border-b border-gray-200">
							<h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
						</div>
						<div className="divide-y divide-gray-200">
							{recentActivity.map((activity, index) => (
								<div key={index} className="px-6 py-4">
									<div className="flex justify-between items-center">
										<div>
											<p className="text-sm font-medium text-gray-900">{activity.action}</p>
											<p className="text-sm text-gray-500">{activity.user}</p>
										</div>
										<span className="text-sm text-gray-500">{activity.time}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	)
}


