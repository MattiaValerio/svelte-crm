import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const prisma = new PrismaClient();
		const products = await prisma.products.findMany();
		prisma.$disconnect();

		return new Response(
			JSON.stringify({
				status: 200,
				body: products
			})
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				status: 500,
				body: error
			})
		);
	}
};
