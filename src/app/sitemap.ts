export default function sitemap() {
	return [
		{
			url: 'https://ncci.ku.edu.np',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://ncci.ku.edu.np/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://ncci.ku.edu.np/speakers',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: 'https://ncci.ku.edu.np/registration',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: 'https://ncci.ku.edu.np/authors',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://ncci.ku.edu.np/committee',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: 'https://ncci.ku.edu.np/timeline',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: 'https://ncci.ku.edu.np/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	]
}
