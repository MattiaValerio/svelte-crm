import type { RequestHandler } from '../$types';
import { SECRET_JWT_TOKEN } from '$env/static/private';
import { SignJWT } from 'jose';

export const POST: RequestHandler = async ({ request }) => {
	const authHead = request.headers.get('authorization');

	// get from the request the username and the password
	const { username, password } = await request.json();

	// Encode the secret key to be used in the jwt token generation and verification process
	const secret = new TextEncoder().encode(SECRET_JWT_TOKEN);

	// Sign the jwt token with the secret key and the claims to be included in the token (username and role)
	const jwt = await new SignJWT({
		claims: {
			username: username,
			password: password,
			role: 'user'
		}
	})
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setIssuer('https://hasura.io/jwt/claims')
		.setAudience('svelto.com')
		.setExpirationTime('2h')
		.sign(secret);

	// Return the resposne with the jwt token in the body
	return new Response(JSON.stringify({ jwt: jwt }), {
		status: 200
	});
};

export const GET: RequestHandler = async ({ request }) => {
	const authHead = request.headers.get('authorization');

	// Check for the presence of the Authorization header and check if it different from the expected value (Bearer 1234)
	if (!authHead || authHead !== '1234') {
		return new Response(JSON.stringify({ message: 'Unauthorized' }), {
			status: 401
		});
	}

	return new Response(JSON.stringify({ message: 'HELLO FROM API' }), {
		status: 200
	});
};
