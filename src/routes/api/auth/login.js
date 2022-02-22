import { session, auth } from '$lib/auth';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post = async ({ request }) => {
	const body = await request.formData();
	const params = new URLSearchParams(new URL(request.url).search);
	const redirect = params.has('redirect');
	const failure = params.has('failure');

	return auth(body.get('password'))
		? {
				status: redirect ? 302 : 200,
				headers: {
					...session.cookie(session.create().id),
					location: params.get('redirect')
				}
		  }
		: {
				status: failure ? 302 : 401,
				headers: { location: params.get('failure') }
		  };
};
