import { serialize } from 'cookie';
import { session, auth } from '$lib/auth';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post = async ({ request }) => {
	const body = await request.formData();
	return auth(body.get('password'))
		? {
				status: 302,
				headers: {
					'Set-Cookie': serialize('session_id', session.create().id, {
						path: '/',
						httpOnly: true,
						sameSite: 'strict',
						maxAge: 60 * 60 * 24 * 7
					}),
					location: '/admin'
				}
		  }
		: { status: 401 };
};
