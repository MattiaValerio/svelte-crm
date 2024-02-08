import type { Actions } from '@sveltejs/kit';

export const actions = {
	register: async ({ fetch, request }) => {
		//read fromthe request the username and the password
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const role = data.get('role');

		if (!username || !password)
			return {
				status: 400,
				response: 'Username and password are required' as string
			};

		//send the username and the password to the server to be verified and a jwt token to be generated
		const response = await fetch('/api/jwt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: '1234'
			},
			body: JSON.stringify({ username: username, password: password, role: role })
		}).then((res) => res.json());

		return { status: 200, response };
	}
} satisfies Actions;
