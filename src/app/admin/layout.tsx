'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AdminLayoutProps {
	children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const pathname = usePathname()

	const navigation = [
		{ name: 'Dashboard', href: '/admin/dashboard' },
		{ name: 'Registrations', href: '/admin/registrations' },
		{ name: 'Papers', href: '/admin/papers' },
	]

	// Function to handle navigation click
	const handleNavClick = () => {
		setSidebarOpen(false)
	}

	return (
		<div className="min-h-screen bg-gray-50 flex">
			{/* Sidebar */}
			<div className={`fixed inset-y-0 left-0 z-50 w-full bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 md:w-64`}>
				{/* Sidebar Header */}
				<div className="flex items-center justify-center h-16 bg-gradient-to-r from-blue-600 to-blue-700 px-4">
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-sm">NCCI</span>
						</div>
						<h1 className="text-white text-lg font-bold">Admin Portal</h1>
					</div>
				</div>

				{/* Navigation */}
				<nav className="mt-8">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							onClick={handleNavClick}
							className={`flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ${pathname === item.href ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
								}`}
						>
							<span className="font-medium text-lg">{item.name}</span>
						</Link>
					))}
				</nav>

				{/* Logout Button */}
				<div className="absolute bottom-8 left-0 right-0 px-6">
					<Link
						href="/admin"
						onClick={handleNavClick}
						className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
					>
						Logout
					</Link>
				</div>
			</div>

			{/* Main content */}
			<div className="flex-1 md:ml-0">
				{/* Mobile menu button */}
				<div className="md:hidden py-4">
					<button
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className="p-3 rounded-r-lg text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition duration-200 border border-blue-200"
					>
						<span className="text-2xl font-bold">›</span>
					</button>
				</div>

				{/* Page content */}
				<main className="p-6">
					{children}
				</main>
			</div>

			{/* Overlay for mobile */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={() => setSidebarOpen(false)}
				></div>
			)}
		</div>
	)
}

