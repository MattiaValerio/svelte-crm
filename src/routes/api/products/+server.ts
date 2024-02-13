import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const prisma = new PrismaClient();
		const products = await prisma.products.findMany();
		prisma.$disconnect();
		console.log('Products fetched');
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
				id: req.id,
				name: req.name,
				description: req.description,
				price: parseFloat(req.price),
				available: req.available
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
