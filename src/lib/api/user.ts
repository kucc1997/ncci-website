export async function getIsAdmin(email: string) {
	const response = await fetch('/api/users/is-admin?email=' + email, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch papers');
	}

	return response.json();
}
