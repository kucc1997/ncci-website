import Image from "next/image";

export default function CommitteePage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Organizing Committee
				</h1>
				<div className="w-20 h-1 bg-blue-600 mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl">
					Meet the dedicated team behind the National Conference on Computer
					Innovations (NCCI) 2025.
				</p>
			</div>

			{/* Patron */}
			<div className="mb-16">
				<h2 className="text-2xl font-bold mb-8 text-center">Patron</h2>
				<div className="flex justify-center">
					<div className="text-center max-w-xs">
						<div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
							<Image
								src="/placeholder.svg?height=400&width=400"
								alt="Prof. Dr. John Doe"
								fill
								className="object-cover"
							/>
						</div>
						<h3 className="text-xl font-semibold">Prof. Dr. John Doe</h3>
						<p className="text-gray-600">Dean, School of Engineering</p>
						<p className="text-gray-600">Kathmandu University</p>
					</div>
				</div>
			</div>

			{/* Advisory Committee */}
			<div className="mb-16">
				<h2 className="text-2xl font-bold mb-8 text-center">
					Advisory Committee
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
					{[
						{
							name: "Dr. Jane Smith",
							position: "Head, DoCSE",
							affiliation: "Kathmandu University",
						},
						{
							name: "Prof. Robert Johnson",
							position: "Professor",
							affiliation: "Kathmandu University",
						},
						{
							name: "Dr. Emily Brown",
							position: "Associate Professor",
							affiliation: "Kathmandu University",
						},
						{
							name: "Prof. Michael Wilson",
							position: "Professor",
							affiliation: "Kathmandu University",
						},
					].map((member, index) => (
						<div key={index} className="text-center max-w-xs">
							<div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src={`/placeholder.svg?height=320&width=320&text=${index + 1}`}
									alt={member.name}
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-lg font-semibold">{member.name}</h3>
							<p className="text-gray-600">{member.position}</p>
							<p className="text-gray-600">{member.affiliation}</p>
						</div>
					))}
				</div>
			</div>

			{/* Organizing Committee */}
			<div className="mb-16">
				<h2 className="text-2xl font-bold mb-8 text-center">
					Organizing Committee
				</h2>

				{/* Conference Chair */}
				<div className="mb-12">
					<h3 className="text-xl font-semibold mb-6 text-center">
						Conference Chair
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/placeholder.svg?height=360&width=360"
									alt="Dr. Sarah Johnson"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
							<p className="text-gray-600">Associate Professor, DoCSE</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>
				</div>

				{/* Technical Program Committee */}
				<div className="mb-12">
					<h3 className="text-xl font-semibold mb-6 text-center">
						Technical Program Committee
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
						{[
							{
								name: "Dr. David Lee",
								position: "Committee Chair",
								affiliation: "Kathmandu University",
							},
							{
								name: "Prof. Lisa Wang",
								position: "Member",
								affiliation: "Kathmandu University",
							},
							{
								name: "Dr. Richard Chen",
								position: "Member",
								affiliation: "Kathmandu University",
							},
							{
								name: "Dr. Amanda Taylor",
								position: "Member",
								affiliation: "Kathmandu University",
							},
						].map((member, index) => (
							<div key={index} className="text-center max-w-xs">
								<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src={`/placeholder.svg?height=280&width=280&text=${index + 1}`}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.position}</p>
								<p className="text-gray-600">{member.affiliation}</p>
							</div>
						))}
					</div>
				</div>

				{/* Publication Committee */}
				<div className="mb-12">
					<h3 className="text-xl font-semibold mb-6 text-center">
						Publication Committee
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
						{[
							{
								name: "Dr. Thomas Brown",
								position: "Committee Chair",
								affiliation: "Kathmandu University",
							},
							{
								name: "Dr. Sophia Garcia",
								position: "Member",
								affiliation: "Kathmandu University",
							},
							{
								name: "Prof. James Wilson",
								position: "Member",
								affiliation: "Kathmandu University",
							},
							{
								name: "Dr. Olivia Martinez",
								position: "Member",
								affiliation: "Kathmandu University",
							},
						].map((member, index) => (
							<div key={index} className="text-center max-w-xs">
								<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src={`/placeholder.svg?height=280&width=280&text=${index + 1}`}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.position}</p>
								<p className="text-gray-600">{member.affiliation}</p>
							</div>
						))}
					</div>
				</div>

				{/* Student Volunteers */}
				<div>
					<h3 className="text-xl font-semibold mb-6 text-center">
						Student Volunteers (KUCC)
					</h3>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
						{[
							{ name: "John Smith", position: "President, KUCC" },
							{ name: "Emily Johnson", position: "Vice President, KUCC" },
							{ name: "Michael Brown", position: "Secretary, KUCC" },
							{ name: "Jessica Lee", position: "Treasurer, KUCC" },
							{ name: "David Wilson", position: "Member, KUCC" },
							{ name: "Sarah Garcia", position: "Member, KUCC" },
							{ name: "Robert Chen", position: "Member, KUCC" },
							{ name: "Amanda Taylor", position: "Member, KUCC" },
							{ name: "Thomas Martinez", position: "Member, KUCC" },
							{ name: "Sophia Anderson", position: "Member, KUCC" },
							{ name: "James Jackson", position: "Member, KUCC" },
							{ name: "Olivia White", position: "Member, KUCC" },
						].map((member, index) => (
							<div key={index} className="text-center max-w-xs">
								<div className="relative w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-blue-100">
									<Image
										src={`/placeholder.svg?height=200&width=200&text=${index + 1}`}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-base font-medium">{member.name}</h3>
								<p className="text-sm text-gray-600">{member.position}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
