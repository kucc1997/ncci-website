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

			{/* Organizing Committee */}
			<div className="mb-16">

				{/* Conference Chair */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Conference Chair
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/BalSir.webp"
									alt="Dr. Bal Krishna Bal"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Bal Krishna Bal</h3>
							<p className="text-gray-600">Professor, Computer Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>
				</div>

				{/* Convener */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Convener
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/PankajDawadi.webp"
									alt="Pankaj Raj Dawadi"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Pankaj Raj Dawadi</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>
				</div>


				{/* Technical Coordinator */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Technical Coordinator
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SanjogSigdel.webp"
									alt="Sanjog Sigdel"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Sanjog Sigdel</h3>
							<p className="text-gray-600">Lecturer, DoCSE</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>
				</div>

				{/* Conference Coordinator */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Conference Coordinator
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/AbhiyanDhakal.webp"
									alt=""
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Abhiyan Dhakal</h3>
							<p className="text-gray-600">President</p>
							<p className="text-gray-600">KUCC</p>
						</div>
					</div>
				</div>


				{/* Conference Secretary */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Conference Secretary
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/MukulAryal.webp"
									alt="Mukul Aryal"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Mukul Aryal</h3>
							<p className="text-gray-600">General Secretary</p>
							<p className="text-gray-600">KUCC</p>
						</div>
					</div>
				</div>

				{/* Conference Treasurer */}
				<div className="mb-12">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Conference Treasurer
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SuyogGhimire.webp"
									alt="Suyog Ghimire"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Suyog Ghimire</h3>
							<p className="text-gray-600">Treasurer</p>
							<p className="text-gray-600">KUCC</p>
						</div>
					</div>
				</div>
				<div className="mb-16">
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Student Committee
					</h3>

					{/* Technical Committee */}
					<div className="mb-12">
						<h3 className="text-xl font-semibold mb-6 text-center">
							Technical Committee
						</h3>
						<div className="flex justify-center">
							{[
								{
									name: "Ashwini Subedi",
									position: "Coordinator",
									affiliation: "KUOSC",
									image: "/oc/Ashwini.webp"
								},
							].map((member, index) => (
								<div key={index} className="text-center max-w-xs">
									<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover"
											style={{ objectPosition: 'center' }}
										/>
									</div>
									<h3 className="text-lg font-semibold">{member.name}</h3>
									<p className="text-gray-600">{member.position}</p>
									<p className="text-gray-600">{member.affiliation}</p>
								</div>
							))}
						</div>
					</div>
					{/* Logistics Committee */}
					<div className="mb-12">
						<h3 className="text-xl font-semibold mb-6 text-center">
							Logistics Committee
						</h3>
						<div className="flex justify-center">
							{[
								{
									name: "Saroj Sigdel",
									position: "Vice President",
									affiliation: "KUCC",
									image: "/oc/SarojSigdel.webp"
								},
							].map((member, index) => (
								<div key={index} className="text-center max-w-xs">
									<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100">
										<Image
											src={member.image}

											alt={member.name}
											fill
											className="object-cover"
											style={{ objectPosition: 'center' }}
										/>
									</div>
									<h3 className="text-lg font-semibold">{member.name}</h3>
									<p className="text-gray-600">{member.position}</p>
									<p className="text-gray-600">{member.affiliation}</p>
								</div>
							))}
						</div>
					</div>



					{/* 	{/* Design Committee 
						{/* 	<div className="mb-12"> */}
					{/* 		<h3 className="text-xl font-semibold mb-6 text-center"> */}
					{/* 			Design Committee */}
					{/* 		</h3> */}
					{/* 		<div className="flex justify-center gap-10"> */}
					{/* 			{[ */}
					{/* 				{ */}
					{/* 					name: "Avipsa Hamo", */}
					{/* 					position: "Design Coordinator", */}
					{/* 					affiliation: "KUCC", */}
					{/* 				}, */}
					{/* 				{ */}
					{/* 					name: "Sakshi KC", */}
					{/* 					position: "Club Secretary", */}
					{/* 					affiliation: "KUCC", */}
					{/* 				}, */}
					{/* 			].map((member, index) => ( */}
					{/* 				<div key={index} className="text-center max-w-xs"> */}
					{/* 					<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100"> */}
					{/* 						<Image */}
					{/* 							src={`/placeholder.svg?height=280&width=280&text=${index + 1}`} */}
					{/* 							alt={member.name} */}
					{/* 							fill */}
					{/* 							className="object-cover" */}
					{/* 							style={{ objectPosition: 'center' }} */}
					{/* 						/> */}
					{/* 					</div> */}
					{/* 					<h3 className="text-lg font-semibold">{member.name}</h3> */}
					{/* 					<p className="text-gray-600">{member.position}</p> */}
					{/* 					<p className="text-gray-600">{member.affiliation}</p> */}
					{/* 				</div> */}
					{/* 			))} */}
					{/* 		</div> */}
					{/* 	</div> */}
					{/* 	{/* Marketing Committee */}
					{/* 	<div className="mb-12"> */}
					{/* 		<h3 className="text-xl font-semibold mb-6 text-center"> */}
					{/* 			Marketing Committee */}
					{/* 		</h3> */}
					{/* 		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"> */}
					{/* 			{[ */}
					{/* 				{ */}
					{/* 					name: "Aakriti Pandey", */}
					{/* 					position: "Committee Chair", */}
					{/* 					affiliation: "Kathmandu University", */}
					{/* 				}, */}
					{/* 				{ */}
					{/* 					name: "Aatmiyata ", */}
					{/* 					position: "Member", */}
					{/* 					affiliation: "Kathmandu University", */}
					{/* 				}, */}
					{/* 				{ */}
					{/* 					name: "Dr. Jessica Rodriguez", */}
					{/* 					position: "Member", */}
					{/* 					affiliation: "Kathmandu University", */}
					{/* 				}, */}
					{/* 				{ */}
					{/* 					name: "Dr. Kevin Anderson", */}
					{/* 					position: "Member", */}
					{/* 					affiliation: "Kathmandu University", */}
					{/* 				}, */}
					{/* 			].map((member, index) => ( */}
					{/* 				<div key={index} className="text-center max-w-xs"> */}
					{/* 					<div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-blue-100"> */}
					{/* 						<Image */}
					{/* 							src={`/placeholder.svg?height=280&width=280&text=${index + 1}`} */}
					{/* 							alt={member.name} */}
					{/* 							fill */}
					{/* 							className="object-cover" */}
					{/* 							style={{ objectPosition: 'center' }} */}
					{/* 						/> */}
					{/* 					</div> */}
					{/* 					<h3 className="text-lg font-semibold">{member.name}</h3> */}
					{/* 					<p className="text-gray-600">{member.position}</p> */}
					{/* 					<p className="text-gray-600">{member.affiliation}</p> */}
					{/* 				</div> */}
					{/* 			))} */}
					{/* </div> */}
					{/* </div> */}

				</div>
			</div>
		</div>
	);
}

