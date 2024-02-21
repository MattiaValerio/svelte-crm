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
				body: products.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
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
		await prisma.products.create({
			data: {
				id: req.id,
				name: req.name,
				description: req.description,
				price: parseFloat(req.price),
				available: req.available,
				created_at: new Date()
			}
		});
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

export const PATCH: RequestHandler = async ({ request }) => {
	try {
		const prisma = new PrismaClient();
		const req = await request.json();
		await prisma.products.update({
			where: {
				id: req.id
			},
			data: {
				name: req.name,
				description: req.description,
				price: parseFloat(req.price),
				available: req.available
			}
		});
		prisma.$disconnect();

		return new Response(
			JSON.stringify({
				status: 200,
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

export const DELETE: RequestHandler = async ({ request }) => {
	try {
		const prisma = new PrismaClient();
		const req = await request.json();

		if (req === undefined) return new Response();

		await prisma.products.delete({
			where: {
				id: req.id
			}
		});
		prisma.$disconnect();

		return new Response(
			JSON.stringify({
				status: 200,
				body: 'Item removed successfully'
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
