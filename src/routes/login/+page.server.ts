import { lucia } from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Argon2id } from 'oslo/password';
import { PrismaClient } from '@prisma/client';

export const load = (async ({ cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);
	if (token) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username')!.toString();
		const password = formData.get('password');
		console.log('d');
		//check if password is valid
		if (typeof password !== 'string' || password.length < 8 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		//find the username in the db
		const prisma = new PrismaClient();
		const existingUser = await prisma.user.findFirstOrThrow({
			where: {
				username: username
			}
		});
		prisma.$disconnect();

		//if the db doesn't have the username throw a fail
		if (!existingUser) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}

		//validate the password inserted by the user with the one in the db
		const validPassword = await new Argon2id().verify(existingUser.password, password);
		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}
		//if all is good create a session and a session cookie
		const session = await lucia.createSession(existingUser.id, {
			active_expires: 60 * 60 * 24 * 7
		});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
