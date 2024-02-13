import { PrismaClient } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';
import { generateId } from 'lucia';
import { lucia } from '$lib/server/auth';

export const load = (async ({ fetch, cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);

	if (!token) {
		return {
			logged: false
		};
	}

	const { user, session } = await lucia.validateSession(token);

	//get all the products from the server
	const res = await fetch('/api/products').then((res) => res.json());

	return {
		products: res.body,
		user,
		session
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	addProduct: async ({ request }) => {
		const prisma = new PrismaClient();

		//read from the form and send the data to the server
		const data = await request.formData();
		const name = data.get('name')!.toString();
		const description = data.get('description')!.toString();
		const price = data.get('price')?.toString();
		const available = data.get('available')?.toString() === 'on' ? true : false;

		try {
			await prisma.products.create({
				data: {
					id: generateId(16),
					name: name,
					description: description,
					price: parseFloat(price!),
					available: available
				}
			});

			return {
				status: 200,
				response: 'Product created'
			};
		} catch (err) {
			console.log(err);
			prisma.$disconnect();
			return {
				status: 500,
				response: 'Error during product creation'
			};
		}
	},
	editProduct: async () => {},
	deleteProduct: async () => {}
} satisfies Actions;
