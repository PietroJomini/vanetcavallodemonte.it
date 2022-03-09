import { hook as i18n } from '$lib/i18n';
import { session } from '$lib/auth';
import { parse } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const { failed, redirect, apply } = i18n({ pathname: event?.url?.pathname });
	if (failed) return redirect;

	const cookies = event?.request?.headers?.get('cookie');
	const { session_id } = parse(cookies || '');
	event.locals.auth = (session_id && session.get(session_id)) !== undefined;

	return resolve(event, { transformPage: apply });
};

/** @type {import('@sveltejs/kit').Handle} */
export const getSession = (event) => event.locals;
