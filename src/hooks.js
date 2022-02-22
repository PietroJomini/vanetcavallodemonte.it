import { hook as i18n } from '$lib/translations';
import { session } from '$lib/auth';
import { parse } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const { failed, redirect, apply } = i18n({ pathname: event?.url?.pathname });
	if (failed) return redirect;

	const cookies = event?.request?.headers?.get('cookie');
	const { session_id } = parse(cookies || '');
	event.locals.session_id = session_id;

	return await resolve(event, { transformPage: apply });
};

/** @type {import('@sveltejs/kit').Handle} */
export const getSession = (event) => {
	const id = event?.locals?.session_id;
	const exists = session.get(id);
	const auth = (id && exists) !== undefined;

	return { auth, id };
};
