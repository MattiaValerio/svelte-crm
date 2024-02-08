import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/companies').then((res) => res.json());
	return {
		companies: res.body
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	addCompany: async ({ request }) => {
		const data = await request.formData();
		const name: string | undefined = data.get('name')?.toString();
		const description: string | undefined = data.get('description')?.toString();

		if (!name)
			return {
				status: 400,
				response: 'Name is required'
			};

		try {
			console.log('Creating company');
			await prisma.companies.create({
				data: {
					name: name,
					description: description
				}
			});
			console.log('Company created');
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
