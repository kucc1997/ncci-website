export default function SpeakersPage() {
	return (
		<div className="container px-4 md:px-6 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--bg-accent)]">
					Keynote Speakers
				</h1>
				<div className="w-20 h-1 bg-[var(--bg-accent2)] mb-6"></div>
				<p className="text-lg text-[var(--bg-secondary-dark)] max-w-3xl">
					Meet our distinguished keynote speakers who will share their expertise and insights at NCCI 2025.
				</p>
				<p className="text-2xl text-bold text-[var(--bg-accent2)] pt-8 animate-pulse">Speakers will be announced soon!</p>
			</div>
		</div>
	);
}
