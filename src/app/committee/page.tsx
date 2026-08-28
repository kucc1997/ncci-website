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
					Innovations (NCCI) 2026.
				</p>
			</div>

			{/* Organizing Committee */}
			<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
			<div className="text-center sm:max-w-xs">
							<h3 className="text-xl font-semibold">Conference Chair</h3>
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/BalSir.webp"
									alt="Dr. Bal Krishna Bal"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Prof. Dr. Bal Krishna Bal</h3>
							<p className="text-gray-600">Associate Dean, School of Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<h3 className="text-xl font-semibold">Publication Chair</h3>
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
						<div className="text-center sm:max-w-xs">
							<h3 className="text-xl font-semibold">Conference Convener</h3>
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
								<p className="text-gray-600">Associate Professor</p>
								<p className="text-gray-600">Head Of Department</p>
								<p className="text-gray-600">DoCSE, Kathmandu University</p>
						</div>
					</div>


			<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
				<div className="text-center sm:max-w-xs">
					<div className="text-center sm:max-w-xs">
						<h3 className="text-xl font-semibold">Technical Coordinator</h3>
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

					<div className="text-center sm:max-w-xs">
					<div className="text-center sm:max-w-xs">
						<h3 className="text-xl font-semibold">Logistics Coordinator</h3>
						<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
							<Image
									src="/oc/profile.png"
									alt="Logistics Coordinator"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
							/>
							</div>
								<h3 className="text-xl font-semibold">TBA</h3>
								<p className="text-gray-600">DoCSE</p>
								<p className="text-gray-600">Kathmandu University</p>
							</div>
					</div>

					<div className="text-center sm:max-w-xs">
					<div className="text-center sm:max-w-xs">
						<h3 className="text-xl font-semibold">Finance Coordinator</h3>
						<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
							<Image
									src="/oc/profile.png"
									alt="Finance Coordinator"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
							/>
							</div>
								<h3 className="text-xl font-semibold">TBA</h3>
								<p className="text-gray-600">DoCSE</p>
								<p className="text-gray-600">Kathmandu University</p>
							</div>
					</div>

					<div className="text-center sm:max-w-xs">
						<div className="text-center sm:max-w-xs">
							<h3 className="text-xl font-semibold"> Coordinator</h3>
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
										src="/oc/profile.png"
										alt="Logistics Coordinator"
										fill
										className="object-cover"
										style={{ objectPosition: 'center' }}
								/>
								</div>
									<h3 className="text-xl font-semibold">TBA</h3>
									<p className="text-gray-600">DoCSE</p>
									<p className="text-gray-600">Kathmandu University</p>
						</div>
					</div>


				</div>
			<div className="mb-16">
				{/* Conference Chair */}
					<div className="my-12">
						<h3 className="text-3xl font-semibold mb-6 text-center">Conference Committees</h3>
						<h3 className="text-3xl font-semibold mb-6 text-center">Technical Program Committee (TPC)</h3>
					</div>
					{/* First Row */}
					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/profile.png"
									alt="Profile"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">TBD</h3>
							<p className="text-gray-600"><b>TPC Chair, Professor</b></p>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600 max-w-60">College of Electronic and Engineering</p>
							<p className="text-gray-600">Nepal</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/profile.png"
									alt="Profile"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">TBD</h3>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600 max-w-60">College of Electronic and Engineering</p>
							<p className="text-gray-600">Nepal</p>
						</div>

					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/profile.png"
									alt="Profile"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">TBD</h3>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600 max-w-60">College of Electronic and Engineering</p>
							<p className="text-gray-600">Nepal</p>
						</div>
				</div>
				

						{/* <div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/AmanShakya.webp"
									alt="Aman Shakya, PhD"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Aman Shakya, PhD</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Electronics and Computer Engineering</p>
							<p className="text-gray-600">Pulchowk Campus </p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/ManojShakya.webp"
									alt="Dr. Manoj Shakya"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Manoj Shakya</h3>
							<p className="text-gray-600">Acting Head</p>
							<p className="text-gray-600 max-w-60">Department of Artificial Intelligence</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/PrakashPoudyal.webp"
									alt="Dr. Prakash Poudyal"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Prakash Poudyal</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600">Researcher, ILPRL</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/DhirajShrestha.webp"
									alt="Dhiraj Shrestha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dhiraj Shrestha</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SushilNepal.webp"
									alt="Sushil Nepal"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Sushil Nepal</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/NabinGhimire.webp"
									alt="Nabin Ghimire"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Nabin Ghimire</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/TrailokyaRajOjha.webp"
									alt="Trailokya Raj Ojha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Trailokya Raj Ojha</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/AmritDahal.webp"
									alt="Mr. Amrit Dahal"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Mr. Amrit Dahal</h3>
							<p className="text-gray-600">Assistant Professor</p>
							<p className="text-gray-600 max-w-60">Department of Artificial Intelligence</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SumanShrestha.webp"
									alt="Suman Shrestha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Suman Shrestha</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/SubhadraJoshi.webp"
									alt="Subhadra Joshi"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Subhadra Joshi</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div> 
						 */}
						</div>
			
												</div>

					</div>
				</div>
	);
}

