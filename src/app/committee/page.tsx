import Image from "next/image";

export default function CommitteePage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">
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
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600">Associate Dean, School of Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>

					{/* Advisor */}
					<div className="my-12">
						<h3 className="text-3xl font-semibold mb-6 text-center">
							Advisor
						</h3>
					</div>
					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12">
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SudanJha.jpg"
									alt="Dr. Sudan Jha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Sudan Jha</h3>
							<p className="text-gray-600">Professor and Lead Researcher</p>
							<p className="text-gray-600">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University, Nepal</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SushilStha.webp"
									alt="Dr. Sushil Shrestha"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Sushil Shrestha</h3>
							<p className="text-gray-600">Associate Professor</p>
							<p className="text-gray-600">Lead, Digital Learning Research Lab</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>

					{/* Publication Chair */}
					<h3 className="text-3xl font-semibold mb-6 text-center">
						Publication Chair
					</h3>
					<div className="flex justify-center">
						<div className="text-center max-w-xs mb-12">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/GajendraSharma.jpg"
									alt="Gajendra Sharma, PhD."
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Gajendra Sharma, PhD.</h3>
							<p className="text-gray-600">Professor of Computer Engineering</p>
							<p className="text-gray-600">Department of Computer Science and Engineering, Kathmandu University</p>
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
										alt="Er. Pankaj Raj Dawadi, PhD."
										fill
										className="object-cover"
										style={{ objectPosition: 'center' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Er. Pankaj Raj Dawadi, PhD.</h3>
								<p className="text-gray-600">Assistant Professor</p>
								<p className="text-gray-600">Acting Head Of Department</p>
								<p className="text-gray-600">DoCSE, Kathmandu University</p>
							</div>
						</div>
					</div>

					{/* Technical Program Committee */}
					<div className="my-12">
						<h3 className="text-3xl font-semibold mb-6 text-center">
							Technical Program Committee
						</h3>
					</div>
					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12">
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/BikashNakarmi.webp"
									alt="Dr. Bikash Nakarmi"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Bikash Nakarmi</h3>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600 max-w-50">College of Electronic and Information Engineering</p>
							<p className="text-gray-600">NUAA, China</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/BasantaJoshi.webp"
									alt="Dr. Basanta Joshi"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Basanta Joshi</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Electronics and Computer Engineering</p>
							<p className="text-gray-600">Pulchowk Campus </p>
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
								<p className="text-gray-600">Student</p>
								<p className="text-gray-600">KU, DoCSE</p>
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
								<p className="text-gray-600">Student</p>
								<p className="text-gray-600">KU, DoCSE</p>
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
								<p className="text-gray-600">Student</p>
								<p className="text-gray-600">KU, DoCSE</p>
							</div>
						</div>
					</div>
					<div className="mb-16">

						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Web Development Committee
							</h3>
							<div className="flex justify-center">
								{[
									{
										name: "Ashwini Subedi",
										position: "Committee Head",
										affiliation: "KU, DoCSE",
										image: "/oc/Ashwini.webp"
									},
									{
										name: "Shreejan Prasad Karmacharya",
										position: "Member",
										affiliation: "KU, DoCSE",
										image: "/oc/ShreejanKarmacharya.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600 max-w-50">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>
						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Logistics Committee
							</h3>
							<div className="flex justify-center">
								{[
									{
										name: "Saroj Sigdel",
										position: "Student",
										affiliation: "KU, DoCSE",
										image: "/oc/SarojSigdel.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Design Committee
							</h3>
							<div className="flex justify-center gap-12">
								{[
									{
										name: "Avipsa Hamo",
										position: "Committee Head",
										affiliation: "Student, KU DoCSE",
										image: "/oc/AvipsaHamo.webp"
									},
									{
										name: "Sakshi KC",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/SakshiKC.webp"
									},
									{
										name: "Prabal Shakya",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/PrabalShakya.webp"
									},
									{
										name: "Subhechha Karki",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/SubhechhaKarki.webp"
									},
									{
										name: "Shubham Sharma",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/ShubhamSharma.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600 max-w-50 mx-auto">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>
						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Digital Marketing Committee
							</h3>
							<div className="flex justify-center gap-12">
								{[
									{
										name: "Aakriti Pandey",
										position: "Committee Head",
										affiliation: "Student, KU DoCSE",
										image: "/oc/AakritiPandey.webp"
									},
									{
										name: "Aatmiyata Pokhrel",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/AatmiyataPokhrel.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600 max-w-50 mx-auto">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Physical Marketing Committee
							</h3>
							<div className="flex justify-center gap-12">
								{[
									{
										name: "Kiran Dahal",
										position: "Committee Head",
										affiliation: "Student, KU DoCSE",
										image: "/oc/KiranDahal.webp"
									},
									{
										name: "Abhinav Bhatt",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/AbhinavBhatt.webp"
									},
									{
										name: "Sameer singh",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/SameerSingh.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600 max-w-50 mx-auto">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>
						<div className="mb-12">
							<h3 className="text-3xl font-semibold mb-6 text-center">
								Sponsorship Committee
							</h3>
							<div className="flex justify-center gap-12">
								{[
									{
										name: "Lawan Poudyal",
										position: "Committee Head",
										affiliation: "Student, KU DoCSE",
										image: "/oc/LawanPoudyal.webp"
									},
									{
										name: "Bishist Bikram Pant",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/BishistBPant.webp"
									},
									{
										name: "Nischal Subedi",
										position: "Member",
										affiliation: "Student, KU DoCSE",
										image: "/oc/NischalSubedi.webp"
									},
								].map((member, index) => (
									<div key={index} className="text-center max-w-xs">
										<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												style={{ objectPosition: 'center' }}
											/>
										</div>
										<h3 className="text-xl font-semibold">{member.name}</h3>
										<p className="text-gray-600">{member.position}</p>
										<p className="text-gray-600 max-w-50 mx-auto">{member.affiliation}</p>
									</div>
								))}
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

