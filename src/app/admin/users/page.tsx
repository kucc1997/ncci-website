"use client"
import { useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: string
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [promoteEmail, setPromoteEmail] = useState("")
  const [promoting, setPromoting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/users")
        const result = await res.json()
        if (!result.success) throw new Error(result.data)
        setUsers(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users")
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [success])

  const handlePromote = async () => {
    setPromoting(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await fetch(`/api/users/promote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: promoteEmail })
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.data)
      setSuccess(`${promoteEmail} is now an admin!`)
      setPromoteEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to promote user")
    } finally {
      setPromoting(false)
    }
  }

  const filteredUsers = users.filter(u =>
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.name?.toLowerCase().includes(search.toLowerCase())
  )
  const admins = users.filter(u => u.role === "admin")

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin User Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by email or name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full max-w-md"
        />
      </div>
      {loading ? (
        <div className="p-8 text-center">Loading...</div>
      ) : (
        <>
          {success && <div className="p-2 text-green-600">{success}</div>}
          <h2 className="text-lg font-semibold mt-6 mb-2">Current Admins</h2>
          <table className="min-w-full divide-y divide-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{admin.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">{admin.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-2">
            <input
              type="email"
              placeholder="Enter user email to promote to admin"
              value={promoteEmail}
              onChange={e => setPromoteEmail(e.target.value)}
              className="border px-3 py-2 rounded w-full md:w-auto"
            />

            <button
              onClick={handlePromote}
              disabled={promoting || !promoteEmail}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {promoting ? "Promoting..." : "Add as Admin"}
            </button>
            {error ? (
              <div className="bg-red-200 p-2 rounded">
                Error adding user as admin!
              </div>
            ) :
              (<div></div>)}
          </div>
          <h2 className="text-lg font-semibold mb-2">All Users</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
} 
