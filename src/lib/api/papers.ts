export async function getPapers() {
	const response = await fetch('/api/papers', {
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

export async function getPaperById(submissionId: string) {
	const response = await fetch(`/api/papers/${submissionId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch paper details');
	}

	return response.json();
}

