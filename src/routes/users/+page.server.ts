import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const req = await fetch('/api/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json());

	return { utenti: req.body };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (request) => {
		console.log(request);
	}
};
