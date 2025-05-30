import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
	return (
		<footer className="bg-gray-900 text-gray-300 dark:bg-[var(--bg-accent)]">
			<div className="container px-4 md:px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<Link href="/" className="flex items-center gap-2 mb-4">
							<Image
								src="/ncci-dark.svg"
								alt="NCCI Logo"
								width={160}
								height={160}
							/>
							<div className="font-bold text-xl text-white">2025</div>
						</Link>
						<p className="text-sm text-[var(--bg-secondary)] mb-4">
							National Conference on Computer Innovations, organized by
							Kathmandu University Computer Club in collaboration with the
							Department of Computer Science and Engineering.
						</p>
						<div className="flex gap-4">
							<a
								href="https://www.facebook.com/kucc1997"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Facebook className="h-5 w-5" />
								<span className="sr-only">Facebook</span>
							</a>
							<a
								href="https://x.com/kucc1997"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</a>
							<a
								href="https://www.linkedin.com/school/kucc/"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</a>
						</div>
					</div>

					<div>
						<h3 className="font-semibold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/committee"
									className="hover:text-white transition-colors"
								>
									Committee
								</Link>
							</li>
							<li>
								<Link
									href="/registration"
									className="hover:text-white transition-colors"
								>
									Registration
								</Link>
							</li>
							<li>
								<Link
									href="/authors"
									className="hover:text-white transition-colors"
								>
									Authors
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-white mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/speakers"
									className="hover:text-white transition-colors"
								>
									Speakers
								</Link>
							</li>
							<li>
								<Link
									href="/timeline"
									className="hover:text-white transition-colors"
								>
									Timeline
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
							{/* <li>
								<a href="#" className="hover:text-white transition-colors">
									FAQs
								</a>
							</li> */}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-white mb-4">Contact Us</h3>
						<address className="not-italic">
							<p className="mb-2">Kathmandu University</p>
							<p className="mb-2">Dhulikhel, Kavre</p>
							<p className="mb-2">Nepal</p>
							<p className="flex items-center gap-2 mb-2">
								<Mail className="h-4 w-4" />
								<a
									href="mailto:kucc@ku.edu.np"
									className="hover:text-white transition-colors"
								>
									kucc@ku.edu.np
								</a>
							</p>
						</address>
					</div>
				</div>

				<div className="border-t border-gray-500 mt-12 pt-6 text-sm text-center">
					<p>
						&copy; {new Date().getFullYear()} National Conference on Computer
						Innovations. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
