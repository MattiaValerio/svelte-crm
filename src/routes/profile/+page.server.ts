import { lucia } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);

	if (!token) {
		return {
			logged: false
		};
	}

	const user = await lucia.validateSession(token);
	return { info: user, logged: true };
}) satisfies PageServerLoad;

export const actions: Actions = {
	logout: async ({ cookies }) => {
		try {
			const token = cookies.get(lucia.sessionCookieName);
			if (!token) {
				redirect(302, '/login');
			}

			const user = await lucia.validateSession(token);

			if (!user.session) {
				redirect(302, '/login');
			}

			const sessId = user.session.id;
			if (sessId !== undefined) {
				lucia.invalidateSession(sessId);
				cookies.delete(lucia.sessionCookieName, { path: '.' });
			}
		} catch (e) {
			console.log(e);
		}

		throw redirect(302, '/');
	}
};
