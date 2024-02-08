import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/products').then((res) => res.json());
	console.log(res.body);
	return {
		products: res.body
	};
}) satisfies PageServerLoad;
