// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import('@lucia-auth/svelte-kit').Validate;
			validateuser: import('@lucia-auth/svelte-kit').ValidateUser;
			setSession: import('@lucia-auth/svelte-kit').SetSession;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	let prisma: PrismaClient;

	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			name: string;
			lastname: string;
			email: string;
			roleId: number;
		};
	}
}

export {};
