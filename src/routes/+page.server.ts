import type { PageServerLoad } from './$types';
import { lucia } from '$lib/server/auth';
import type { Actions } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

export const load = (async ({ cookies }) => {
	const prisma = new PrismaClient();

	const token = cookies.get('auth_session');
	if (!token) {
		return {
			status: 401,
			error: 'Unauthorized'
		};
	}

	const user = await prisma.user.findMany({
		where: {
			id: sessions.map((session) => session.userId).toString()
		}
	});

	return {
		resp: {
			user: user[0],
			session: sessions[0]
		}
	};
}) satisfies PageServerLoad;

export const actions: Actions = {} satisfies Actions;
