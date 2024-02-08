import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

export const GET: RequestHandler = async () => {
	try {
		const prisma = new PrismaClient();
		const companies = await prisma.companies.findMany();
		prisma.$disconnect();

		return new Response(
			JSON.stringify({
				status: 200,
				body: companies
			})
		);
	} catch (error) {
		console.log(error);
		return new Response(
			JSON.stringify({
				status: 500,
				body: error
			})
		);
	}
};
