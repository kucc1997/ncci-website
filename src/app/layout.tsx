import type React from "react";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'sonner';
import EventSchema from "@/components/event-schema";

const inter = Inter({ subsets: ["latin"] });

// app/layout.js or app/page.js
export const metadata = {
	title: 'NCCI 2025 - National Conference on Computer Innovations | Kathmandu University',
	description: 'Join NCCI 2025 on August 24, 2025 at Kathmandu University. Explore the future of technology and innovation with leading speakers and researchers.',
	keywords: 'NCCI 2025, computer innovations, technology conference, Kathmandu University, Nepal, computer science, engineering',
	authors: [{ name: 'Kathmandu University Computer Club' }],
	openGraph: {
		title: 'NCCI 2025 - National Conference on Computer Innovations',
		description: 'Exploring the Future of Technology and Innovation - August 24, 2025',
		url: 'https://conf.kucc.ku.edu.np',
		siteName: 'NCCI 2025',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'NCCI 2025 - National Conference on Computer Innovations',
		description: 'Join us August 24, 2025 at Kathmandu University',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<>
			<EventSchema />
			<SessionProvider>
				<html lang="en">
					<body className={inter.className}>
						<div className="relative flex min-h-screen flex-col">
							<SiteHeader />
							<main className="flex-1">{children}</main>
							<SiteFooter />
							<Toaster richColors closeButton />
						</div>
					</body>
				</html>
			</SessionProvider>
		</>
	);
}
