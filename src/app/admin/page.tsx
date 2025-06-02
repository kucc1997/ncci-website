"use client"

import { useSession } from "next-auth/react"

export default function AdminDashboard() {
	const { data: session } = useSession()

	const stats = [
		{ name: 'Total Registrations', value: '245', icon: '👥' },
		{ name: 'Pending Reviews', value: '12', icon: '⏳' },
		{ name: 'Accepted Papers', value: '89', icon: '✅' },
		{ name: 'Total Papers', value: '156', icon: '📄' },
	]

	const recentActivity = [
		{ action: 'New registration', user: 'John Doe', time: '2 hours ago' },
		{ action: 'Paper submitted', user: 'Jane Smith', time: '4 hours ago' },
		{ action: 'Registration approved', user: 'Mike Johnson', time: '6 hours ago' },
		{ action: 'Paper reviewed', user: 'Sarah Wilson', time: '8 hours ago' },
	]

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

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
		</div>
	)
}


