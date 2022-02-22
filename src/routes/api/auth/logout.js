import { serialize, parse } from 'cookie';
import { session } from '$lib/auth';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = ({ request }) => {
	const cookie = request?.headers?.get('cookie');
	const { session_id } = parse(cookie || '');
	if (session_id) session.del(session_id);

	return {
		status: 302,
		headers: {
			'set-cookie': serialize('session_id', '', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				expires: new Date(0)
			}),
			location: '/admin'
		}
	};
};
