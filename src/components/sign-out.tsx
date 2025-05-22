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
        className="rounded-full p-2 hover:bg-blue-200 hover:scale-150 transition-all duration-200 ease-in-out"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="User Profile"
      >
        {session?.user?.image ? (
          <img 
            src={session.user.image} 
            alt="User Profile" 
            className="h-6 w-6 rounded-full border-2 border-white/30"
          />
        ) : (
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {userInitial}
          </div>
        )}
      </Button>
      
      {showDropdown && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-lg shadow-xl bg-white border border-gray-200 z-50 overflow-hidden">
          {/* User Info Header */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {session?.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt="User Profile" 
                  className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-medium border-2 border-white shadow-sm">
                  {userInitial}
                </div>
              )}
              <div className="flex-1 min-w-0">
                {session?.user?.name && (
                  <div className="text-sm font-semibold text-gray-800 truncate">
                    {session.user.name}
                  </div>
                )}
                {session?.user?.email && (
                  <div className="text-xs text-gray-600 truncate">
                    {session.user.email}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="p-2">
            <Button 
              variant="ghost"
              className="w-full flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 justify-start rounded-md mb-1 transition-colors"
              onClick={() => window.location.href = "/profile"}
            >
              <User className="mr-3 h-4 w-4" />
              Profile
            </Button>
            <Button 
              variant="ghost"
              className="w-full flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 justify-start rounded-md mb-1 transition-colors"
              onClick={() => window.location.href = "/submissions"}
            >
              <svg className="mr-3 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              My Submissions
            </Button>
            
            {/* Divider */}
            <div className="my-2 border-t border-gray-200"></div>
            
            <Button 
              variant="ghost"
              className="w-full flex items-center px-3 py-3 text-sm text-red-600 hover:bg-red-50 justify-start rounded-md transition-colors"
              onClick={() => signOut()}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}