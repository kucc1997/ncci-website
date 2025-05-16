"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Committee", href: "/committee" },
		{ name: "Registration", href: "/registration" },
		{ name: "Authors", href: "/authors" },
		{ name: "Speakers", href: "/speakers" },
		{ name: "Schedule", href: "/schedule" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/placeholder.svg?height=40&width=40"
						alt="NCCI Logo"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<div className="font-bold text-xl">NCCI 2025</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-6">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-medium transition-colors hover:text-blue-600"
						>
							{item.name}
						</Link>
					))}
				</nav>

				<div className="hidden md:flex gap-4 items-center">
					<Button asChild variant="outline" size="sm">
						<Link href="/authors">Submit Paper</Link>
					</Button>
					<Button asChild size="sm">
						<Link href="/registration">Register</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-2">
					<button
						className="md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
					<div className="container py-4 flex flex-col gap-4">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-medium py-2 transition-colors hover:text-blue-600"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<div className="flex flex-col gap-2 pt-2 border-t">
							<Button asChild variant="outline" size="sm">
								<Link href="/authors" onClick={() => setIsMenuOpen(false)}>
									Submit Paper
								</Link>
							</Button>
							<Button asChild size="sm">
								<Link href="/registration" onClick={() => setIsMenuOpen(false)}>
									Register
								</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
