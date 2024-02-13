import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';

export const load = (async ({ cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);
	if (!token) {
		return {
			logged: false
		};
	}

	const user = await lucia.validateSession(token);
	return { info: user };
}) satisfies PageServerLoad;

export const actions: Actions = {} satisfies Actions;
