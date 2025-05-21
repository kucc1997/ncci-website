"use client"

import { useState, useRef, useEffect } from "react"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { User, LogIn, Github } from "lucide-react"

export default function SignIn() {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        className="rounded-full p-2 hover:bg-blue-100 transition-colors"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="Sign In"
      >
        <User className="h-5 w-5 text-blue-500" />
      </Button>
      
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              Sign in to access your account
            </div>
            <Button 
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 justify-start rounded-none"
              onClick={() => signIn("github")}
            >
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
            <Button 
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 justify-start rounded-none"
              onClick={() => signIn("google")}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4"/>
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}