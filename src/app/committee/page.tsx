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
							<p className="text-gray-600">Dean, School of Engineering</p>
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
								<p className="text-gray-600">Head, Department of Computer Science and Engineering,</p>
								<p className="text-gray-600">Kathmandu University</p>
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
						<h3 className="text-xl font-semibold">Finance & Logistics Coordinator</h3>
						<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
							<Image
									src="/oc/prgiri.jpg"
									alt="Logistics Coordinator"
									fill
									className="object-cover"
									style={{ objectPosition: 'center' }}
							/>
							</div>
								<h3 className="text-xl font-semibold">Pratit Raj Giri</h3>
								<p className="text-gray-600">Lecturer, DoCSE</p>
								<p className="text-gray-600">Kathmandu University</p>
							</div>
					</div>
				</div>

			<div className="mb-16">
				{/* Conference Chair */}
					<div className="my-12">
						<h3 className="text-3xl font-semibold mb-6 text-center">Conference Committees</h3>
						<h3 className="text-3xl font-semibold mb-6 text-center">Conference Advisory Committee</h3>

				<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
						
						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/advisory/mpokharel.png"
									alt="Prof. Dr. Manish Pokharel"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Prof. Dr. Manish Pokharel</h3>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/advisory/sjha.png"
									alt="Prof. Dr. Sudan Jha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Prof. Dr. Sudan Jha</h3>
							<p className="text-gray-600">Professor</p>
							<p className="text-gray-600">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>


						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/advisory/rbista.png"
										alt="Prof. Dr. Rabindra Bista"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Prof. Dr. Rabindra Bista</h3>
								<p className="text-gray-600">Professor</p>
								<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
								<p className="text-gray-600">Kathmandu University</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/advisory/bnakarmi.jpeg"
										alt="Prof. Dr. Bikash Nakarmi"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Prof. Dr. Bikash Nakarmi</h3>
								<p className="text-gray-600">Professor</p>
								<p className="text-gray-600 max-w-60">Nanjing University of Aeronautics and Astronautics</p>
								<p className="text-gray-600">China</p>
							</div>
						</div>


					</div>
			
				</div>
				
				<h3 className="text-3xl font-semibold mb-6 text-center">Technical Program Committee</h3>
				</div>

					{/* First Row */}
				<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
					<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
				
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
							<p className="text-gray-600">Associate Professor</p>
							<p className="text-gray-600 max-w-60">Department of Artificial Intelligence</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

							<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/sshrestha.png"
									alt="Dr. Sushil Shrestha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Dr. Sushil Shrestha</h3>
							<p className="text-gray-600">Associate Professor</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
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


						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/rchulyadyo.png"
										alt="Dr. Rajani Chulyadyo"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Dr. Rajani Chulyadyo</h3>
								<p className="text-gray-600">Assistant Professor</p>
								<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
								<p className="text-gray-600">Kathmandu University</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/ggautam.jpeg"
										alt="Dr. Ganesh Gautam"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Dr. Ganesh Gautam</h3>
								<p className="text-gray-600">Assistant Professor</p>
								<p className="text-gray-600 max-w-60">Institute of Engineering Pulchowk Campus</p>
								<p className="text-gray-600">Tribhuvan University</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/brghimire.jpeg"
										alt="Dr. Bhoj Raj Ghimire"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Dr. Bhoj Raj Ghimire</h3>
								<p className="text-gray-600">Assistant Professor</p>
								<p className="text-gray-600 max-w-60">Nepal Open University</p>
			
							</div>
						</div>
						
						<div className="flex flex-col sm:flex-row gap-12 justify-center mb-12 flex-wrap">
							<div className="text-center sm:max-w-xs">
								<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
									<Image
										src="/oc/aadeshnpn.jpeg"
										alt="Dr. Aadesh Neupane"
										fill
										className="object-cover"
										style={{ objectPosition: 'top' }}
									/>
								</div>
								<h3 className="text-xl font-semibold">Dr. Aadesh Neupane</h3>
								<p className="text-gray-600">PhD in Computer Science</p>
								<p className="text-gray-600 max-w-60">Brigham Young University</p>
								<p className="text-gray-600">Utah, USA</p>
							</div>
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
									src="/oc/stamrakar.jpg"
									alt="Sameer Tamrakar"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Sameer Tamrakar</h3>
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
									src="/oc/pkarki.png"
									alt="Nabin Ghimire"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Praynita Karki</h3>
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
							<h3 className="text-xl font-semibold">Amrit Dahal</h3>
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

												<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/ssingh.jpeg"
									alt="Saugat Singh"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Saugat Singh</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/gsubedi.png"
									alt="Gobinda Subedi"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Gobinda Subedi</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/sregmi.jpeg"
									alt="Sunil Regmi"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Sunil Regmi</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Artificial Intelligence</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/sacharya.png"
									alt="Sagar Archarya"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Sagar Acharya</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/bsubedi.png"
									alt="Bipesh Subedi"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Bipesh Subedi</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/pdhakal.jpeg"
									alt="Prakriti Dhakal"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Prakriti Dhakal</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>

						<div className="text-center sm:max-w-xs">
							<div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
								<Image
									src="/oc/sshaha.png"
									alt="Santosh Shaha"
									fill
									className="object-cover"
									style={{ objectPosition: 'top' }}
								/>
							</div>
							<h3 className="text-xl font-semibold">Santosh Shaha</h3>
							<p className="text-gray-600">Lecturer</p>
							<p className="text-gray-600 max-w-60">Department of Computer Science and Engineering</p>
							<p className="text-gray-600">Kathmandu University</p>
						</div>




					</div>
			
				</div>

			</div>
		</div>
	);
}

