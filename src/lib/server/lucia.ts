import lucia from 'lucia-auth';
import { dev } from '$app/environment';
import prismaAdapter  from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const adapter = 

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? "DEV": "PROD",
	transformDatabaseUser:(userData)=>{
		return {
			userId: userData.id,
			name: userData.name,
			roleId: userData.roleId
		};
	}
});

export type Auth = typeof auth;
