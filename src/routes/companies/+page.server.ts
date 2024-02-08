import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/companies').then((res) => res.json());
	return {
		companies: res.body
	};
}) satisfies PageServerLoad;
