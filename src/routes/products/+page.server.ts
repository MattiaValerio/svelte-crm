import { PrismaClient } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/products').then((res) => res.json());
	return {
		products: res.body
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
