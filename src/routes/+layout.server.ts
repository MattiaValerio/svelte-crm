import { lucia } from '$lib/server/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);
	if (!token) {
		return {
			logged: false
		};
	}

	const user = await lucia.validateSession(token);

	return { info: user };
}) satisfies LayoutServerLoad;
