import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { lucia } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.session) throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ request }) => {
		const { name, lastname, username, email, password1 } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		try {
			await prisma.user.create({
				data: {
					email,
					name,
					lastname,
					role: {
						connect: {
							id: 0
						}
					},
					provider: {
						create: {
							providerId: 'username',
							providerUserId: username,
							password: password1
						}
					}
				}
			});
			// await lucia.createUser({
			// 	primaryKey: {
			// 		providerId: 'username',
			// 		providerUserId: username,
			// 		password: password1
			// 	},
			// 	attributes: {
			// 		email: email,
			// 		name: name,
			// 		lastname: lastname,
			// 		roleId: 0
			// 	}
			// });
		} catch (err) {
			console.log(err);
			return fail(400, { message: 'Could not register the user' });
		}

		throw redirect(302, '/login');
	}
};
