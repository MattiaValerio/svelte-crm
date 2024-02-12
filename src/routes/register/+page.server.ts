import { fail, redirect, type Actions } from '@sveltejs/kit';
// import type { PageServerLoad, Actions } from './$types';
import { PrismaClient } from '@prisma/client';
import { generateId } from 'lucia';

// export const load: PageServerLoad = async ({ locals }) => {
// 	const session = await locals.validate();
// 	if (session) throw redirect(302, '/');
// };

export const actions: Actions = {
	registerUser: async ({ request }) => {
		const { name, lastname, username, email } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		const prisma = new PrismaClient();
		try {
			await prisma.user.create({
				data: {
					id: generateId(16),
					name,
					lastname,
					username,
					email,
					rolesId: 1
				}
			});
		} catch (err) {
			console.log(err);
			return fail(400, { message: 'Could not register the user' });
		}

		throw redirect(302, '/login');
	}
};
