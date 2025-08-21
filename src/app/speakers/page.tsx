import { MapPin, Mic } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SpeakersPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">
          Keynote Speakers
        </h1>
        <div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
        <p className="text-lg text-[var(--bg-secondary-dark)] max-w-3xl">
          Meet our distinguished keynote speakers who will share their expertise and insights at NCCI 2025.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="keynotes" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
			<TabsTrigger value="guests">Guests</TabsTrigger>
          <TabsTrigger value="keynotes">Keynotes</TabsTrigger>
        </TabsList>

        {/* Guests Tab */}
        <TabsContent value="guests">
          <div className="space-y-6">
            {/* Chief Guest */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Chief Guest
                    </CardTitle>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Guest
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-medium">
                  Prof. Dr. Achyut Prasad Wagle
                </p>
                <p className="text-gray-600">
                  Vice Chancellor,<br />Kathmandu University
                </p>
              </CardContent>
            </Card>

            {/* Special Guest */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Special Guest
                    </CardTitle>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Guest
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-medium">Dr. Subarna Shakya</p>
                <p className="text-gray-600">
                  Professor of Computer Engineering,<br />
                  Department of Electronics and Computer Engineering,<br />
                  Pulchowk Campus, Institute of Engineering
                </p>
              </CardContent>
            </Card>

            {/* Guests */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      Guests
                    </CardTitle>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Guests
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Prof. Dr. Manish Pokharel</span> — Dean, School of Engineering, Kathmandu University
                  </li>
                  <li>
                    <span className="font-medium">Prof. Dr. Bed Mani Dahal</span> — Dean, School of Science, Kathmandu University
                  </li>
                  <li>
                    <span className="font-medium">Sailesh Chitrakar, PhD.</span> — KUSET Co Editor-in-Chief
                  </li>
                  <li>
                    <span className="font-medium">Assoc. Prof. Brijesh Adhikary</span> — KU RDI Acting Director
                  </li>
                  <li>
                    <span className="font-medium">Prof. Dr. Ujjwol Man Joshi</span> — Associate Dean, School of Science, Kathmandu University
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Keynotes Tab */}
        <TabsContent value="keynotes">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-4 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 leading-snug">
                      Keynote: Strategic AI
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm font-medium text-gray-500">
                      Building Nepal’s Secure, Sovereign, and Sustainable Digital Economy
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition">
                    Keynote
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>CV Raman Hall</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>
                    Prof. Dr. Sudan Jha, Department of Computer Science and Engineering, Kathmandu University, Nepal
                  </span>
                </div>
                <p className="text-gray-700">
                  In the global AI race, nations face a pivotal choice: consume imported technology or architect a sovereign
                  digital future. This keynote advocates for a strategic, homegrown approach to Artificial Intelligence as the
                  foundation of Nepal’s next economic chapter. We will outline a concrete framework to leverage Nepal’s unique
                  hydropower and climate advantages for building a sustainable, secure AI infrastructure. The address will then
                  delve into AI’s transformative impact from core sectors to accelerating scientific research and innovation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 leading-snug">
                      Keynote: Beyond Interference
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm font-medium text-gray-500">
                      AI2XPR: AI-Enabled Interference-Resilience Next Generation Photonics Radar
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition">
                    Keynote
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>CV Raman Hall</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mic className="h-4 w-4" />
                  <span>
                    Prof. Dr. Bikash Nakarmi, Department of Computer Science and Engineering, Kathmandu University, Nepal
                  </span>
                </div>
                <p className="text-gray-700">
                  The rapid advancements in Artificial Intelligence (AI) and Microwave Photonics (MWP) are changing industries by
                  enhancing performance, efficiency, and reliability across secure communications, satellite systems, autonomous
                  systems, and radar. This keynote introduces AI2XPR, an AI-powered, photonics-based radar system that delivers
                  next-generation detection with enhanced accuracy, resilience, and efficiency at minimal computational load. As
                  radar operates in congested bands, mitigating interference (improving SINR) and enhancing target detection
                  (improving range resolution) are critical. AI2XPR combines photonics-based signal processing, robust waveform
                  generation (RWG), high-bandwidth and multi-band operation, and AI for real-time interference recognition and
                  mitigation—ensuring interference-resilient performance. It will cover radar foundations, photonics radar features,
                  and how AI2XPR shapes resilient sensing in complex multi-radar environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
