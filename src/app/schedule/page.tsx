import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Coffee, FileText, Mic } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Conference Schedule</h1>
        <div className="w-20 h-1 bg-blue-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          Detailed agenda for the National Conference on Computer Innovations (NCCI) 2025, scheduled for August 24,
          2025.
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
          <Clock className="h-5 w-5" />
          <span className="font-medium">August 24, 2025</span>
        </div>
      </div>

      <Tabs defaultValue="all" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Sessions</TabsTrigger>
          <TabsTrigger value="keynotes">Keynotes</TabsTrigger>
          <TabsTrigger value="papers">Paper Presentations</TabsTrigger>
          <TabsTrigger value="panels">Panel Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-8">
            {/* Morning Sessions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Morning Sessions</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Registration and Welcome Kit</CardTitle>
                        <CardDescription>8:00 AM - 9:00 AM</CardDescription>
                      </div>
                      <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">Registration</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Entrance, CV Raman Building</span>
                    </div>
                    <p className="text-gray-700">
                      Collect your conference badge, welcome kit, and program schedule. Morning refreshments will be
                      available.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Inaugural Ceremony</CardTitle>
                        <CardDescription>9:00 AM - 9:30 AM</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Ceremony</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <p className="text-gray-700">
                      Welcome address by the Dean of School of Engineering, followed by the lighting of the lamp and
                      inaugural speeches.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Keynote: The Future of AI: Opportunities and Challenges</CardTitle>
                        <CardDescription>9:30 AM - 10:30 AM</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Mic className="h-4 w-4" />
                      <span>Dr. Rajesh Sharma, Stanford University</span>
                    </div>
                    <p className="text-gray-700">
                      An exploration of the current state and future directions of artificial intelligence, including
                      ethical considerations, technological advancements, and potential societal impacts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Coffee Break & Networking</CardTitle>
                        <CardDescription>10:30 AM - 11:00 AM</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Break</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Exhibition Hall</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Coffee className="h-4 w-4" />
                      <span>Refreshments provided</span>
                    </div>
                    <p className="text-gray-700">
                      Take a break, enjoy refreshments, and network with fellow attendees, speakers, and industry
                      representatives.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Keynote: Cybersecurity in the Age of Quantum Computing</CardTitle>
                        <CardDescription>11:00 AM - 12:00 PM</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Mic className="h-4 w-4" />
                      <span>Dr. Lisa Chen, TechGlobal Inc.</span>
                    </div>
                    <p className="text-gray-700">
                      An in-depth look at how quantum computing is reshaping the cybersecurity landscape, including
                      threats to current encryption methods and the development of quantum-resistant cryptography.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lunch Break */}
            <div>
              <Card className="bg-green-50 border-green-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Lunch Break</CardTitle>
                      <CardDescription>12:00 PM - 1:00 PM</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Break</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Dining Hall</span>
                  </div>
                  <p className="text-gray-700">
                    Enjoy a buffet lunch with a variety of options, including vegetarian and non-vegetarian dishes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Afternoon Sessions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Afternoon Sessions</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Panel Discussion: Cybersecurity Challenges in the Digital Age</CardTitle>
                        <CardDescription>1:00 PM - 2:00 PM</CardDescription>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Panel</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Users className="h-4 w-4" />
                      <span>Moderator: Dr. Thomas Wilson, ETH Zurich</span>
                    </div>
                    <p className="text-gray-700">
                      A panel of cybersecurity experts discuss current threats, defense strategies, and the evolving
                      landscape of digital security.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Keynote: Cloud Computing: Trends and Future Directions</CardTitle>
                        <CardDescription>2:00 PM - 3:00 PM</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Mic className="h-4 w-4" />
                      <span>Prof. David Kumar, MIT</span>
                    </div>
                    <p className="text-gray-700">
                      An overview of the latest developments in cloud computing, including serverless architectures,
                      edge computing, and multi-cloud strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Coffee Break & Poster Session</CardTitle>
                        <CardDescription>3:00 PM - 3:30 PM</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Break</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Exhibition Hall</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Coffee className="h-4 w-4" />
                      <span>Refreshments provided</span>
                    </div>
                    <p className="text-gray-700">
                      Enjoy refreshments while exploring poster presentations by researchers and students.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Keynote: Big Data Analytics: Extracting Value from Data</CardTitle>
                        <CardDescription>3:30 PM - 4:30 PM</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Mic className="h-4 w-4" />
                      <span>Dr. Sarah Johnson, Google Research</span>
                    </div>
                    <p className="text-gray-700">
                      A deep dive into the world of big data analytics, exploring techniques for data processing,
                      analysis, and visualization to derive meaningful insights.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Panel Discussion: Innovation and Entrepreneurship in Tech</CardTitle>
                        <CardDescription>4:30 PM - 5:30 PM</CardDescription>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Panel</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Users className="h-4 w-4" />
                      <span>Moderator: Prof. Maria Garcia, Technical University of Munich</span>
                    </div>
                    <p className="text-gray-700">
                      Industry leaders and successful entrepreneurs share their experiences and insights on fostering
                      innovation, building tech startups, and navigating the challenges of the competitive technology
                      market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Closing Session */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Closing Session</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Best Paper Awards & Closing Ceremony</CardTitle>
                        <CardDescription>5:30 PM - 6:00 PM</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Ceremony</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <FileText className="h-4 w-4" />
                      <span>Awards for best papers and presentations</span>
                    </div>
                    <p className="text-gray-700">
                      Recognition of outstanding papers and presentations, followed by closing remarks and announcement
                      of future events.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Networking Reception</CardTitle>
                        <CardDescription>6:00 PM - 7:30 PM</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Social</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Garden Area</span>
                    </div>
                    <p className="text-gray-700">
                      Join us for a farewell reception with light refreshments and networking opportunities. Connect
                      with speakers, fellow attendees, and industry representatives in a relaxed setting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="keynotes">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Keynote: The Future of AI: Opportunities and Challenges</CardTitle>
                    <CardDescription>9:30 AM - 10:30 AM</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>Dr. Rajesh Sharma, Stanford University</span>
                </div>
                <p className="text-gray-700">
                  An exploration of the current state and future directions of artificial intelligence, including
                  ethical considerations, technological advancements, and potential societal impacts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Keynote: Cybersecurity in the Age of Quantum Computing</CardTitle>
                    <CardDescription>11:00 AM - 12:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>Dr. Lisa Chen, TechGlobal Inc.</span>
                </div>
                <p className="text-gray-700">
                  An in-depth look at how quantum computing is reshaping the cybersecurity landscape, including threats
                  to current encryption methods and the development of quantum-resistant cryptography.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Keynote: Cloud Computing: Trends and Future Directions</CardTitle>
                    <CardDescription>2:00 PM - 3:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>Prof. David Kumar, MIT</span>
                </div>
                <p className="text-gray-700">
                  An overview of the latest developments in cloud computing, including serverless architectures, edge
                  computing, and multi-cloud strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Keynote: Big Data Analytics: Extracting Value from Data</CardTitle>
                    <CardDescription>3:30 PM - 4:30 PM</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>Dr. Sarah Johnson, Google Research</span>
                </div>
                <p className="text-gray-700">
                  A deep dive into the world of big data analytics, exploring techniques for data processing, analysis,
                  and visualization to derive meaningful insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="papers">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">Paper Presentation Sessions</h3>
              <p className="text-gray-700">
                Paper presentations are organized into parallel tracks. Each presenter will have 15 minutes for their
                presentation, followed by 5 minutes for questions and discussion.
              </p>
            </div>

            <h3 className="font-semibold text-lg mb-3">
              Track 1: Artificial Intelligence and Machine Learning (Room 101)
            </h3>
            <div className="space-y-3 mb-6">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">
                        Deep Learning Approaches for Natural Language Processing
                      </CardTitle>
                      <CardDescription>1:00 PM - 1:20 PM | Presenter: Amit Patel, IIT Delhi</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Reinforcement Learning for Autonomous Systems</CardTitle>
                      <CardDescription>
                        1:20 PM - 1:40 PM | Presenter: Dr. Sophia Lee, National University of Singapore
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Explainable AI: Methods and Applications</CardTitle>
                      <CardDescription>
                        1:40 PM - 2:00 PM | Presenter: Prof. Robert Chen, University of Toronto
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <h3 className="font-semibold text-lg mb-3">Track 2: Cybersecurity and Privacy (Room 102)</h3>
            <div className="space-y-3 mb-6">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Advanced Threat Detection Using Machine Learning</CardTitle>
                      <CardDescription>1:00 PM - 1:20 PM | Presenter: Dr. James Wilson, ETH Zurich</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Privacy-Preserving Techniques for Data Sharing</CardTitle>
                      <CardDescription>1:20 PM - 1:40 PM | Presenter: Dr. Elena Martinez, MIT</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Blockchain-Based Security Solutions for IoT</CardTitle>
                      <CardDescription>
                        1:40 PM - 2:00 PM | Presenter: Rahul Sharma, Kathmandu University
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <h3 className="font-semibold text-lg mb-3">Track 3: Cloud Computing and Distributed Systems (Room 103)</h3>
            <div className="space-y-3 mb-6">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Serverless Computing: Challenges and Opportunities</CardTitle>
                      <CardDescription>3:30 PM - 3:50 PM | Presenter: Dr. Michael Brown, AWS</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Edge Computing for Real-Time Applications</CardTitle>
                      <CardDescription>
                        3:50 PM - 4:10 PM | Presenter: Dr. Lisa Wang, Microsoft Research
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Multi-Cloud Strategies for Enterprise Applications</CardTitle>
                      <CardDescription>
                        4:10 PM - 4:30 PM | Presenter: Prof. David Kim, Stanford University
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <h3 className="font-semibold text-lg mb-3">Track 4: Internet of Things and Smart Systems (Room 104)</h3>
            <div className="space-y-3">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Smart City Infrastructure: Challenges and Solutions</CardTitle>
                      <CardDescription>
                        3:30 PM - 3:50 PM | Presenter: Dr. Anita Patel, University of Cambridge
                      </CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Energy-Efficient Protocols for IoT Networks</CardTitle>
                      <CardDescription>3:50 PM - 4:10 PM | Presenter: Priya Sharma, IIT Bombay</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">IoT Security: Threats and Countermeasures</CardTitle>
                      <CardDescription>4:10 PM - 4:30 PM | Presenter: Dr. Thomas Wilson, IBM Research</CardDescription>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Paper</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="panels">
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Panel Discussion: The Future of Computing: AI, Quantum, and Beyond</CardTitle>
                    <CardDescription>10:30 AM - 11:30 AM</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Panel</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Users className="h-4 w-4" />
                  <span>Moderator: Dr. Robert Kim, IBM Research</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This panel brings together experts from various fields to discuss the future directions of computing
                  technologies, including artificial intelligence, quantum computing, and emerging paradigms.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Panelists:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>Dr. Rajesh Sharma, Stanford University</li>
                    <li>Prof. Anita Patel, University of Cambridge</li>
                    <li>Dr. Elena Rodriguez, Microsoft Research</li>
                    <li>Prof. James Chen, National University of Singapore</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Panel Discussion: Cybersecurity Challenges in the Digital Age</CardTitle>
                    <CardDescription>1:00 PM - 2:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Panel</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Users className="h-4 w-4" />
                  <span>Moderator: Dr. Thomas Wilson, ETH Zurich</span>
                </div>
                <p className="text-gray-700 mb-4">
                  As digital technologies become increasingly integrated into our lives, this panel explores the
                  evolving cybersecurity landscape and strategies to protect individuals, organizations, and critical
                  infrastructure.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Panelists:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>Dr. Lisa Chen, TechGlobal Inc.</li>
                    <li>Dr. Michael Wong, University of Tokyo</li>
                    <li>Prof. Maria Garcia, Technical University of Munich</li>
                    <li>Dr. Alex Johnson, Meta Research</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Panel Discussion: Innovation and Entrepreneurship in Tech</CardTitle>
                    <CardDescription>4:30 PM - 5:30 PM</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Panel</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Users className="h-4 w-4" />
                  <span>Moderator: Prof. Maria Garcia, Technical University of Munich</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Industry leaders and successful entrepreneurs share their experiences and insights on fostering
                  innovation, building tech startups, and navigating the challenges of the competitive technology
                  market.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Panelists:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>Dr. Sarah Johnson, Google Research</li>
                    <li>Prof. David Kumar, MIT</li>
                    <li>Dr. Priya Sharma, Amazon Web Services</li>
                    <li>Dr. Michael Brown, AWS</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Schedule Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Venue Information</h3>
            <p className="text-gray-700 mt-1">
              All sessions will take place at the CV Raman Building, Kathmandu University, Dhulikhel, Kavre, Nepal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Schedule Updates</h3>
            <p className="text-gray-700 mt-1">
              The schedule is subject to change. Please check the conference website or mobile app for the most
              up-to-date information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Mobile App</h3>
            <p className="text-gray-700 mt-1">
              Download the NCCI 2025 mobile app for real-time schedule updates, speaker information, and networking
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
