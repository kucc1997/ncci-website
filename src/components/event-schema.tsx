export default function EventSchema() {
	const eventData = {
		"@context": "https://schema.org",
		"@type": "Event",
		"name": "National Conference on Computer Innovations 2025",
		"alternateName": "NCCI 2025",
		"description": "Exploring the Future of Technology and Innovation",
		"startDate": "2025-08-24T09:00:00+05:45",
		"endDate": "2025-08-24T17:00:00+05:45",
		"eventStatus": "https://schema.org/EventScheduled",
		"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
		"location": {
			"@type": "Place",
			"name": "Kathmandu University",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Dhulikhel",
				"addressRegion": "Bagmati Province",
				"addressCountry": "NP"
			}
		},
		"organizer": {
			"@type": "Organization",
			"name": "Kathmandu University Computer Club",
			"url": "https://kucc.ku.edu.np"
		},
		"sponsor": {
			"@type": "Organization",
			"name": "Department of Computer Science and Engineering, Kathmandu University"
		},
		"image": [
			"https://conf.kucc.ku.edu.np/conference-banner.jpg"
		],
		"url": "https://conf.kucc.ku.edu.np"
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
		/>
	);
}
