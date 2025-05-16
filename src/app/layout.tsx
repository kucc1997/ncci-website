import type React from "react";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "NCCI 2025 - National Conference on Computer Innovations",
	description:
		"Official portal for the National Conference on Computer Innovations (NCCI), scheduled for August 24, 2025, at Kathmandu University.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative flex min-h-screen flex-col">
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}
