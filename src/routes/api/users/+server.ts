import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const client = new PrismaClient();
		const users = await client.user.findMany();
		client.$disconnect();

		return new Response(
			JSON.stringify({
				status: 200,
				body: users
			})
		);
	} catch (error) {
		return new Response(JSON.stringify({ status: 500, body: `Errore: ${error}` }));
	}
};

export const PATCH: RequestHandler = async (request) => {
	try {
		const x = request.params;
		console.log(x);
		return new Response(JSON.stringify({ status: 200, body: 'Not implemented' }));
	} catch (error) {
		return new Response(JSON.stringify({ status: 500, body: `Errore: ${error}` }));
	}
};
