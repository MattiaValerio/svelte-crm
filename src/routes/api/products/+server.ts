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

export const POST: RequestHandler = async ({ request }) => {
	try {
		const prisma = new PrismaClient();
		const req = await request.json();
		console.log(req);
		await prisma.products.create({
			data: {
				name: req.name,
				description: req.description,
				price: parseFloat(req.price),
				available: req.available,
				Categories: {
					connect: { id: req.categoriesId }
				}
			}
		});

		console.log('Product created');
		prisma.$disconnect();

		return new Response(
			JSON.stringify({
				status: 201,
				body: request
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
