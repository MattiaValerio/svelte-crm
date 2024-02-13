import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const prisma = new PrismaClient();
	const users = await prisma.user.findMany();

	return { utenti: users };
}) satisfies PageServerLoad;
