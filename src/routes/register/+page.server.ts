import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ request }) => {
		const { name, lastname, username, email, password1 } = objects.fromEntries(
			await request.formData()
		) as Record<string, string>;

		try {
			await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password: password1
				},
				attributes: {
					email: email,
					name: name,
					lastname: lastname,
					roleId: 0
				}
			});
		} catch (err) {
			console.log(err);
			return fail(400, { message: 'Could not register the user' });
		}

		throw redirect(302, '/login');
	}
};
