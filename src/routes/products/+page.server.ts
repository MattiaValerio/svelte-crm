import { lucia } from '$lib/server/auth';
import type { Actions, PageServerLoad } from './$types';
import { generateId } from 'lucia';

export const load = (async ({ fetch, cookies }) => {
	const token = cookies.get(lucia.sessionCookieName);

	if (!token) {
		const res = await fetch('/api/products').then((res) => res.json());

		return {
			products: res.body
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
	addProduct: async ({ request, fetch }) => {
		//read from the form and send the data to the server
		const data = await request.formData();
		const name = data.get('name')!.toString();
		const description = data.get('description')!.toString();
		const price = data.get('price')?.toString();
		const available = data.get('available')?.toString() === 'on' ? true : false;

		try {
			await fetch('/api/products', {
				method: 'POST',
				body: JSON.stringify({
					id: generateId(16),
					name,
					description,
					price,
					available
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			return {
				status: 200,
				response: 'Product created'
			};
		} catch (err) {
			console.log(err);
			return {
				status: 500,
				response: 'Error during product creation'
			};
		}
	},
	editProduct: async ({ request, fetch }) => {
		const data = await request.formData();
		const id = data.get('id')!.toString();
		const name = data.get('name')!.toString();
		const description = data.get('description')!.toString();
		const price = data.get('price')?.toString();
		const available = data.get('available')?.toString() === 'on' ? true : false;

		try {
			await fetch('/api/products', {
				method: 'PATCH',
				body: JSON.stringify({
					id,
					name,
					description,
					price,
					available
				})
			});
			return {
				status: 200,
				response: 'Product updated'
			};
		} catch (err) {
			console.log(err);
			return {
				status: 500,
				response: 'Error during product update'
			};
		}
	}
} satisfies Actions;
