import { PrismaClient } from '@prisma/client';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { lucia } from '$lib/server/auth';
const prisma = new PrismaClient();

export const load = (async () => {
	const sessions = await lucia.getUserSessions('0bfifqfkf8l8785c');

	return {
		props: {
			sessions
		}
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	addCompany: async ({ fetch, request }) => {
		const data = await request.formData();
		let name: string | undefined = data.get('name')?.toString();
		let description: string | undefined = data.get('description')?.toString();

		if (!name || !description)
			return {
				status: 400,
				response: 'Name and description are required'
			};

		try {
			await prisma.companies.create({
				data: {
					name: name,
					description: description
				}
			});
			return {
				status: 200,
				response: 'Company created'
			};
		} catch (err) {
			console.log(err);
			return fail(500, { error: 'Error creating company' });
		}
	}
} satisfies Actions;
