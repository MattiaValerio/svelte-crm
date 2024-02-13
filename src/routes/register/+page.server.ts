import { fail, redirect, type Actions } from '@sveltejs/kit';
// import type { PageServerLoad, Actions } from './$types';
import { PrismaClient } from '@prisma/client';
import { generateId } from 'lucia';
import { lucia } from '$lib/server/auth';

// export const load: PageServerLoad = async ({ locals }) => {
// 	const session = await locals.validate();
// 	if (session) throw redirect(302, '/');
// };

export const actions: Actions = {
	registerUser: async (event) => {
		const formData = await event.request.formData();

		const name = formData.get('name')!.toString();
		const lastname = formData.get('lastname')!.toString();
		const username = formData.get('username')!.toString();
		const email = formData.get('email')!.toString();

		const prisma = new PrismaClient();
		try {
			const id: string = generateId(16);
			await prisma.user.create({
				data: {
					id,
					name,
					lastname,
					username,
					email,
					rolesId: 1
				}
			});
			const session = await lucia.createSession(id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			redirect(302, '/');
		} catch (err) {
			console.log(err);
			return fail(400, { message: 'Could not register the user' });
		}

		throw redirect(302, '/login');
	}
};
