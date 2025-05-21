"use client"

import { useState, useRef, useEffect } from "react"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { User, LogOut } from "lucide-react"
import { useSession } from "next-auth/react"

export default function SignOut() {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const userInitial = session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        className="rounded-full p-2 hover:bg-blue-100 transition-colors"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="User Profile"
      >
        {session?.user?.image ? (
          <img 
            src={session.user.image} 
            alt="User Profile" 
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {userInitial}
          </div>
        )}
      </Button>
      
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {session?.user?.name && (
              <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b">
                {session.user.name}
              </div>
            )}
            {session?.user?.email && (
              <div className="px-4 py-2 text-xs text-gray-500 border-b truncate">
                {session.user.email}
              </div>
            )}
            <Button 
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 justify-start rounded-none"
              onClick={() => window.location.href = "/profile"}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button 
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 justify-start rounded-none"
              onClick={() => window.location.href = "/submissions"}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              My Submissions
            </Button>
            <hr className="my-1" />
            <Button 
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 justify-start rounded-none"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}