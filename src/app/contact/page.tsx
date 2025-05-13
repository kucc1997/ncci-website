"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    console.log("Form submitted:", formData)
    alert("Message sent successfully! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-blue-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          Have questions about the National Conference on Computer Innovations (NCCI) 2025? Get in touch with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:ncci@ku.edu.np" className="text-blue-600 hover:underline">
                    ncci@ku.edu.np
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>+977-11-415100</p>
                  <p>+977-11-415101</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p>Kathmandu University</p>
                  <p>Department of Computer Science and Engineering</p>
                  <p>Dhulikhel, Kavre</p>
                  <p>Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p>Sunday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <a href="/registration" className="text-blue-600 hover:underline">
                  Registration Information
                </a>
              </p>
              <p>
                <a href="/authors" className="text-blue-600 hover:underline">
                  Paper Submission Guidelines
                </a>
              </p>
              <p>
                <a href="/schedule" className="text-blue-600 hover:underline">
                  Conference Schedule
                </a>
              </p>
              <p>
                <a href="/speakers" className="text-blue-600 hover:underline">
                  Keynote Speakers
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registration">Registration Inquiry</SelectItem>
                      <SelectItem value="paper">Paper Submission</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship Opportunity</SelectItem>
                      <SelectItem value="speaker">Speaker Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" onClick={handleSubmit}>
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
          {/* In a real application, this would be replaced with an actual map */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">Getting to Kathmandu University</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Kathmandu University is located in Dhulikhel, approximately 30 kilometers east of Kathmandu. Transportation
            options include public buses, taxis, and private vehicles. For international participants, we recommend
            arranging transportation through your hotel or contacting the conference organizers for assistance.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How can I register for the conference?</h3>
            <p className="text-gray-700 mt-1">
              You can register for the conference through our{" "}
              <a href="/registration" className="text-blue-600 hover:underline">
                registration page
              </a>
              . Early bird registration is available until June 30, 2025.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">What is the deadline for paper submission?</h3>
            <p className="text-gray-700 mt-1">
              The deadline for paper submission is June 15, 2025. Please refer to our{" "}
              <a href="/authors" className="text-blue-600 hover:underline">
                authors page
              </a>{" "}
              for detailed guidelines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Are there accommodation options near the conference venue?</h3>
            <p className="text-gray-700 mt-1">
              Yes, there are several hotels and guesthouses in Dhulikhel near Kathmandu University. We will provide a
              list of recommended accommodations to registered participants.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is there a dress code for the conference?</h3>
            <p className="text-gray-700 mt-1">
              Business casual attire is recommended for all conference sessions and events.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
