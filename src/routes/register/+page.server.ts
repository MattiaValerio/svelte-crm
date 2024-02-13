import { fail, redirect, type Actions } from '@sveltejs/kit';
// import type { PageServerLoad, Actions } from './$types';
import { PrismaClient } from '@prisma/client';
import { generateId } from 'lucia';
import { lucia } from '$lib/server/auth';
import type { PageServerLoad } from '../$types';
import { Argon2id } from 'oslo/password';

export const load = (async ({ cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);
	if (token) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	registerUser: async (event) => {
		const formData = await event.request.formData();

		const name = formData.get('name')!.toString();
		const lastname = formData.get('lastname')!.toString();
		const username = formData.get('username')!.toString();
		const email = formData.get('email')!.toString();
		const password = formData.get('password1')!.toString();

		if (password.length < 8) {
			console.log('Password must be at least 8 characters long');
			return fail(400, { message: 'Password must be at least 8 characters long' });
		}

		const prisma = new PrismaClient();
		try {
			const id: string = generateId(16);
			const hashedPassword = await new Argon2id().hash(password);
			await prisma.user.create({
				data: {
					id,
					name,
					lastname,
					username,
					password: hashedPassword,
					email,
					rolesId: 1
				}
			});
			prisma.$disconnect();
			const session = await lucia.createSession(id, { active_expires: 60 * 60 * 24 * 7 });
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		} catch (err) {
			console.log(err);
			return fail(400, { message: 'Could not register the user' });
		}

		throw redirect(301, '/');
	}
};
