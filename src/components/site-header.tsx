"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, User, LogOut, FileText, UserPlus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { data: session, status } = useSession();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Committee", href: "/committee" },
		{ name: "Speakers", href: "/speakers" },
		{ name: "Timeline", href: "/timeline" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/85">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/ncci-light.svg"
						alt="NCCI Logo"
						width={160}
						height={160}
					/>
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
					{/* Authentication Section */}
					{status === "loading" ? (
						<div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
					) : session ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
									<div className="relative w-8 h-8">
										{session.user?.image ? (
											<>
												<Image
													className="rounded-full ring-2 ring-[var(--bg-accent)] object-cover w-8 h-8"
													src={session.user.image}
													alt={session.user?.name || "User"}
													width={32}
													height={32}
													onError={(e) => {
														const target = e.target as HTMLImageElement;
														target.style.display = 'none';
														const fallback = target.parentElement?.querySelector('.fallback-avatar') as HTMLElement;
														if (fallback) {
															fallback.style.display = 'flex';
														}
													}}
												/>
												<div
													className="fallback-avatar w-8 h-8 rounded-full ring-2 ring-[var(--bg-accent)] bg-[var(--bg-accent)] flex items-center justify-center text-sm font-medium text-white absolute top-0 left-0 hidden"
												>
													{session.user?.name?.charAt(0).toUpperCase() || 'U'}
												</div>
											</>
										) : (
											<div
												className="w-8 h-8 rounded-full ring-2 ring-[var(--bg-accent)] bg-[var(--bg-accent)] flex items-center justify-center text-sm font-medium text-white"
											>
												{session.user?.name?.charAt(0).toUpperCase() || 'U'}
											</div>
										)}
									</div>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56" align="end" forceMount>
								<div className="flex items-center justify-start gap-2 p-2">
									<div className="flex flex-col space-y-1 leading-none">
										{session.user?.name && (
											<p className="font-medium">{session.user.name}</p>
										)}
										{session.user?.email && (
											<p className="w-[200px] truncate text-sm text-muted-foreground">
												{session.user.email}
											</p>
										)}
									</div>
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/authors" className="flex items-center gap-2">
										<Upload className="h-4 w-4" />
										Submit Paper
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/papers" className="flex items-center gap-2">
										<FileText className="h-4 w-4" />
										View My Submissions
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/registration" className="flex items-center gap-2">
										<UserPlus className="h-4 w-4" />
										Register for Conference
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									className="flex items-center gap-2 cursor-pointer"
									onClick={() => signOut()}
								>
									<LogOut className="h-4 w-4" />
									Sign Out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Button
							variant="outline"
							size="sm"
							onClick={() => signIn()}
							className="flex items-center gap-2"
						>
							<User className="h-4 w-4" />
							Sign In
						</Button>
					)}
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-2">
					{/* Mobile Auth */}
					{status !== "loading" && (
						session ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
										<div className="relative w-8 h-8">
											{session.user?.image ? (
												<>
													<Image
														className="rounded-full ring-2 ring-[var(--bg-accent)] object-cover w-8 h-8"
														src={session.user.image}
														alt={session.user?.name || "User"}
														width={32}
														height={32}
														onError={(e) => {
															const target = e.target as HTMLImageElement;
															target.style.display = 'none';
															const fallback = target.parentElement?.querySelector('.fallback-avatar') as HTMLElement;
															if (fallback) {
																fallback.style.display = 'flex';
															}
														}}
													/>
													<div
														className="fallback-avatar w-8 h-8 rounded-full ring-2 ring-[var(--bg-accent)] bg-[var(--bg-accent)] flex items-center justify-center text-sm font-medium text-white absolute top-0 left-0 hidden"
													>
														{session.user?.name?.charAt(0).toUpperCase() || 'U'}
													</div>
												</>
											) : (
												<div
													className="w-8 h-8 rounded-full ring-2 ring-[var(--bg-accent)] bg-[var(--bg-accent)] flex items-center justify-center text-sm font-medium text-white"
												>
													{session.user?.name?.charAt(0).toUpperCase() || 'U'}
												</div>
											)}
										</div>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56" align="end" forceMount>
									<div className="flex items-center justify-start gap-2 p-2">
										<div className="flex flex-col space-y-1 leading-none">
											{session.user?.name && (
												<p className="font-medium">{session.user.name}</p>
											)}
											{session.user?.email && (
												<p className="w-[200px] truncate text-sm text-muted-foreground">
													{session.user.email}
												</p>
											)}
										</div>
									</div>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link href="/authors" className="flex items-center gap-2">
											<Upload className="h-4 w-4" />
											Submit Paper
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href="/papers" className="flex items-center gap-2">
											<FileText className="h-4 w-4" />
											View My Submissions
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link href="/registration" className="flex items-center gap-2">
											<UserPlus className="h-4 w-4" />
											Register for Conference
										</Link>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										className="flex items-center gap-2 cursor-pointer"
										onClick={() => signOut()}
									>
										<LogOut className="h-4 w-4" />
										Sign Out
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Button
								variant="ghost"
								size="sm"
								onClick={() => signIn()}
								className="p-2"
							>
								<User className="h-4 w-4" />
							</Button>
						)
					)}

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
				<div className="md:hidden absolute top-16 left-0 right-0 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white border-b shadow-lg">
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
							{/* Mobile Auth Section */}
							{!session && (
								<Button
									variant="outline"
									size="sm"
									onClick={() => {
										signIn();
										setIsMenuOpen(false);
									}}
									className="flex items-center gap-2"
								>
									<User className="h-4 w-4" />
									Sign In
								</Button>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

